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
        document.head.append(eval(jsscript));
    }
    if(cssscript){
        document.head.append(eval(cssscript));
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