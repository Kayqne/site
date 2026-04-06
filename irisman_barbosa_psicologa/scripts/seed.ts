import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const blogPosts = [
  {
    title: 'Como Identificar e Lidar com a Ansiedade no Dia a Dia',
    slug: 'como-identificar-e-lidar-com-ansiedade',
    excerpt: 'A ansiedade é uma resposta natural do corpo, mas quando se torna excessiva pode afetar significativamente nossa qualidade de vida. Aprenda a reconhecer os sinais e descubra estratégias práticas para gerenciá-la.',
    content: `<p>A ansiedade é uma emoção natural e, muitas vezes, necessária. Ela nos prepara para enfrentar desafios e nos alerta sobre possíveis perigos. No entanto, quando a ansiedade se torna excessiva ou desproporcional às situações, ela pode se transformar em um transtorno que afeta significativamente a qualidade de vida.</p>

<h2>Reconhecendo os Sinais</h2>
<p>Os sintomas de ansiedade podem se manifestar de diversas formas:</p>
<ul>
<li><strong>Sintomas físicos:</strong> taquicardia, sudorese, tremores, tensão muscular, dificuldade para respirar</li>
<li><strong>Sintomas emocionais:</strong> preocupação excessiva, medo constante, irritabilidade, sensação de perigo iminente</li>
<li><strong>Sintomas comportamentais:</strong> evitação de situações, dificuldade de concentração, insônia, inquietação</li>
</ul>

<h2>Estratégias para Lidar com a Ansiedade</h2>

<h3>1. Técnicas de Respiração</h3>
<p>A respiração diafragmática é uma ferramenta poderosa. Inspire profundamente pelo nariz contando até 4, segure por 4 segundos e expire pela boca contando até 6. Repita por alguns minutos.</p>

<h3>2. Mindfulness e Atenção Plena</h3>
<p>Práticas de mindfulness ajudam a trazer a atenção para o momento presente, reduzindo a preocupação com o futuro. Comece com apenas 5 minutos por dia.</p>

<h3>3. Atividade Física Regular</h3>
<p>O exercício libera endorfinas, hormônios que promovem bem-estar e reduzem o estresse. Encontre uma atividade que você goste e pratique regularmente.</p>

<h3>4. Limite o Consumo de Cafeína e Álcool</h3>
<p>Estas substâncias podem intensificar os sintomas de ansiedade. Observe como seu corpo reage e ajuste o consumo conforme necessário.</p>

<h3>5. Estabeleça Rotinas</h3>
<p>Uma rotina consistente de sono, alimentação e atividades pode proporcionar uma sensação de controle e previsibilidade, reduzindo a ansiedade.</p>

<h2>Quando Buscar Ajuda Profissional</h2>
<p>Se a ansiedade está interferindo nas suas atividades diárias, relacionamentos ou trabalho, é importante buscar ajuda de um profissional de saúde mental. A psicoterapia, especialmente a Terapia Cognitivo-Comportamental (TCC), tem se mostrado muito eficaz no tratamento dos transtornos de ansiedade.</p>

<p>Lembre-se: cuidar da sua saúde mental é tão importante quanto cuidar da sua saúde física. Você não precisa enfrentar a ansiedade sozinho.</p>`,
    published: true,
    publishedAt: new Date('2024-03-15'),
    category: 'Ansiedade',
    tags: ['ansiedade', 'saúde mental', 'autocuidado', 'bem-estar'],
    readTime: 6,
    coverImage: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1470'
  },
  {
    title: 'A Importância do Autoconhecimento no Processo Terapêutico',
    slug: 'importancia-do-autoconhecimento',
    excerpt: 'O autoconhecimento é a base para transformações profundas e duradouras. Entenda como a psicoterapia pode ser um caminho poderoso para descobrir quem você realmente é.',
    content: `<p>"Conhece-te a ti mesmo" - essa máxima milenar permanece relevante e essencial para o desenvolvimento pessoal e emocional. O autoconhecimento não é apenas sobre identificar características pessoais, mas compreender profundamente nossas motivações, padrões de comportamento, emoções e valores.</p>

<h2>O Que é Autoconhecimento?</h2>
<p>Autoconhecimento é a capacidade de olhar para dentro de si mesmo com honestidade e compreensão. É reconhecer suas forças e fraquezas, entender suas reações emocionais, identificar seus valores e compreender como suas experiências passadas influenciam seu presente.</p>

<h2>Por Que o Autoconhecimento é Fundamental?</h2>

<h3>1. Melhora nas Relações</h3>
<p>Quando conhecemos nossas próprias necessidades, limites e padrões relacionais, conseguimos estabelecer conexões mais saudáveis e autênticas com os outros.</p>

<h3>2. Escolhas Mais Alinhadas</h3>
<p>O autoconhecimento permite que tomemos decisões mais conscientes e alinhadas com nossos valores verdadeiros, seja na carreira, relacionamentos ou estilo de vida.</p>

<h3>3. Regulação Emocional</h3>
<p>Ao compreender nossas emoções e seus gatilhos, desenvolvemos maior capacidade de regulá-las de forma saudável.</p>

<h3>4. Crescimento Pessoal</h3>
<p>Identificar áreas que precisam de desenvolvimento é o primeiro passo para o crescimento real e sustentável.</p>

<h2>O Papel da Psicoterapia</h2>
<p>A psicoterapia oferece um espaço seguro e estruturado para essa jornada de autoconhecimento. Com o apoio de um profissional qualificado, você pode:</p>

<ul>
<li>Explorar padrões inconscientes de comportamento</li>
<li>Compreender a origem de crenças limitantes</li>
<li>Identificar mecanismos de defesa que podem estar sabotando seu bem-estar</li>
<li>Desenvolver novas perspectivas sobre si mesmo e suas experiências</li>
<li>Fortalecer recursos internos para lidar com desafios</li>
</ul>

<h2>Como Começar sua Jornada</h2>
<p>Iniciar um processo terapêutico requer coragem e comprometimento. Aqui estão alguns passos:</p>

<ol>
<li><strong>Reconheça a necessidade:</strong> Admitir que deseja conhecer-se melhor é o primeiro passo.</li>
<li><strong>Busque um profissional:</strong> Encontre um psicólogo com quem você se sinta confortável e confiante.</li>
<li><strong>Seja honesto:</strong> A terapia só funciona com autenticidade e abertura.</li>
<li><strong>Tenha paciência:</strong> O autoconhecimento é uma jornada contínua, não um destino.</li>
</ol>

<p>Lembre-se: investir em autoconhecimento é investir em todas as áreas da sua vida. É um presente que você dá a si mesmo e que repercute em todos os seus relacionamentos e experiências.</p>`,
    published: true,
    publishedAt: new Date('2024-03-10'),
    category: 'Desenvolvimento Pessoal',
    tags: ['autoconhecimento', 'psicoterapia', 'desenvolvimento pessoal', 'crescimento'],
    readTime: 7,
    coverImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1499'
  },
  {
    title: 'Depressão: Quebrando o Estigma e Encontrando Caminhos',
    slug: 'depressao-quebrando-estigma',
    excerpt: 'A depressão é uma condição real e tratável, não uma fraqueza. Compreenda melhor esse transtorno e saiba como buscar ajuda.',
    content: `<p>A depressão é um dos transtornos mentais mais comuns e, ao mesmo tempo, um dos mais incompreendidos. Afeta milhões de pessoas no mundo todo, independentemente de idade, gênero ou classe social. No entanto, o estigma ainda impede muitas pessoas de buscar a ajuda de que precisam.</p>

<h2>Entendendo a Depressão</h2>
<p>A depressão não é simplesmente "estar triste" ou "de mau humor". É uma condição médica que afeta como você se sente, pensa e lida com atividades diárias. Caracteriza-se por uma tristeza profunda e persistente, perda de interesse em atividades antes prazerosas e uma série de sintomas físicos e emocionais.</p>

<h2>Sinais e Sintomas</h2>
<p>Os sintomas da depressão podem variar de pessoa para pessoa, mas comumente incluem:</p>

<h3>Sintomas Emocionais</h3>
<ul>
<li>Tristeza persistente ou vazio emocional</li>
<li>Perda de interesse ou prazer em atividades</li>
<li>Sentimentos de culpa, inutilidade ou desesperança</li>
<li>Irritabilidade ou frustração excessiva</li>
<li>Pensamentos recorrentes sobre morte ou suicídio</li>
</ul>

<h3>Sintomas Físicos</h3>
<ul>
<li>Alterações no sono (insônia ou sono excessivo)</li>
<li>Mudanças no apetite ou peso</li>
<li>Fadiga ou perda de energia</li>
<li>Dores físicas sem causa aparente</li>
<li>Dificuldade de concentração e tomada de decisões</li>
</ul>

<h2>Quebrando o Estigma</h2>
<p>Um dos maiores obstáculos no tratamento da depressão é o estigma. Frases como "é só ter força de vontade" ou "todo mundo fica triste às vezes" minimizam a gravidade da condição e desencorajam pessoas a buscar ajuda.</p>

<p>A verdade é:</p>
<ul>
<li>Depressão é uma doença real, não uma fraqueza de caráter</li>
<li>Não é algo que você pode simplesmente "superar"</li>
<li>Buscar ajuda profissional é um sinal de força, não de fraqueza</li>
<li>Com tratamento adequado, a grande maioria das pessoas com depressão melhora</li>
</ul>

<h2>Caminhos para o Tratamento</h2>

<h3>Psicoterapia</h3>
<p>A terapia, especialmente a Terapia Cognitivo-Comportamental e a Psicologia Analítica, tem se mostrado muito eficaz no tratamento da depressão. Oferece um espaço seguro para explorar sentimentos, identificar padrões de pensamento negativos e desenvolver estratégias de enfrentamento.</p>

<h3>Mudanças no Estilo de Vida</h3>
<p>Embora não substituam o tratamento profissional, podem complementá-lo:</p>
<ul>
<li>Exercício físico regular</li>
<li>Rotina de sono consistente</li>
<li>Alimentação balanceada</li>
<li>Conexões sociais significativas</li>
<li>Técnicas de relaxamento e mindfulness</li>
</ul>

<h3>Medicação</h3>
<p>Em alguns casos, a medicação pode ser recomendada. Sempre sob orientação de um psiquiatra, os antidepressivos podem ajudar a regular os neurotransmissores envolvidos no humor.</p>

<h2>Quando Buscar Ajuda</h2>
<p>Se você está experimentando sintomas de depressão por mais de duas semanas, especialmente se estão interferindo em sua vida diária, é importante buscar ajuda profissional. Se tiver pensamentos suicidas, procure ajuda imediatamente.</p>

<p>Lembre-se: a depressão é tratável, e você merece se sentir melhor. Não há vergonha em pedir ajuda - é o primeiro passo corajoso em direção à recuperação.</p>`,
    published: true,
    publishedAt: new Date('2024-03-05'),
    category: 'Transtornos Mentais',
    tags: ['depressão', 'saúde mental', 'tratamento', 'psicoterapia'],
    readTime: 8,
    coverImage: 'https://images.unsplash.com/photo-1473830394358-91588751b241?q=80&w=1470'
  },
  {
    title: 'Relacionamentos Saudáveis: Comunicação, Limites e Respeito',
    slug: 'relacionamentos-saudaveis',
    excerpt: 'Relacionamentos saudáveis são construídos sobre bases sólidas de comunicação, respeito mútuo e limites bem estabelecidos. Descubra como cultivar conexões mais autênticas.',
    content: `<p>Relacionamentos saudáveis - sejam românticos, familiares, de amizade ou profissionais - são fundamentais para nosso bem-estar emocional e qualidade de vida. Mas o que realmente caracteriza um relacionamento saudável? E como podemos cultivar essas conexões de forma autêntica e sustentável?</p>

<h2>Os Pilares de Relacionamentos Saudáveis</h2>

<h3>1. Comunicação Efetiva</h3>
<p>A comunicação vai além de simplesmente falar. Envolve:</p>
<ul>
<li><strong>Escuta ativa:</strong> Ouvir genuinamente o que o outro está dizendo, sem interromper ou formular sua resposta enquanto a pessoa fala</li>
<li><strong>Expressão honesta:</strong> Comunicar suas necessidades, sentimentos e pensamentos de forma clara e respeitosa</li>
<li><strong>Comunicação não-verbal:</strong> Estar atento à linguagem corporal, tom de voz e expressões faciais</li>
<li><strong>Momento adequado:</strong> Escolher o momento e ambiente apropriados para conversas importantes</li>
</ul>

<h3>2. Limites Saudáveis</h3>
<p>Estabelecer limites não significa criar barreiras, mas sim definir o que é aceitável e confortável para você. Limites saudáveis:</p>
<ul>
<li>Protegem sua integridade emocional e física</li>
<li>Permitem que você mantenha sua individualidade dentro do relacionamento</li>
<li>Demonstram respeito por si mesmo e pelo outro</li>
<li>Criam um espaço seguro para ambas as partes</li>
</ul>

<p>É importante comunicar seus limites claramente e também respeitar os limites do outro.</p>

<h3>3. Respeito Mútuo</h3>
<p>O respeito é a base de qualquer relacionamento saudável. Manifesta-se através de:</p>
<ul>
<li>Valorização das opiniões e sentimentos do outro</li>
<li>Aceitação das diferenças individuais</li>
<li>Confiança e lealdade</li>
<li>Apoio aos objetivos e sonhos um do outro</li>
<li>Reconhecimento e apreciação</li>
</ul>

<h2>Sinais de Relacionamentos Não Saudáveis</h2>
<p>É igualmente importante reconhecer quando um relacionamento não está saudável:</p>
<ul>
<li>Controle excessivo ou ciúme patológico</li>
<li>Falta de respeito ou desvalorização constante</li>
<li>Comunicação agressiva ou passivo-agressiva</li>
<li>Violação repetida de limites</li>
<li>Desequilíbrio de poder persistente</li>
<li>Isolamento de amigos e família</li>
<li>Qualquer forma de abuso (emocional, verbal, físico)</li>
</ul>

<h2>Cultivando Relacionamentos Saudáveis</h2>

<h3>1. Pratique a Vulnerabilidade</h3>
<p>Permitir-se ser vulnerável - compartilhar medos, inseguranças e sonhos - aprofunda a intimidade e conexão.</p>

<h3>2. Desenvolva Empatia</h3>
<p>Tente ver as situações da perspectiva do outro. Isso não significa concordar sempre, mas compreender.</p>

<h3>3. Resolva Conflitos de Forma Construtiva</h3>
<p>Conflitos são naturais. O importante é como você lida com eles:
<ul>
<li>Foque no problema, não na pessoa</li>
<li>Use "eu" ao invés de "você" (ex: "Eu me sinto..." ao invés de "Você sempre...")</li>
<li>Busque soluções em conjunto</li>
<li>Esteja disposto a pedir desculpas e perdoar</li>
</ul>
</p>

<h3>4. Mantenha sua Individualidade</h3>
<p>Relacionamentos saudáveis permitem que ambas as partes cresçam individualmente. Mantenha seus hobbies, amizades e interesses pessoais.</p>

<h3>5. Cultive a Gratidão</h3>
<p>Expressar apreciação regularmente fortalece os laços e cria um ambiente positivo.</p>

<h2>Quando Buscar Ajuda Profissional</h2>
<p>A terapia de casal ou individual pode ser extremamente benéfica quando:</p>
<ul>
<li>Padrões negativos de comunicação estão estabelecidos</li>
<li>Há dificuldade em resolver conflitos</li>
<li>Experiências passadas estão impactando relacionamentos atuais</li>
<li>Você quer fortalecer um relacionamento que já é bom</li>
</ul>

<p>Lembre-se: relacionamentos saudáveis requerem esforço, comprometimento e, acima de tudo, consciência. Investir nas suas relações é investir na sua qualidade de vida.</p>`,
    published: true,
    publishedAt: new Date('2024-02-28'),
    category: 'Relacionamentos',
    tags: ['relacionamentos', 'comunicação', 'limites', 'saúde emocional'],
    readTime: 9,
    coverImage: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1374'
  },
  {
    title: 'Psicologia Analítica Junguiana: Uma Jornada ao Inconsciente',
    slug: 'psicologia-analitica-junguiana',
    excerpt: 'Descubra os princípios fundamentais da Psicologia Analítica de Carl Jung e como essa abordagem profunda pode transformar sua compreensão sobre si mesmo.',
    content: `<p>A Psicologia Analítica, desenvolvida por Carl Gustav Jung, oferece uma perspectiva profunda e transformadora sobre a psique humana. Mais do que uma terapia, é uma jornada de autoconhecimento que explora as camadas mais profundas da nossa existência.</p>

<h2>Quem Foi Carl Jung?</h2>
<p>Carl Gustav Jung (1875-1961) foi um psiquiatra suíço que inicialmente trabalhou com Sigmund Freud, mas posteriormente desenvolveu sua própria teoria e abordagem terapêutica. Jung expandiu a compreensão do inconsciente, introduzindo conceitos revolucionários que continuam relevantes hoje.</p>

<h2>Conceitos Fundamentais</h2>

<h3>1. O Inconsciente Coletivo</h3>
<p>Diferentemente de Freud, Jung propôs que além do inconsciente pessoal (nossas memórias e experiências reprimidas), existe um inconsciente coletivo - um repositório de experiências compartilhadas por toda a humanidade. É aqui que residem os arquétipos.</p>

<h3>2. Arquétipos</h3>
<p>Arquétipos são padrões universais de comportamento e símbolos que aparecem em todas as culturas e épocas. Alguns dos principais arquétipos incluem:</p>
<ul>
<li><strong>A Persona:</strong> A máscara social que usamos para nos apresentar ao mundo</li>
<li><strong>A Sombra:</strong> Aspectos de nós mesmos que reprimimos ou negamos</li>
<li><strong>Anima/Animus:</strong> O aspecto feminino na psique masculina e vice-versa</li>
<li><strong>O Self:</strong> A totalidade da psique, o centro regulador</li>
</ul>

<h3>3. O Processo de Individuação</h3>
<p>A individuação é o objetivo central da Psicologia Analítica - é o processo pelo qual uma pessoa se torna verdadeiramente si mesma, integrando os aspectos conscientes e inconscientes da psique. Não se trata de perfeição, mas de totalidade.</p>

<h2>Como Funciona a Terapia Junguiana?</h2>

<h3>Trabalho com Sonhos</h3>
<p>Para Jung, os sonhos são mensagens do inconsciente que podem guiar o processo de autoconhecimento. Na terapia, exploramos os símbolos e significados dos sonhos, não como premonições, mas como comunicações da psique.</p>

<h3>Imaginação Ativa</h3>
<p>Esta técnica envolve dialogar com imagens e figuras que surgem do inconsciente, permitindo uma comunicação mais direta entre consciente e inconsciente.</p>

<h3>Análise da Transferência</h3>
<p>A relação terapêutica é vista como um campo onde conteúdos inconscientes podem emergir e ser trabalhados.</p>

<h2>Benefícios da Abordagem Junguiana</h2>

<h3>1. Autoconhecimento Profundo</h3>
<p>A análise junguiana oferece ferramentas para explorar as camadas mais profundas da personalidade, revelando aspectos desconhecidos de si mesmo.</p>

<h3>2. Integração da Sombra</h3>
<p>Ao reconhecer e integrar aspectos negados de nós mesmos, reduzimos conflitos internos e nos tornamos mais autênticos.</p>

<h3>3. Encontro de Significado</h3>
<p>A abordagem junguiana ajuda a encontrar propósito e sentido, especialmente em momentos de crise ou transição.</p>

<h3>4. Desenvolvimento da Criatividade</h3>
<p>O trabalho com símbolos e imaginação ativa pode desbloquear a criatividade e oferecer novas perspectivas sobre problemas.</p>

<h3>5. Conexão Espiritual</h3>
<p>Jung reconhecia a importância da dimensão espiritual na psique humana, oferecendo espaço para explorar questões existenciais e transcendentes.</p>

<h2>Para Quem é Indicada?</h2>
<p>A Psicologia Analítica pode beneficiar pessoas que:</p>
<ul>
<li>Buscam autoconhecimento profundo</li>
<li>Estão em momentos de transição de vida</li>
<li>Sentem que há algo mais além dos sintomas superficiais</li>
<li>Interessam-se por sonhos e simbolismo</li>
<li>Procuram significado e propósito</li>
<li>Querem explorar questões espirituais e existenciais</li>
</ul>

<h2>A Jornada do Herói</h2>
<p>Jung identificou que muitos mitos e histórias seguem um padrão - a Jornada do Herói - que reflete nossa própria jornada de individuação. Cada pessoa é o herói de sua própria história, enfrentando desafios, confrontando sombras e emergindo transformada.</p>

<p>A Psicologia Analítica nos convida a essa jornada: não uma jornada para fora, mas para dentro, em direção à nossa própria verdade e totalidade. É um caminho desafiador, mas profundamente recompensador, que pode levar a uma vida mais autêntica, significativa e integrada.</p>`,
    published: true,
    publishedAt: new Date('2024-02-20'),
    category: 'Abordagens Terapêuticas',
    tags: ['Jung', 'psicologia analítica', 'inconsciente', 'arquétipos', 'individuação'],
    readTime: 10,
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1424'
  },
  {
    title: 'Burnout: Reconhecendo e Prevenindo o Esgotamento Profissional',
    slug: 'burnout-esgotamento-profissional',
    excerpt: 'O burnout vai muito além do cansaço comum. Entenda os sinais do esgotamento profissional e aprenda estratégias para preveni-lo e tratá-lo.',
    content: `<p>Em um mundo cada vez mais acelerado e competitivo, o burnout tornou-se uma realidade preocupante. Reconhecido pela Organização Mundial da Saúde (OMS) como um fenômeno ocupacional, o burnout afeta milhões de profissionais e pode ter consequências graves para a saúde física e mental.</p>

<h2>O Que é Burnout?</h2>
<p>Burnout, ou síndrome do esgotamento profissional, é um estado de exaustão física, emocional e mental causado por estresse crônico no trabalho. Não é simplesmente estar cansado ou estressado - é um processo gradual de desgaste que ocorre quando as demandas do trabalho excedem consistentemente a capacidade de recuperação.</p>

<h2>As Três Dimensões do Burnout</h2>

<h3>1. Exaustão Emocional</h3>
<p>Sensação de estar emocionalmente esgotado e sem energia. Você pode sentir que não tem mais nada a dar, mesmo após períodos de descanso.</p>

<h3>2. Despersonalização</h3>
<p>Desenvolvimento de uma atitude cínica ou distanciada em relação ao trabalho e às pessoas. Pode se manifestar como cinismo, irritabilidade e falta de empatia.</p>

<h3>3. Redução da Realização Pessoal</h3>
<p>Sentimento de incompetência e falta de realização no trabalho. A pessoa pode questionar sua capacidade e o valor do seu trabalho.</p>

<h2>Sinais e Sintomas</h2>

<h3>Sintomas Físicos</h3>
<ul>
<li>Fadiga constante e falta de energia</li>
<li>Insônia ou alterações no sono</li>
<li>Dores de cabeça frequentes</li>
<li>Problemas gastrointestinais</li>
<li>Tensão muscular, especialmente nas costas e pescoço</li>
<li>Sistema imunológico enfraquecido</li>
<li>Alterações no apetite</li>
</ul>

<h3>Sintomas Emocionais e Mentais</h3>
<ul>
<li>Sensação de fracasso e dúvida sobre si mesmo</li>
<li>Sentimentos de impotência e desamparo</li>
<li>Perda de motivação</li>
<li>Perspectiva cada vez mais cínica e negativa</li>
<li>Diminuição da satisfação e sensação de realização</li>
<li>Dificuldade de concentração</li>
<li>Ansiedade e depressão</li>
</ul>

<h3>Sintomas Comportamentais</h3>
<ul>
<li>Procrastinação e dificuldade para começar tarefas</li>
<li>Isolamento social</li>
<li>Absenteísmo ou atrasos frequentes</li>
<li>Diminuição da produtividade</li>
<li>Uso de substâncias (álcool, cafeína, etc.) para lidar com o estresse</li>
<li>Irritabilidade e conflitos interpessoais</li>
</ul>

<h2>Fatores de Risco</h2>
<p>Algumas condições de trabalho aumentam o risco de burnout:</p>
<ul>
<li>Carga de trabalho excessiva</li>
<li>Falta de controle sobre o trabalho</li>
<li>Recompensas inadequadas (financeiras ou reconhecimento)</li>
<li>Falta de apoio comunitário no trabalho</li>
<li>Ausência de justiça e equidade</li>
<li>Conflito de valores entre a pessoa e a organização</li>
</ul>

<h2>Estratégias de Prevenção</h2>

<h3>1. Estabeleça Limites Claros</h3>
<p>Aprenda a dizer não e estabeleça limites saudáveis entre trabalho e vida pessoal. Defina horários específicos para trabalhar e respeite-os.</p>

<h3>2. Pratique o Autocuidado</h3>
<ul>
<li>Priorize o sono adequado (7-9 horas por noite)</li>
<li>Mantenha uma alimentação balanceada</li>
<li>Exercite-se regularmente</li>
<li>Reserve tempo para hobbies e atividades prazerosas</li>
</ul>

<h3>3. Desenvolva Suporte Social</h3>
<p>Mantenha conexões significativas com colegas, amigos e família. Compartilhe suas preocupações e não tente enfrentar tudo sozinho.</p>

<h3>4. Pratique Mindfulness e Relaxamento</h3>
<p>Técnicas de meditação, respiração e mindfulness podem ajudar a gerenciar o estresse e aumentar a resiliência.</p>

<h3>5. Reavalie Prioridades</h3>
<p>Regularmente, questione se suas prioridades estão alinhadas com seus valores. Às vezes, ajustes são necessários.</p>

<h3>6. Busque Significado</h3>
<p>Reconecte-se com o propósito do seu trabalho. Lembre-se por que escolheu essa carreira e o impacto positivo que pode ter.</p>

<h2>Quando e Como Buscar Ajuda</h2>
<p>Se você está experimentando sintomas de burnout, é crucial buscar ajuda profissional. A psicoterapia pode oferecer:</p>
<ul>
<li>Espaço seguro para processar sentimentos e experiências</li>
<li>Estratégias para gerenciar estresse e estabelecer limites</li>
<li>Apoio na tomada de decisões sobre sua carreira</li>
<li>Ferramentas para desenvolver resiliência</li>
<li>Tratamento para ansiedade ou depressão associadas</li>
</ul>

<p>Em alguns casos, pode ser necessário fazer mudanças significativas - seja no ambiente de trabalho, nas responsabilidades ou até mesmo na carreira. Um profissional pode ajudá-lo a navegar essas decisões.</p>

<h2>Recuperação e Transformação</h2>
<p>A recuperação do burnout leva tempo e requer compromisso com mudanças genuínas. Não é apenas sobre "aguentar" até as próximas férias - é sobre criar um estilo de vida sustentável que honre suas necessidades e limites.</p>

<p>Lembre-se: experimentar burnout não é um sinal de fraqueza. É um sinal de que algo precisa mudar. Com apoio adequado e mudanças conscientes, é possível não apenas se recuperar, mas emergir com maior sabedoria sobre si mesmo e suas necessidades.</p>`,
    published: true,
    publishedAt: new Date('2024-02-15'),
    category: 'Saúde Mental no Trabalho',
    tags: ['burnout', 'esgotamento', 'trabalho', 'estresse', 'autocuidado'],
    readTime: 11,
    coverImage: 'https://img.freepik.com/premium-vector/mental-health-issue-burnout-stress-concept-tired-woman-work-desk-with-computer_719686-62.jpg'
  }
];

async function main() {
  console.log('🌱 Starting seed...');

  // Upsert admin users
  console.log('👤 Creating admin users...');
  
  const hashedPassword = await bcrypt.hash('johndoe123', 10);
  await prisma.user.upsert({
    where: { email: 'john@doe.com' },
    update: {},
    create: {
      email: 'john@doe.com',
      name: 'Admin Test',
      password: hashedPassword,
      role: 'admin',
    },
  });

  const irismanPassword = await bcrypt.hash('irisman2025', 10);
  await prisma.user.upsert({
    where: { email: 'irisman@barbosa.com' },
    update: {},
    create: {
      email: 'irisman@barbosa.com',
      name: 'Irisman Barbosa',
      password: irismanPassword,
      role: 'admin',
    },
  });

  console.log('✅ Admin users created');

  // Upsert blog posts
  console.log('📝 Creating blog posts...');
  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {},
      create: post,
    });
  }
  console.log('✅ Blog posts created');

  console.log('🎉 Seed completed!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
