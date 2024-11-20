console.log("hello");

document.addEventListener('DOMContentLoaded', function() {
  console.log("dom loaded");
  const buttons = document.querySelectorAll('button[aria-label="Properties"]');
  console.log(buttons.length);
  buttons[0].addEventListener('click', function() {
    console.log("propertied");
  });
});
