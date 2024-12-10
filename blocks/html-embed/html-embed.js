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
        let exampleScript = encodeURIComponent(str);
        console.log(exampleScript);
        const script = document.createElement('script');
        console.log(script)
        script.text = decodeURIComponent(exampleScript);
        console.log(text);
        document.head.appendChild(script);
    }
  }

  function receiveCasecade(str) {
    if(str){
        let exampleScript = encodeURIComponent(str);
        const script = document.createElement('style');
        script.text = decodeURIComponent(exampleScript);
        document.head.appendChild(script);
    }
  }