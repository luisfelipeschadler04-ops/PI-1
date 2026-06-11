// Dados da Sala 2 - Apego Evitativo
const pistasData = {
  brinquedo: {
    titulo: "PISTA — Objeto: BRINQUEDO NO CHÃO",
    texto: "Marina tem 2 anos. Quando a mãe sai do quarto, ela não chora, continua brincando sozinha. Quando a mãe retorna após uma hora, Marina a ignora completamente, virada para o brinquedo, fingindo que não a vê."
  },
  livro: {
    titulo: "PISTA — Objeto: LIVRO NA PRATELEIRA",
    texto: "Bowlby (2002): no apego evitativo, o cuidador é frequentemente indisponível ou rejeitor. A criança aprende a desativar seu sistema de apego, evita buscar proximidade e se torna emocionalmente distante. A criança internalizou que 'não posso confiar'."
  },
  diario: {
    titulo: "PISTA — Objeto: DIÁRIO NA PAREDE",
    texto: "Crianças com apego evitativo desenvolvem dificuldade em expressar emoções, medo de intimidade, busca excessiva por independência e dificuldade em pedir ajuda na vida adulta. Frequentemente enfrentam problemas em relacionamentos próximos. (Ainsworth et al., 1978)"
  }
};

const puzzlesData = [
  {
    numero: 1,
    titulo: "Puzzle 1 de 3 — Por que Marina ignora a mãe?",
    naracao: "Primeira trava da porta. Use as pistas que coletou para responder!",
    situacao: "Marina (2 anos) brinca sozinha. A mãe sai por 1 hora e Marina não reage. Quando a mãe volta, Marina continua brincando e a ignora completamente.",
    pergunta: "O comportamento de Marina de ignorar a mãe ao retorno é um sinal de qual estratégia de apego?",
    opcoes: [
      { letra: "A", texto: "Desativação do sistema de apego — Marina aprendeu que buscar a mãe não resulta em conforto, então desativa essa necessidade.", correta: true },
      { letra: "B", texto: "Independência saudável — Marina é uma criança segura e autossuficiente.", correta: false },
      { letra: "C", texto: "Apego seguro — Marina demonstra confiança em sua mãe.", correta: false },
      { letra: "D", texto: "Agressividade — Marina está punindo a mãe por tê-la deixado.", correta: false }
    ],
    feedbackCorreto: "Exatamente! No apego evitativo, a criança nega ativamente suas necessidades de proximidade porque internalizou que o cuidador não será responsivo. Isso não é independência — é uma estratégia de sobrevivência emocional.",
    feedbackErrado: "Releia a Pista 2! O comportamento de Marina não é independência ou apego seguro. É uma resposta adaptativa a um cuidador indisponível. A criança 'desativa' o sistema de apego como mecanismo protetor."
  },
  {
    numero: 2,
    titulo: "Puzzle 2 de 3 — O cuidador na origem do apego evitativo",
    naracao: "Primeira trava resolvida! Segunda trava se acende. Continue!",
    situacao: "Lucas tem 1 ano. Toda vez que procura conforto com o pai, é rejeitado com frases como 'você é homem, tem que ser forte' ou 'para de choramingar'. Quando Lucas para de pedir ajuda, o pai o elogia: 'assim sim, filho!'",
    pergunta: "Qual padrão de cuidado está criando apego evitativo em Lucas?",
    opcoes: [
      { letra: "A", texto: "Rejeição e punição de comportamentos de busca de proximidade, reforçando que dependência é fraqueza.", correta: true },
      { letra: "B", texto: "Consistência e proteção — o pai está ensinando Lucas a ser resiliente.", correta: false },
      { letra: "C", texto: "Modelação de comportamento — o pai está mostrando que é fraco.", correta: false },
      { letra: "D", texto: "Comunicação clara — o pai sabe o que quer do filho.", correta: false }
    ],
    feedbackCorreto: "Correto! No apego evitativo, o cuidador regularmente rejeita tentativas de proximidade. A criança internaliza a mensagem 'suas necessidades são indesejadas' e aprende a suprimi-las. Isso não cria força — cria distância emocional.",
    feedbackErrado: "O apego evitativo não é causado por consistência ou ensinamento de resiliência. É causado por rejeição consistente quando a criança busca proximidade. O pai está punis-la por ter necessidades legítimas."
  },
  {
    numero: 3,
    titulo: "Puzzle 3 de 3 — Adultos com apego evitativo",
    naracao: "Última trava! Resolva para abrir a porta da Sala 2.",
    situacao: "Sofia tem 28 anos. Em seu relacionamento, evita falar sobre sentimentos, nega que sente falta do parceiro quando ele viaja, não consegue pedir ajuda mesmo quando precisa, e frequentemente sabota relacionamentos quando se aproximam demais.",
    pergunta: "Como o apego evitativo da infância de Sofia está se manifestando na vida adulta?",
    opcoes: [
      { letra: "A", texto: "Sofia nunca sofreu traumas — ela é naturalmente independente.", correta: false },
      { letra: "B", texto: "Os padrões de apego evitativo se perpetuam através dos 'modelos internos de funcionamento': Sofia continua desativando necessidades emocionais e evitando intimidade.", correta: true },
      { letra: "C", texto: "Sofia faz escolhas conscientes de manter distância — é uma estratégia racional adulta.", correta: false },
      { letra: "D", texto: "A personalidade de Sofia é incompatível com relacionamentos próximos.", correta: false }
    ],
    feedbackCorreto: "Perfeito! Para Bowlby, os padrões de apego se cristalizam nos 'modelos internos de funcionamento'. Sofia não escolhe conscientemente — her relacionamentos são guiados pelos padrões de apego formados na infância: 'proximidade é perigosa, não devo confiar'.",
    feedbackErrado: "Releia a Pista 3! O apego evitativo não é personalidade inata nem independência genuína. São padrões aprendidos que se perpetuam na vida adulta através de modelos internos de funcionamento. Sofia precisa de terapia para reconectar com suas necessidades emocionais."
  }
];

