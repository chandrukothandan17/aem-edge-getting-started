console.log("hello");


const buttons = document.querySelectorAll('button[aria-label="Properties"]');
console.log(buttons.length);
buttons[0].addEventListener('click', function() {
  console.log("propertied");
});
