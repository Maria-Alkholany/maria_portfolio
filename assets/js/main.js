AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let isValide = true;

  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let subject = document.querySelector(".subject");

  let textPattern = /^[A-Za-z\s]+$/;
  let emailPattern = /[^\s]+@[^\s@]+\.[^\s@]+$/;

  if (!textPattern.test(name.value.trim())) {
    name.classList.add("error");
    name.nextElementSibling.classList.add("show-error");
    isValide = false;
  }

  if (!emailPattern.test(email.value.trim())) {
    email.classList.add("error");
    email.nextElementSibling.classList.add("show-error");
    isValide = false;
  }

  if (!textPattern.test(subject.value.trim())) {
    subject.classList.add("error");
    subject.nextElementSibling.classList.add("show-error");
    isValide = false;
  }

  if (isValide) {
    let successMsg = document.querySelector(".success-message");
    successMsg.classList.add("show-success");

    setTimeout(() => {

      successMsg.classList.remove("show-success");

    }, 3000);
  }

});

document.querySelector("form").addEventListener("input", function (e) {
  e.target.classList.remove("error");
  if (e.target.nextElementSibling) {
    e.target.nextElementSibling.classList.remove("show-error");
  }
});
