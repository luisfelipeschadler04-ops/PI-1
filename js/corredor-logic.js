// Lógica do Corredor — Laços do Apego
// Gerencia desbloqueio sequencial e navegação entre salas

let urlSalaAlvo = '';

document.addEventListener('DOMContentLoaded', () => {
  atualizarEstadoPaineis();
  adicionarEventosPaineis();
});

function atualizarEstadoPaineis() {
  for (let n = 1; n <= 4; n++) {
    const painel = document.getElementById(`painel-${n}`);
    const statusEl = document.getElementById(`status-${n}`);
    const iconeEl = document.getElementById(`icone-${n}`);
    const concluida = GameState.isSalaConcluida(n);
    const desbloqueada = n === 1 || GameState.isSalaConcluida(n - 1);

    painel.classList.remove('bloqueado', 'concluido', 'disponivel');

    if (concluida) {
      painel.classList.add('concluido');
      statusEl.textContent = 'CONCLUÍDA ✓';
      if (iconeEl) iconeEl.textContent = '✅';
    } else if (desbloqueada) {
      painel.classList.add('disponivel');
      statusEl.textContent = 'Disponível';
      if (iconeEl) {
        const icones = ['💚', '🧱', '🌊', '🌀'];
        iconeEl.textContent = icones[n - 1];
      }
    } else {
      painel.classList.add('bloqueado');
      statusEl.textContent = 'Bloqueada';
      if (iconeEl) iconeEl.textContent = '🔒';
    }
  }
}

function adicionarEventosPaineis() {
  for (let n = 1; n <= 4; n++) {
    const painel = document.getElementById(`painel-${n}`);
    painel.addEventListener('click', () => clicarSala(n));
  }
}

function clicarSala(n) {
  const painel = document.getElementById(`painel-${n}`);
  const url = painel.dataset.url;
  const concluida = GameState.isSalaConcluida(n);
  const desbloqueada = n === 1 || GameState.isSalaConcluida(n - 1);

  if (!desbloqueada) {
    abrirModalBloqueado();
    return;
  }

  if (concluida) {
    urlSalaAlvo = url;
    abrirModalRevisitar();
    return;
  }

  window.location.href = url;
}

function abrirModalBloqueado() {
  document.getElementById('modal-bloqueado').classList.remove('hidden');
}

function abrirModalRevisitar() {
  const modal = document.getElementById('modal-revisitar');
  modal.classList.remove('hidden');

  document.getElementById('btn-revisitar-sim').onclick = () => {
    fecharModalCorredor();
    window.location.href = urlSalaAlvo;
  };
}

function fecharModalCorredor() {
  document.getElementById('modal-bloqueado').classList.add('hidden');
  document.getElementById('modal-revisitar').classList.add('hidden');
}
