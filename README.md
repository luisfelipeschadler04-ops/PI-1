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
