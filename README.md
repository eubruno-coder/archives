# Central de Atendimento

> Plataforma de apoio ao atendimento, desenvolvida para centralizar informações, scripts, links, orientações e recursos utilizados na rotina operacional.

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-orange)
![Versão](https://img.shields.io/badge/vers%C3%A3o-V2-blue)
![Licença](https://img.shields.io/badge/licen%C3%A7a-a%20definir-lightgrey)
---

## 📌 Sobre o projeto

A **Central de Atendimento** é uma plataforma web criada com o objetivo de tornar a rotina de atendimento mais organizada, rápida e acessível.

A proposta é reunir, em um único ambiente, recursos que normalmente ficam dispersos entre documentos, páginas, mensagens e diferentes sistemas.

A plataforma foi concebida para funcionar como uma **central operacional**, permitindo que o usuário encontre rapidamente aquilo que precisa durante o atendimento.

Entre os recursos previstos e/ou implementados estão:

- Scripts de atendimento;
- Links de acesso rápido;
- Orientações operacionais;
- Comunicados e novidades;
- Documentações;
- Recursos de apoio ao atendente;
- Organização por categorias;
- Interface responsiva;
- Tema claro e escuro;
- Estrutura preparada para futuras expansões.

---

## 🤝 Desenvolvimento

Este projeto está sendo desenvolvido em **parceria entre Bruno Silva e uma assistência de Inteligência Artificial**, utilizada como apoio técnico, arquitetural, documental e de desenvolvimento.

A participação da Inteligência Artificial não substitui a autoria, responsabilidade ou tomada de decisão humana sobre o projeto.

As decisões relacionadas à finalidade, conteúdo operacional, regras de utilização, publicação e evolução da plataforma são definidas pelo responsável pelo projeto.

O histórico de alterações do GitHub constitui parte da trilha de desenvolvimento e evolução do software.

---

## 🎯 Objetivos

A plataforma possui como principais objetivos:

1. Centralizar informações utilizadas durante o atendimento;
2. Reduzir o tempo necessário para localizar procedimentos;
3. Facilitar o acesso aos scripts;
4. Padronizar informações operacionais;
5. Melhorar a experiência do atendente;
6. Reduzir a dependência de documentos dispersos;
7. Criar uma base tecnológica preparada para futuras funcionalidades;
8. Permitir evolução gradual sem necessidade de reconstrução completa do projeto.

---

## 🧩 Estrutura do projeto

A organização atual segue uma separação entre aplicação, recursos JavaScript e conteúdo operacional.

```text
projetoX/
│
├── .github/
│   └── PULL_REQUEST_TEMPLATE/
│
├── assets/
│   └── js/
│       ├── central.js
│       └── novidades.js
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
├── novidades.html
├── novidades.js
│
├── AUTHORS.md
├── CHANGELOG.md
├── CONTRIBUTING.md
├── CREDITS.md
└── README.md
    
```
## 🗺️ Roadmap do Projeto

A Intranet está sendo desenvolvida de forma incremental, priorizando **simplicidade, desempenho, facilidade de manutenção e baixo custo operacional**.

### 🟢 Fase 1 — Fundação
**Status: ✅ Concluída**

- [x] Estrutura base da Intranet
- [x] Identidade visual
- [x] Menu lateral e navegação
- [x] Página inicial
- [x] Busca de conteúdos
- [x] Links rápidos
- [x] Scripts de atendimento
- [x] Organização por categorias
- [x] Documentação
- [x] Termos de uso
- [x] Identificação inicial do usuário
- [x] Favicon
- [x] Estrutura para tema escuro
- [x] Sistema inicial de feedback

---

### 🟡 Fase 2 — Organização e Experiência
**Status: 🔄 Em desenvolvimento**

- [ ] Revisão e reorganização das categorias
- [ ] Padronização dos scripts
- [ ] Melhoria do sistema de busca
- [ ] Aprimoramento da barra de acesso rápido
- [ ] Sistema de favoritos
- [ ] Melhor experiência de navegação
- [ ] Finalização do Dark Mode
- [ ] Melhorias de responsividade
- [ ] Feedback visual das ações

---

### 🟠 Fase 3 — Usuários e Personalização
**Status: 📋 Planejada**

- [ ] Identificação do operador
- [ ] Persistência das informações do usuário
- [ ] Perfil básico
- [ ] Preferências individuais
- [ ] Scripts favoritos
- [ ] Histórico de utilização
- [ ] Atalhos personalizados

> Inicialmente, essas funcionalidades poderão utilizar armazenamento local do navegador, reduzindo a necessidade de infraestrutura.

---

### 🔵 Fase 4 — Sistema de Feedback
**Status: 📋 Planejada**

Evolução do feedback para um fluxo estruturado:

**Operador → Feedback → Registro → Tratamento → Resposta → Encerramento**

Funcionalidades previstas:

- [ ] Formulário de feedback
- [ ] Identificação do operador
- [ ] Categorias de solicitação
- [ ] Classificação de prioridade
- [ ] Status da solicitação
- [ ] Data e hora
- [ ] Campo de resposta
- [ ] Histórico
- [ ] Controle de pendências
- [ ] Registro de solicitações resolvidas

Categorias previstas:

- 💡 Sugestão
- 🐛 Erro
- 📚 Conteúdo
- ⚙️ Sistema
- 📝 Feedback
- 🚨 Urgente

---

### 🟣 Fase 5 — Backend e Banco de Dados
**Status: 📋 Planejada**

Implementação de uma infraestrutura central utilizando **Supabase**.

Estrutura inicial prevista:

```text
Intranet
├── Autenticação
├── Banco de Dados
├── Armazenamento
└── Realtime
