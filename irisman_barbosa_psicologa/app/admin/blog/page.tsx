'use client';
export default function AdminBlogPage() {
  return (
    <div className="min-h-screen bg-[#0c0b09] p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#faf8f3] mb-4">
          Gerenciar <em className="italic text-[#e2c97e]">Blog</em>
        </h1>
        <p className="text-[#a89f8c] mb-8">Gerenciamento de posts do blog em desenvolvimento.</p>
        <a href="/admin" className="text-[#c9a84c] hover:text-[#e2c97e]">← Voltar ao Admin</a>
      </div>
    </div>
  );
}
