# 🎮 Laços do Apego - Jogo Educativo

Um jogo web interativo sobre a **Teoria do Apego de John Bowlby**, onde os jogadores exploram 4 salas temáticas representando diferentes tipos de apego e resolvem puzzles pedagógicos para aprender conceitos fundamentais da psicologia do desenvolvimento infantil.

## 📚 Sobre o Projeto

**Objetivo:** Educação interativa sobre os 4 tipos de apego segundo Bowlby (2002):
- Apego Seguro
- Apego Evitativo
- Apego Ambivalente
- Apego Desorganizado

Cada sala apresenta situações pedagógicas, pistas coletáveis e desafios (puzzles) que reforçam compreensão sobre como relacionamentos iniciais formam "modelos internos de funcionamento" que perduram na vida adulta.

## 🎯 Como Jogar

1. **Início:** Clique em "Iniciar" no menu principal
2. **Cutscene:** Acompanhe a introdução narrativa (6 diálogos)
3. **Corredor:** Escolha uma sala desbloqueada (salas se abrem em ordem)
4. **Exploração:** Colete as **3 pistas** interagindo com objetos
5. **Desafios:** Resolva os **3 puzzles** com múltipla escolha
6. **Feedback:** Receba explicações pedagógicas após cada resposta
7. **Encerramento:** Veja sua pontuação final e acesse o glossário

**Sistema de Vidas:** Comece com ❤❤❤. Perde 1 vida por resposta incorreta. Sem vidas: reinicia a sala.

## 🏗️ Estrutura de Arquivos

```
PI-1/
├── index.html                          # Menu Principal (Tela 1)
├── cutscene.html                       # Cutscene de Introdução (Tela 2)
├── corredor.html                       # Corredor com 4 salas (Tela 3)
├── sala-1-apego-seguro.html           # Sala 1 — Apego Seguro
├── sala-2-apego-evitativo.html        # Sala 2 — Apego Evitativo
├── sala-3-apego-ambivalente.html      # Sala 3 — Apego Ambivalente
├── sala-4-apego-desorganizado.html    # Sala 4 — Apego Desorganizado
├── encerramento.html                   # Tela Final com pontuação e glossário
├── como_jogar.html                     # Instruções detalhadas
│
├── estilos/
│   ├── global-style.css                # Estilos globais (variáveis, botões, containers)
│   ├── main-menu-style.css             # Menu principal
│   ├── cutscene-style.css              # Cutscene de introdução
│   ├── corredor-style.css              # Corredor e estados das salas
│   ├── sala-1-style.css                # Tema verde — Apego Seguro
│   ├── sala-2-style.css                # Tema azul — Apego Evitativo
│   ├── sala-3-style.css                # Tema laranja — Apego Ambivalente
│   ├── sala-4-style.css                # Tema roxo — Apego Desorganizado
│   └── encerramento-style.css          # Tela de encerramento
│
├── js/
│   ├── game-state.js                   # Estado global via localStorage
│   ├── cutscene-logic.js               # Lógica da cutscene
│   ├── corredor-logic.js               # Travamento e desbloqueio de salas
│   ├── sala-1-logic.js                 # Lógica Sala 1
│   ├── sala-2-logic.js                 # Lógica Sala 2
│   ├── sala-3-logic.js                 # Lógica Sala 3
│   ├── sala-4-logic.js                 # Lógica Sala 4
│   └── encerramento-logic.js           # Pontuação final e glossário
│
└── README.md                           # Este arquivo
```

## 🎨 Design e Temas

Cada sala possui tema visual único:

