import {
    loadCSS,
    loadScript
} from '../../scripts/aem.js';

export default async function decorate(block) {
    const innerContent = block.querySelectorAll(':scope > div > div');
    console.log(innerContent[0].innerHTML);
    console.log(innerContent[1].innerText);
    const markup = [...innerContent].map((el) => el.textContent).join('').replaceAll('&lt;', '<').replaceAll('&gt;', '>');
    console.log(markup);
    block.innerHTML = markup;
  }
  
  