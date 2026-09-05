(() => {
  const posts = Array.isArray(window.INTRANET_MURAL) ? window.INTRANET_MURAL : [];
  const grid = document.getElementById('muralGrid');
  const featured = document.getElementById('featured');
  const filters = document.getElementById('filters');
  const searchInput = document.getElementById('searchInput');
  const resultCount = document.getElementById('resultCount');
  const statusMessage = document.getElementById('statusMessage');
  const emptyState = document.getElementById('emptyState');
  const clearSearch = document.getElementById('clearSearch');
  const themeToggle = document.getElementById('themeToggle');
  const userName = document.getElementById('userName');
  let categoriaAtual = 'Todos';

  function escapeHTML(value = '') {
    return String(value).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[char]));
  }

  function formatarData(data) {
    const date = new Date(`${data}T12:00:00`);
    return Number.isNaN(date.getTime()) ? data : date.toLocaleDateString('pt-BR', {day:'2-digit', month:'long', year:'numeric'});
  }

  function carregarUsuario() {
    const nome = localStorage.getItem('usuarioIntranet') || localStorage.getItem('centralNome');
    if (nome) userName.textContent = `Olá, ${nome}`;
  }

  function carregarTema() {
    const tema = localStorage.getItem('centralTema') || localStorage.getItem('intranetTema');
    if (tema === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    atualizarBotaoTema();
  }

  function atualizarBotaoTema() {
    const dark = document.documentElement.getAttribute('data-theme') === 'dark';
    themeToggle.textContent = dark ? '☀' : '☾';
    themeToggle.setAttribute('aria-label', dark ? 'Ativar tema claro' : 'Ativar tema escuro');
  }

  function alternarTema() {
    const dark = document.documentElement.getAttribute('data-theme') === 'dark';
    const novoTema = dark ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', dark ? 'light' : 'dark');
    localStorage.setItem('centralTema', novoTema);
    localStorage.setItem('intranetTema', novoTema);
    atualizarBotaoTema();
  }

  function montarDestaque() {
    const post = posts.find(item => item.destaque);
    if (!post) return;
    featured.hidden = false;
    featured.innerHTML = `<div class="featured-inner">
      <div class="featured-icon">${escapeHTML(post.icone || '📌')}</div>
      <div><div class="featured-label">Destaque • ${escapeHTML(post.categoria)}</div>
      <h2>${escapeHTML(post.titulo)}</h2><p>${escapeHTML(post.resumo)}</p></div>
    </div>`;
  }

  function montarFiltros() {
    const categorias = ['Todos', ...new Set(posts.map(post => post.categoria).filter(Boolean))];
    filters.innerHTML = categorias.map(cat => `<button type="button" class="filter ${cat === categoriaAtual ? 'active' : ''}" data-category="${escapeHTML(cat)}">${escapeHTML(cat)}</button>`).join('');
    filters.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
      categoriaAtual = button.dataset.category;
      montarFiltros();
      renderizar();
    }));
  }

  function renderizar() {
    const termo = searchInput.value.trim().toLowerCase();
    const filtrados = posts.filter(post => {
      const categoriaOk = categoriaAtual === 'Todos' || post.categoria === categoriaAtual;
      const texto = `${post.titulo} ${post.resumo} ${post.categoria}`.toLowerCase();
      return categoriaOk && (!termo || texto.includes(termo));
    }).sort((a,b) => new Date(b.data) - new Date(a.data));

    resultCount.textContent = filtrados.length;
    statusMessage.textContent = categoriaAtual === 'Todos' ? 'Todas as publicações' : categoriaAtual;
    grid.innerHTML = filtrados.map(post => `<article class="mural-card">
      <div class="card-top"><div class="card-icon">${escapeHTML(post.icone || '📌')}</div><span class="category">${escapeHTML(post.categoria)}</span></div>
      <h2>${escapeHTML(post.titulo)}</h2>
      <p>${escapeHTML(post.resumo)}</p>
      <div class="card-footer"><span>${formatarData(post.data)}</span>${post.link ? `<a class="card-link" href="${escapeHTML(post.link)}">${escapeHTML(post.linkTexto || 'Acessar')} →</a>` : ''}</div>
    </article>`).join('');
    emptyState.hidden = filtrados.length !== 0;
    grid.hidden = filtrados.length === 0;
  }

  searchInput.addEventListener('input', renderizar);
  clearSearch.addEventListener('click', () => { searchInput.value = ''; categoriaAtual = 'Todos'; montarFiltros(); renderizar(); searchInput.focus(); });
  themeToggle.addEventListener('click', alternarTema);
  carregarUsuario(); carregarTema(); montarDestaque(); montarFiltros(); renderizar();
})();
