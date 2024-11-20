console.log("hello");


async function propertiesClicked(){
  const buttons = document.querySelectorAll('button[aria-label="Properties"]');
  console.log(buttons.length);
  buttons[0].addEventListener('click', function() {
    console.log("propertied");
  });
}

document.addEventListener('DOMContentLoaded', function() {
  propertiesClicked();
});
