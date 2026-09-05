# Central de Atendimento

> Plataforma web de apoio operacional desenvolvida para centralizar scripts, links, orientações, documentações e recursos utilizados na rotina de atendimento.

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-orange)
![Versão](https://img.shields.io/badge/versão-V3-blue)
![Tecnologia](https://img.shields.io/badge/tecnologia-HTML%20%7C%20CSS%20%7C%20JavaScript-yellow)
![Licença](https://img.shields.io/badge/licença-a%20definir-lightgrey)

---

## 📌 Sobre o projeto

A **Central de Atendimento** é uma aplicação web criada para funcionar como um ponto central de consulta durante a rotina operacional.

A proposta é substituir a utilização de informações dispersas entre documentos, mensagens, páginas e sistemas por uma interface única, organizada e de acesso rápido.

O projeto prioriza:

- simplicidade;
- velocidade de acesso;
- organização das informações;
- facilidade de manutenção;
- modularização do conteúdo;
- experiência do usuário;
- baixo custo operacional;
- possibilidade de evolução futura.

A aplicação foi estruturada para permitir que conteúdos operacionais sejam atualizados sem a necessidade de alterar constantemente a estrutura principal da interface.

---

## 🚀 Estado atual

A Central encontra-se em **desenvolvimento ativo**, com a fundação da aplicação já estabelecida.

### Atualmente implementado

- ✅ Interface principal da Central
- ✅ Identificação inicial do operador
- ✅ Termos de Uso
- ✅ Menu lateral
- ✅ Menu lateral recolhível
- ✅ Navegação por categorias
- ✅ Pesquisa de scripts
- ✅ Scripts de atendimento
- ✅ Links rápidos
- ✅ Integração com sistemas externos
- ✅ Integração com o projeto Sistema de Escalas
- ✅ Sistema de Novidades
- ✅ Favicon em SVG
- ✅ Tema claro
- ✅ Tema escuro
- ✅ Persistência do tema
- ✅ Feedback visual nas ações
- ✅ Organização modular dos scripts
- ✅ Organização modular dos links
- ✅ Separação entre estrutura, lógica e conteúdo
- ✅ Responsividade
- ✅ Refinamento visual da interface
- ✅ Tratamento de scripts duplicados
- ✅ Estrutura documental do projeto
- ✅ Diretrizes de uso e base legal

---

## 🎨 Identidade visual

A interface passou por uma evolução visual para abandonar a aparência de uma página estática e assumir uma identidade mais próxima de uma **plataforma interna de operação**.

A nova interface utiliza:

- identidade visual em tons de roxo e violeta;
- tipografia diferenciada para títulos;
- tipografia funcional para conteúdo;
- sistema de variáveis CSS;
- componentes reutilizáveis;
- estados de interação;
- tema claro e escuro;
- contraste adaptado para os dois temas;
- elementos visuais voltados à leitura rápida.

O sistema de temas utiliza variáveis CSS para permitir a alteração global da interface sem necessidade de duplicar componentes.

---

## 🧩 Arquitetura

A aplicação segue uma arquitetura simples e modular, separando a estrutura visual do conteúdo operacional.

```text
projetointranet/
│
├── .github/
│   └── PULL_REQUEST_TEMPLATE/
│
├── assets/
│   └── js/
│       └── central.js
│
├── content/
│   ├── links/
│   │   └── links-rapidos.js
│   │
│   └── scripts/
│       └── atendimento.js
│
├── docs/
│   ├── ARQUITETURA.md
│   └── REGRAS-E-CONFORMIDADE.md
│
├── index.html
├── central.html
├── diretrizes.html
│
├── AUTHORS.md
├── CHANGELOG.md
├── CONTRIBUTING.md
├── CREDITS.md
└── README.md
```

### Separação de responsabilidades

**`index.html`**

Responsável pela tela de entrada, identificação inicial do usuário e encaminhamento para a Central.

**`central.html`**

Estrutura principal da aplicação e interface da Central de Atendimento.

**`assets/js/central.js`**

Concentra a lógica principal da Central, incluindo navegação, pesquisa, interação, sessão local, tema e sistema de Novidades.

**`content/scripts/atendimento.js`**

Centraliza os scripts operacionais utilizados durante os atendimentos.

**`content/links/links-rapidos.js`**

Centraliza os links externos utilizados na operação e os avisos operacionais exibidos na Central.

**`diretrizes.html`**

Reúne diretrizes de utilização, segurança, proteção de dados, propriedade intelectual e referências legais aplicáveis ao contexto da plataforma.

Essa separação permite alterar conteúdos operacionais sem precisar modificar diretamente toda a estrutura principal da aplicação.

---

## 🔗 Integrações

A Central funciona também como uma camada de acesso rápido para outros sistemas utilizados na operação.

Entre os recursos atualmente integrados estão:

- Sistema de Escalas;
- Portal Colabora;
- Marcar Ponto;
- Evolux;
- Gestão GOV;
- Portal MEXX;
- Webmail.

O **Sistema de Escalas** possui integração direta através do link disponibilizado na Central.

Essa arquitetura permite que novos sistemas sejam adicionados futuramente através do arquivo de configuração de links, sem necessidade de reconstrução da interface principal.

---

## 📚 Organização dos scripts

Os scripts são organizados por categorias operacionais.

Entre as categorias atuais estão:

- Atendimento
- Protocolo
- Encerramento
- Tempo de espera
- Tempo de resposta
- Segurança
- Pesquisa
- Gov.br
- Chamados
- Documentação
- Recuperação de conta
- Usuários agressivos

Cada script possui mecanismo de cópia rápida, permitindo utilização durante o atendimento sem necessidade de selecionar manualmente o conteúdo.

---

## 📰 Novidades

A Central possui um sistema compacto de **Novidades** para comunicação rápida de atualizações e avisos relevantes.

O recurso foi pensado como uma camada leve de comunicação, evitando transformar a página principal em um mural permanente de informações.

As Novidades podem ser utilizadas para comunicar:

- atualizações da plataforma;
- mudanças de processo;
- manutenções programadas;
- novos materiais;
- campanhas;
- avisos operacionais de curta duração.

A estratégia é manter poucos itens ativos e relevantes, enquanto conteúdos institucionais ou históricos poderão futuramente ser organizados em um **Mural** próprio.

---

# 🗺️ Roadmap

A evolução do projeto está organizada em fases.

## 🟢 Fase 1 — Fundação
**Status: ✅ Concluída**

- [x] Estrutura base da Central
- [x] Identidade visual
- [x] Menu lateral
- [x] Navegação
- [x] Página inicial
- [x] Sistema de pesquisa
- [x] Links rápidos
- [x] Scripts de atendimento
- [x] Organização por categorias
- [x] Termos de Uso
- [x] Identificação inicial do operador
- [x] Favicon
- [x] Estrutura documental

---

## 🟢 Fase 2 — Interface e Experiência
**Status: ✅ Concluída**

- [x] Redesign da interface
- [x] Nova identidade visual em roxo/violeta
- [x] Sistema de variáveis CSS
- [x] Tema claro
- [x] Tema escuro
- [x] Menu lateral recolhível
- [x] Melhorias na pesquisa
- [x] Feedback visual das ações
- [x] Melhorias de responsividade
- [x] Refinamento da tela de login
- [x] Refinamento dos campos de pesquisa
- [x] Organização visual dos scripts
- [x] Saudação personalizada

---

## 🟢 Fase 3 — Modularização
**Status: ✅ Concluída**

- [x] Separação dos scripts do HTML principal
- [x] Separação dos links rápidos
- [x] Organização dos arquivos JavaScript
- [x] Estrutura de conteúdo independente
- [x] Redução da dependência de alterações na interface principal
- [x] Organização da documentação técnica

---

## 🟢 Fase 4 — Comunicação e Governança
**Status: 🔄 Em evolução**

A Central passa a incorporar mecanismos próprios de comunicação e documentação das regras de utilização.

- [x] Sistema de Novidades
- [x] Avisos de manutenção programada
- [x] Diretrizes de uso
- [x] Base legal documentada
- [x] Estrutura de governança
- [ ] Mural V1
- [ ] Histórico de comunicados
- [ ] Gestão estruturada de comunicados

---

## 🟡 Fase 5 — Integração entre projetos
**Status: 🔄 Em desenvolvimento**

A Central passa a funcionar como um ponto de integração entre diferentes projetos e sistemas.

- [x] Integração com o Sistema de Escalas
- [x] Estrutura para links externos
- [ ] Expansão das integrações
- [ ] Padronização dos projetos integrados
- [ ] Documentação das integrações
- [ ] Navegação integrada entre projetos
- [ ] Evolução da arquitetura multi-projeto

---

## 🟡 Fase 6 — Personalização
**Status: 📋 Planejada**

- [ ] Favoritos
- [ ] Scripts favoritos
- [ ] Preferências individuais
- [ ] Atalhos personalizados
- [ ] Persistência de preferências
- [ ] Histórico de utilização
- [ ] Personalização da interface

---

## 🔵 Fase 7 — Dados e Backend
**Status: 📋 Planejada**

Evolução futura para uma arquitetura com persistência centralizada.

Possível estrutura:

```text
Central de Atendimento
│
├── Autenticação
├── Usuários
├── Scripts
├── Links
├── Novidades
├── Mural
├── Preferências
├── Feedback
└── Banco de Dados
```

Uma possível implementação futura poderá utilizar **Supabase** para autenticação, banco de dados, armazenamento e recursos em tempo real.

---

## 🛡️ Governança e propriedade intelectual

O projeto possui documentação específica relacionada à autoria, créditos, contribuição, regras de utilização e conformidade.

Documentos relacionados:

- `AUTHORS.md`
- `CREDITS.md`
- `CONTRIBUTING.md`
- `docs/ARQUITETURA.md`
- `docs/REGRAS-E-CONFORMIDADE.md`
- `diretrizes.html`

A utilização de ferramentas de Inteligência Artificial durante o desenvolvimento é tratada como **apoio técnico e de desenvolvimento**, não como substituição da autoria ou das decisões relacionadas ao projeto.

As decisões sobre arquitetura, finalidade, conteúdo, regras de utilização e evolução permanecem sob responsabilidade humana.

---

## 🤝 Desenvolvimento

O projeto é desenvolvido por **Bruno Silva**, com utilização de ferramentas de Inteligência Artificial como apoio técnico, arquitetural, documental e de desenvolvimento.

A IA é utilizada como ferramenta de assistência durante o processo de desenvolvimento.

A autoria, responsabilidade sobre o projeto, definição de requisitos, decisões de produto e direcionamento da evolução permanecem sob responsabilidade humana.

O histórico de commits do GitHub constitui parte da trilha de desenvolvimento do projeto.

---

## 📈 Filosofia de desenvolvimento

A evolução da Central segue alguns princípios:

> **Construir pequeno, modularizar cedo e evoluir sem reconstruir.**

O projeto busca evitar uma arquitetura excessivamente complexa enquanto a necessidade operacional ainda é simples.

A estratégia é:

```text
Necessidade
     ↓
Implementação simples
     ↓
Validação
     ↓
Modularização
     ↓
Documentação
     ↓
Integração
     ↓
Escala
```

Dessa forma, novas funcionalidades podem ser incorporadas gradualmente sem comprometer a estrutura existente.

---

## 📋 Changelog

As alterações relevantes do projeto são registradas no:

[`CHANGELOG.md`](CHANGELOG.md)

---

## 📄 Licença

A licença definitiva do projeto ainda está em definição.

Até que uma licença seja formalmente estabelecida, o código e os demais conteúdos do projeto devem ser considerados protegidos pelos direitos aplicáveis de propriedade intelectual.

---

## 👨‍💻 Autor

**Bruno Silva**

Projeto desenvolvido com foco em organização operacional, experiência do usuário, governança e evolução incremental.

---

**Central de Atendimento — Intranet**

*Uma base operacional construída para evoluir junto com a operação.*
