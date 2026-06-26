// Módulo de Estado Global — Laços do Apego
// Gerencia progresso do jogador via localStorage

const GameState = {
  KEYS: {
    sala1: 'lacosApego_sala1_concluida',
    sala2: 'lacosApego_sala2_concluida',
    sala3: 'lacosApego_sala3_concluida',
    sala4: 'lacosApego_sala4_concluida',
    acertosSala1: 'lacosApego_acertos_sala1',
    acertosSala2: 'lacosApego_acertos_sala2',
    acertosSala3: 'lacosApego_acertos_sala3',
    acertosSala4: 'lacosApego_acertos_sala4',
  },

  marcarSalaConcluida(n) {
    localStorage.setItem(this.KEYS[`sala${n}`], 'true');
  },

  isSalaConcluida(n) {
    return localStorage.getItem(this.KEYS[`sala${n}`]) === 'true';
  },

  salvarAcerto(n) {
    const chave = this.KEYS[`acertosSala${n}`];
    const atual = parseInt(localStorage.getItem(chave) || '0');
    localStorage.setItem(chave, atual + 1);
  },

  resetarAcertosSala(n) {
    localStorage.setItem(this.KEYS[`acertosSala${n}`], '0');
  },

  getAcertosSala(n) {
    return parseInt(localStorage.getItem(this.KEYS[`acertosSala${n}`]) || '0');
  },

  getAcertosTotais() {
    let total = 0;
    for (let i = 1; i <= 4; i++) {
      total += this.getAcertosSala(i);
    }
    return total;
  },

  getPorcentagem() {
    // 3 puzzles por sala × 4 salas = 12 total
    return Math.round((this.getAcertosTotais() / 12) * 100);
  },

  resetarJogo() {
    Object.values(this.KEYS).forEach(key => localStorage.removeItem(key));
  }
};
