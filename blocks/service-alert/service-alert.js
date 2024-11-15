console.log("hello");
const serviceAlertItem = document.querySelectorAll('.service-alert-wrapper div[data-aue-model="service-alert-item"]'); 
serviceAlertItem.forEach(function(items) { 
    items.firstChild.innerHtml += `<p data-aue-prop="alert-id" data-aue-label="Alert Id" data-aue-type="text">`+ Math.floor(Math.random() * 999999) +`</p>`;
    console.log(items.firstChild.innerHtml);
}); 