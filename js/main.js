'use strict';

{
  // IntersectionObserver
  const star01 = document.querySelector('.setup__star01');
  const star02 = document.querySelector('.setup__star02');
  const star03 = document.querySelector('.setup__star03');
  const pictures_slide = document.getElementById('pictures_slide');
  const hero = document.querySelector('.hero')
  const header = document.getElementById('header')

  
  function callback(entries, obs) {
    console.log(entries);

    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        entry.target.classList.remove('appear');
      } else {
        entry.target.classList.add('appear');
        // obs.unobserve(entry.target);
      };
    });
  }

  function callback_picture(entries, obs) {
    console.log(entries);

    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }
      slide();
      button_change();
      obs.unobserve(entry.target);
    });
  }

  function callback_header(entries, obs) {
    console.log(entries);

    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add('appear');
      } else {
        header.classList.remove('appear');
      }
    });
  }

  const options = {
    threshold: 1,
  }

  const observer = new IntersectionObserver(callback, options);
  observer.observe(star01);
  observer.observe(star02);
  observer.observe(star03);

  const observer_picture = new IntersectionObserver(callback_picture, options);
  observer_picture.observe(pictures_slide);

  const observer_header = new IntersectionObserver(callback_header);
  observer_header.observe(hero);

  //スライド画像

  const slide_images = document.querySelectorAll('.pictures__item img');
  
  let current_index = 0;
  
  function slide() {
    setTimeout(() => {
      slide_images[current_index].classList.remove('current');
      if(current_index < slide_images.length - 1) {
        current_index++;
        slide_images[current_index].classList.add('current');
      } else {
        current_index = 0;
        slide_images[current_index].classList.add('current');  
      }
      slide();
    },4000);
  }
  


  //ボタン
  
  const button = document.querySelectorAll('.pictures__nav div');
  let current_button = 0;


  function button_change() {

    setTimeout(() => {
      button[current_button].classList.remove('current');
      if(current_button < button.length - 1) {
        current_button++;
        button[current_button].classList.add('current');
      } else {
        current_button = 0;
        button[current_button].classList.add('current'); 
      }
      button_change();
    },4000)
  }

}




