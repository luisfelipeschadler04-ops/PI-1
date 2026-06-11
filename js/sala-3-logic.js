const pistasData = {
  brinquedo: {
    titulo: "PISTA — Objeto: BRINQUEDO NO CHÃO",
    texto: "Sofia (18 meses) corre para a mãe para ser confortada. Mas a mãe às vezes a abraça, às vezes a empurra. Sofia não sabe o que esperar. Ela chora muito, não consegue se acalmar sozinha e fica ansiosa quando a mãe sai."
  },
  livro: {
    titulo: "PISTA — Objeto: LIVRO NA PRATELEIRA",
    texto: "Bowlby (2002): no apego ambivalente, o cuidador é inconsistente e impredizível. A criança entra em hipervigilância, sempre tentando prever o comportamento do cuidador. A criança desenvolve ansiedade de separação severa."
  },
  carta: {
    titulo: "PISTA — Objeto: CARTA NA PAREDE",
    texto: "Crianças com apego ambivalente têm dificuldade em autorregulação, são emocionalmente dependentes, desenvolvem ansiedade generalizada, e frequentemente reproduzem relacionamentos inseguros na vida adulta. Podem ter dificuldade em separações, mesmo necessárias. (Ainsworth, 1978)"
  }
};

const puzzlesData = [
  {
    numero: 1,
    titulo: "Puzzle 1 de 3 — O comportamento da mãe de Sofia",
    naracao: "Primeira trava da porta. Use as pistas que coletou para responder!",
    situacao: "Sofia busca conforto, mas nunca sabe se será acolhida ou rejeitada. Às vezes a mãe a abraça ternamente. Outras vezes a mãe a empurra irritada. Sofia ficou ansiosa, chora frequentemente e não consegue brincar sozinha.",
    pergunta: "Qual característica do cuidador está criando apego ambivalente em Sofia?",
    opcoes: [
      { letra: "A", texto: "Inconsistência e imprevisibilidade — Sofia não consegue antecipar como a mãe reagirá, causando ansiedade crônica.", correta: true },
      { letra: "B", texto: "Superenvolvimento — a mãe está muito apegada à Sofia.", correta: false },
      { letra: "C", texto: "Personalidade de Sofia — ela é naturalmente ansiosa.", correta: false },
      { letra: "D", texto: "Falta de brinquedos — Sofia não tem estímulos suficientes.", correta: false }
    ],
    feedbackCorreto: "Exatamente! A inconstância do cuidador força a criança a ficar em 'hipervigilância', sempre tentando adivinhar o próximo comportamento. Isso cria ansiedade intensa, porque a criança não pode confiar na previsibilidade do cuidador.",
    feedbackErrado: "Releia a Pista 2! A inconsistência do cuidador é a marca do apego ambivalente. Não é a personalidade de Sofia — é a impossibilidade de prever se será aceita ou rejeitada que causa a ansiedade."
  },
  {
    numero: 2,
    titulo: "Puzzle 2 de 3 — A hipervigilância em crianças ambivalentes",
    naracao: "Primeira trava resolvida! Segunda trava se acende. Continue!",
    situacao: "João tem 2 anos. Está brincando, mas frequentemente para para olhar onde a mãe está. Quando a mãe se move, João fica atento. Se a mãe olha para ele com expressão brava, João chora imediatamente. João não consegue explorar confiante.",
    pergunta: "O comportamento de 'vigilância constante' de João é uma consequência de qual padrão de apego?",
    opcoes: [
      { letra: "A", texto: "Apego seguro — João é uma criança atenciosa.", correta: false },
      { letra: "B", texto: "Hipervigilância do apego ambivalente — João aprendeu que precisa monitorar o cuidador para tentar antecipar rejeição.", correta: true },
      { letra: "C", texto: "Apego evitativo — João prefere ignorar a mãe.", correta: false },
      { letra: "D", texto: "Timidez natural — João tem personalidade introvertida.", correta: false }
    ],
    feedbackCorreto: "Correto! Crianças com apego ambivalente desenvolvem 'hipervigilância' — monitoram constantemente o cuidador para tentar prever comportamentos. Essa estratégia de sobrevivência consome muita energia mental e impede a exploração saudável.",
    feedbackErrado: "A hipervigilância não é timidez ou apego seguro. É uma estratégia de proteção emocional de crianças cujos cuidadores são impredizíveis. João está constantemente 'à defesa', o que bloqueia a exploração."
  },
  {
    numero: 3,
    titulo: "Puzzle 3 de 3 — Adultos com apego ambivalente",
    naracao: "Última trava! Resolva para abrir a porta da Sala 3.",
    situacao: "Marina (26 anos) está em um relacionamento. Ela precisa de constante reasseguração de seu parceiro, fica ansiosa quando ele não responde imediatamente às mensagens, e frequentemente prova sua lealdade com atos extremos de sacrifício. Ela teme ser abandonada constantemente.",
    pergunta: "Como o apego ambivalente da infância de Marina se manifesta em seu relacionamento adulto?",
    opcoes: [
      { letra: "A", texto: "Amar profundamente — Marina demonstra envolvimento emocional genuíno.", correta: false },
      { letra: "B", texto: "Os 'modelos internos de funcionamento' perpetuam a necessidade de reasseguração constante e o medo de abandono, refletindo a inconsistência do cuidador.", correta: true },
      { letra: "C", texto: "Compatibilidade perfeita com relacionamentos — Marina é dedicada.", correta: false },
      { letra: "D", texto: "Experiência de vida — Marina só precisa aprender com erros passados.", correta: false }
    ],
    feedbackCorreto: "Perfeito! Marina permanece presa aos padrões de apego ambivalente. Busca reasseguração como fez na infância, porque internalizou 'preciso provar que valho a pena' e 'posso ser abandonada sem motivo'. Esses modelos internos precisam ser reconstruídos em terapia.",
    feedbackErrado: "Releia a Pista 3! Não é sobre amar profundamente. É sobre a perpetuação dos padrões inseguros. Marina reproduz a dinâmica de inconsistência: precisa provar constantemente seu valor, assim como fez com a mãe."
  }
];

