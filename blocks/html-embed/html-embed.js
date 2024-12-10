import {
    loadCSS,
    loadScript
} from '../../scripts/aem.js';

export default async function decorate(block) {
    const innerContent = block.querySelectorAll(':scope > div > div');
    const htmlCode = innerContent[0].innerHTML.trim();
    const jsscript = innerContent[1].innerText.trim();
    const cssscript = innerContent[2].innerText.trim();
    const js = innerContent[3].innerText.trim();
    const css = innerContent[4].innerText.trim();
    loadScriptInsideApp(js);
    loadCSSInsideApp(css);
    if(jsscript){
        receiveScript(jsscript);
    }
    if(cssscript){
        receiveCasecade(cssscript);
    }
    //const markup = htmlCode.replaceAll('&lt;', '<').replaceAll('&gt;', '>').replaceAll('&nbsp; ','');
   // const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(markup, 'text/html');
    console.log(htmlDoc);
    block.innerHTML = htmlDoc;
  }
  
    async function loadScriptInsideApp(href) {
        await loadScript(href);
    }

    async function loadCSSInsideApp(href) {
        await loadCSS(href);
    }

  function receiveScript(str) {
    if(str){
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(str, 'text/html');
        console.log(htmlDoc);
        const scriptChild = htmlDoc.head.firstChild;
       document.head.appendChild(scriptChild);
    }
  }

  function receiveCasecade(str) {
    if(str){
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(str, 'text/html');
        console.log(htmlDoc);
        const cssChild = htmlDoc.body.firstChild;
       document.body.appendChild(cssChild);
    }
  }