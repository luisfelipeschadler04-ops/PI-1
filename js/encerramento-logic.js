// Lógica da Tela de Encerramento — Laços do Apego

const dialogosEnc = [
  {
    speaker: 'Narrador',
    tipo: 'narrador',
    texto: 'De repente, tudo clareia. O corredor desaparece. Você se vê de volta à sala de aula — a professora ainda está no quadro, como se nada tivesse acontecido.'
  },
  {
    speaker: 'Narrador',
    tipo: 'narrador',
    texto: 'Mas agora as palavras no quadro fazem sentido de um jeito diferente. Você não apenas anotou a teoria — você a viveu.'
  },
  {
    speaker: 'Voz Misteriosa',
    tipo: 'voz-misteriosa',
    texto: 'Os laços que formamos na infância não são apenas memórias. São a estrutura invisível de quem nos tornamos — de como amamos, confiamos e nos relacionamos. Bowlby tinha razão.'
  },
  {
    speaker: 'Narrador',
    tipo: 'narrador',
    texto: 'Você concluiu os Laços do Apego. Confira seu desempenho abaixo.',
    isUltimo: true
  }
];

let dialogoEncAtual = 0;

function renderDialogoEnc(index) {
  const d = dialogosEnc[index];
  const box = document.getElementById('enc-dialogo-box');
  const header = document.getElementById('enc-dialogo-header');
  const speaker = document.getElementById('enc-speaker');
  const texto = document.getElementById('enc-dialogo-texto');
  const btn = document.getElementById('btn-enc-continuar');

  box.classList.add('fade-out');

  setTimeout(() => {
    header.className = `enc-dialogo-header ${d.tipo}`;
    speaker.textContent = d.speaker;
    texto.textContent = d.texto;
    btn.textContent = d.isUltimo ? '[ Ver Resultado ]' : '[ Continuar ]';
    box.classList.remove('fade-out');
  }, 400);
}

function avancarDialogoEnc() {
  const d = dialogosEnc[dialogoEncAtual];

  if (d.isUltimo) {
    document.getElementById('secao-dialogos').classList.add('hidden');
    mostrarResultado();
    return;
  }

  dialogoEncAtual++;
  renderDialogoEnc(dialogoEncAtual);
}

function mostrarResultado() {
  const secao = document.getElementById('secao-resultado');
  secao.classList.remove('hidden');

  const acertos = GameState.getAcertosTotais();
  const pct = GameState.getPorcentagem();

  // Animar contador
  animarContador('resultado-num', 0, acertos, 800);

  document.getElementById('resultado-percent').textContent = pct + '%';

  // Mensagem por desempenho
  const msgBox = document.getElementById('resultado-mensagem-box');
  const msg = document.getElementById('resultado-mensagem');

  if (pct >= 80) {
    msgBox.className = 'resultado-mensagem-box expert';
    msg.textContent = 'Expert em Vínculos! Você dominou a Teoria do Apego de Bowlby! Consegue identificar os 4 padrões, entende o papel do cuidador e conhece as consequências de cada tipo ao longo da vida. Bowlby ficaria orgulhoso!';
    document.getElementById('resultado-estrelas').textContent = '★ ★ ★';
  } else if (pct >= 60) {
    msgBox.className = 'resultado-mensagem-box bom';
    msg.textContent = 'Bom trabalho! Você compreendeu os principais padrões! Revise as salas com menos acertos — cada puzzle tem explicação detalhada para consolidar o conteúdo.';
    document.getElementById('resultado-estrelas').textContent = '★ ★ ☆';
  } else {
    msgBox.className = 'resultado-mensagem-box continuar';
    msg.textContent = 'Continue explorando! A Teoria do Apego é rica e merece mais atenção. Jogue novamente com calma, leia todas as pistas antes de responder e use os feedbacks. Cada tentativa conta!';
    document.getElementById('resultado-estrelas').textContent = '★ ☆ ☆';
  }
}

function animarContador(id, de, ate, duracao) {
  const el = document.getElementById(id);
  const inicio = performance.now();

  function atualizar(agora) {
    const progresso = Math.min((agora - inicio) / duracao, 1);
    el.textContent = Math.round(de + (ate - de) * progresso);
    if (progresso < 1) requestAnimationFrame(atualizar);
  }

  requestAnimationFrame(atualizar);
}

function abrirGlossario() {
  document.getElementById('modal-glossario').classList.remove('hidden');
}

function fecharGlossario() {
  document.getElementById('modal-glossario').classList.add('hidden');
}

function jogarNovamente() {
  GameState.resetarJogo();
  window.location.href = './index.html';
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
  renderDialogoEnc(0);

  document.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && !document.getElementById('secao-resultado').classList.contains('hidden') === false) {
      e.preventDefault();
      avancarDialogoEnc();
    }
  });
});
