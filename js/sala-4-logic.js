const pistasData = {
  brinquedo: {
    titulo: "PISTA — Objeto: SOMBRA NA PAREDE",
    texto: "Mariana (4 anos): às vezes corre para a mãe ao vê-la entrar. Às vezes recua e foge. Em outros momentos, fica completamente imóvel, como se estivesse congelada. Não há padrão claro — os comportamentos parecem aleatórios e contraditórios."
  },
  livro: {
    titulo: "PISTA — Objeto: ESPELHO RACHADO",
    texto: "O paradoxo do apego desorganizado: a figura que deveria ser fonte de segurança é também fonte de medo. A criança fica presa num dilema sem solução — não pode se aproximar (é perigoso) nem pode fugir (precisa do cuidador). Não há estratégia possível. (Bowlby, 2002)"
  },
  diario: {
    titulo: "PISTA — Objeto: CADERNETA ESCOLAR",
    texto: "O apego desorganizado está associado a contextos de negligência grave, abuso ou situações em que o próprio cuidador vive sofrimento intenso. Os comportamentos confusos da criança são a única resposta possível a um dilema impossível. Exige atenção especializada. (Papalia & Feldman, 2013)"
  }
};

const puzzlesData = [
  {
    numero: 1,
    titulo: "Puzzle 1 de 3 — Reconhecendo o apego desorganizado",
    naracao: "A última sala. Primeira trava. Use todas as pistas!",
    situacao: "Mariana (4 anos): às vezes corre para a mãe, às vezes foge dela, às vezes fica completamente imóvel. Não há padrão consistente nas reações de Mariana.",
    pergunta: "O comportamento de Mariana é característico de qual tipo de apego?",
    opcoes: [
      { letra: "A", texto: "Apego seguro — Mariana busca a mãe, o que é sinal de vínculo.", correta: false },
      { letra: "B", texto: "Apego evitativo — Mariana às vezes foge, indicando distanciamento.", correta: false },
      { letra: "C", texto: "Apego ambivalente — Mariana oscila entre busca e rejeição.", correta: false },
      { letra: "D", texto: "Apego desorganizado — ausência de estratégia consistente; paradoxo entre medo e necessidade de apego.", correta: true }
    ],
    feedbackCorreto: "Correto! A diferença do ambivalente (que tem estratégia: buscar e rejeitar) é que Mariana não tem estratégia alguma. Ela corre, foge e paralisa de forma imprevisível porque qualquer resposta é igualmente perigosa. (Bowlby, 2002)",
    feedbackErrado: "O evitativo TEM estratégia (suprimir). O ambivalente TEM estratégia (amplificar e oscilar). Mariana NÃO TEM estratégia — seus comportamentos não formam nenhum padrão. Isso define o desorganizado."
  },
  {
    numero: 2,
    titulo: "Puzzle 2 de 3 — O paradoxo do apego desorganizado",
    naracao: "Segunda trava. Você está quase lá!",
    situacao: "O pai de João frequentemente intimida a família. Às vezes João corre para o pai quando tem medo de outras coisas, porque ele é o único adulto presente. Mas o próprio pai é frequentemente fonte do medo. João não sabe para onde ir quando se assusta.",
    pergunta: "A situação de João ilustra qual conceito central do apego desorganizado?",
    opcoes: [
      { letra: "A", texto: "Falta de vínculo — João não tem apego ao pai porque tem medo dele.", correta: false },
      { letra: "B", texto: "O paradoxo da figura que é simultaneamente fonte de segurança e de medo, deixando a criança sem estratégia possível.", correta: true },
      { letra: "C", texto: "Apego ambivalente — João oscila entre buscar e rejeitar o pai.", correta: false },
      { letra: "D", texto: "Trauma simples — João desenvolverá TEPT, não um padrão de apego.", correta: false }
    ],
    feedbackCorreto: "Exatamente! O paradoxo de Bowlby: a criança precisa do cuidador para se sentir segura, mas esse mesmo cuidador é fonte de ameaça. Aproximar-se é perigoso. Fugir é impossível. A paralisia é a única 'saída'. (Bowlby, 2002)",
    feedbackErrado: "João não deixou de ter apego ao pai — ainda o busca. Mas esse mesmo pai é fonte de medo. Essa contradição impossível — precisar de quem te amedronta — é o núcleo do desorganizado. Releia a Pista 2!"
  },
  {
    numero: 3,
    titulo: "Puzzle 3 de 3 — Identificação e intervenção profissional",
    naracao: "Última trava de todo o jogo! Resolva para escapar!",
    situacao: "Uma psicóloga escolar observa que Bia (6 anos) ora se aproxima intensamente da professora, ora a evita sem motivo, ora fica paralisada em conflitos leves. Há histórico de negligência em casa.",
    pergunta: "Considerando a Teoria do Apego, qual é a conduta mais adequada da psicóloga?",
    opcoes: [
      { letra: "A", texto: "Ignorar — Bia é pequena e vai se ajustar com o tempo.", correta: false },
      { letra: "B", texto: "Encaminhar para avaliação especializada, pois os comportamentos indicam possível apego desorganizado relacionado ao histórico de negligência.", correta: true },
      { letra: "C", texto: "Orientar a professora a ser mais firme com Bia para estabelecer limites.", correta: false },
      { letra: "D", texto: "Comunicar aos pais que Bia está tendo comportamentos inadequados.", correta: false }
    ],
    feedbackCorreto: "Excelente! O apego desorganizado exige atenção especializada. Profissionais de educação e saúde têm papel crucial na identificação precoce. A intervenção adequada pode ajudar a criança a desenvolver estratégias mais adaptativas. (Papalia & Feldman, 2013)",
    feedbackErrado: "O apego desorganizado não se resolve sozinho nem com disciplina mais firme. Exige avaliação e intervenção especializada. É responsabilidade dos profissionais que trabalham com crianças reconhecer esses sinais. Releia a Pista 3!"
  }
];

