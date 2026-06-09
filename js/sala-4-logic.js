const pistasData = {
  brinquedo: {
    titulo: "PISTA — Objeto: BRINQUEDO NO CHÃO",
    texto: "Tomás (2 anos) corre para o pai para ser confortado, mas o pai o bate. Tomás congela, confuso. Minutos depois, Tomás corre de novo para o pai. Mas também o teme. Tomás não consegue encontrar segurança em lugar nenhum porque seu cuidador é a fonte do medo."
  },
  livro: {
    titulo: "PISTA — Objeto: LIVRO NA PRATELEIRA",
    texto: "Main & Hesse (1990): no apego desorganizado, o cuidador é simultaneamente a fonte de conforto E de medo (abuso, negligência severa, trauma não resolvido do cuidador). A criança não consegue formar uma estratégia coerente porque não há solução possível."
  },
  diario: {
    titulo: "PISTA — Objeto: DIÁRIO NA PAREDE",
    texto: "Crianças com apego desorganizado têm risco elevado de psicopatologia, agressividade, dissociação, transtornos emocionais severos, comportamento desafiador, e dificuldade extrema em relacionamentos. Requerem intervenção terapêutica especializada. (Main & Solomon, 1990)"
  }
};

const puzzlesData = [
  {
    numero: 1,
    titulo: "Puzzle 1 de 3 — Por que Tomás corre e teme ao mesmo tempo?",
    naracao: "Primeira trava da porta. Use as pistas que coletou para responder!",
    situacao: "Tomás busca conforto com o pai, mas o pai o magoa. Tomás está paralisado: busca proteção de quem o machuca. Não consegue confiar, não consegue evitar. Fica congelado na presença do pai.",
    pergunta: "Qual é o paradoxo central do apego desorganizado?",
    opcoes: [
      { letra: "A", texto: "O cuidador é simultaneamente a fonte de conforto E de medo, criando um conflito sem solução.", correta: true },
      { letra: "B", texto: "Tomás é naturalmente agressivo e incontrolável.", correta: false },
      { letra: "C", texto: "O pai não tem recursos suficientes para cuidar.", correta: false },
      { letra: "D", texto: "Tomás não consegue ligar emocionalmente com ninguém.", correta: false }
    ],
    feedbackCorreto: "Exatamente! Isso é o paradoxo do apego desorganizado. A criança precisa do cuidador, mas o cuidador é quem causa medo. Não há estratégia possível de apego — a criança fica presa em abordagem-evitação impossível.",
    feedbackErrado: "Releia a Pista 2! Não é sobre agressividade de Tomás. É sobre o cuidador ser simultaneamente conforto E perigo. Crie-se uma situação insolúvel de apego."
  },
  {
    numero: 2,
    titulo: "Puzzle 2 de 3 — Origens do apego desorganizado",
    naracao: "Primeira trava resolvida! Segunda trava se acende. Continue!",
    situacao: "Pedro (18 meses) tem uma mãe com trauma não resolvido de sua própria infância. Quando Pedro chora, a mãe o consola bem, mas sua expressão facial fica aterrorizada e ela grita. Pedro fica confuso: a mãe o consola, mas seus sinais corporais mostram medo.",
    pergunta: "Qual é a principal origem do apego desorganizado neste caso?",
    opcoes: [
      { letra: "A", texto: "O trauma não resolvido do cuidador cria comportamento assustador, criando apego desorganizado.", correta: true },
      { letra: "B", texto: "Pedro é uma criança particularmente sensível.", correta: false },
      { letra: "C", texto: "A mãe não ama seu filho.", correta: false },
      { letra: "D", texto: "Não há indicadores de problemas nesta situação.", correta: false }
    ],
    feedbackCorreto: "Correto! O apego desorganizado frequentemente vem do trauma não resolvido do cuidador. A mãe quer confortar, mas seu próprio sistema nervoso assustado ativa o sistema de ameaça. Isso confunde profundamente a criança.",
    feedbackErrado: "Não é sobre sensibilidade de Pedro. É sobre o cuidador estar emocionalmente dysregulado, enviando sinais conflitantes (conforto + medo). Isso cria apego desorganizado."
  },
  {
    numero: 3,
    titulo: "Puzzle 3 de 3 — Adultos com apego desorganizado",
    naracao: "Última trava! Resolva para abrir a porta da Sala 4.",
    situacao: "Gabriel (30 anos) tem relacionamentos turbulentos, alternando entre envolvimento extremo e distância hostil. Frequentemente tem explosões de raiva, dificuldade em confiança, e comportamentos que parecem autoagressivos. Sua vida é caótica.",
    pergunta: "Como o apego desorganizado de Gabriel persiste na vida adulta?",
    opcoes: [
      { letra: "A", texto: "Gabriel escolhe deliberadamente relacionamentos problemáticos.", correta: false },
      { letra: "B", texto: "Os 'modelos internos' desorganizados perpetuam caos, desconfiança severa e dificuldade em regulação emocional. Gabriel reproduz o padrão sem estratégia coerente.", correta: true },
      { letra: "C", texto: "Gabriel precisar apenas de determinação para 'superar' seus problemas.", correta: false },
      { letra: "D", texto: "O apego desorganizado desaparece naturalmente na vida adulta.", correta: false }
    ],
    feedbackCorreto: "Perfeito! Gabriel permanece preso ao padrão desorganizado. Seus 'modelos internos' o dizem que 'o mundo é ameaçador', 'as pessoas ferem', 'não há segurança'. Sem terapia especializada, esse padrão persiste e perpetua caos.",
    feedbackErrado: "Releia a Pista 3! Apego desorganizado na infância não desaparece sozinho. Requer terapia especializada. Gabriel não 'escolhe' caos — seus modelos internos de funcionamento o mantêm em padrões desorganizados."
  }
];

