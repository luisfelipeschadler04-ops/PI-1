// Dados da Sala 2 - Apego Evitativo
const pistasData = {
  brinquedo: {
    titulo: "PISTA — Objeto: PAREDE VAZIA",
    texto: "Pedro tem 3 anos. Quando sua mãe sai para o trabalho, ele não chora e continua brincando. Quando a mãe volta, Pedro mal olha para ela. A babá comenta: 'Pedro é muito independente para a idade!'"
  },
  livro: {
    titulo: "PISTA — Objeto: PORTA FECHADA",
    texto: "O cuidador evitativo tende a rejeitar ou minimizar as necessidades emocionais da criança — às vezes sem querer, por acreditar que 'mimar' faz mal. A mensagem que a criança internaliza é: 'Minhas emoções incomodam. Não adianta pedir ajuda.' (Bowlby, 2002)"
  },
  diario: {
    titulo: "PISTA — Objeto: BRINQUEDO ISOLADO NO CANTO",
    texto: "A criança com apego evitativo aprende a suprimir emoções para não ser rejeitada. A 'independência' é uma estratégia de sobrevivência — não é maturidade. Internamente, essas crianças ainda apresentam ativação fisiológica de estresse, mesmo sem demonstrá-la. (Papalia & Feldman, 2013)"
  }
};

const puzzlesData = [
  {
    numero: 1,
    titulo: "Puzzle 1 de 3 — Reconhecendo o apego evitativo",
    naracao: "Primeira trava da porta. Use as pistas!",
    situacao: "Sofia (3 anos): quando sua mãe vai trabalhar, ela não chora. Quando a mãe volta, Sofia nem olha para ela e continua com sua atividade. A mãe sorri satisfeita, achando que a filha é muito independente.",
    pergunta: "O comportamento de Sofia representa qual padrão de apego?",
    opcoes: [
      { letra: "A", texto: "Desenvolvimento avançado — Sofia é madura e não precisa de tanto apoio.", correta: false },
      { letra: "B", texto: "Apego seguro — Sofia confia que a mãe voltará e por isso não fica ansiosa.", correta: false },
      { letra: "C", texto: "Apego evitativo — Sofia suprime suas emoções porque aprendeu que demonstrá-las não adianta.", correta: true },
      { letra: "D", texto: "Apego desorganizado — o comportamento de Sofia não tem padrão claro.", correta: false }
    ],
    feedbackCorreto: "Correto! O apego evitativo parece independência, mas é supressão emocional. No apego seguro, a criança BUSCA o cuidador ao retornar. Sofia nem olhou — aprendeu que esse contato não será recompensador.",
    feedbackErrado: "No apego seguro, a criança BUSCA o cuidador ao retornar. Sofia nem olhou para a mãe. Releia a Pista 1 — a 'independência' de Sofia é frequentemente mal interpretada como maturidade."
  },
  {
    numero: 2,
    titulo: "Puzzle 2 de 3 — O papel do cuidador no apego evitativo",
    naracao: "Segunda trava se acende. Continue!",
    situacao: "Quando Carlos chora, sua mãe diz: 'Para com isso, você não é bebê.' Quando ele quer um abraço, ela o afasta dizendo que precisa ser forte. Com o tempo, Carlos parou de chorar e de pedir colo, mesmo quando está machucado.",
    pergunta: "Qual é o papel do comportamento da mãe de Carlos na formação do apego dele?",
    opcoes: [
      { letra: "A", texto: "A mãe está ensinando resiliência — Carlos vai crescer mais forte e independente.", correta: false },
      { letra: "B", texto: "O comportamento é neutro — Carlos pararia de chorar naturalmente com a idade.", correta: false },
      { letra: "C", texto: "A mãe está formando o apego evitativo — Carlos aprende a suprimir emoções para não ser rejeitado.", correta: true },
      { letra: "D", texto: "A mãe está formando apego desorganizado — Carlos sente medo dela.", correta: false }
    ],
    feedbackCorreto: "Exatamente! O cuidador evitativo muitas vezes acredita estar ensinando autonomia. Mas a mensagem que a criança recebe é: 'Minhas emoções são um problema.' E ela aprende a escondê-las. (Bowlby, 2002)",
    feedbackErrado: "Há uma diferença importante entre ensinar resiliência saudável e rejeitar emoções. Carlos não parou de sentir — parou de demonstrar. Internamente, o estresse continua. Releia a Pista 2!"
  },
  {
    numero: 3,
    titulo: "Puzzle 3 de 3 — Consequências do apego evitativo na vida adulta",
    naracao: "Última trava da Sala 2. Resolva para abrir a porta!",
    situacao: "Marina (30 anos) evita pedir ajuda mesmo quando precisa, tem dificuldade em se abrir emocionalmente com parceiros e sente desconforto quando alguém demonstra carinho ou vulnerabilidade.",
    pergunta: "Segundo a Teoria do Apego, o padrão relacional de Marina está relacionado a:",
    opcoes: [
      { letra: "A", texto: "Traços de personalidade — Marina simplesmente é uma pessoa mais reservada por natureza.", correta: false },
      { letra: "B", texto: "O apego evitativo na infância criou um modelo interno de que emoções são indesejadas e que não se pode contar com os outros.", correta: true },
      { letra: "C", texto: "Experiências ruins em relacionamentos adultos que a tornaram fechada.", correta: false },
      { letra: "D", texto: "Introversão — completamente independente do apego.", correta: false }
    ],
    feedbackCorreto: "Perfeito! O apego evitativo cria um modelo interno de: 'As pessoas não são confiáveis e demonstrar necessidade é perigoso.' Marina aprendeu isso na infância e carrega esse padrão para as relações adultas.",
    feedbackErrado: "Releia a Pista 3! A dificuldade de Marina com intimidade não é personalidade inata — é o aprendizado de que emoções são indesejadas e pedir apoio leva à rejeição."
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
  GameState.resetarAcertosSala(2);
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
    GameState.salvarAcerto(2);
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
    setTimeout(() => exibirGameOver(), 800);
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
  GameState.marcarSalaConcluida(2);
  document.getElementById('puzzle-modal').classList.add('hidden');
  document.getElementById('feedback-modal').classList.add('hidden');
  document.getElementById('sala-view').classList.add('hidden');
  document.getElementById('sala-concluida').classList.remove('hidden');
}

function exibirGameOver() {
  const feedback = document.getElementById('feedback-content');
  feedback.className = 'modal-content feedback-content feedback-errado';
  feedback.innerHTML = `
    <div class="feedback-icon">💔</div>
    <div class="feedback-titulo">SUAS VIDAS ACABARAM!</div>
    <div class="feedback-mensagem">Não desanime — rever o conteúdo faz parte do aprendizado. Você pode reiniciar esta sala e tentar novamente.</div>
    <div class="feedback-botoes">
      <button class="btn-primario" onclick="location.reload()">[ Reiniciar Sala ]</button>
      <button class="btn-secundario" onclick="window.location.href='./corredor.html'">[ Voltar ao Corredor ]</button>
    </div>
  `;
  document.getElementById('feedback-modal').classList.remove('hidden');
}

function exibirNaracao(texto) {
  const box = document.getElementById('naracao');
  document.getElementById('naracao-texto').textContent = texto;
  box.classList.remove('hidden');
  
  setTimeout(() => {
    box.classList.add('hidden');
  }, 5000);
}
