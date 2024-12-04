export default async function decorate(block) {

    const rows = block.querySelectorAll(':scope > div');
    createMarketingBlock(rows);

    const autoplay = block.classList.contains('autoplay');
    console.log(autoplay);


    if (autoplay) {
        const observer = new IntersectionObserver((entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            observer.disconnect();
            const playOnLoad = autoplay && !prefersReducedMotion.matches;
            loadVideoEmbedMarketingHero(block, link, playOnLoad, autoplay);
          }
        });
        observer.observe(block);
      }

    function createMarketingBlock(rows) {
        if (rows.length > 0) {
            const title = rows[0].innerText;
            const description = rows[1].innerText;
            const ctaButton = rows[2].innerText;
            const ctaUrl = rows[3].innerText;
            const secondaryCtaButton = rows[4].innerText;
            const secondaryCtaUrl = rows[5].innerText;
            const imageList = rows[6].querySelectorAll('img');
            let imageurl;
            if(imageList.length>0){
                imageurl = imageList[0].getAttribute('src');
            }
            const smallText = rows[7].querySelectorAll('p');
            const imageType = rows[8].innerText.trim();

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

            const upsVideo = document.createElement('div');
            upsVideo.className = 'iframe-video-container';
            upsVideo.innerHTML = ` <iframe title="youtube iframe" class="img-fluid" src="/content/aem-edge-getting-started-site.resource/blocks/marketing-hero/marketing-hero-video.html" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>`;

            const upsBody = document.createElement('div');
            upsBody.className = 'card-body fade-in-up-light';

            const upsBodyContent = document.createElement('div');
            upsBodyContent.className = 'card-body-content';

            const h1 = document.createElement('h1');
            h1.textContent = title;

            const cta = document.createElement('a');
            cta.className = 'ups-cta ups-cta-primary';
            cta.href = ctaUrl.trim();
            cta.textContent = ctaButton;

            const secondaryCta = document.createElement('a');
            secondaryCta.className = "ups-cta ups-cta-secondary";
            secondaryCta.href = secondaryCtaUrl.trim();
            secondaryCta.textContent = secondaryCtaButton;

            const span = document.createElement('span');
            span.className = 'icon ups-icon-right-arrow';

            const span1 = document.createElement('span');
            span.className = 'icon ups-icon-right-arrow';

            cta.appendChild(span1);

            secondaryCta.appendChild(span);

            const p = document.createElement('p');
            p.textContent = description;

            const smallp = document.createElement('p');
            const small = document.createElement('small');
            small.innerHTML = smallText[0].innerHTML;
            smallp.appendChild(small);


            if (imageType === "image") {
                console.log("image");
                upsImage.appendChild(image);
                upsBodyContent.append(h1, p, cta, smallp);
            } else if (imageType === "image-without-small-text-with-secondary-cta") {
                console.log("image with secondary");
                upsImage.appendChild(image);
                upsBodyContent.append(h1, p, cta, secondaryCta, smallp);
            } else if (imageType === "video") {
                upsImage.appendChild(upsVideo);
                upsBodyContent.append(h1, p, cta, smallp);
            } else if (imageType === "video-seondary-cta"){
                upsImage.appendChild(upsVideo);
                upsBodyContent.append(h1, p, cta,secondaryCta, smallp);
            }else {
                console.log("else");
                upsImage.appendChild(image);
                upsBodyContent.append(h1, p, cta, smallp);
            }

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
               // row.remove();
            });
            block.appendChild(marketingHeroBlock);
            console.log(block);

        }


    }
}

const loadVideoEmbedMarketingHero = (block, link, autoplay, background) => {
    if (block.dataset.embedLoaded === 'true') {
      return;
    }
    const url = new URL(link);
  
    const isYoutube = link.includes('youtube') || link.includes('youtu.be');
    const isVimeo = link.includes('vimeo');
  
    if (isYoutube) {
      const embedWrapper = embedYoutubeMarketingHero(url, autoplay, background);
      block.append(embedWrapper);
      embedWrapper.querySelector('iframe').addEventListener('load', () => {
        block.dataset.embedLoaded = true;
      });
    } else if (isVimeo) {
      const embedWrapper = embedVimeoMarketingHero(url, autoplay, background);
      block.append(embedWrapper);
      embedWrapper.querySelector('iframe').addEventListener('load', () => {
        block.dataset.embedLoaded = true;
      });
    } else {
      const videoEl = getVideoElementMarketingHero(link, autoplay, background);
      block.append(videoEl);
      videoEl.addEventListener('canplay', () => {
        block.dataset.embedLoaded = true;
      });
    }
  };

  function getVideoElementMarketingHero(source, autoplay, background) {
    const video = document.createElement('video');
    video.setAttribute('controls', '');
    if (autoplay) video.setAttribute('autoplay', '');
    if (background) {
      video.setAttribute('loop', '');
      video.setAttribute('playsinline', '');
      video.removeAttribute('controls');
      video.addEventListener('canplay', () => {
        video.muted = true;
        if (autoplay) video.play();
      });
    }
  
    const sourceEl = document.createElement('source');
    sourceEl.setAttribute('src', source);
    sourceEl.setAttribute('type', `video/${source.split('.').pop()}`);
    video.append(sourceEl);
  
    return video;
  }


  function embedYoutubeMarketingHero(url, autoplay, background) {
    const usp = new URLSearchParams(url.search);
    let suffix = '';
    if (background || autoplay) {
      const suffixParams = {
        autoplay: autoplay ? '1' : '0',
        mute: background ? '1' : '0',
        controls: background ? '0' : '1',
        disablekb: background ? '1' : '0',
        loop: background ? '1' : '0',
        playsinline: background ? '1' : '0',
      };
      suffix = `&${Object.entries(suffixParams).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&')}`;
    }
    let vid = usp.get('v') ? encodeURIComponent(usp.get('v')) : '';
    const embed = url.pathname;
    if (url.origin.includes('youtu.be')) {
      [, vid] = url.pathname.split('/');
    }
  
    const temp = document.createElement('div');
    temp.innerHTML = `<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;">
        <iframe src="https://www.youtube.com${vid ? `/embed/${vid}?rel=0&v=${vid}${suffix}` : embed}" style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" 
        allow="autoplay; fullscreen; picture-in-picture; encrypted-media; accelerometer; gyroscope; picture-in-picture" allowfullscreen="" scrolling="no" title="Content from Youtube" loading="lazy"></iframe>
      </div>`;
    return temp.children.item(0);
  }

  function embedVimeoMarketingHero(url, autoplay, background) {
    const [, video] = url.pathname.split('/');
    let suffix = '';
    if (background || autoplay) {
      const suffixParams = {
        autoplay: autoplay ? '1' : '0',
        background: background ? '1' : '0',
      };
      suffix = `?${Object.entries(suffixParams).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&')}`;
    }
    const temp = document.createElement('div');
    temp.innerHTML = `<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: 56.25%;">
        <iframe src="https://player.vimeo.com/video/${video}${suffix}" 
        style="border: 0; top: 0; left: 0; width: 100%; height: 100%; position: absolute;" 
        frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen  
        title="Content from Vimeo" loading="lazy"></iframe>
      </div>`;
    return temp.children.item(0);
  }
  