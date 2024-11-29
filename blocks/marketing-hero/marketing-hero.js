export default async function decorate(block) {

   
    // console.log(block.querySelector('p'));
 
     const rows = block.querySelectorAll(':scope > div');
     createMarketingBlock(rows);

     function createMarketingBlock(rows){
        if(rows.length>0){
            console.log(rows[0].innerText);
            const title = rows[0].innerText;
            const description = rows[1].innerText;
            const ctaButton = rows[2].innerText;
            const ctaUrl = rows[3].innerText;
            const secondaryCtaButton = rows[4].innerText;
            const secondaryCtaUrl = rows[5].innerText;
            const imageType = rows[6].innerText;

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
        h1.textContent  = title;

        upsBodyContent.appendChild(h1);

        upsBody.appendChild(upsBodyContent);

        upsCard.append(upsImage, upsBody);
        
        marketingContainer.appendChild(upsCard);

        const arcContainer = document.createElement('div');
        arcContainer.className = 'arc-container';

        marketingHeroBlock.append(marketingContainer, arcContainer);

        block.appendChild(marketingHeroBlock);
       console.log(block);

        }

        
     }
     
 
     [...block.children].forEach((row) => {
         
        
        
 
         //row.remove();
 
 
     });
 
 }