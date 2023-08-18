

$(document).ready(function() {
  if($(window).width()<500){
    $(".hideMobile").remove();
  } else {
    $(".hideDesktop").remove();
  }
  let obj = [
    {
      thumbnail:'https://global-uploads.webflow.com/5f46baf9863467a01b1aaab9/5f4e5dd05ef4437b8d583390_volume-white.svg',
      contentHighlight:'#164 Essay: “The Playing Field” by Graham Duncan 1',
      contentReadMore: "What I learned reading The Playing Field by Graham Duncan. By far the best piece of writing I've read on the journey we must all make to reach mastery in our fields.",
      readMore:'Read More'
    },
    {
      thumbnail:'https://global-uploads.webflow.com/5f4f71d4aeab4787c7926d10/64cbac57be8cac9e2176140b_Ep-166_YouTube-Artwork.png',
      contentHighlight:'#166 Book Summary: “The Essays of Warren Buffett” by Lawrence Cunningham (Part 2)',
      contentReadMore: "What I learned reading The Essays of Warren Buffett by Lawrence Cunningham. Which brings together 50+ years of Warren's shareholder letters and groups all of his ideas over the years by topic.",
      readMore:'Show Notes'
    },
    {
      thumbnail:'https://global-uploads.webflow.com/5f46baf9863467a01b1aaab9/5f4e5dd05ef4437b8d583390_volume-white.svg',
      contentHighlight:'#160 Kevita &amp; Flying Embers: Building Functional Beverage Companies from Kevita’s $200M+ Acquisition to Flying Embers Big Bet on Fermented Alcoholic Drinks | Bill Moses, Founder &amp; CEO',
      contentReadMore: "On the latest episode of Outlier Founders, we profile Kevita and Flying Embers—two innovative beverage companies that have built big businesses focused on fermentation.",
      readMore:'Show Notes'
    },
    {
      thumbnail:'https://global-uploads.webflow.com/5f46baf9863467a01b1aaab9/5f4e5dd05ef4437b8d583390_volume-white.svg',
      contentHighlight:'#163 Andy Budd, Design Thinker &amp; Founder of Clearleft: Favorite Books, Lessons Learned as a Designer, Superpowers, and More',
      contentReadMore: "On the latest episode of 20 Minute Playbook, we interview one of the world’s leading design thinkers, Clearleft founder Andy Budd, to decode what he’s mastered and what he’s learned along the way.",
      readMore:'Show Notes'
    },
    {
      thumbnail:'https://global-uploads.webflow.com/5f46baf9863467a01b1aaab9/5f4e5dd05ef4437b8d583390_volume-white.svg',
      contentHighlight:'#161 Bill Moses, Founder &amp; CEO of Kevita and Flying Embers: Favorite Books, Lessons Learned as a Serial Founder, Superpowers, and More',
      contentReadMore: "On the latest episode of 20 Minute Playbook, we interview Bill Moses, Founder &amp; CEO of Kevita and Flying Embers.",
      readMore:'Show Notes'
    },
    {
      thumbnail:'https://global-uploads.webflow.com/5f46baf9863467a01b1aaab9/5f4e5dd05ef4437b8d583390_volume-white.svg',
      contentHighlight:'#162 A Masterclass in Product Design with Andy Budd (Founder of Clearleft)',
      contentReadMore: "On the latest episode of Outlier Founders, we sit down with iconic design studio Clearleft’s founder Andy Budd to learn the approach to designing and building products that he’s honed over decades.",
      readMore:'Show Notes'
    }
  ]
  for(let i = 0; i<obj.length; i++){
    const slideContent = `
    <div class="slide-collection">
      <div class="thumbnail">
        <div class="newEpisode">
          NEW EPISODE
        </div>
        <div class="listenNow">
          <img style="width: 18px; margin-right: 6px;" src="https://global-uploads.webflow.com/5f46baf9863467a01b1aaab9/5f4e5dd05ef4437b8d583390_volume-white.svg">
          <span>Listen Now</span>
        </div>
      </div>
      <div class="slideContent">
        <div>
          <div class="slideContentHighlight">
            ${obj[i].contentHighlight}
          </div>
          <p class="slideContentText">
            ${obj[i].contentReadMore}
          </p>
        </div>
        <div class="slideContentReadMore">
          ${obj[i].readMore}
          <img style="margin-left:10px;" src="https://global-uploads.webflow.com/5f46baf9863467a01b1aaab9/5f6213d3f8a827067a8a3dd7_ds-arrow-right-orange.svg">
        </div>
      </div>
    </div>
  `;

  $('.slide-wrapper').append(slideContent);
  }
  if($(window).width()<500){
    $('.slide-wrapper').slick({
      prevArrow: null,
      nextArrow: null
    });
  } else {
    $('.slide-wrapper').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
    });
  }
  
});