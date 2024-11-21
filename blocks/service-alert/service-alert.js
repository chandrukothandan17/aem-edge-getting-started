console.log("hello");

if (document.readyState != "loading") { 
  console.log("loading done");

  console.log("dom loaded");
  const wrapper = document.getElementsByClassName('service-alert-wrapper'); 

  for(let service in wrapper){
    const serviceWrapper = wrapper[service];
    const listChildren = serviceWrapper.children;
    for(let lis in listChildren){
        const sectionItem = listChildren[lis];
        const sectionList = sectionItem.children;
        for(let items in sectionList){
          console.log(sectionList[items]);
        }
    }
  }
  
}
