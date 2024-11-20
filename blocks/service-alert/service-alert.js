console.log("hello");

document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.getElementsByClassName('service-alert-wrapper'); 
    wrapper.forEach((ele) => {
        const firstChild = ele.firstElementChild;
        console.log(firstChild);
        firstChild.forEach((list) => {
              console.log(list);
        });
    });
});
