let categoriaAtual='todos';

/* ===== Sessão ===== */
function iniciarSessao(){
  const nome=(localStorage.getItem('usuarioIntranet')||localStorage.getItem('centralNome')||'').trim();
  if(nome){
    mostrarCentral(nome);
    return;
  }
  window.location.href='index.html';
}

function mostrarCentral(nome){
  document.body.classList.remove('bloqueado');
  const overlay=document.getElementById('loginOverlay');
  if(overlay)overlay.style.display='none';
  const chaveVisita='centralVisitou_'+nome;
  const visitou=localStorage.getItem(chaveVisita)==='1';
  const welcome=document.getElementById('welcomeTitle');
  if(welcome){
    welcome.textContent=(visitou?'Bem-vindo de volta, ':'Olá, ')+nome+'! ';
    const emoji=document.createElement('span');
    emoji.className='emoji-vivo';
    emoji.setAttribute('aria-hidden','true');
    emoji.textContent=visitou?'✨':'👋';
    welcome.appendChild(emoji);

    /* Saudação de entrada: animação única de 1,5s. */
    emoji.style.animation='emoji-acenar 1.5s ease-in-out 1';
    emoji.addEventListener('animationend',function(){
      emoji.style.animation='none';
    },{once:true});
  }
  localStorage.setItem(chaveVisita,'1');
  localStorage.setItem('centralNome',nome);
  const topUser=document.getElementById('topUser');
  if(topUser)topUser.innerHTML=nome+' <button onclick="trocarUsuario()">Trocar usuário</button>';
  const footerUser=document.getElementById('footerUser');
  if(footerUser)footerUser.textContent='• '+nome;
  const abertura=document.getElementById('s1');
  if(abertura)abertura.textContent='Olá! Sou '+nome+' e estarei com você durante este atendimento.\nComo posso ajudar?';
}

/* O login antigo não é mais utilizado. A entrada oficial acontece em index.html. */
function entrarNaCentral(){window.location.href='index.html';}

function trocarUsuario(){
  localStorage.removeItem('usuarioIntranet');
  localStorage.removeItem('centralNome');
  localStorage.removeItem('centralTermosAceitos');
  localStorage.removeItem('centralTermosData');
  window.location.href='index.html';
}

function abrirTermos(e){if(e)e.preventDefault();document.getElementById('termsModal')?.classList.add('show')}
function fecharTermos(){document.getElementById('termsModal')?.classList.remove('show')}
function fecharTermosFora(e){if(e.target.id==='termsModal')fecharTermos()}
document.addEventListener('keydown',e=>{if(e.key==='Escape')fecharTermos()});

/* ===== Menu lateral ===== */
function alternarMenu(){const layout=document.getElementById('layout');if(!layout)return;layout.classList.toggle('collapsed');localStorage.setItem('menuRecolhido',layout.classList.contains('collapsed')?'1':'0')}
(function(){if(localStorage.getItem('menuRecolhido')==='1')document.getElementById('layout')?.classList.add('collapsed')})();

async function copiarTexto(botao,id){const elemento=document.getElementById(id);if(!elemento)return;const texto=elemento.innerText||elemento.textContent||'';const original=botao.textContent;try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(texto)}else{const textarea=document.createElement('textarea');textarea.value=texto;textarea.style.position='fixed';textarea.style.left='-9999px';textarea.setAttribute('readonly','');document.body.appendChild(textarea);textarea.select();textarea.setSelectionRange(0,textarea.value.length);const sucesso=document.execCommand('copy');document.body.removeChild(textarea);if(!sucesso)throw new Error('Não foi possível copiar o texto.')}botao.textContent='✓ Copiado!';botao.style.backgroundColor='#218838';setTimeout(()=>{botao.textContent=original;botao.style.backgroundColor=''},1500)}catch(erro){console.error('Erro ao copiar:',erro);botao.textContent='Erro ao copiar';botao.style.backgroundColor='#dc3545';setTimeout(()=>{botao.textContent=original;botao.style.backgroundColor=''},2000)}}
function filtrarScripts(){const busca=document.getElementById('campoBusca').value.toLowerCase().trim();const cards=document.querySelectorAll('.script-card');let visiveis=0;cards.forEach(card=>{const texto=card.textContent.toLowerCase();const categoria=card.dataset.categoria;const mostraCategoria=categoriaAtual==='todos'||categoria===categoriaAtual;const mostraBusca=!busca||texto.includes(busca);const mostrar=mostraCategoria&&mostraBusca;card.style.display=mostrar?'':'none';if(mostrar)visiveis++});document.getElementById('contador').textContent=visiveis+' script'+(visiveis===1?'':'s');document.getElementById('semResultados').style.display=visiveis?'none':'block'}
function filtrarCategoria(categoria,botao){categoriaAtual=categoria;document.querySelectorAll('.menu button').forEach(b=>b.classList.remove('active'));botao.classList.add('active');document.getElementById('campoBusca').value='';filtrarScripts();window.scrollTo({top:0,behavior:'smooth'})}
function buscarRapido(termo){const campo=document.getElementById('campoBusca');campo.value=termo;categoriaAtual='todos';document.querySelectorAll('.menu button').forEach(b=>b.classList.remove('active'));document.querySelector('.menu button').classList.add('active');filtrarScripts();document.querySelector('.grid-scripts').scrollIntoView({behavior:'smooth',block:'start'})}
carregarScriptsAtendimento();carregarLinksRapidos();iniciarSessao();filtrarScripts();

