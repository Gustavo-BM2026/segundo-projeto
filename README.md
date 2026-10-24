# 🎓 Rumo ao ENEM 2026 — Plataforma de Estudos & Simulados Oficiais

Plataforma interativa desenvolvida com **HTML5, CSS3 e JavaScript (Vanilla)** para preparação intensiva ao **ENEM 2026**.

Repositório: [Gustavo-BM2026/segundo-projeto](https://github.com/Gustavo-BM2026/segundo-projeto)

---

## 🌟 Funcionalidades Principais

### 1. 📖 Aba "Conteúdo para estudar"
- Cobre as 4 grandes áreas do conhecimento cobradas no ENEM:
  - **Linguagens, Códigos e suas Tecnologias:** Português, Literatura Brasileira, Artes Visuais, Educação Física, Língua Inglesa e Língua Espanhola.
  - **Ciências Humanas e suas Tecnologias:** História (Geral e Brasil), Geografia (Física e Humana), Filosofia e Sociologia.
  - **Ciências da Natureza e suas Tecnologias:** Biologia, Física e Química.
  - **Matemática e suas Tecnologias:** Matemática Básica, Geometria, Funções, Estatística e Probabilidade.
- **Filtro interativo por área** e **busca em tempo real** por assunto, palavra-chave ou fórmula.
- Resumos estratégicos focados na Teoria de Resposta ao Item (TRI).

### 2. ✍️ Aba "Conteúdo para Redação"
- **A fórmula dos 4 parágrafos:** Introdução (repertório + tese bifocal), D1, D2 e Proposta de Intervenção.
- **Os 5 elementos obrigatórios da Proposta (Competência 5):** Agente, Ação, Meio/Modo, Detalhamento e Efeito social.
- **Tabela detalhada das 5 Competências** avaliadas de 0 a 1.000 pontos.
- **Tabela de conectivos coringas** para coesão inter e intraparágrafos.
- **Exemplo real de Redação Nota 1000** dissecada e comentada.
- **Simulador de Rascunho com contador de linhas em tempo real** (limite de 30 linhas oficial do ENEM) e diagnóstico estrutural.

### 3. ⏱️ Aba "Prova de Teste" (Simulador Oficial com 45 Questões)
- **1º Dia (5h e 30min cronometrados):**
  - **45 questões no total** distribuídas entre Linguagens e Ciências Humanas.
  - **1 Proposta de Redação** com tema e textos motivadores.
  - Opção de escolha entre **Inglês** e **Espanhol** para língua estrangeira.
- **2º Dia (5h cronometradas):**
  - **45 questões no total** distribuídas entre Ciências da Natureza e Matemática.
- **Recursos do Simulador:**
  - Cronômetro regressivo com opção de pausar e retomar.
  - Barra de progresso e pílulas de navegação rápida (questões de 1 a 45).
  - Folha de resposta interativa.
  - **Resumo de Performance por Matéria:** Gráficos com porcentagens e barras semafóricas (🟢 Verde para domínio, 🟡 Amarelo para atenção, 🔴 Vermelho para pontos fracos).
  - **Diagnóstico Automático ("Qual matéria estudar mais?"):** Recomendações personalizadas e botão direto *"📖 Estudar Matéria Agora"* que redireciona o aluno direto para a aba de estudos com o filtro da disciplina ativado.
  - **Gabarito oficial com resolução comentada passo a passo** para cada questão.

---

## 🏛️ Padrões de Projeto e Arquitetura

O projeto foi construído seguindo boas práticas de engenharia de software para garantir escalabilidade e manutenibilidade:

- **Separação de Preocupações (Separation of Concerns - SoC):** Código estruturado de forma desacoplada entre Semântica (`index.html`), Apresentação (`style.css`), Lógica de Controle (`script.js`) e Modelos de Dados (`data.js`).
- **Padrão Estado Centralizado (*State Pattern / Single Source of Truth*):** O objeto `examState` centraliza todas as informações dinâmicas da prova, evitando guardar estados voláteis no DOM.
- **Padrão Fábrica (*Factory Pattern*):** A função `generateEnemDayQuestions()` atua como fábrica de itens de prova, permitindo gerar a distribuição exata das 45 questões.
- **Padrão Modular (*Module Pattern*):** Funções especializadas isoladas por domínio (`initTabs()`, `initStudySection()`, `initEssaySection()`, `initExamSection()`).
- **Design Tokens com Variáveis CSS:** `:root` centraliza cores, espaçamentos e transições, permitindo customizações ágeis e consistentes.

---

## 🚀 Como Executar Localmente

Não requer instalação de dependências ou servidores complexos:

1. Clone o repositório:
   ```bash
   git clone https://github.com/Gustavo-BM2026/segundo-projeto.git
   ```
2. Abra a pasta do projeto:
   ```bash
   cd segundo-projeto
   ```
3. Abra o arquivo `index.html` em qualquer navegador web moderno (Google Chrome, Microsoft Edge, Mozilla Firefox, etc.).

---

## 📄 Licença
Distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## ⚠️ Aviso Legal
*Atenção! Este site foi criado para apenas lhe ajudar, mas não substituir completamente os estudos, é recomendado ver aulas e livros para ir mais a fundo.*
