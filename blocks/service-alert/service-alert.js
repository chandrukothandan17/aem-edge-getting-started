console.log("hello");

if (document.readyState != "loading") { 
  console.log("loading done");

  console.log("dom loaded");
  const wrapper = document.getElementsByClassName('service-alert-wrapper'); 
  console.log(wrapper[0]);
  console.log(wrapper[0].firstElementChild);


 /* wrapper[0].forEach((ele) => {
      console.log(ele);
      const firstChild = ele.firstElementChild;
      console.log('firstChild');
      console.log(firstChild);
      firstChild.forEach((list) => {
            console.log(list);
      });
  }); */

}
