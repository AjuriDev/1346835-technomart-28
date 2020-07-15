let map = document.querySelector('.map-image');
let modal_map = document.querySelector('.modal-map');
let map_close = document.querySelector('.map-close');

let write_us = document.querySelector('.button-write-us');
let modal_write_us = document.querySelector('.modal-write-us');
let write_us_close = document.querySelector('.write-us-close');
let write_us_login = document.getElementById('your-name');
let write_us_email = document.getElementById('your-email');
let write_us_message = document.getElementById('your-message');
let write_us_form = document.querySelector('.modal-write-us form');

let add_in_cart = document.querySelector('.add-in-cart');
let add_in_wish_list = document.querySelector('.add-in-wish-list');
let modal_add_in_cart = document.querySelector('.modal-add-in-cart');
let add_in_cart_close = document.querySelector('.add-in-cart-close');
let continue_shopping = document.querySelector('.continue-shopping');
let catalog_list = document.querySelector('.catalog-list');

let perf_slide = document.querySelector('.perforators-popular');
let drill_slide = document.querySelector('.drills-popular');
let dot_perfs = document.querySelector('.dot-perfs');
let dot_drills = document.querySelector('.dot-drills');
let previous_slide = document.querySelector('.previous-slide');
let next_slide = document.querySelector('.next-slide');

let service_delivery = document.getElementById('service-delivery');
let service_guarantee = document.getElementById('service-guarantee');
let service_credit = document.getElementById('service-credit');
let delivery_slide = document.querySelector('.delivery-slide');
let guarantee_slide = document.querySelector('.guarantee-slide');
let credit_slide = document.querySelector('.credit-slide');

let is_storage_support = true;
let storage_login = '';
let storage_email = '';

service_delivery.onclick = function(evt) {
  delivery_slide.classList.remove('visually-hidden');
  guarantee_slide.classList.add('visually-hidden');
  credit_slide.classList.add('visually-hidden');
};

service_guarantee.onclick = function(evt) {
  delivery_slide.classList.add('visually-hidden');
  guarantee_slide.classList.remove('visually-hidden');
  credit_slide.classList.add('visually-hidden');
};

service_credit.onclick = function(evt) {
  delivery_slide.classList.add('visually-hidden');
  guarantee_slide.classList.add('visually-hidden');
  credit_slide.classList.remove('visually-hidden');
};

dot_perfs.onclick =
dot_drills.onclick =
previous_slide.onclick =
next_slide.onclick = function(evt) {
  perf_slide.classList.toggle('visually-hidden');
  drill_slide.classList.toggle('visually-hidden');
  dot_perfs.classList.toggle('slider-dot-on');
  dot_drills.classList.toggle('slider-dot-on');
};

storage_email = localStorage.getItem('Email');

try {
  storage_login = localStorage.getItem('Login');
} catch (err) {
  is_storage_support = false;
}

map.onclick = function(evt) {
  evt.preventDefault();
  modal_map.classList.add('modal-show');
};

map_close.onclick = function() {
  modal_map.classList.remove('modal-show');
};

write_us.onclick = function(evt) {
  evt.preventDefault();
  modal_write_us.classList.add('modal-show');
  if (storage_login) {
    write_us_login.value = storage_login;
    if (storage_email) {
      write_us_email.value = storage_email;
      write_us_message.focus();
    } else {
      write_us_email.focus();
    }
  } else {
    write_us_login.focus();
  }
};

write_us_form.onsubmit = function (evt) {
  if (!write_us_login.value || !write_us_email.value) {
    evt.preventDefault();
    modal_write_us.classList.remove('modal-error');
    modal_write_us.offsetWidth = modal_write_us.offsetWidth;
    modal_write_us.classList.add('modal-error');
  } else {
    if (is_storage_support) {
      localStorage.setItem('Login', write_us_login.value);
      localStorage.setItem('Email', write_us_email.value);
    }
  }
};

write_us_close.onclick = function() {
  modal_write_us.classList.remove('modal-show');
  modal_write_us.classList.remove('modal-error');
};

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    if (modal_write_us.classList.contains('modal-show')) {
      evt.preventDefault();
      modal_write_us.classList.remove('modal-show');
      modal_write_us.classList.remove('modal-error');
    }
    if (modal_map.classList.contains('modal-show')) {
      evt.preventDefault();
      modal_map.classList.remove('modal-show');
    }
    if (modal_write_us.classList.contains('modal-show')) {
      evt.preventDefault();
      modal_add_in_cart.classList.remove('modal-show');
    }
  }
});

catalog_list.onclick = function(event) {
  let target = event.target;

  if (target.classList.contains('add-in-cart')) {
    evt.preventDefault();
    modal_add_in_cart.classList.add('modal-show');
  };
};
