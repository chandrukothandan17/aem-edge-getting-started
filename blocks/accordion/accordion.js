/*
 * Accordion Block
 * Recreate an accordion
 * https://www.hlx.live/developer/block-collection/accordion
 */

import { moveInstrumentation } from '../../scripts/scripts.js';

import { FETCH_TIMEOUTS } from '../../scripts/utils.js';

export default async function decorate(block) {
  [...block.children].forEach((row) => {
    // decorate accordion item label
    const label = row.children[0];
    const summary = document.createElement('summary');
    summary.className = 'accordion-item-label';
    summary.append(...label.childNodes);
    // decorate accordion item body
    const body = row.children[1];
    body.className = 'accordion-item-body';
    // decorate accordion item
    const details = document.createElement('details');
    moveInstrumentation(row, details);
    details.className = 'accordion-item';
    details.append(summary, body);
    row.replaceWith(details);
  });

  const searchPath = '/blocks/accordion';
  console.log("searchPath"+searchPath);
  console.log("code "+window.hlx.codeBasePath);
  const resp = await fetch(`${window.hlx.codeBasePath}${searchPath}/accordion.html`, {
    signal: AbortSignal.timeout(FETCH_TIMEOUTS.default),
  });

  const searchMarkup = await resp.text();
  const searchDom = await rewriteWdigetDom(searchMarkup);
  const accwrapper = document.getElementsByClassName('accordion-wrapper');
  console.log(accwrapper.length);
  console.log(accwrapper);
  accwrapper[0].append(searchDom);

}
