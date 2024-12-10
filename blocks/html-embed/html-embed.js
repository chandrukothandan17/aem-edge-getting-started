import {
    loadCSS,
    loadScript
} from '../../scripts/aem.js';

export default async function decorate(block) {
    const innerContent = block.querySelectorAll(':scope > div > div');
    const htmlCode = innerContent[0].innerHTML.trim();
    const js = innerContent[1].innerText.trim();
    const css = innerContent[2].innerText.trim();
    loadScriptInsideApp(js);
    const markup = htmlCode.replaceAll('&lt;', '<').replaceAll('&gt;', '>');
    console.log(markup);
    block.innerHTML = markup;
  }
  
  
  async function loadScriptInsideApp(href) {
    await loadScript(href);
}

async function loadCSSInsideApp(href) {
    await loadCSS(href);
}