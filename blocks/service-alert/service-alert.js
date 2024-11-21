console.log("hello");

if (document.readyState != "loading") { 
  console.log("loading done");

  console.log("dom loaded");
  const wrapper = document.getElementsByClassName('service-alert-wrapper'); 
  wrapper.forEach((first) => {  console.log(first); });

  console.log(wrapper[0]);
  const firstChild = wrapper[0].firstElementChild;
  const listChildren = firstChild.children;
  console.log(listChildren);
 /*listChildren.forEach((ele) => {
      console.log(ele);
      const firstChild = ele.firstElementChild;
      console.log('firstChild');
      console.log(firstChild);
     
  }); */

}
