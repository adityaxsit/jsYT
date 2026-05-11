function openInvitation() {
  document.getElementById('welcome').classList.remove('active');
  document.getElementById('welcome').style.display = 'none';
  document.getElementById('mainContent').classList.remove('hidden');

  const music = document.getElementById('bgMusic');
  music.play().catch(() => {});
}

// Countdown
const targetDate = new Date('June 10, 2026 18:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) return;

  document.getElementById('days').textContent = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById('hours').textContent = Math.floor((distance / (1000 * 60 * 60)) % 24);
  document.getElementById('minutes').textContent = Math.floor((distance / (1000 * 60)) % 60);
  document.getElementById('seconds').textContent = Math.floor((distance / 1000) % 60);
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Music Button
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');
let isPlaying = false;

musicBtn.addEventListener('click', async () => {
  if (!isPlaying) {
    await bgMusic.play();
    musicBtn.textContent = 'Pause Music';
  } else {
    bgMusic.pause();
    musicBtn.textContent = 'Play Music';
  }
  isPlaying = !isPlaying;
});

function showConfetti() {
  document.getElementById('confettiText').textContent = '🎉🎊🎂✨💖';
}