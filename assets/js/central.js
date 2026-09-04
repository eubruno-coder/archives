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