// Get references to the data attributes set by authors
const dynamicAssets = document.getElementById("dynamic-assets");
const cssPath = dynamicAssets.getAttribute("data-css-path");
const jsPaths = dynamicAssets.getAttribute("data-js-paths").split(",");  // Assuming comma-separated paths
const scriptType = dynamicAssets.getAttribute("data-script-type") || "module";
const rootId = dynamicAssets.getAttribute("data-root-id") || "root";

// Function to create the React container div if a specific ID is provided
function ensureRootDiv(id) {
    let rootDiv = document.getElementById(id);
    if (!rootDiv) {
        rootDiv = document.createElement("div");
        rootDiv.id = id;
        document.body.appendChild(rootDiv);
    }
}

// Function to load CSS dynamically
function loadCSS(href) {
    if (href) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
    }
}

// Function to load JavaScript dynamically
function loadScript(src, type) {
    if (src) {
        const script = document.createElement("script");
        script.src = src;
        script.type = type;
        document.getElementById("dynamic-assets").appendChild(script);
    }
}

// Ensure the React container div is available with the specified or default ID
ensureRootDiv(rootId);

// Load the CSS file if provided
loadCSS(cssPath);

// Load each JS file with the specified type
jsPaths.forEach(file => loadScript(file.trim(), scriptType));