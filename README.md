# Central de Atendimento — Intranet

> Plataforma web de apoio operacional desenvolvida para centralizar scripts, links, orientações, documentações, novidades e recursos utilizados na rotina de atendimento.

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
- governança e documentação;
- possibilidade de evolução futura.

A aplicação foi estruturada para permitir que conteúdos operacionais sejam atualizados sem a necessidade de alterar constantemente a estrutura principal da interface.

---

## 🚀 Estado atual

A Central encontra-se em **desenvolvimento ativo**, com a fundação da aplicação estabelecida e uma arquitetura progressivamente modularizada.

### Atualmente implementado

- ✅ Tela de login independente
- ✅ Identificação inicial do operador
- ✅ Persistência da identificação local
- ✅ Termos e diretrizes de uso
- ✅ Central operacional separada da tela de entrada
- ✅ Menu lateral
- ✅ Menu lateral recolhível
- ✅ Navegação por categorias
- ✅ Pesquisa de scripts
- ✅ Scripts de atendimento
- ✅ Links rápidos
- ✅ Integração com sistemas externos
- ✅ Integração com o projeto Sistema de Escalas
- ✅ Sistema de Novidades com rotação automática
- ✅ Controles manuais das Novidades
- ✅ Indicadores de navegação das Novidades
- ✅ Pausa da rotação ao passar o mouse
- ✅ Favicon em SVG
- ✅ Tema claro
- ✅ Tema escuro
- ✅ Persistência do tema
- ✅ Feedback visual nas ações
- ✅ Saudação personalizada ao operador
- ✅ Organização modular dos scripts
- ✅ Organização modular dos links
- ✅ Separação entre estrutura, lógica e conteúdo
- ✅ Responsividade
- ✅ Refinamento visual da interface
- ✅ Tratamento de scripts duplicados
- ✅ Diretrizes de uso e base legal documentadas
- ✅ Estrutura documental do projeto

---

## 🎨 Identidade visual

A interface passou por uma evolução visual para abandonar a aparência de uma página estática e assumir uma identidade mais próxima de uma **plataforma interna de operação**.

A identidade atual utiliza uma linguagem visual moderna baseada em tons de **roxo/violeta**, gradientes, contraste, componentes reutilizáveis e estados de interação.

A interface utiliza:

- identidade visual própria;
- gradientes e elementos de destaque;
- tipografia diferenciada para títulos;
- tipografia funcional para conteúdo;
- sistema de variáveis CSS;
- componentes reutilizáveis;
- estados de interação;
- tema claro e escuro;
- contraste adaptado para os dois temas;
- elementos visuais voltados à leitura rápida;
- animações pontuais para reforçar a experiência de uso.

O sistema de temas utiliza variáveis CSS para permitir a alteração global da interface sem necessidade de duplicar componentes.

---

## 🧩 Arquitetura

A aplicação segue uma arquitetura simples e modular, separando a entrada do usuário, a estrutura da Central, a lógica da aplicação e os conteúdos operacionais.

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

Responsável pela tela de entrada, identificação do operador e direcionamento para a Central.

**`central.html`**

Contém a estrutura principal da plataforma operacional, incluindo navegação, áreas de conteúdo e componentes da Central.

**`assets/js/central.js`**

Concentra a lógica principal da Central, incluindo sessão local, navegação, pesquisa, interação, tema, menu e sistema de Novidades.

**`content/scripts/atendimento.js`**

Centraliza os scripts operacionais utilizados durante os atendimentos.

**`content/links/links-rapidos.js`**

Centraliza os links externos utilizados na operação.

**`diretrizes.html`**

Apresenta as diretrizes de uso da plataforma, princípios de segurança, proteção de dados, propriedade intelectual e referências legais aplicáveis ao contexto do projeto.

Essa separação permite alterar conteúdos operacionais sem precisar modificar diretamente toda a estrutura da aplicação.

---

## 📰 Novidades

A Central possui um sistema leve de **Novidades** integrado à interface principal.

O recurso foi concebido como uma camada de comunicação rápida para informar evoluções da plataforma, alterações relevantes, novos recursos, atualizações de documentação e outros avisos de curta duração.

### Características

- rotação automática;
- navegação manual;
- indicadores de posição;
- pausa ao passar o mouse;
- comportamento responsivo;
- compatibilidade com tema claro e escuro;
- estrutura baseada em dados;
- possibilidade de relacionar a novidade a uma página ou recurso da Central.

A proposta é manter o recurso enxuto, evitando transformar a página inicial em um mural excessivamente carregado.

### Novidades x Mural

A arquitetura diferencia dois conceitos:

**Novidades** → comunicação rápida, temporária e objetiva.

**Mural** → comunicação estruturada e persistente, destinada a campanhas, comunicados, reconhecimento, treinamentos e conteúdos que precisam permanecer disponíveis para consulta.

O sistema de Novidades foi pensado para servir como base para uma futura evolução do **Mural V1**.

---

## 🔗 Integrações

A Central funciona também como uma camada de acesso rápido para outros sistemas utilizados na operação.

