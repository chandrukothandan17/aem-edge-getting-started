export default async function decorate(block) {

   
   // console.log(block.querySelector('p'));

    const rows = block.querySelectorAll(':scope > div');

    console.log(rows);

    console.log(rows.innerText);

    [...block.children].forEach((row) => {
        const label = row.children[0];
        const text = label.firstChild.textContent;
        console.log(text);
        const marketingHeroBlock = document.createElement('div');
        marketingHeroBlock.className = 'ups-component hero hero-default  has-breadcrumbs';

        const marketingContainer = document.createElement('div');
        marketingContainer.className = 'ups-container';

        const upsCard = document.createElement('div');
        upsCard.className = 'card ups-card';

        const upsImage = document.createElement('div');
        upsCard.className = 'card-img fade-in-up-light';

        const upsBody = document.createElement('div');
        upsCard.className = 'card-body fade-in-up-light';

        const upsBodyContent = document.createElement('div');
        upsBodyContent.className = 'card-body-content';

        const h1 = document.createElement('h1');
        h1.textContent  = text;

        upsBodyContent.appendChild(h1);

        upsBody.appendChild(upsBodyContent);

        upsCard.append(upsImage, upsBody);
        
        marketingContainer.appendChild(upsCard);

        const arcContainer = document.createElement('div');
        arcContainer.className = 'arc-container';

        marketingHeroBlock.append(marketingContainer,arcContainer);

      //  row.replaceWith(marketingHeroBlock);


    });

}