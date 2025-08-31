function updateClock() {
  const now = new Date();

  // Relógio Digital
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('digital-clock').textContent = `${hours}:${minutes}:${seconds}`;

  // Relógio Analógico
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;
  const minuteDeg = minutes * 6;
  const secondDeg = seconds * 6;

  document.getElementById('hour').style.transform = `rotate(${hourDeg}deg)`;
  document.getElementById('minute').style.transform = `rotate(${minuteDeg}deg)`;
  document.getElementById('second').style.transform = `rotate(${secondDeg}deg)`;
}

// Atualiza a cada segundo
setInterval(updateClock, 1000);
updateClock();

// Alternar Tema
document.getElementById('toggle-theme').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
