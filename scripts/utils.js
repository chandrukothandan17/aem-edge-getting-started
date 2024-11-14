import {
    getMetadata, fetchPlaceholders, toCamelCase,
  } from './aem.js';
  
  export const FETCH_TIMEOUTS = {
    default: 5000,
    blueconic: 1500,
    locator: 5000,
    ims: 10000,
    target: 2000,
  };
  

  export async function replacePlaceholders(element) {
    const placeholders = await fetchLocalePlaceholders();
    element.querySelectorAll('[data-placeholder]').forEach((el) => {
      el.textContent = getPlaceholderString(el.textContent, placeholders);
    });
  
    element.querySelectorAll('[data-placeholder-attr]').forEach((el) => {
      const attrNames = el.getAttribute('data-placeholder-attr').split(',').filter((attr) => attr.trim() !== '');
      attrNames.forEach((attrName) => {
        const keyText = el.getAttribute(attrName);
        getPlaceholderString(keyText, placeholders);
      });
    });
  }

  export async function fetchLocalePlaceholders() {
    let localePath;
    if (/^\/[a-z]{2}\/[a-z]{2}\//.test(window.location.pathname)) {
      localePath = window.location.pathname.substring(0, 6);
    } else {
      localePath = '/us/en';
    }
  
    return fetchPlaceholders(localePath);
  }

  export function getPlaceholderString(keyText, placeholders) {
    const key = toCamelCase(keyText);
    if (key in placeholders && placeholders[key]) return placeholders[key];
  
    return keyText;
  }