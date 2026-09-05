/* Lista de links rápidos da Central de Atendimento.
   Para adicionar, editar ou remover um link, basta alterar este array —
   não é necessário mexer no index.html. */
window.CENTRAL_LINKS_RAPIDOS = [
  { titulo: "Sistema de Escalas", url: "https://eubruno-coder.github.io/escala/", descricao: "Controle de jornada e pausas", icone: "⏱️" },
  { titulo: "Portal Colabora", url: "https://portalcolabora.speedmais.com.br/user/auth/login", descricao: "Login do portal do colaborador", icone: "📚" },
  { titulo: "Marcar Ponto", url: "https://portal.speedmais.com.br/performancecef", descricao: "Ponto e performance", icone: "⏰" },
  { titulo: "Evolux", url: "https://speed-me.evolux.io/chat", descricao: "Plataforma Evolux Chat", icone: "💬" },
  { titulo: "Gestão GOV", url: "https://gestao.acesso.gov.br/contas", descricao: "Gestão de contas gov.br", icone: "🏛️" },
  { titulo: "Portal MEXX", url: "https://portaldeservicos.gestao.gov.br/pt#/", descricao: "Portal de serviços", icone: "🗂️" },
  { titulo: "Webmail", url: "https://webmail.speedmais.com.br/", descricao: "E-mail corporativo", icone: "✉️" }
];

/* ===== Navegação: Central → Links Rápidos =====
   A entrada é criada dinamicamente para evitar alterações no HTML
   principal e manter a navegação centralizada. */
(function integrarLinksRapidos(){
  function adicionarEntrada(){
    const menu = document.querySelector('.menu');
    if(!menu || menu.querySelector('[data-nav="links-rapidos"]')) return;

    const item = document.createElement('li');
    item.innerHTML = `
      <button type="button" data-nav="links-rapidos" title="Links rápidos" aria-label="Abrir Links rápidos">
        🔗 Links rápidos
      </button>
    `;

    const botao = item.querySelector('button');
    botao.addEventListener('click', function(){
      window.location.href = 'pages/links.html';
    });

    menu.appendChild(item);
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', adicionarEntrada, {once:true});
  }else{
    adicionarEntrada();
  }
})();
