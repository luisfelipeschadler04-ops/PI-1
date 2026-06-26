// Lógica da Cutscene — Laços do Apego
// Sequência de 6 caixas de diálogo conforme roteiro

const dialogos = [
  {
    speaker: 'Narrador',
    tipo: 'narrador',
    texto: 'Era uma tarde comum de aula de Psicologia do Desenvolvimento. A professora escrevia no quadro: "Teoria do Apego — John Bowlby". Você copiava as anotações quando o cansaço foi chegando devagar...'
  },
  {
    speaker: 'Narrador',
    tipo: 'narrador',
    texto: 'Seus olhos foram fechando. A voz da professora foi ficando distante... distante... distante...',
    transicaoDepois: true
  },
  {
    speaker: 'Narrador',
    tipo: 'narrador',
    texto: 'Você acorda. Mas não está mais na sala de aula. Está de pé em um corredor longo e escuro, com quatro portas à sua frente. Cada porta tem um símbolo diferente.'
  },
  {
    speaker: 'Voz Misteriosa',
    tipo: 'voz-misteriosa',
    texto: 'Para sair daqui, você precisa provar que compreende os laços que nos formam. Resolva os desafios de cada sala... e encontrará o caminho de volta.'
  },
  {
    speaker: 'Narrador',
    tipo: 'narrador',
    texto: 'Nas portas, você lê: Sala 1 — Apego Seguro · Sala 2 — Apego Evitativo · Sala 3 — Apego Ambivalente · Sala 4 — Apego Desorganizado.'
  },
  {
    speaker: 'Voz Misteriosa',
    tipo: 'voz-misteriosa',
    texto: 'Os laços do apego esperam por você. Boa sorte.',
    isUltimo: true
  }
];

let dialogoAtual = 0;

function renderDialogo(index) {
  const d = dialogos[index];
  const box = document.getElementById('dialogo-box');
  const header = document.getElementById('dialogo-header');
  const speaker = document.getElementById('dialogo-speaker');
  const texto = document.getElementById('dialogo-texto');
  const btnContinuar = document.getElementById('btn-continuar');

  // Fade out
  box.classList.add('fade-out');

  setTimeout(() => {
    // Atualizar conteúdo
    header.className = `dialogo-header ${d.tipo}`;
    speaker.textContent = d.speaker;
    texto.textContent = d.texto;
    texto.className = '';

    // Texto do botão
    btnContinuar.textContent = d.isUltimo ? '[ Entrar no Corredor ]' : '[ Continuar ]';

    // Atualizar dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
      dot.classList.remove('ativo', 'concluido');
      if (i < index) dot.classList.add('concluido');
      else if (i === index) dot.classList.add('ativo');
    });

    // Fade in
    box.classList.remove('fade-out');
  }, 400);
}

function avancarDialogo() {
  const d = dialogos[dialogoAtual];

  if (d.isUltimo) {
    // Última caixa — ir para o corredor com fade
    const overlay = document.getElementById('transicao-overlay');
    overlay.classList.add('ativo');
    setTimeout(() => {
      window.location.href = './corredor.html';
    }, 900);
    return;
  }

  if (d.transicaoDepois) {
    const overlay = document.getElementById('transicao-overlay');
    overlay.classList.add('ativo');
    setTimeout(() => {
      overlay.classList.remove('ativo');
      dialogoAtual++;
      renderDialogo(dialogoAtual);
    }, 1200);
    return;
  }

  dialogoAtual++;
  renderDialogo(dialogoAtual);
}

// Inicializar ao carregar
document.addEventListener('DOMContentLoaded', () => {
  renderDialogo(0);

  // Atalho: Enter ou Espaço também avança
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      avancarDialogo();
    }
  });
});
