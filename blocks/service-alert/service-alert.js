console.log("hello");

console.log("path "+window.location.pathname);

const url = 'https://universal-editor-service.experiencecloud.live/details';

const jsonData = {
  "connections": [
    {
      "name": "aemconnection",
      "protocol": "xwalk",
      "uri": "https://author-p120465-e1171116.adobeaemcloud.com"
    }
  ],
  "target": {
    "resource": "urn:aemconnection:/content/aem-edge-getting-started-site/index/service-alerts/jcr:content/root/section",
    "type": "component",
    "prop": ""
  }
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(jsonData),
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
  }
  return response.json();
})
.then(data => {
  console.log('Success:', data);
})
.catch(error => {
  console.error('Error:', error);
});
