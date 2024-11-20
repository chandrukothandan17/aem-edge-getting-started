console.log("hello");

if (document.readyState != "loading") { console.log("loading done");}

document.addEventListener('DOMContentLoaded', function() {
    console.log("dom loaded");
    const wrapper = document.getElementsByClassName('service-alert-wrapper'); 
    console.log(wrapper);
    wrapper.forEach((ele) => {
        console.log(ele);
        const firstChild = ele.firstElementChild;
        console.log(firstChild);
        firstChild.forEach((list) => {
              console.log(list);
        });
    });
});