| Sala | Tipo | Cor | Descrição |
|------|------|-----|-----------|
| 1 | Seguro | Verde (#4ade80) | Quarto caloroso, brinquedos coloridos, luz suave |
| 2 | Evitativo | Azul (#3b82f6) | Ambiente frio, distante, isolado |
| 3 | Ambivalente | Laranja (#d97706) | Ambiente confuso, inconsistente |
| 4 | Desorganizado | Roxo (#8b5cf6) | Ambiente caótico e aterrorizante |

## 📖 Conteúdo Pedagógico

### Sala 1 - Apego Seguro
- **Pista 1 (Brinquedo):** Lucas (2 anos) — comportamento de busca segura ao retorno da mãe
- **Pista 2 (Livro):** Conceito de "base segura" de Bowlby (2002)
- **Pista 3 (Diário):** Consequências positivas do apego seguro na vida adulta (Papalia, 2013)
- **Puzzle 1:** Identificando apego seguro — caso Lucas (3 anos)
- **Puzzle 2:** Papel do cuidador sensível — caso Ana e mãe
- **Puzzle 3:** Consequências do apego seguro — caso Pedro adulto

### Sala 2 - Apego Evitativo
- **Pista 1 (Brinquedo — Parede Vazia):** Pedro (3 anos) — não reage à saída/retorno da mãe
- **Pista 2 (Livro — Porta Fechada):** Cuidador rejeitante e supressão emocional (Bowlby, 2002)
- **Pista 3 (Diário — Brinquedo Isolado):** "Independência" como estratégia de sobrevivência (Papalia, 2013)
- **Puzzle 1:** Reconhecendo o apego evitativo — caso Sofia (3 anos)
- **Puzzle 2:** Papel do cuidador rejeitador — caso Carlos e mãe
- **Puzzle 3:** Consequências na vida adulta — caso Marina (30 anos)

### Sala 3 - Apego Ambivalente
- **Pista 1 (Relógio Quebrado):** Carlos (3 anos) — cuidador imprevisível, hipervigilância
- **Pista 2 (Agenda):** Inconsistência do cuidador e ansiedade crônica (Bowlby, 2002)
- **Pista 3 (Desenho Rasgado):** Dependência emocional e dificuldade de autorregulação (Papalia, 2013)
- **Puzzle 1:** Reconhecendo o apego ambivalente — caso Carlos (3 anos)
- **Puzzle 2:** Cuidador inconsistente — caso Ana e mãe imprevisível
- **Puzzle 3:** Ciúme e medo de abandono na vida adulta — caso Lucas adulto

### Sala 4 - Apego Desorganizado
- **Pista 1 (Vela — Sombra na Parede):** Mariana (4 anos) — comportamentos contraditórios e congelamento
- **Pista 2 (Espelho Rachado):** Paradoxo: cuidador como fonte simultânea de conforto e medo (Bowlby, 2002)
- **Pista 3 (Caderneta Escolar):** Associação com negligência, abuso e trauma do cuidador (Papalia, 2013)
- **Puzzle 1:** Reconhecendo o apego desorganizado — caso Mariana (4 anos)
- **Puzzle 2:** Cuidador assustador — caso João e pai intimidador
- **Puzzle 3:** Papel do profissional — caso Bia (psicóloga escolar)

## 🎮 Mecânicas do Jogo

- **Cutscene Narrativa:** Sequência de 6 diálogos com fade entre cenas introduz o contexto do jogo
- **Travamento Progressivo:** Sala 1 sempre disponível; cada sala seguinte exige conclusão da anterior
- **Coleta de Pistas:** Clique em objetos brilhantes ✨ para abrir modais com informação pedagógica
- **Sistema de Puzzles:** Múltipla escolha (A, B, C, D) com feedback pedagógico detalhado
- **Contador de Vidas:** Visual com corações (❤) que desaparecem com erros
- **HUD Display:** Mostra número de pistas coletadas e puzzles resolvidos em tempo real
- **Estado Global:** `localStorage` via `game-state.js` persiste progresso entre páginas
- **Pontuação:** Máximo 12 acertos (3 por sala); ao revisitar uma sala o score é resetado
- **Tela de Encerramento:** Pontuação animada, % de acerto, mensagem de desempenho e glossário dos 4 tipos

## 🌐 Fluxo de Navegação

```
Menu Principal (index.html)
    ↓ "Iniciar"
Cutscene — Introdução Narrativa (cutscene.html)
    ↓ último diálogo
Corredor — 4 Painéis com Travamento Progressivo (corredor.html)
    ├→ Sala 1 — Apego Seguro       (sempre disponível)
    ├→ Sala 2 — Apego Evitativo    (desbloqueada após Sala 1)
    ├→ Sala 3 — Apego Ambivalente  (desbloqueada após Sala 2)
    └→ Sala 4 — Apego Desorganizado (desbloqueada após Sala 3)
         ↓ conclusão
Encerramento — Pontuação + Glossário (encerramento.html)
    ↓ "Jogar Novamente"
Menu Principal
```

## 💻 Tecnologias

- **HTML5:** Estrutura semântica
- **CSS3:** Flexbox, gradientes, animações, variáveis customizadas, `@keyframes`
- **JavaScript Vanilla:** Gerenciamento de estado via `localStorage`, eventos, modais dinâmicos
- **Sem frameworks ou dependências externas** — funciona localmente via protocolo `file://`

## 🎓 Referências Teóricas

- **Bowlby, J. (2002).** Apego e Perda — Apego (Vol. 1)
- **Ainsworth, M.D.S. (1978).** Patterns of Attachment
- **Main, M. & Hesse, E. (1990).** Parents' Unresolved Traumatic Experiences are Related to Infant Disorganized Attachment Status
- **Papalia, D.E. & Feldman, R.D. (2013).** Desenvolvimento Humano (12ª ed.)

## 📝 Como Executar

1. Clone ou baixe o repositório
2. Abra `index.html` em um navegador web moderno
3. Comece a jogar!

Não requer servidor — funciona localmente com protocolo `file://`

## 🔄 Status do Projeto

✅ **Implementado:**
- Menu principal com overlay "Como Jogar"
- Cutscene narrativa de introdução (6 diálogos + transição de tela)
- Corredor com travamento progressivo de salas
- 4 salas completas com pistas, puzzles e feedback pedagógico
- Sistema de vidas e game over com reinício de sala
- Estado global persistente via `localStorage` (`game-state.js`)
- Tela de encerramento com pontuação, percentual e glossário
- Navegação completa do início ao fim do jogo
- Botões consistentes com estilo amigável em todas as telas

## 👤 Autor

Desenvolvido como projeto educativo sobre Teoria do Apego — 2026


Um jogo web interativo sobre a **Teoria do Apego de John Bowlby**, onde os jogadores exploram 4 salas temáticas representando diferentes tipos de apego e resolvem puzzles pedagógicos para aprender conceitos fundamentais da psicologia do desenvolvimento infantil.

## 📚 Sobre o Projeto

**Objetivo:** Educação interativa sobre os 4 tipos de apego segundo Bowlby (2002):
- Apego Seguro
- Apego Evitativo
- Apego Ambivalente
- Apego Desorganizado

Cada sala apresenta situações pedagógicas, pistas coletáveis e desafios (puzzles) que reforçam compreensão sobre como relacionamentos iniciais formam "modelos internos de funcionamento" que perduram na vida adulta.

## 🎯 Como Jogar

1. **Início:** Clique em "Iniciar" no menu principal
2. **Navegação:** Escolha uma sala (1-4) no corredor
3. **Exploração:** Colete as **3 pistas** interagindo com objetos
4. **Desafios:** Resolva os **3 puzzles** com múltipla escolha
5. **Feedback:** Receba explicações pedagógicas após cada resposta
6. **Conclusão:** Desbloqueie o conceito ao terminar a sala

**Sistema de Vidas:** Comece com ❤❤❤. Perde 1 vida por resposta incorreta.

## 🏗️ Estrutura de Arquivos

```
PI-1/
├── index.html                          # Menu Principal
├── corredor.html                       # Navegação (4 painéis)
├── sala-1-apego-seguro.html           # Sala 1 (Verde)
├── sala-2-apego-evitativo.html        # Sala 2 (Azul)
├── sala-3-apego-ambivalente.html      # Sala 3 (Laranja)
├── sala-4-apego-desorganizado.html    # Sala 4 (Roxo)
├── como_jogar.html                     # Instruções
│
├── estilos/
│   ├── global-style.css                # Estilos globais (variáveis de cor, backgrounds)
│   ├── main-menu-style.css             # Estilos do menu
│   ├── corredor-style.css              # Estilos do corredor
│   ├── sala-1-style.css                # Estilos Sala 1 (tema verde)
│   ├── sala-2-style.css                # Estilos Sala 2 (tema azul)
│   ├── sala-3-style.css                # Estilos Sala 3 (tema laranja)
│   └── sala-4-style.css                # Estilos Sala 4 (tema roxo)
│
├── js/
│   ├── sala-1-logic.js                 # Lógica Sala 1
│   ├── sala-2-logic.js                 # Lógica Sala 2
│   ├── sala-3-logic.js                 # Lógica Sala 3
│   └── sala-4-logic.js                 # Lógica Sala 4
│
└── README.md                           # Este arquivo
```

## 🎨 Design e Temas

Cada sala possui tema visual único:

| Sala | Tipo | Cor | Descrição |
|------|------|-----|-----------|
| 1 | Seguro | Verde (#4ade80) | Quarto caloroso, brinquedos coloridos, luz suave |
| 2 | Evitativo | Azul (#3b82f6) | Ambiente frio, distante, isolado |
| 3 | Ambivalente | Laranja (#d97706) | Ambiente confuso, inconsistente |
| 4 | Desorganizado | Roxo (#8b5cf6) | Ambiente caótico e aterrorizante |

## 📖 Conteúdo Pedagógico

### Sala 1 - Apego Seguro
- **Pista 1:** Caso de Lucas (2 anos) - comportamento de busca segura
- **Pista 2:** Definição de "base segura" (Bowlby, 2002)
- **Pista 3:** Consequências positivas na vida adulta
- **Puzzle 1:** O que é a base segura?
- **Puzzle 2:** Identificando apego seguro
- **Puzzle 3:** Consequências na vida adulta

### Sala 2 - Apego Evitativo
- **Pista 1:** Marina (2 anos) - ignora a mãe ao retorno
- **Pista 2:** Mecanismo de desativação do sistema de apego
- **Pista 3:** Dificuldades emocionais na vida adulta
- **Puzzle 1:** Por que Marina ignora a mãe?
- **Puzzle 2:** Padrão de cuidado rejeitador
- **Puzzle 3:** Manifestações no relacionamento adulto

### Sala 3 - Apego Ambivalente
- **Pista 1:** Sofia (18 meses) - inconsistência do cuidador
- **Pista 2:** Hipervigilância e ansiedade
- **Pista 3:** Dependência emocional na vida adulta
- **Puzzle 1:** O comportamento ansiosos de Sofia
- **Puzzle 2:** Hipervigilância como estratégia proteção
- **Puzzle 3:** Reprodução de padrões na vida adulta

### Sala 4 - Apego Desorganizado
- **Pista 1:** Tomás (2 anos) - cuidador é fonte simultânea de medo e conforto
- **Pista 2:** Paradoxo da rejeição-proteção
- **Pista 3:** Risco de psicopatologia severa
- **Puzzle 1:** O paradoxo do apego desorganizado
- **Puzzle 2:** Origens (trauma não resolvido do cuidador)
- **Puzzle 3:** Perpetuação dos padrões na vida adulta

## 🎮 Mecânicas do Jogo

- **Coleta de Pistas:** Click em objetos dentro da sala para abrir modais com informação
- **Sistema de Puzzles:** Múltipla escolha (A, B, C, D) com feedback pedagógico
- **Contador de Vidas:** Visual com corações (❤) que desaparecem com erros
- **HUD Display:** Mostra número de pistas coletadas e puzzles resolvidos
- **Desbloqueio Progressivo:** Porta se desbloqueia quando todos os 3 puzzles são resolvidos
- **Tela de Conclusão:** Resume o conceito aprendido

## 🌐 Navegação

```
Menu Principal (index.html)
    ↓ "Iniciar"
Corredor (corredor.html)
    ├→ Sala 1 (Seguro)
    ├→ Sala 2 (Evitativo)
    ├→ Sala 3 (Ambivalente)
    └→ Sala 4 (Desorganizado)
         ↓ Completa
    Menu Principal
```

## 💻 Tecnologias

- **HTML5:** Estrutura semântica
- **CSS3:** Flexbox, gradientes, animações, variáveis customizadas
- **JavaScript Vanilla:** Gerenciamento de estado, eventos, modais
- **Design Responsivo:** Breakpoints em 1024px e 600px

## 🎓 Referências Teóricas

- **Bowlby, J. (2002).** Secure and Insecure Attachment in the Development of the Child
- **Ainsworth, M.D.S. (1978).** Infancy in Uganda: Infant Care and the Growth of Love
- **Main, M. & Hesse, E. (1990).** Parents' Unresolved Traumatic Experiences are Related to Infant Disorganized Attachment Status
- **Papalia, D.E. & Feldman, R.D. (2013).** Experience Human Development (13th ed.)

## 📝 Como Executar

1. Clone ou baixe o repositório
2. Abra `index.html` em um navegador web
3. Comece a jogar!

Não requer servidor - funciona localmente com protocolo `file://`

## 🔄 Status do Projeto

✅ **Completo:**
- Menu Principal com navegação
- Corredor de acesso às 4 salas
- Todas as 4 salas implementadas com conteúdo
- Sistema de pistas e puzzles
- Feedback pedagógico completo
- Temas visuais temáticos
- Responsividade básica

## 👤 Autor

Desenvolvido como projeto educativo sobre Teoria do Apego (2026)
