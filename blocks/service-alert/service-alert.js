console.log("hello");
const serviceAlertItem = document.querySelectorAll('.service-alert-wrapper div[data-aue-model="service-alert-item"]'); 
serviceAlertItem.forEach(function(items) { 
    const pele = document.createElement('p');
    pele.data-aue-prop = 'alert-id';
    pele.data-aue-label = 'Alert Id';
    pele.data-aue-type = 'text';
    pele.textContent = 'alert'+Math.floor(Math.random() * 999999);
    items.firstChild.append(pele);
}); 