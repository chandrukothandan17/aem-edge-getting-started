console.log("hello");
const serviceAlertItem = document.querySelectorAll('.service-alert-wrapper div[data-aue-model="service-alert-item"]'); 
serviceAlertItem.forEach(function(items) { 
    items.forEach(function(it){
        console.log(it);
    });
}); 