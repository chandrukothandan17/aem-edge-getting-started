import {
    loadCSS,
    loadScript
  } from '../../scripts/aem.js';

export default async function decorate(block) {
    console.log(block);
    [...block.children].forEach((row, i) => {
        console.log(row);
        console.log(row.innerText);
        const divId = row[0].innerText.trim();
        const parentPath = row[1].innerText.trim();
        const jsfiles = row[2].innerText.trim();
        const cssfiles = row[3].innerText.trim();
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
                    
    });
}

async function loadScriptInsideApp(href){
    await loadScript(href, { type: 'module' });
}

async function loadCSSInsideApp(href){
    await loadCSS(href);
}
