console.log("hello");


const buttons = document.querySelectorAll('button[aria-label="Properties"]');

// Add a click event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', function() {
    console.log("propertied");
  });
});