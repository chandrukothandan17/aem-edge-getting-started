import {
    loadCSS,
    loadScript
} from '../../scripts/aem.js';

export default async function decorate(block) {
    console.log(block);
    const rows = block.querySelectorAll(':scope > div');
    const divId = rows[0].innerText.trim();
    const parentPath = rows[1].innerText.trim();
    const jsfiles = rows[2].innerText.trim();
    const cssfiles = rows[3].innerText.trim();
    

    const javascriptfiles = jsfiles.split(',');
    javascriptfiles.forEach((file) => {
        loadScriptInsideApp(`${window.hlx.codeBasePath}`+parentPath+"/"+file);
        console.log(`${window.hlx.codeBasePath}`+parentPath+"/"+file);
    });

    const cascadefiles = cssfiles.split(',');
    cascadefiles.forEach((file) => {
        loadCSSInsideApp(`${window.hlx.codeBasePath}`+parentPath+"/"+file);
       console.log(`${window.hlx.codeBasePath}`+parentPath+"/"+file);
    });

    [...block.children].forEach((rows)=>{
        rows.remove();
    });

    const divElement = document.createElement('div');
    divElement.id =  divId;

    block.appendChild(divElement);
}

async function loadScriptInsideApp(href) {
    await loadScript(href, { type: 'module' });
}

async function loadCSSInsideApp(href) {
    await loadCSS(href);
}
