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
       
        const javascriptfiles = jsfiles.split(',');
        javascriptfiles.forEach((file)=>{
            console.log(file);
            loadScriptInsideApp(parentPath+"/js/"+file);
        });

        const cascadefiles = jsfiles.split(',');
        cascadefiles.forEach((file)=>{
            console.log(file);
            loadCSSInsideApp(parentPath+"/css/"+file);
        })                
    
}

async function loadScriptInsideApp(href){
    await loadScript(href, { type: 'module' });
}

async function loadCSSInsideApp(href){
    await loadCSS(href);
}
