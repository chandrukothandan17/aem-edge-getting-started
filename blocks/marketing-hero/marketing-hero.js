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
            const imageList = rows[6].querySelectorAll('img');
            const imageurl = imageList[0].getAttribute('src');
            const smallText = rows[7].querySelectorAll('p');
           // const smallText = rows[7].innerText;
           console.log(smallText.innerHTML);
            const imageType = rows[8].innerText;

            const marketingHeroBlock = document.createElement('div');
        marketingHeroBlock.className = 'ups-component hero hero-default  has-breadcrumbs';

        const marketingContainer = document.createElement('div');
        marketingContainer.className = 'ups-container';

        const upsCard = document.createElement('div');
        upsCard.className = 'card ups-card';

        const upsImage = document.createElement('div');
        upsImage.className = 'card-img fade-in-up-light';

        const image = document.createElement('img');
        image.className = 'img-fluid';
        image.src = imageurl;
        image.loading = 'lazy';
        image.alt = 'banner';

        upsImage.appendChild(image);

        const upsBody = document.createElement('div');
        upsBody.className = 'card-body fade-in-up-light';

        const upsBodyContent = document.createElement('div');
        upsBodyContent.className = 'card-body-content';

        const h1 = document.createElement('h1');
        h1.textContent  = title;

        const cta = document.createElement('a');
        cta.className = 'ups-cta ups-cta-primary';
        cta.href = ctaUrl.trim();
        cta.textContent = ctaButton;

        const span = document.createElement('span');
        span.className = 'icon ups-icon-right-arrow';
        
        cta.appendChild(span);

        const p = document.createElement('p');
        p.textContent = description;

        const smallp = document.createElement('p');
        const small = document.createElement('small');
        small.innerHTML = smallText.innerHTML;
        smallp.appendChild(small);

        upsBodyContent.append(h1, p, cta, smallp);

        upsBody.appendChild(upsBodyContent);

        upsCard.append(upsImage, upsBody);
        
        marketingContainer.appendChild(upsCard);

        const arcContainer = document.createElement('div');
        arcContainer.className = 'arc-container';

        arcContainer.innerHTML = `<svg width="1440" class="arc" height="72" viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M-400 176C139.222 -24.794 1028.42 -10.941 1440 13.8751V176L-400 176Z" fill="white"></path>
                  </svg>`;

        marketingHeroBlock.append(marketingContainer, arcContainer);
        [...block.children].forEach((row) => {
             //row.remove();
        });
        block.appendChild(marketingHeroBlock);
        console.log(block);

        }

        
     } 
 }