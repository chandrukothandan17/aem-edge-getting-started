import {
    loadCSS,
    loadScript
  } from '../../scripts/aem.js';

export default async function decorate(block) {
    console.log(block);
    const rows = block.querySelectorAll(':scope > div');

        console.log(rows);
        const divId = rows[0].innerText.trim();
        const parentPath = rows[1].innerText.trim();
        const jsfiles = rows[2].innerText.trim();
        const cssfiles = rows[3].innerText.trim();
        console.log(parentPath+" -> "+jsfiles+" -> "+cssfiles);
        //let parentPath;
      /*  if(href.startsWith('/')){
            parentPath = href;
        }
        console.log(parentPath);
        if(href.includes('js')){
            loadScriptInsideApp(parentPath+"/js/"+href);
        }
        if(href.includes('css')){
            loadCSSInsideApp(parentPath+"/css/"+href);
        } */
                    
    
}

async function loadScriptInsideApp(href){
    await loadScript(href, { type: 'module' });
}

async function loadCSSInsideApp(href){
    await loadCSS(href);
}
