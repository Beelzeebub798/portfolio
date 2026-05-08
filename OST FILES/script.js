// ── CONTACT FORM ──
function handleSubmit(e) {
  e.preventDefault();

  const btn = e.target.querySelector('.send-btn');
  btn.textContent = 'Message sent!';
  btn.style.background = '#2a7a4b';

  setTimeout(() => {
    btn.textContent = 'Send message';
    btn.style.background = '';
    e.target.reset();
  }, 3000);
}
