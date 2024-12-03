import {
    loadCSS,
    loadScript
  } from '../../scripts/aem.js';

export default async function decorate(block) {
    console.log(block);
    [...block.children].forEach((row, i) => {
        console.log(row);
        console.log(row.innerText);
        const href = row.innerText;
       // loadScriptInsideApp(href);
        
    });
}

async function loadScriptInsideApp(href){
    await loadScript(href, { type: 'module' });
}