function carregarScriptsAtendimento(){const lista=document.getElementById('listaScripts');if(!lista||lista.dataset.contentLoaded==='1')return;const conteudo=window.CENTRAL_ATENDIMENTO_HTML;if(typeof conteudo!=='string'){console.error('Conteúdo dos scripts de atendimento não foi carregado.');return}lista.insertAdjacentHTML('afterbegin',conteudo);lista.dataset.contentLoaded='1'}

/* ===== Estilo dos Links Rápidos ===== */
(function(){const style=document.createElement('style');style.textContent=`
.link-card{position:relative;display:flex;align-items:center;gap:12px;min-width:0;min-height:82px;padding:15px 16px;text-decoration:none;color:var(--text);background:rgba(255,255,255,.94);border:1px solid var(--border);border-radius:14px;box-shadow:var(--shadow);overflow:hidden;transition:transform .2s,box-shadow .2s,border-color .2s,background-color .25s ease}
[data-theme="dark"] .link-card{background:rgba(25,25,35,.95)}
.link-card::before{content:"";position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--gradient);opacity:0;transition:opacity .2s}
.link-card:hover{transform:translateY(-3px);box-shadow:var(--shadow-hover);border-color:rgba(108,59,255,.20)}
.link-card:hover::before{opacity:1}
.link-card-icon{width:38px;height:38px;flex:0 0 38px;display:grid;place-items:center;border-radius:10px;background:var(--gradient-soft);font-size:18px}
.link-card-text{display:flex;flex-direction:column;gap:4px;min-width:0;flex:1}
.link-card-text strong{display:block;color:var(--text-strong);font-size:13px;font-weight:800;line-height:1.25;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.link-card-text span{display:block;color:var(--muted);font-size:11px;line-height:1.35;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.link-card-arrow{flex:0 0 auto;color:var(--icon-muted);font-size:15px;transition:transform .15s,color .15s}
.link-card:hover .link-card-arrow{color:var(--primary);transform:translate(2px,-2px)}
@media(max-width:1100px){.grid-links{grid-template-columns:repeat(2,1fr)}}
@media(max-width:900px){.grid-links{display:flex;overflow-x:auto;gap:12px;padding-bottom:5px;scrollbar-width:thin}.link-card{flex:0 0 250px}}
@media(max-width:600px){.link-card{flex-basis:230px;min-height:76px}}
`;document.head.appendChild(style)})();

function carregarLinksRapidos(){const lista=document.getElementById('listaLinks');if(!lista||lista.dataset.contentLoaded==='1')return;const links=window.CENTRAL_LINKS_RAPIDOS;if(!Array.isArray(links)){console.error('Lista de links rápidos não foi carregada.');return}lista.innerHTML=links.map(link=>`<a class="link-card" href="${link.url}" target="_blank" rel="noopener noreferrer"><span class="link-card-icon">${link.icone||'🔗'}</span><span class="link-card-text"><strong>${link.titulo}</strong><span>${link.descricao||''}</span></span><span class="link-card-arrow">↗</span></a>`).join('');lista.dataset.contentLoaded='1'}

