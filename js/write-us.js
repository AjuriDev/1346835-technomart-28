let write_us = document.querySelector('.button-write-us');
let modal_write_us = document.querySelector('.modal-write-us');
let modal_close = document.querySelector('.modal-close');

write_us.href = write_us.href.replace('https://htmlacademy.ru/intensive/htmlcss', '#!');

write_us.onclick = function() {
  modal_write_us.classList.remove('visually-hidden');
};

modal_close.onclick = function() {
  modal_write_us.classList.add('visually-hidden');
};
