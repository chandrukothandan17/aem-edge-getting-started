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
    const markup = htmlCode.replaceAll('&lt;', '<').replaceAll('&gt;', '>');
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
        const text = htmlDoc.documentElement.textContent;
        console.log(text);
        console.log(htmlDoc.head);
        //const script = document.createElement('script');
       // script.innerHtml = htmlDoc;
      //  document.head.appendChild(htmlDoc);
    }
  }

  function receiveCasecade(str) {
    if(str){
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(str, 'text/html');
        const text = htmlDoc.documentElement.textContent;
        const style = document.createElement('style');
        style.innerHtml = text;
        document.head.appendChild(style);
    }
  }