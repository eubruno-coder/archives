(() => {
  'use strict';

  const links = Array.isArray(window.CENTRAL_LINKS_RAPIDOS)
    ? window.CENTRAL_LINKS_RAPIDOS
    : [];

  const grid = document.getElementById('linksGrid');
  const filters = document.getElementById('filters');
  const search = document.getElementById('searchInput');
  const count = document.getElementById('resultCount');
  const status = document.getElementById('statusMessage');
  const empty = document.getElementById('emptyState');
  const clear = document.getElementById('clearSearch');
  const userName = document.getElementById('userName');
  const themeToggle = document.getElementById('themeToggle');

  let category = 'Todos';

  const categories = ['Todos', ...new Set(links.map(item => item.categoria || 'Outros'))];

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>'"]/g, char => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
    }[char]));
  }

  function renderFilters() {
    filters.innerHTML = categories.map(item => `
      <button class="filter ${item === category ? 'active' : ''}" type="button" data-category="${escapeHtml(item)}">
        ${escapeHtml(item)}
      </button>
    `).join('');

    filters.querySelectorAll('.filter').forEach(button => {
      button.addEventListener('click', () => {
        category = button.dataset.category;
        renderFilters();
        render();
      });
    });
  }

  function render() {
    const term = search.value.trim().toLowerCase();
    const result = links.filter(item => {
      const matchesCategory = category === 'Todos' || (item.categoria || 'Outros') === category;
      const haystack = `${item.titulo || ''} ${item.descricao || ''} ${item.categoria || ''}`.toLowerCase();
      return matchesCategory && (!term || haystack.includes(term));
    });

    count.textContent = result.length;
    status.textContent = category === 'Todos' ? 'Todos os sistemas' : category;
    empty.hidden = result.length !== 0;
    grid.innerHTML = result.map(item => `
      <a class="link-card" href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">
        <div class="card-top">
          <div class="link-icon">${escapeHtml(item.icone || '🔗')}</div>
          <span class="external">↗</span>
        </div>
        <h2>${escapeHtml(item.titulo)}</h2>
        <p>${escapeHtml(item.descricao)}</p>
        <span class="link-action">Acessar sistema →</span>
      </a>
    `).join('');
  }

  function setupUser() {
    const saved = localStorage.getItem('usuarioIntranet');
    userName.textContent = saved ? `Olá, ${saved.split(' ')[0]}!` : 'Olá!';
  }

  function setupTheme() {
    const savedTheme = localStorage.getItem('temaIntranet');
    if (savedTheme === 'dark') document.documentElement.dataset.theme = 'dark';
    updateThemeButton();

    themeToggle.addEventListener('click', () => {
      const dark = document.documentElement.dataset.theme === 'dark';
      if (dark) {
        delete document.documentElement.dataset.theme;
        localStorage.setItem('temaIntranet', 'light');
      } else {
        document.documentElement.dataset.theme = 'dark';
        localStorage.setItem('temaIntranet', 'dark');
      }
      updateThemeButton();
    });
  }

  function updateThemeButton() {
    const dark = document.documentElement.dataset.theme === 'dark';
    themeToggle.textContent = dark ? '☀' : '☾';
    themeToggle.setAttribute('aria-label', dark ? 'Ativar tema claro' : 'Ativar tema escuro');
  }

  search.addEventListener('input', render);
  clear.addEventListener('click', () => {
    search.value = '';
    category = 'Todos';
    renderFilters();
    render();
    search.focus();
  });

  setupUser();
  setupTheme();
  renderFilters();
  render();
})();
