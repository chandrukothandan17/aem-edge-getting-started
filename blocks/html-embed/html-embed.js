export default async function decorate(block) {
    const innerContent = block.querySelectorAll(':scope > div > div');
    console.log(innerContent);
    const markup = [...innerContent].map((el) => el.textContent).join('').replaceAll('&lt;', '<').replaceAll('&gt;', '>');
    console.log(markup);
    block.innerHTML = markup;
  }
  