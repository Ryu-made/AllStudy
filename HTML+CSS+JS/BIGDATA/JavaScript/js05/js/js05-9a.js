document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal');
  const loginBtn = document.querySelector('.login-button');
  const close = document.querySelector('#btn-close');
  loginBtn.addEventListener('click', () => modalOpen(modal, loginBtn));
  close.addEventListener('click', () => modalClose(modal, loginBtn));
});

const modalOpen = (modal, btn) => {
  modal.style.display = 'flex';
  btn.style.display = 'none';
}

const modalClose = (modal, btn) => {
  modal.style.display = 'none';
  btn.style.display = 'block';
}