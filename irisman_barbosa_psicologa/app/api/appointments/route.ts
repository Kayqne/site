import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, modality, message, date } = data;

    if (!name || !email || !phone || !modality) {
      return NextResponse.json(
        { success: false, message: 'Todos os campos obrigatórios devem ser preenchidos' },
        { status: 400 }
      );
    }

    // Save to database
    const appointment = await prisma.appointment.create({
      data: {
        name,
        email,
        phone,
        modality,
        message: message || null,
        date: date ? new Date(date) : null,
        status: 'pending',
      },
    });

    // Send email notification to admin
    const htmlBody = `
      <div style="font-family: 'Jost', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0c0b09; color: #f2ead8; padding: 40px 20px;">
        <div style="border: 1px solid rgba(201,168,76,0.3); padding: 30px; background: #111009;">
          <h2 style="color: #c9a84c; font-family: 'Cormorant Garamond', serif; font-size: 28px; margin-bottom: 20px; border-bottom: 1px solid rgba(201,168,76,0.2); padding-bottom: 15px;">
            📅 Nova Solicitação de Agendamento
          </h2>
          
          <div style="background: rgba(201,168,76,0.05); padding: 20px; border-radius: 4px; margin: 20px 0; border-left: 3px solid #c9a84c;">
            <p style="margin: 10px 0; color: #f2ead8;"><strong style="color: #e2c97e;">Nome:</strong> ${name}</p>
            <p style="margin: 10px 0; color: #f2ead8;"><strong style="color: #e2c97e;">Email:</strong> <a href="mailto:${email}" style="color: #c9a84c; text-decoration: none;">${email}</a></p>
            <p style="margin: 10px 0; color: #f2ead8;"><strong style="color: #e2c97e;">Telefone:</strong> <a href="tel:${phone}" style="color: #c9a84c; text-decoration: none;">${phone}</a></p>
            <p style="margin: 10px 0; color: #f2ead8;"><strong style="color: #e2c97e;">Modalidade:</strong> ${modality}</p>
            ${date ? `<p style="margin: 10px 0; color: #f2ead8;"><strong style="color: #e2c97e;">Data Preferencial:</strong> ${new Date(date).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo', dateStyle: 'full', timeStyle: 'short' })}</p>` : ''}
          </div>
          
          ${message ? `
          <div style="margin-top: 20px;">
            <p style="margin-bottom: 10px; color: #e2c97e; font-weight: 500;">Mensagem:</p>
            <div style="background: rgba(12,11,9,0.5); padding: 20px; border-radius: 4px; border-left: 3px solid #8a6e2f; line-height: 1.7; color: #f2ead8;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(201,168,76,0.2); color: #a89f8c; font-size: 12px; text-align: center;">
            <p>Solicitação recebida em: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}</p>
          </div>
        </div>
      </div>
    `;

    try {
      const emailResponse = await fetch('https://apps.abacus.ai/api/sendNotificationEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          deployment_token: process.env.ABACUSAI_API_KEY,
          app_id: process.env.WEB_APP_ID,
          notification_id: process.env.NOTIF_ID_NOVA_SOLICITAO_DE_AGENDAMENTO,
          subject: `📅 Novo Agendamento: ${name} - ${modality}`,
          body: htmlBody,
          is_html: true,
          recipient_email: 'kayqu314@gmail.com',
          sender_alias: 'Irisman Barbosa Psicóloga',
        }),
      });

      const emailResult = await emailResponse.json();
      if (!emailResult?.success && emailResult?.notification_disabled) {
        console.log('Notificação de email desabilitada pelo usuário');
      }
    } catch (emailError: any) {
      console.error('Erro ao enviar email:', emailError);
      // Continue even if email fails
    }

    return NextResponse.json({
      success: true,
      message: 'Solicitação de agendamento enviada! Entraremos em contato em breve.',
      appointmentId: appointment.id,
    });
  } catch (error: any) {
    console.error('Erro no agendamento:', error);
    return NextResponse.json(
      { success: false, message: 'Erro ao processar seu agendamento. Tente novamente.' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');

    const appointments = await prisma.appointment.findMany({
      where: status ? { status } : undefined,
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ success: true, appointments });
  } catch (error: any) {
    console.error('Erro ao buscar agendamentos:', error);
    return NextResponse.json(
      { success: false, message: 'Erro ao buscar agendamentos' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const { id, status, date } = await request.json();

    if (!id || !status) {
      return NextResponse.json(
        { success: false, message: 'ID e status são obrigatórios' },
        { status: 400 }
      );
    }

    const appointment = await prisma.appointment.update({
      where: { id },
      data: {
        status,
        date: date ? new Date(date) : undefined,
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Agendamento atualizado com sucesso',
      appointment,
    });
  } catch (error: any) {
    console.error('Erro ao atualizar agendamento:', error);
    return NextResponse.json(
      { success: false, message: 'Erro ao atualizar agendamento' },
      { status: 500 }
    );
  }
}
