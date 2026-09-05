/* Lista de links rápidos da Central de Atendimento.
   Para adicionar, editar ou remover um link, basta alterar este array —
   não é necessário mexer no index.html ou no central.html. */
window.CENTRAL_LINKS_RAPIDOS = [
  { titulo: "Sistema de Escalas", url: "https://eubruno-coder.github.io/escala/", descricao: "Controle de jornada e pausas", icone: "⏱️" },
  { titulo: "Portal Colabora", url: "https://portalcolabora.speedmais.com.br/user/auth/login", descricao: "Login do portal do colaborador", icone: "📚" },
  { titulo: "Marcar Ponto", url: "https://portal.speedmais.com.br/performancecef", descricao: "Ponto e performance", icone: "⏰" },
  { titulo: "Evolux", url: "https://speed-me.evolux.io/chat", descricao: "Plataforma Evolux Chat", icone: "💬" },
  { titulo: "Gestão GOV", url: "https://gestao.acesso.gov.br/contas", descricao: "Gestão de contas gov.br", icone: "🏛️" },
  { titulo: "Portal MEXX", url: "https://portaldeservicos.gestao.gov.br/pt#/#", descricao: "Portal de serviços", icone: "🗂️" },
  { titulo: "Webmail", url: "https://webmail.speedmais.com.br/", descricao: "E-mail corporativo", icone: "✉️" }
];

/* ===== Navegação: Central → Links Rápidos =====
   Os links rápidos pertencem exclusivamente à página pages/links.html.
   Se a versão antiga da Central ainda possuir o bloco #listaLinks,
   ele é removido automaticamente para evitar duplicidade. */
(function integrarLinksRapidos(){
  function removerBlocoAntigo(){
    const lista = document.getElementById('listaLinks');
    if(!lista) return;

    const cabecalho = lista.previousElementSibling;
    if(cabecalho && cabecalho.classList.contains('section-head')){
      const titulo = cabecalho.querySelector('h2');
      if(titulo && /links\s*rápidos/i.test(titulo.textContent || '')){
        cabecalho.remove();
      }
    }

    lista.remove();
  }

  function adicionarEntrada(){
    removerBlocoAntigo();

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

/* ===== Novidades — temporariamente desativado =====
   A estrutura será reestruturada posteriormente.
   Mantemos o código original em central.js para a próxima evolução,
   mas o componente não será exibido enquanto esta flag estiver ativa. */
(function desativarNovidadesTemporariamente(){
  const style = document.createElement('style');
  style.id = 'desativarNovidadesTemporariamente';
  style.textContent = '.novidades-wrap{display:none !important;}';
  document.head.appendChild(style);

  function removerSeJaCriado(){
    const novidades = document.getElementById('novidadesTicker');
    if(novidades) novidades.remove();
  }

  removerSeJaCriado();

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', removerSeJaCriado, {once:true});
  }else{
    removerSeJaCriado();
  }
})();

/* ===== Aviso de manutenção programada =====
   Este aviso é operacional e deve aparecer na Central, não no README.
   Para alterar a data ou a mensagem, edite somente este bloco. */
(function exibirAvisoManutencao(){
  function adicionarAviso(){
    const main = document.querySelector('.main');
    if(!main || document.getElementById('avisoManutencao')) return;

    const style = document.createElement('style');
    style.textContent = `
      .manutencao-wrap{position:relative;z-index:3;margin:0 0 18px}
      .manutencao-card{position:relative;display:flex;align-items:center;gap:13px;padding:13px 15px;background:var(--surface);border:1px solid rgba(108,59,255,.22);border-radius:15px;box-shadow:var(--shadow);overflow:hidden}
      .manutencao-card::before{content:"";position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--gradient)}
      .manutencao-icon{width:40px;height:40px;flex:0 0 40px;display:grid;place-items:center;border-radius:11px;background:var(--gradient-soft);font-size:19px}
      .manutencao-content{min-width:0;flex:1}
      .manutencao-meta{display:flex;align-items:center;gap:8px;margin-bottom:4px}
      .manutencao-badge{display:inline-flex;align-items:center;padding:3px 7px;border-radius:999px;background:var(--gradient-soft);color:var(--primary);font-size:9px;font-weight:800;letter-spacing:.45px}
      .manutencao-date{color:var(--muted);font-size:9px;font-weight:700}
      .manutencao-title{display:block;color:var(--text-strong);font-size:13px;font-weight:800;line-height:1.3}
      .manutencao-desc{display:block;color:var(--text-secondary);font-size:11px;line-height:1.4;margin-top:3px}
      @media(max-width:600px){.manutencao-card{align-items:flex-start}.manutencao-icon{width:36px;height:36px;flex-basis:36px}.manutencao-title{font-size:12px}}
    `;
    document.head.appendChild(style);

    const aviso = document.createElement('section');
    aviso.id = 'avisoManutencao';
    aviso.className = 'manutencao-wrap';
    aviso.setAttribute('aria-label','Aviso de manutenção programada');
    aviso.innerHTML = `
      <div class="manutencao-card">
        <span class="manutencao-icon" aria-hidden="true">🛠️</span>
        <div class="manutencao-content">
          <div class="manutencao-meta">
            <span class="manutencao-badge">MANUTENÇÃO PROGRAMADA</span>
            <span class="manutencao-date">09/09/2026</span>
          </div>
          <strong class="manutencao-title">A Intranet passará por manutenção programada no dia 09/09/2026.</strong>
          <span class="manutencao-desc">Durante a manutenção, a Central poderá apresentar indisponibilidade temporária ou instabilidade.</span>
        </div>
      </div>
    `;

    const welcome = main.querySelector('.welcome');
    if(welcome) welcome.insertAdjacentElement('beforebegin', aviso);
    else main.insertBefore(aviso, main.firstChild);
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', adicionarAviso, {once:true});
  }else{
    adicionarAviso();
  }
})();
