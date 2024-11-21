console.log("hello");

if (document.readyState != "loading") { 
  console.log("loading done");

  console.log("dom loaded");
  const wrapper = document.getElementsByClassName('service-alert-wrapper'); 

  for(let first in wrapper){
    const childs = wrapper[first];
    const listChildren = childs.children;
    for(let lis in listChildren){
        console.log(listChildren[lis]);
    }
  }
  

 /*listChildren.forEach((ele) => {
      console.log(ele);
      const firstChild = ele.firstElementChild;
      console.log('firstChild');
      console.log(firstChild);
     
  }); */

}
