/* Controle das novidades da Central de Atendimento.
 * Funciona sem backend usando localStorage.
 */
const CENTRAL_STORAGE = {
  usuario: 'central_atendimento_usuario',
  ultimoAcesso: 'central_atendimento_ultimo_acesso',
  vistas: 'central_atendimento_novidades_vistas'
};

const CENTRAL_NOVIDADES = [
  {
    id: 'scripts-documentacao-2026-08-19',
    data: '2026-08-19T09:00:00',
    tipo: 'Novo',
    titulo: 'Novos scripts de documentação',
    descricao: 'Foram adicionados novos conteúdos à Central de Scripts.'
  },
  {
    id: 'identificacao-operador-2026-08-19',
    data: '2026-08-19T09:15:00',
    tipo: 'Funcionalidade',
    titulo: 'Identificação do operador',
    descricao: 'A Central passou a utilizar o nome informado no acesso para personalizar a experiência.'
  },
  {
    id: 'menu-recolhivel-2026-08-19',
    data: '2026-08-19T09:30:00',
    tipo: 'Visual',
    titulo: 'Menu lateral recolhível',
    descricao: 'O menu lateral pode ser recolhido para liberar mais espaço para a consulta dos scripts.'
  },
  {
    id: 'termos-uso-2026-08-19',
    data: '2026-08-19T09:45:00',
    tipo: 'Segurança',
    titulo: 'Termos de Uso',
    descricao: 'A tela inicial passou a apresentar identificação do usuário e aceite dos Termos de Uso.'
  }
];

function centralLerJSON(chave, padrao) {
  try {
    const valor = localStorage.getItem(chave);
    return valor ? JSON.parse(valor) : padrao;
  } catch {
    return padrao;
  }
}

function centralNovidadesNaoVistas() {
  const ultimoAcesso = localStorage.getItem(CENTRAL_STORAGE.ultimoAcesso);
  const vistas = centralLerJSON(CENTRAL_STORAGE.vistas, []);

  return CENTRAL_NOVIDADES
    .filter(item => !vistas.includes(item.id))
    .filter(item => !ultimoAcesso || new Date(item.data) > new Date(ultimoAcesso))
    .sort((a, b) => new Date(b.data) - new Date(a.data));
}

function centralFormatarData(data) {
  return new Date(data).toLocaleString('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short'
  });
}

function centralMarcarNovidadesComoVistas(ids) {
  const vistas = centralLerJSON(CENTRAL_STORAGE.vistas, []);
  const atualizadas = [...new Set([...vistas, ...ids])];
  localStorage.setItem(CENTRAL_STORAGE.vistas, JSON.stringify(atualizadas));
}

function centralRegistrarAcesso() {
  localStorage.setItem(CENTRAL_STORAGE.ultimoAcesso, new Date().toISOString());
}

function centralContarNovidades() {
  return centralNovidadesNaoVistas().length;
}

// Disponibiliza funções para index.html e novidades.html.
window.CentralNovidades = {
  listar: centralNovidadesNaoVistas,
  contar: centralContarNovidades,
  marcarVistas: centralMarcarNovidadesComoVistas,
  registrarAcesso: centralRegistrarAcesso,
  formatarData: centralFormatarData
};