let gameState = { vidas: 3, pistasColetadas: [], puzzlesResolvidos: [], puzzleAtivo: null, respostaSelecionada: null };

document.addEventListener('DOMContentLoaded', () => {
  adicionarEventosPistas();
  adicionarEventosPorta();
});

function iniciarSala() { document.getElementById('intro-modal').classList.add('hidden'); document.getElementById('sala-view').classList.remove('hidden'); }

function adicionarEventosPistas() {
  document.querySelectorAll('.pista-item').forEach(item => {
    item.addEventListener('click', function() { coletarPista(this.dataset.pista); });
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
  if (gameState.pistasColetadas.length === 3) setTimeout(() => { exibirNaracao("Você coletou todas as 3 pistas! Agora vá até a porta e clique para iniciar os puzzles."); }, 500);
}

function fecharPista() { document.getElementById('pista-modal').classList.add('hidden'); }

function adicionarEventosPorta() {
  document.getElementById('porta').addEventListener('click', function() {
    if (gameState.pistasColetadas.length < 3) { exibirNaracao("Você precisa coletar todas as 3 pistas antes de resolver os puzzles!"); return; }
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
  if (!gameState.puzzlesResolvidos.includes(gameState.puzzleAtivo)) { gameState.puzzlesResolvidos.push(gameState.puzzleAtivo); atualizarTravas(); }
}

function exibirFeedbackErrado(puzzle) {
  gameState.vidas--;
  atualizarVidas();
  const feedback = document.getElementById('feedback-content');
  feedback.className = 'modal-content feedback-content feedback-errado';
  feedback.innerHTML = `<div class="feedback-icon">✗</div><div class="feedback-titulo">RESPOSTA ERRADA. −1 VIDA.</div><div class="feedback-mensagem">${puzzle.feedbackErrado}</div><div class="feedback-botoes"><button class="btn-primario" onclick="fecharFeedback()">[ Tentar de Novo ]</button><button class="btn-secundario" onclick="reverPistas()">[ Rever Pistas ]</button></div>`;
  document.getElementById('feedback-modal').classList.remove('hidden');
  if (gameState.vidas <= 0) setTimeout(() => { alert('Suas vidas acabaram! Você pode reiniciar esta sala.'); location.reload(); }, 1000);
}

function atualizarVidas() { const vidas = document.querySelectorAll('.vida'); vidas.forEach((v, i) => { if (i >= gameState.vidas) v.classList.add('perdida'); }); }

function atualizarTravas() { document.getElementById('travas-abertas').textContent = gameState.puzzlesResolvidos.length; }

function fecharFeedback() { document.getElementById('feedback-modal').classList.add('hidden'); document.getElementById('puzzle-modal').classList.add('hidden'); }

function reverPistas() { fecharFeedback(); exibirNaracao("Revise as pistas coletadas clicando nos objetos na sala!"); }

function proximoPuzzleOuConcluir() { fecharFeedback(); if (gameState.puzzlesResolvidos.length < 3) { gameState.puzzleAtivo = gameState.puzzlesResolvidos.length; exibirPuzzle(gameState.puzzleAtivo); } else { concluirSala(); } }

function concluirSala() { document.getElementById('puzzle-modal').classList.add('hidden'); document.getElementById('feedback-modal').classList.add('hidden'); document.getElementById('sala-view').classList.add('hidden'); document.getElementById('sala-concluida').classList.remove('hidden'); }

function exibirNaracao(texto) { const box = document.getElementById('naracao'); document.getElementById('naracao-texto').textContent = texto; box.classList.remove('hidden'); setTimeout(() => { box.classList.add('hidden'); }, 5000); }
