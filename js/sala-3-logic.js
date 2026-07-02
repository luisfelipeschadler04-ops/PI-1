const pistasData = {
  brinquedo: {
    titulo: "PISTA — Objeto: RELÓGIO QUEBRADO",
    texto: "Carlos (3 anos): quando a mãe sai, chora inconsolavelmente. Quando ela volta, corre para ela e logo a empurra com raiva. Mesmo com a mãe tentando confortá-lo, Carlos oscila entre se agarrar a ela e se afastar."
  },
  livro: {
    titulo: "PISTA — Objeto: AGENDA COM COMPROMISSOS RISCADOS",
    texto: "O cuidador ambivalente é imprevisível: às vezes responsivo e carinhoso, às vezes ausente ou irritadiço — sem que a criança consiga identificar padrão. A criança fica em alerta constante: 'Quando eu precisar, o cuidador estará lá?' (Bowlby, 2002)"
  },
  carta: {
    titulo: "PISTA — Objeto: DESENHO RASGADO E COLADO",
    texto: "A hipervigilância é uma estratégia: a criança intensifica suas reações — chorar mais, gritar mais — para garantir que o cuidador imprevisível preste atenção. Resultado: dificuldade de regulação emocional e ansiedade crônica. (Papalia & Feldman, 2013)"
  }
};

const puzzlesData = [
  {
    numero: 1,
    titulo: "Puzzle 1 de 3 — Reconhecendo o apego ambivalente",
    naracao: "Primeira trava. Use as pistas coletadas!",
    situacao: "Carlos (3 anos): quando a mãe sai, chora inconsolavelmente. Quando ela volta, corre para ela e logo a empurra com raiva. Oscila entre se agarrar à mãe e se afastar, sem conseguir se acalmar.",
    pergunta: "O comportamento de Carlos é característico de qual tipo de apego?",
    opcoes: [
      { letra: "A", texto: "Comportamento normal de birra — crianças de 3 anos costumam ter reações intensas.", correta: false },
      { letra: "B", texto: "Apego seguro — Carlos busca a mãe, o que indica vínculo positivo.", correta: false },
      { letra: "C", texto: "Apego ambivalente — Carlos oscila entre buscar proximidade e expressar raiva do cuidador.", correta: true },
      { letra: "D", texto: "Apego desorganizado — o comportamento não tem padrão algum.", correta: false }
    ],
    feedbackCorreto: "Correto! O apego ambivalente TEM estratégia, mas ela é contraditória: buscar + rejeitar. Carlos não consegue se acalmar porque a imprevisibilidade do cuidador o deixou em alerta constante, mesmo quando a mãe está presente.",
    feedbackErrado: "A distinção é sutil: o desorganizado NÃO tem estratégia. Carlos TEM uma estratégia — só que contraditória (busca e rejeita). Isso é a marca do ambivalente. Releia a Pista 1!"
  },
  {
    numero: 2,
    titulo: "Puzzle 2 de 3 — O papel do cuidador no apego ambivalente",
    naracao: "Segunda trava. Continue!",
    situacao: "A mãe de Ana às vezes responde prontamente quando Ana chora — com carinho e atenção. Outras vezes, nas mesmas situações, está no celular e mal percebe que a filha está chorando. Ana nunca sabe como a mãe vai reagir.",
    pergunta: "Como a inconsistência da mãe de Ana influencia o desenvolvimento do apego dela?",
    opcoes: [
      { letra: "A", texto: "Positivamente — a mãe é carinhosa em várias situações.", correta: false },
      { letra: "B", texto: "A imprevisibilidade gera o apego ambivalente — Ana não consegue prever se será atendida, ficando em alerta constante.", correta: true },
      { letra: "C", texto: "Não influencia — o temperamento de Ana determina como ela reagirá.", correta: false },
      { letra: "D", texto: "Cria apego evitativo — Ana vai aprender a ignorar suas próprias necessidades.", correta: false }
    ],
    feedbackCorreto: "Exatamente! A inconsistência é o fator central do ambivalente. Ana não pode confiar nem desconfiar totalmente da mãe — e essa incerteza é ainda mais ansiogênica que a rejeição consistente do cuidador evitativo. (Bowlby, 2002)",
    feedbackErrado: "A chave está na inconsistência. Não é que a mãe seja ruim — é que é imprevisível. Para a criança, incerteza constante é mais perturbadora que rejeição previsível. Releia a Pista 2!"
  },
  {
    numero: 3,
    titulo: "Puzzle 3 de 3 — Consequências do apego ambivalente na vida adulta",
    naracao: "Última trava da Sala 3! Resolva para abrir a porta.",
    situacao: "Lucas cresceu com apego ambivalente. Na vida adulta tem relacionamentos muito intensos, sente ciúme excessivo, teme constantemente ser abandonado e busca reasseguramento contínuo, mesmo sem motivo aparente.",
    pergunta: "Segundo a Teoria do Apego, o padrão de Lucas na vida adulta está relacionado a:",
    opcoes: [
      { letra: "A", texto: "Experiências ruins em relacionamentos adultos que o tornaram inseguro.", correta: false },
      { letra: "B", texto: "O apego ambivalente na infância criou um modelo interno de incerteza sobre a disponibilidade dos outros.", correta: true },
      { letra: "C", texto: "Traço de personalidade — Lucas é naturalmente mais emotivo.", correta: false },
      { letra: "D", texto: "Falta de limites na infância — Lucas foi muito mimado.", correta: false }
    ],
    feedbackCorreto: "Perfeito! O apego ambivalente cria o modelo: 'Os outros podem me abandonar a qualquer momento — preciso me certificar constantemente de que ainda me amam.' Lucas aprendeu essa hipervigilância na infância. (Papalia & Feldman, 2013)",
    feedbackErrado: "O ciúme e o medo de abandono de Lucas não são coincidência — são a versão adulta da criança que nunca sabia se o cuidador estaria disponível. Releia a Pista 3!"
  }
];

