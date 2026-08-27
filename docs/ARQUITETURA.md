# Arquitetura do projeto

## Objetivo

Documentar a organização técnica da Central de Atendimento para que novas funcionalidades possam ser incorporadas sem transformar o projeto em um arquivo monolítico.

## Estrutura atual

```text
projetoX/
├── .github/
│   └── PULL_REQUEST_TEMPLATE/
├── assets/
│   └── js/
│       ├── central.js
│       └── novidades.js
├── content/
│   ├── links/
│   │   └── links-rapidos.js
│   └── scripts/
│       └── atendimento.js
├── docs/
│   ├── ARQUITETURA.md
│   └── REGRAS-E-CONFORMIDADE.md
├── index.html
├── novidades.html
├── novidades.js
├── AUTHORS.md
├── CHANGELOG.md
├── CONTRIBUTING.md
├── CREDITS.md
└── README.md
```

## Responsabilidade dos diretórios

### `index.html`
Interface principal da aplicação. Deve concentrar marcação e integração dos recursos, evitando receber novas grandes massas de lógica JavaScript.

### `assets/js/`
Código de suporte à aplicação e comportamento geral da interface.

### `content/scripts/`
Conteúdo operacional de atendimento. Alterações aqui devem ser tratadas como alteração de conteúdo, não apenas como alteração estética.

### `content/links/`
Links e atalhos utilizados pela operação.

### `docs/`
Documentação técnica, regras, governança e decisões relevantes do projeto.

### `.github/`
Padrões para revisão e contribuição.

## Regra de evolução

Sempre que uma funcionalidade nova exigir código significativo, deve-se avaliar primeiro se ela pode ser isolada em módulo próprio. O objetivo é preservar a estabilidade do `index.html` e permitir manutenção independente de conteúdo e lógica.

## Próxima evolução arquitetural

1. Separar CSS da página principal.
2. Centralizar JavaScript de inicialização.
3. Separar componentes de interface por responsabilidade.
4. Manter scripts e links como dados independentes.
5. Criar uma camada de configuração para recursos da plataforma.
6. Em uma etapa posterior, substituir arquivos estáticos de conteúdo por persistência em banco de dados.
7. Adicionar autenticação e permissões antes de disponibilizar funções administrativas.

## Princípio de compatibilidade

As reorganizações devem preservar o funcionamento atual sempre que possível. Mudanças estruturais devem ser graduais e verificáveis, evitando uma reescrita completa sem necessidade.