const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', event => {
  const trimmed = event.target.value.trim();
  outputEl.textContent = trimmed ? trimmed : 'Anonymous';
});
