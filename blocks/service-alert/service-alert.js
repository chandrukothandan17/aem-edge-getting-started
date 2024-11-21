console.log("hello");

if (document.readyState != "loading") { 
  console.log("loading done");

  console.log("dom loaded");
  const wrapper = document.getElementsByClassName('service-alert-wrapper'); 
  console.log(wrapper);
  for(let service in wrapper){
    let serviceWrapper = wrapper[service];
    console.log(serviceWrapper);
    let listChildren = serviceWrapper.children;
    console.log("listChildren "+listChildren.length);
    for(let lis in listChildren){
        let sectionItem = listChildren[lis];
        console.log(sectionItem);
        let sectionList = sectionItem.children;
        console.log("length sectionitem "+sectionList.length);
        for(let items in sectionList){
          console.log(sectionList[items]);
          let serviceAlertItem = sectionList[items];
          let resource = serviceAlertItem.attributes['data-aue-resource'];
          let label = serviceAlertItem.attributes['data-aue-label']
          console.log(resource);
          console.log(label);
        }
    }
  }
  
}