// Estado do jogo
let gameState = {
  vidas: 3,
  pistasColetadas: [],
  puzzlesResolvidos: [],
  puzzleAtivo: null,
  respostaSelecionada: null
};

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
  adicionarEventosPistas();
  adicionarEventosPorta();
});

// Iniciar Sala
function iniciarSala() {
  document.getElementById('intro-modal').classList.add('hidden');
  document.getElementById('sala-view').classList.remove('hidden');
}

// Eventos das pistas
function adicionarEventosPistas() {
  document.querySelectorAll('.pista-item').forEach(item => {
    item.addEventListener('click', function() {
      const pistaId = this.dataset.pista;
      coletarPista(pistaId);
    });
  });
}

function coletarPista(pistaId) {
  if (gameState.pistasColetadas.includes(pistaId)) {
    return;
  }

  gameState.pistasColetadas.push(pistaId);
  
  document.querySelector(`[data-pista="${pistaId}"]`).classList.add('coletado');
  document.getElementById('pistas-coletadas').textContent = gameState.pistasColetadas.length;

  const pista = pistasData[pistaId];
  document.getElementById('pista-titulo').textContent = pista.titulo;
  document.getElementById('pista-texto').textContent = pista.texto;
  document.getElementById('pista-modal').classList.remove('hidden');

  if (gameState.pistasColetadas.length === 3) {
    setTimeout(() => {
      exibirNaracao("Você coletou todas as 3 pistas! Agora vá até a porta e clique para iniciar os puzzles.");
    }, 500);
  }
}

function fecharPista() {
  document.getElementById('pista-modal').classList.add('hidden');
}

// Eventos da porta
function adicionarEventosPorta() {
  document.getElementById('porta').addEventListener('click', function() {
    if (gameState.pistasColetadas.length < 3) {
      exibirNaracao("Você precisa coletar todas as 3 pistas antes de resolver os puzzles!");
      return;
    }
    if (gameState.puzzlesResolvidos.length < 3) {
      abrirProximoPuzzle();
    }
  });
}

function abrirProximoPuzzle() {
  const proximoIndex = gameState.puzzlesResolvidos.length;
  if (proximoIndex >= puzzlesData.length) {
    concluirSala();
    return;
  }
  
  gameState.puzzleAtivo = proximoIndex;
  exibirPuzzle(proximoIndex);
}

function exibirPuzzle(index) {
  const puzzle = puzzlesData[index];
  gameState.respostaSelecionada = null;

  document.getElementById('puzzle-titulo').textContent = puzzle.titulo;
  document.getElementById('puzzle-naracao-texto').textContent = puzzle.naracao;
  document.getElementById('puzzle-situacao-texto').textContent = puzzle.situacao;
  document.getElementById('puzzle-pergunta-texto').textContent = puzzle.pergunta;

  const opcoesContainer = document.getElementById('puzzle-opcoes');
  opcoesContainer.innerHTML = '';
  
  puzzle.opcoes.forEach((opcao, idx) => {
    const div = document.createElement('div');
    div.className = 'opcao';
    div.dataset.opcao = idx;
    div.innerHTML = `<span class="opcao-letra">${opcao.letra}</span><span class="opcao-texto">${opcao.texto}</span>`;
    
    div.addEventListener('click', () => {
      document.querySelectorAll('.opcao').forEach(o => o.classList.remove('selecionada'));
      div.classList.add('selecionada');
      gameState.respostaSelecionada = idx;
    });
    
    opcoesContainer.appendChild(div);
  });

  document.getElementById('puzzle-modal').classList.remove('hidden');
  document.getElementById('btn-submeter').classList.remove('hidden');
}