let gameState = { vidas: 3, pistasColetadas: [], puzzlesResolvidos: [], puzzleAtivo: null, respostaSelecionada: null };

document.addEventListener('DOMContentLoaded', () => {
  adicionarEventosPistas();
  adicionarEventosPorta();
});

function iniciarSala() { GameState.resetarAcertosSala(4); document.getElementById('intro-modal').classList.add('hidden'); document.getElementById('sala-view').classList.remove('hidden'); }

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
  if (opcaoSelecionada.correta) { GameState.salvarAcerto(4); exibirFeedbackCorreto(puzzle); }
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
  if (gameState.vidas <= 0) setTimeout(() => exibirGameOver(), 800);
}

function atualizarVidas() { const vidas = document.querySelectorAll('.vida'); vidas.forEach((v, i) => { if (i >= gameState.vidas) v.classList.add('perdida'); }); }

function atualizarTravas() { document.getElementById('travas-abertas').textContent = gameState.puzzlesResolvidos.length; }

function fecharFeedback() { document.getElementById('feedback-modal').classList.add('hidden'); document.getElementById('puzzle-modal').classList.add('hidden'); }

function reverPistas() { fecharFeedback(); exibirNaracao("Revise as pistas coletadas clicando nos objetos na sala!"); }

function proximoPuzzleOuConcluir() { fecharFeedback(); if (gameState.puzzlesResolvidos.length < 3) { gameState.puzzleAtivo = gameState.puzzlesResolvidos.length; exibirPuzzle(gameState.puzzleAtivo); } else { concluirSala(); } }

function concluirSala() {
  GameState.marcarSalaConcluida(4);
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

function exibirNaracao(texto) { const box = document.getElementById('naracao'); document.getElementById('naracao-texto').textContent = texto; box.classList.remove('hidden'); setTimeout(() => { box.classList.add('hidden'); }, 5000); }
