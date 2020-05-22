const modalBtn = document.querySelector('.btn-modal');
const modalBg = document.querySelector('#my-modal');
const modalClose = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modalBg.style.display = 'block';
}

// Close
function closeModal() {
  modalBg.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modalBg) {
    modalBg.style.display = 'none';
  }
}
