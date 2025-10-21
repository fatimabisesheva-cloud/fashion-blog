// === Theme Toggle ===
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
});

// === Dynamic Date/Time ===
const dateBlock = document.getElementById('datetimeBlock');
if (dateBlock) {
  setInterval(() => {
    const now = new Date();
    dateBlock.textContent = now.toLocaleString();
  }, 1000);
}

// === Cart Add Simulation ===
const cartBtn = document.getElementById('cartBtn');
let cartCount = 0;
const countDisplay = document.getElementById('cartCount');
if (cartBtn) {
  cartBtn.addEventListener('click', () => {
    cartCount++;
    countDisplay.textContent = cartCount;
  });
}

// === Change Background Button ===
const changeBgBtn = document.getElementById('changeBgBtn');
if (changeBgBtn) {
  const colors = ['#e8e8e8', '#f0d0d0', '#dcd6f7', '#ffe5b4'];
  let i = 0;
  changeBgBtn.addEventListener('click', () => {
    i = (i + 1) % colors.length;
    body.style.backgroundColor = colors[i];
  });
}