function submeterResposta() {
  if (gameState.respostaSelecionada === null) {
    alert('Selecione uma opção!');
    return;
  }

  const puzzle = puzzlesData[gameState.puzzleAtivo];
  const opcaoSelecionada = puzzle.opcoes[gameState.respostaSelecionada];
  const acertou = opcaoSelecionada.correta;

  if (acertou) {
    exibirFeedbackCorreto(puzzle);
  } else {
    exibirFeedbackErrado(puzzle);
  }
}

function exibirFeedbackCorreto(puzzle) {
  const feedback = document.getElementById('feedback-content');
  feedback.className = 'modal-content feedback-content feedback-correto';
  feedback.innerHTML = `
    <div class="feedback-icon">⭐</div>
    <div class="feedback-titulo">CORRETO! PUZZLE RESOLVIDO.</div>
    <div class="feedback-mensagem">${puzzle.feedbackCorreto}</div>
    <div class="feedback-botoes">
      <button class="btn-primario" onclick="proximoPuzzleOuConcluir()">
        ${gameState.puzzlesResolvidos.length < 2 ? '[ Próximo Puzzle ]' : '[ PORTA DESBLOQUEADA! ]'}
      </button>
    </div>
  `;
  
  document.getElementById('feedback-modal').classList.remove('hidden');
  
  if (!gameState.puzzlesResolvidos.includes(gameState.puzzleAtivo)) {
    gameState.puzzlesResolvidos.push(gameState.puzzleAtivo);
    atualizarTravas();
  }
}

function exibirFeedbackErrado(puzzle) {
  gameState.vidas--;
  atualizarVidas();

  const feedback = document.getElementById('feedback-content');
  feedback.className = 'modal-content feedback-content feedback-errado';
  feedback.innerHTML = `
    <div class="feedback-icon">✗</div>
    <div class="feedback-titulo">RESPOSTA ERRADA. −1 VIDA.</div>
    <div class="feedback-mensagem">${puzzle.feedbackErrado}</div>
    <div class="feedback-botoes">
      <button class="btn-primario" onclick="fecharFeedback()">[ Tentar de Novo ]</button>
      <button class="btn-secundario" onclick="reverPistas()">[ Rever Pistas ]</button>
    </div>
  `;
  
  document.getElementById('feedback-modal').classList.remove('hidden');

  if (gameState.vidas <= 0) {
    setTimeout(() => {
      alert('Suas vidas acabaram! Você pode reiniciar esta sala.');
      location.reload();
    }, 1000);
  }
}

function atualizarVidas() {
  const vidas = document.querySelectorAll('.vida');
  vidas.forEach((v, i) => {
    if (i >= gameState.vidas) {
      v.classList.add('perdida');
    }
  });
}

function atualizarTravas() {
  document.getElementById('travas-abertas').textContent = gameState.puzzlesResolvidos.length;
}

function fecharFeedback() {
  document.getElementById('feedback-modal').classList.add('hidden');
  document.getElementById('puzzle-modal').classList.add('hidden');
}

function reverPistas() {
  fecharFeedback();
  exibirNaracao("Revise as pistas coletadas clicando nos objetos na sala!");
}

function proximoPuzzleOuConcluir() {
  fecharFeedback();
  
  if (gameState.puzzlesResolvidos.length < 3) {
    gameState.puzzleAtivo = gameState.puzzlesResolvidos.length;
    exibirPuzzle(gameState.puzzleAtivo);
  } else {
    concluirSala();
  }
}

function concluirSala() {
  document.getElementById('puzzle-modal').classList.add('hidden');
  document.getElementById('feedback-modal').classList.add('hidden');
  document.getElementById('sala-view').classList.add('hidden');
  document.getElementById('sala-concluida').classList.remove('hidden');
}

function exibirNaracao(texto) {
  const box = document.getElementById('naracao');
  document.getElementById('naracao-texto').textContent = texto;
  box.classList.remove('hidden');
  
  setTimeout(() => {
    box.classList.add('hidden');
  }, 5000);
}
