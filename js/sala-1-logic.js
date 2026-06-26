// Dados da Sala 1
const pistasData = {
  brinquedo: {
    titulo: "PISTA — Objeto: BRINQUEDO NO CHÃO",
    texto: "Lucas tem 2 anos e adora explorar o parque. Quando se assusta com um cachorro estranho, corre para a mãe. Ela o abraça com calma. Poucos minutos depois, Lucas volta a brincar animado como se nada tivesse acontecido."
  },
  livro: {
    titulo: "PISTA — Objeto: LIVRO NA PRATELEIRA",
    texto: "Bowlby (2002): o cuidador sensível e consistente cria uma 'base segura'. A criança pode explorar o ambiente com confiança porque sabe que, quando precisar de apoio, o cuidador estará disponível e responsivo."
  },
  foto: {
    titulo: "PISTA — Objeto: FOTO NA PAREDE",
    texto: "Crianças com apego seguro desenvolvem autoestima positiva, autonomia, resiliência emocional e relacionamentos saudáveis ao longo da vida. O apego seguro também favorece o desempenho escolar e a regulação emocional. (Papalia & Feldman, 2013)"
  }
};

const puzzlesData = [
  {
    numero: 1,
    titulo: "Puzzle 1 de 3 — O que é a base segura?",
    naracao: "Primeira trava da porta. Use as pistas que coletou para responder!",
    situacao: "Lucas (2 anos) está no parque. Assusta-se com um cachorro e corre para a mãe. Ela o abraça e conforta com calma. Logo depois, Lucas volta a brincar normalmente.",
    pergunta: "O comportamento da mãe de Lucas representa qual conceito central da Teoria de Bowlby?",
    opcoes: [
      { letra: "A", texto: "Base segura — a mãe funciona como ponto de apoio que permite à criança explorar e retornar quando precisa.", correta: true },
      { letra: "B", texto: "Superproteção — a mãe impede Lucas de se desenvolver com autonomia.", correta: false },
      { letra: "C", texto: "Apego ansioso — a mãe cria dependência ao confortar a criança.", correta: false },
      { letra: "D", texto: "Reforço positivo — a mãe premia o comportamento de Lucas com atenção.", correta: false }
    ],
    feedbackCorreto: "Exatamente! Bowlby (2002) descreve a 'base segura' como a função essencial do cuidador: estar disponível para que a criança possa explorar o mundo com confiança, sabendo que terá apoio quando precisar.",
    feedbackErrado: "Releia a Pista 2! O conceito de 'base segura' é central para o apego seguro. A mãe não está superprotegendo Lucas — ela o conforta e ele VOLTA a explorar, o que é sinal de saúde emocional."
  },
  {
    numero: 2,
    titulo: "Puzzle 2 de 3 — Identificando o apego seguro",
    naracao: "Primeira trava resolvida! Segunda trava se acende. Continue!",
    situacao: "Ana (18 meses) para de brincar quando a mãe sai da sala e fica um pouco agitada. Quando a mãe retorna, Ana corre para ela, recebe um abraço e volta a brincar tranquilamente poucos minutos depois.",
    pergunta: "O comportamento de Ana ao se acalmar e retornar à brincadeira é característico de qual tipo de apego?",
    opcoes: [
      { letra: "A", texto: "Apego ansioso-ambivalente — Ana demonstrou angústia com a saída da mãe.", correta: false },
      { letra: "B", texto: "Apego seguro — Ana usa a mãe como base segura e consegue se autorregular.", correta: true },
      { letra: "C", texto: "Apego evitativo — Ana demonstrou que precisa da mãe para brincar.", correta: false },
      { letra: "D", texto: "Apego desorganizado — o comportamento de Ana é imprevisível.", correta: false }
    ],
    feedbackCorreto: "Correto! O apego seguro tem três marcas: sentir a ausência do cuidador, buscar ao retornar E conseguir se acalmar e retomar a exploração. Esse ciclo saudável é o que Bowlby chamou de 'sistema de apego x exploração'.",
    feedbackErrado: "O apego ansioso seria se Ana não conseguisse se acalmar mesmo com a mãe presente. O evitativo seria se ela ignorasse tudo. Ana fez o ciclo completo: sentiu falta, buscou apoio, acalmou-se, voltou a explorar."
  },
  {
    numero: 3,
    titulo: "Puzzle 3 de 3 — Consequências do apego seguro na vida adulta",
    naracao: "Última trava! Resolva para abrir a porta da Sala 1.",
    situacao: "Pedro cresceu com apego seguro. Hoje, aos 25 anos, mantém relacionamentos estáveis, pede ajuda quando precisa, lida bem com frustrações e confia nas pessoas com quem convive.",
    pergunta: "Segundo a Teoria do Apego, a história de Pedro na vida adulta é resultado de qual processo?",
    opcoes: [
      { letra: "A", texto: "Personalidade inata — Pedro nasceu com esse perfil emocional.", correta: false },
      { letra: "B", texto: "O apego seguro na infância favoreceu o desenvolvimento de modelos internos positivos sobre si e os outros.", correta: true },
      { letra: "C", texto: "Boa educação escolar — a escola formou o caráter de Pedro.", correta: false },
      { letra: "D", texto: "Ausência de traumas — Pedro simplesmente não passou por dificuldades.", correta: false }
    ],
    feedbackCorreto: "Perfeito! Para Bowlby, os padrões de apego criam 'modelos internos de funcionamento' que influenciam como a pessoa se relaciona ao longo da vida. O perfil adulto de Pedro é consequência do vínculo seguro formado na infância.",
    feedbackErrado: "Releia a Pista 3! A Teoria do Apego mostra que a qualidade das primeiras relações tem impacto direto no desenvolvimento futuro. O perfil de Pedro não é personalidade inata — é o resultado do apego seguro."
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
  GameState.resetarAcertosSala(1);
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
    return; // Já coletada
  }

  gameState.pistasColetadas.push(pistaId);
  
  // Marcar como coletada
  document.querySelector(`[data-pista="${pistaId}"]`).classList.add('coletado');
  
  // Atualizar HUD
  document.getElementById('pistas-coletadas').textContent = gameState.pistasColetadas.length;

  // Mostrar modal da pista
  const pista = pistasData[pistaId];
  document.getElementById('pista-titulo').textContent = pista.titulo;
  document.getElementById('pista-texto').textContent = pista.texto;
  document.getElementById('pista-modal').classList.remove('hidden');

  // Mensagem quando todas as pistas são coletadas
  if (gameState.pistasColetadas.length === 3) {
    setTimeout(() => {
      exibirNaracao("Você coletou todas as 3 pistas! Agora vá até a porta e pressione ESPAÇO para iniciar os puzzles.");
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

  // Construir opções
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
    GameState.salvarAcerto(1);
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
  
  // Registrar que resolveu
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
    // Mostrar próximo puzzle
    gameState.puzzleAtivo = gameState.puzzlesResolvidos.length;
    exibirPuzzle(gameState.puzzleAtivo);
  } else {
    // Concluir sala
    concluirSala();
  }
}

function concluirSala() {
  GameState.marcarSalaConcluida(1);
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

// Função auxiliar
function redirecionar(url) {
  window.location.href = url;
}