let gameState = { vidas: 3, pistasColetadas: [], puzzlesResolvidos: [], puzzleAtivo: null, respostaSelecionada: null };

document.addEventListener('DOMContentLoaded', () => {
  adicionarEventosPistas();
  adicionarEventosPorta();
});

function iniciarSala() {
  GameState.resetarAcertosSala(3);
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
  if (opcaoSelecionada.correta) { GameState.salvarAcerto(3); exibirFeedbackCorreto(puzzle); }
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
  if (gameState.vidas <= 0) { setTimeout(() => exibirGameOver(), 800); }
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
  GameState.marcarSalaConcluida(3);
  document.getElementById('puzzle-modal').classList.add('hidden');
  document.getElementById('feedback-modal').classList.add('hidden');
  document.getElementById('sala-view').classList.add('hidden');
  document.getElementById('sala-concluida').classList.remove('hidden');
}

function exibirGameOver() {
  const feedback = document.getElementById('feedback-content');
  feedback.className = 'modal-content feedback-content feedback-errado';
  feedback.innerHTML = `<div class="feedback-icon">💔</div><div class="feedback-titulo">SUAS VIDAS ACABARAM!</div><div class="feedback-mensagem">Não desanime — rever o conteúdo faz parte do aprendizado. Você pode reiniciar esta sala e tentar novamente.</div><div class="feedback-botoes"><button class="btn-primario" onclick="location.reload()">[ Reiniciar Sala ]</button><button class="btn-secundario" onclick="window.location.href='./corredor.html'">[ Voltar ao Corredor ]</button></div>`;
  document.getElementById('feedback-modal').classList.remove('hidden');
}

function exibirNaracao(texto) {
  const box = document.getElementById('naracao');
  document.getElementById('naracao-texto').textContent = texto;
  box.classList.remove('hidden');
  setTimeout(() => { box.classList.add('hidden'); }, 5000);
}