/* ===== Novidades | Carrossel ===== */
const CENTRAL_NOVIDADES=[
  {tipo:'plataforma',icone:'✨',rotulo:'NOVIDADE',titulo:'A Central ganhou uma nova experiência visual.',descricao:'Interface roxa, navegação renovada e uma experiência mais moderna.',data:'04/09/2026'},
  {tipo:'diretrizes',icone:'🛡️',rotulo:'DIRETRIZES',titulo:'Novas diretrizes de uso estão disponíveis.',descricao:'Consulte as orientações de segurança, privacidade e uso responsável da plataforma.',data:'04/09/2026',link:'diretrizes.html'},
  {tipo:'novidades',icone:'🔔',rotulo:'NOVIDADE',titulo:'A Central agora conta com esta fita de atualizações.',descricao:'Este espaço será usado para avisos rápidos e mudanças relevantes.',data:'04/09/2026'},
  {tipo:'futuro',icone:'📌',rotulo:'EM EVOLUÇÃO',titulo:'O Mural está no nosso roadmap.',descricao:'As novidades de curto prazo ficam aqui; conteúdos completos serão estruturados no futuro.',data:'04/09/2026'}
];

function inicializarNovidades(){
  if(document.getElementById('novidadesTicker'))return;

  const style=document.createElement('style');
  style.textContent=`
  .novidades-wrap{position:relative;z-index:2;margin:-5px 0 28px}
  .novidades-label{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:9px}
  .novidades-label-left{display:flex;align-items:center;gap:8px;color:var(--text-strong);font-size:11px;font-weight:800;letter-spacing:.6px;text-transform:uppercase}
  .novidades-label-icon{width:27px;height:27px;display:grid;place-items:center;border-radius:8px;background:var(--gradient-soft);font-size:14px}
  .novidades-counter{font-size:10px;color:var(--muted);font-weight:700}
  .novidades-ticker{position:relative;display:flex;align-items:center;gap:13px;min-height:74px;padding:11px 13px 11px 15px;background:var(--surface);border:1px solid var(--border);border-radius:15px;box-shadow:var(--shadow);overflow:hidden}
  .novidades-ticker::before{content:"";position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--gradient)}
  .novidades-icon{width:42px;height:42px;flex:0 0 42px;display:grid;place-items:center;border-radius:11px;background:var(--gradient-soft);font-size:19px}
  .novidades-content{min-width:0;flex:1}
  .novidades-meta{display:flex;align-items:center;gap:8px;margin-bottom:4px}
  .novidades-badge{display:inline-flex;align-items:center;padding:3px 7px;border-radius:999px;background:var(--gradient-soft);color:var(--primary);font-size:9px;font-weight:800;letter-spacing:.45px}
  .novidades-date{color:var(--muted);font-size:9px;font-weight:600}
  .novidades-title{display:block;color:var(--text-strong);font-size:13px;font-weight:800;line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .novidades-desc{display:block;color:var(--text-secondary);font-size:11px;line-height:1.35;margin-top:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
  .novidades-actions{display:flex;align-items:center;gap:6px;flex:0 0 auto}
  .novidades-nav{width:31px;height:31px;border:1px solid var(--border-strong);background:var(--surface);color:var(--text-secondary);border-radius:9px;cursor:pointer;font-size:15px;display:grid;place-items:center;transition:background .15s,color .15s,border-color .15s,transform .15s}
  .novidades-nav:hover{background:var(--gradient-soft);color:var(--primary);border-color:rgba(108,59,255,.25);transform:translateY(-1px)}
  .novidades-link{display:none;margin-right:2px;padding:8px 10px;border-radius:9px;background:var(--gradient);color:#fff;text-decoration:none;font-size:10px;font-weight:800;white-space:nowrap;box-shadow:0 7px 16px rgba(108,59,255,.18)}
  .novidades-dots{display:flex;justify-content:center;gap:5px;margin-top:8px}
  .novidades-dot{width:5px;height:5px;border:0;padding:0;border-radius:50%;background:var(--icon-muted);opacity:.45;cursor:pointer;transition:width .2s,opacity .2s,background .2s}
  .novidades-dot.active{width:16px;border-radius:999px;background:var(--primary);opacity:1}
  .novidades-slide{animation:novidadesEntrada .35s ease}
  @keyframes novidadesEntrada{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}
  @media(max-width:700px){.novidades-ticker{min-height:88px}.novidades-desc{white-space:normal;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.novidades-link{display:none}.novidades-title{white-space:normal}.novidades-actions{gap:4px}.novidades-nav{width:29px;height:29px}}
  `;
  document.head.appendChild(style);

  const welcome=document.querySelector('.welcome');
  const main=document.querySelector('.main');
  if(!main)return;

  const wrap=document.createElement('section');
  wrap.className='novidades-wrap';
  wrap.id='novidadesTicker';
  wrap.setAttribute('aria-label','Novidades da intranet');
  wrap.innerHTML=`
    <div class="novidades-label">
      <div class="novidades-label-left"><span class="novidades-label-icon">🔔</span>Novidades</div>
      <span class="novidades-counter" id="novidadesCounter"></span>
    </div>
    <div class="novidades-ticker" id="novidadesSlide"></div>
    <div class="novidades-dots" id="novidadesDots" aria-label="Navegação das novidades"></div>
  `;

  if(welcome&&welcome.nextSibling)welcome.parentNode.insertBefore(wrap,welcome.nextSibling);
  else main.insertBefore(wrap,main.firstChild);

  let indice=0;
  let intervalo=null;

  function renderizarNovidade(novoIndice,reiniciar=true){
    indice=(novoIndice+CENTRAL_NOVIDADES.length)%CENTRAL_NOVIDADES.length;
    const item=CENTRAL_NOVIDADES[indice];
    const slide=document.getElementById('novidadesSlide');
    if(!slide)return;
    slide.classList.remove('novidades-slide');
    void slide.offsetWidth;
    slide.classList.add('novidades-slide');
    slide.innerHTML=`
      <span class="novidades-icon" aria-hidden="true">${item.icone}</span>
      <div class="novidades-content">
        <div class="novidades-meta"><span class="novidades-badge">${item.rotulo}</span><span class="novidades-date">${item.data}</span></div>
        <strong class="novidades-title">${item.titulo}</strong>
        <span class="novidades-desc">${item.descricao}</span>
      </div>
      ${item.link?`<a class="novidades-link" href="${item.link}">Ver diretrizes →</a>`:''}
      <div class="novidades-actions"><button class="novidades-nav" type="button" data-novidade="anterior" aria-label="Novidade anterior">‹</button><button class="novidades-nav" type="button" data-novidade="proxima" aria-label="Próxima novidade">›</button></div>
    `;
    document.getElementById('novidadesCounter').textContent=`${indice+1} de ${CENTRAL_NOVIDADES.length}`;
    document.querySelectorAll('.novidades-dot').forEach((dot,i)=>dot.classList.toggle('active',i===indice));
    if(reiniciar)iniciarAutoPlay();
  }

  function iniciarAutoPlay(){
    clearInterval(intervalo);
    intervalo=setInterval(()=>renderizarNovidade(indice+1,false),6500);
  }

  const dots=document.getElementById('novidadesDots');
  CENTRAL_NOVIDADES.forEach((_,i)=>{
    const dot=document.createElement('button');
    dot.className='novidades-dot'+(i===0?' active':'');
    dot.type='button';
    dot.setAttribute('aria-label',`Mostrar novidade ${i+1}`);
    dot.addEventListener('click',()=>renderizarNovidade(i));
    dots.appendChild(dot);
  });

  wrap.addEventListener('click',e=>{
    const botao=e.target.closest('[data-novidade]');
    if(!botao)return;
    renderizarNovidade(indice+(botao.dataset.novidade==='proxima'?1:-1));
  });

  wrap.addEventListener('mouseenter',()=>clearInterval(intervalo));
  wrap.addEventListener('mouseleave',()=>iniciarAutoPlay());
  renderizarNovidade(0);

  const menu=document.querySelector('.menu');
  if(menu&&!document.getElementById('menuNovidades')){
    const itemMenu=document.createElement('li');
    itemMenu.id='menuNovidades';
    itemMenu.innerHTML='<button type="button" title="Novidades" aria-label="Novidades">🔔 <span>Novidades</span></button>';
    const botao=itemMenu.querySelector('button');
    botao.addEventListener('click',()=>{
      document.querySelectorAll('.menu button').forEach(b=>b.classList.remove('active'));
      botao.classList.add('active');
      document.getElementById('novidadesTicker')?.scrollIntoView({behavior:'smooth',block:'center'});
    });
    menu.insertBefore(itemMenu,menu.firstElementChild);
  }
}

inicializarNovidades();