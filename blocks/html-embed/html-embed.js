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
    if(js){
        loadScriptInsideApp(js);
    }
    const css = innerContent[4].innerText.trim();
    if(css){
        loadCSSInsideApp(css);
    }
    if(jsscript){
        receiveScript(jsscript);
    }
    if(cssscript){
        receiveCasecade(cssscript);
    }
    const markup = htmlCode.replaceAll('&lt;', '<').replaceAll('&gt;', '>').replaceAll('&nbsp; ','').replaceAll('<br>','');
    console.log(markup);
    block.innerHTML = markup;
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
        const cssChild = htmlDoc.head.firstChild;
       document.head.appendChild(cssChild);
    }
  }