Entre os recursos atualmente integrados ou disponibilizados estão:

- Sistema de Escalas;
- Portal Colabora;
- Marcar Ponto;
- Evolux;
- Gestão GOV;
- Portal MEXX;
- Webmail.

Essa arquitetura permite que novos sistemas sejam adicionados através do arquivo de configuração de links, sem necessidade de reconstrução da interface principal.

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

A separação do conteúdo operacional em arquivo próprio facilita manutenção, revisão e evolução dos scripts sem acoplamento desnecessário à interface.

---

## 🛡️ Governança, conformidade e propriedade intelectual

O projeto possui uma camada documental dedicada à governança e às regras de utilização.

Documentos relacionados:

- `AUTHORS.md`
- `CREDITS.md`
- `CONTRIBUTING.md`
- `docs/ARQUITETURA.md`
- `docs/REGRAS-E-CONFORMIDADE.md`
- `diretrizes.html`

As diretrizes da plataforma abordam, conforme aplicabilidade ao contexto:

- segurança da informação;
- proteção de dados pessoais;
- privacidade;
- uso responsável da plataforma;
- direitos autorais;
- propriedade intelectual;
- comunicação e conteúdo;
- resposta a incidentes;
- responsabilidade dos usuários;
- atualização e governança documental.

A documentação considera como referências, entre outras normas potencialmente aplicáveis, a **LGPD (Lei nº 13.709/2018)**, o **Marco Civil da Internet (Lei nº 12.965/2014)**, a legislação brasileira de software e direitos autorais.

> A documentação do projeto não substitui políticas corporativas, orientações jurídicas, normas internas ou orientação especializada quando necessária.

---

## 🤖 Uso de Inteligência Artificial

Ferramentas de Inteligência Artificial são utilizadas como apoio técnico, arquitetural, documental e de desenvolvimento.

A utilização de IA não é tratada como substituição da autoria humana. Definição de requisitos, finalidade do projeto, decisões de arquitetura, validação das implementações, conteúdo, regras de utilização e direcionamento da evolução permanecem sob responsabilidade humana.

O histórico de commits do GitHub constitui parte da trilha de desenvolvimento do projeto.

---

# 🗺️ Roadmap

A evolução do projeto está organizada em fases, permitindo crescimento incremental sem introduzir complexidade antes da necessidade.

## 🟢 Fase 1 — Fundação
**Status: ✅ Concluída**

- [x] Estrutura base da Central
- [x] Identidade visual inicial
- [x] Menu lateral
- [x] Navegação
- [x] Página inicial
- [x] Sistema de pesquisa
- [x] Links rápidos
- [x] Scripts de atendimento
- [x] Organização por categorias
- [x] Identificação inicial do operador
- [x] Favicon
- [x] Estrutura documental

---

## 🟢 Fase 2 — Interface e Experiência
**Status: ✅ Concluída**

- [x] Redesign da interface
- [x] Identidade visual roxa/violeta
- [x] Sistema de variáveis CSS
- [x] Tema claro
- [x] Tema escuro
- [x] Menu lateral recolhível
- [x] Melhorias na pesquisa
- [x] Feedback visual das ações
- [x] Melhorias de responsividade
- [x] Tela de login independente
- [x] Saudação personalizada
- [x] Organização visual dos scripts

---

## 🟢 Fase 3 — Modularização e organização
**Status: ✅ Concluída**

- [x] Separação dos scripts do HTML principal
- [x] Separação dos links rápidos
- [x] Organização dos arquivos JavaScript
- [x] Estrutura de conteúdo independente
- [x] Separação entre `index.html` e `central.html`
- [x] Organização da documentação técnica
- [x] Diretrizes de uso e conformidade

---

## 🟢 Fase 4 — Comunicação interna
**Status: 🚀 Em evolução**

- [x] Sistema de Novidades
- [x] Rotação automática de comunicados
- [x] Controles manuais
- [x] Indicadores de navegação
- [x] Integração visual com a Central
- [ ] Mural V1
- [ ] Histórico de comunicados
- [ ] Categorias de comunicação
- [ ] Expiração automática de conteúdos

---

## 🟡 Fase 5 — Integração entre projetos
**Status: 🔄 Em desenvolvimento**

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
- [ ] Persistência de preferências ampliada
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
├── Auditoria
└── Banco de Dados
```

Uma possível implementação futura poderá utilizar **Supabase** para autenticação, banco de dados, armazenamento, políticas de acesso e recursos em tempo real, caso a evolução do projeto justifique a adoção de backend.

---

## 📈 Filosofia de desenvolvimento

A evolução da Central segue um princípio simples:

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

A comunicação interna segue a mesma lógica:

```text
Informação rápida
       ↓
Novidades
       ↓
Validação de necessidade
       ↓
Conteúdo persistente
       ↓
Mural
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

Projeto desenvolvido com foco em organização operacional, experiência do usuário, modularidade, governança e evolução incremental.

---

**Central de Atendimento — Intranet**

*Uma base operacional construída para evoluir junto com a operação.*