let gameState = { vidas: 3, pistasColetadas: [], puzzlesResolvidos: [], puzzleAtivo: null, respostaSelecionada: null };

document.addEventListener('DOMContentLoaded', () => {
  adicionarEventosPistas();
  adicionarEventosPorta();
});

function iniciarSala() {
  document.getElementById('intro-modal').classList.add('hidden');
  document.getElementById('sala-view').classList.remove('hidden');
}

function adicionarEventosPistas() {
  document.querySelectorAll('.pista-item').forEach(item => {
    item.addEventListener('click', function() {
      const pistaId = this.dataset.pista;
      coletarPista(pistaId);
    });
  });
}

function coletarPista(pistaId) {
  if (gameState.pistasColetadas.includes(pistaId)) return;
  gameState.pistasColetadas.push(pistaId);
  document.querySelector(`[data-pista="${pistaId}"]`).classList.add('coletado');
  document.getElementById('pistas-coletadas').textContent = gameState.pistasColetadas.length;
  const pista = pistasData[pistaId];
  document.getElementById('pista-titulo').textContent = pista.titulo;
  document.getElementById('pista-texto').textContent = pista.texto;
  document.getElementById('pista-modal').classList.remove('hidden');
  if (gameState.pistasColetadas.length === 3) {
    setTimeout(() => { exibirNaracao("Você coletou todas as 3 pistas! Agora vá até a porta e clique para iniciar os puzzles."); }, 500);
  }
}

function fecharPista() { document.getElementById('pista-modal').classList.add('hidden'); }

function adicionarEventosPorta() {
  document.getElementById('porta').addEventListener('click', function() {
    if (gameState.pistasColetadas.length < 3) {
      exibirNaracao("Você precisa coletar todas as 3 pistas antes de resolver os puzzles!");
      return;
    }
    if (gameState.puzzlesResolvidos.length < 3) abrirProximoPuzzle();
  });
}

function abrirProximoPuzzle() {
  const proximoIndex = gameState.puzzlesResolvidos.length;
  if (proximoIndex >= puzzlesData.length) { concluirSala(); return; }
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
  if (gameState.respostaSelecionada === null) { alert('Selecione uma opção!'); return; }
  const puzzle = puzzlesData[gameState.puzzleAtivo];
  const opcaoSelecionada = puzzle.opcoes[gameState.respostaSelecionada];
  if (opcaoSelecionada.correta) exibirFeedbackCorreto(puzzle);
  else exibirFeedbackErrado(puzzle);
}

function exibirFeedbackCorreto(puzzle) {
  const feedback = document.getElementById('feedback-content');
  feedback.className = 'modal-content feedback-content feedback-correto';
  feedback.innerHTML = `<div class="feedback-icon">⭐</div><div class="feedback-titulo">CORRETO! PUZZLE RESOLVIDO.</div><div class="feedback-mensagem">${puzzle.feedbackCorreto}</div><div class="feedback-botoes"><button class="btn-primario" onclick="proximoPuzzleOuConcluir()">${gameState.puzzlesResolvidos.length < 2 ? '[ Próximo Puzzle ]' : '[ PORTA DESBLOQUEADA! ]'}</button></div>`;
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
  feedback.innerHTML = `<div class="feedback-icon">✗</div><div class="feedback-titulo">RESPOSTA ERRADA. −1 VIDA.</div><div class="feedback-mensagem">${puzzle.feedbackErrado}</div><div class="feedback-botoes"><button class="btn-primario" onclick="fecharFeedback()">[ Tentar de Novo ]</button><button class="btn-secundario" onclick="reverPistas()">[ Rever Pistas ]</button></div>`;
  document.getElementById('feedback-modal').classList.remove('hidden');
  if (gameState.vidas <= 0) { setTimeout(() => { alert('Suas vidas acabaram! Você pode reiniciar esta sala.'); location.reload(); }, 1000); }
}

function atualizarVidas() {
  const vidas = document.querySelectorAll('.vida');
  vidas.forEach((v, i) => { if (i >= gameState.vidas) v.classList.add('perdida'); });
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
  setTimeout(() => { box.classList.add('hidden'); }, 5000);
}
