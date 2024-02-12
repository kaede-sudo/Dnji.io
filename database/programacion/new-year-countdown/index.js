const dayEl = document.getElementById("dia");
const hourEl = document.getElementById("hora");
const minuteEl = document.getElementById("minuto");
const secondEl = document.getElementById("segundo");

const newYearTime = new Date("Jan 1, 2024 00:00:00").getTime();

updateCountdown();

function updateCountdown() {
  const now = new Date().getTime();
  const gap = newYearTime - now;

  const segundo = 1000;
  const minuto = segundo * 60;
  const hora = minuto * 60;
  const dia = hora * 24;

  const d = Math.floor(gap / dia);
  const h = Math.floor((gap % dia) / hora);
  const m = Math.floor((gap % hora) / minuto);
  const s = Math.floor((gap % minuto) / segundo);
  dayEl.innerText = d;
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  setTimeout(updateCountdown, 1000)
}
