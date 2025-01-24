document.addEventListener('DOMContentLoaded', () => {
  const qs = s => document.querySelector(s);
  const modal = qs('.modal');
  const close = qs('#btn-close');
  const loginBtn = qs('.login-button');
  loginBtn.addEventListener('click', () => modalOpen(modal, loginBtn));
  close.addEventListener('click', () => modalClose(modal, loginBtn));
});

const modalOpen = (modal, btn) => {
  // modal.classList.add('show');
  modal.classList.toggle('show');
  btn.style.display = 'none';
}

const modalClose = (modal, btn) => {
  // modal.classList.remove('show');
  modal.classList.toggle('show');
  btn.style.display = 'block';
}