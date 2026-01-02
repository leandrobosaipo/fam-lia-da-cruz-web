// CONTEXTO:
Crie a página “Mensagens dos Pastores” do site da Igreja Família da Cruz | Cuiabá, com base no PRD e conteúdo institucional já indexado. A página deve seguir os princípios de design responsivo mobile-first e utilizar **bibliotecas de UX já adicionadas no meu workspace do Cursor**.

// BIBLIOTECAS UX DISPONÍVEIS (e recomendadas):
- Tailwind CSS (preferencial)
- Headless UI
- Radix UI (se aplicável)
- Framer Motion (para animações simples)
- Lucide Icons (para ícones)
- shadcn/ui (para componentes acessíveis e estilizados)
Essas bibliotecas **devem ser usadas obrigatoriamente** sempre que aplicável.

// OBJETIVO DA PÁGINA:
1. Exibir uma galeria de vídeos de mensagens pastorais (embed YouTube playlist)
2. Incluir um bloco de introdução com tom inspirador e acolhedor
3. Formulário de pedido de oração com validação (nome, e-mail, telefone, mensagem)
4. Mensagem de rodapé com aviso LGPD
5. Todos os links (vídeos, formulários, embeds) **devem funcionar**
6. Garantir acessibilidade (labels, contraste, navegação via teclado)

// CONTEÚDO-CHAVE (baseado no PRD):
- Embed da playlist do YouTube: use variável `site_youtube_playlist_url` (vindo de `Configurações do Site`)
- Texto introdutório sugerido: "Assista às mensagens e seja edificado pela Palavra. Que o Senhor fortaleça sua fé e sua casa."
- Título do bloco de oração: “Pedido de Oração”
- Texto base: “Nos mande um e‑mail com o seu pedido que estaremos orando por ele!”
- Campos: nome, e‑mail, telefone, mensagem
- Texto LGPD: “Ao enviar, você concorda com o uso destas informações apenas para retorno e cuidado pastoral. Não compartilhamos seus dados com terceiros.”

// REGRAS DE ESTILO:
- Paleta de cores conforme identidade visual (azul-marinho, gradientes azul-turquesa, branco, roxo suave)
- Tipografia: sans-serif (Montserrat / Inter), títulos em caixa alta
- Linguagem acolhedora, bíblica, respeitosa
- Citar versículos curtos se adequado

// SEO E BOAS PRÁTICAS:
- Toda estrutura da página deve ser **SEO-friendly**:
  - Usar tags semânticas (section, article, h1/h2/h3)
  - Meta description e título de página distintos
  - URL amigável: `/mensagens`
  - Campos com `name` e `label` claros para formulário
  - Estrutura de título otimizada para indexação (H1: título da página, H2: seções)

// SAÍDA ESPERADA:
- Código HTML/JSX modularizado por seção
- Uso explícito das bibliotecas citadas acima
- Embed funcional do YouTube playlist
- Formulário com validação e LGPD
- Código limpo, acessível, responsivo e pronto para produção
