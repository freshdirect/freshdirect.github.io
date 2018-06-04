---
layout: styleguide
title: Modules
lead: A list of global modules around the store.
---

<h2 class="usa-heading" id="text-inputs">Overlays</h2>
<p class="usa-font-lead">Overlays are used to present different kinds of information without loading a new page.</p>

<div class="preview">

  <h4>GENERAL</h4>
  <p>Overlays have a few display rules which apply to all sizes. Please review below:</p>
  <ul class="overlay-numbers">
    <li>There's no maximum height value. Height is determined by the amount of content inside the overlay</li>
    <li>All overlays have a minimum height value</li>
    <li>All overlays have two inner padding values, which will be determined based on the layout</li>
    <li>All overlays will have <strong>the option to display the header "outside" of content area</strong>. Similarly to FoodKick.</li>
    <li>Close button (X) is <strong>always visible</strong></li>
    <li>Overlay background color value (CSS): <em class="em-yellow-bg"><code>rgba(255, 255, 255, 0.8);</code></em></li>
  </ul>

  <h4>SMALL</h4>
  <ul class="overlay-numbers">
    <li><span>width:</span> 400px</li>
    <li><span>min-height:</span> 232px</li>
    <li><span>padding:</span> 30px / 40px</li>
    <li><span>top:</span> 150px</li>
  </ul>
  <button id="sm-overlay-btn" class="fd-button-ghost-green fd-button-small fd-button-wide">View Example</button>

  <h4>MEDIUM</h4>
  <ul class="overlay-numbers">
    <li><span>width:</span> 480px</li>
    <li><span>min-height:</span> 246px</li>
    <li><span>padding:</span> 30px / 40px / 60px</li>
    <li><span>top:</span> 150px</li>
  </ul>
  <button id="md-overlay-btn" class="fd-button-ghost-green fd-button-small fd-button-wide">View Example</button>

  <h4>LARGE</h4>
  <ul class="overlay-numbers">
    <li><span>width:</span> 800px</li>
    <li><span>min-height:</span> 514px</li>
    <li><span>padding:</span> 40px / 60px</li>
    <li><span>top:</span> 150px</li>
  </ul>
  <button id="lg-overlay-btn" class="fd-button-ghost-green fd-button-small fd-button-wide">View Example</button>

  <h4>FULL SCREEN</h4>
  <ul class="overlay-numbers">
    <li><span>width:</span> full width</li>
    <li><span>height:</span> full height</li>
    <li><span>content-width:</span> 970px</li>
  </ul>
  <button id="fs-overlay-btn" class="fd-button-ghost-green fd-button-small fd-button-wide">View Example</button>

</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Accessibility</h4>
    <p>In general, there are three kinds of content that can be displayed in overlays: <a id="sm-overlay-btn-2" href="#">Dialogue</a>, <a id="md-overlay-btn-2" href="#">Form</a>, and <a id="lg-overlay-btn-2" href="#">Rich Content</a>.</p>
    <h4>Dialogue & Form Overlays</h4>
    <ul class="usa-content-list">
      <li>Overlay should have <em class="em-yellow-bg"><code>role=”dialog”</code></em> attribute. <a href="https://www.w3.org/WAI/GL/wiki/Using_ARIA_role%3Ddialog_to_implement_a_modal_dialog_box">Learn more</a>.</li>
    </ul>
    <h4>All Overlays</h4>
    <ul class="usa-content-list">
      <li>Use <em class="em-yellow-bg"><code>aria-labelledby=""</code></em> for headers.</li>
      <li>Use <em class="em-yellow-bg"><code>aria-describedby=""</code></em> for content (paragraphs, lists, etc).</li> 
      <li>Close button should be an HTML button, not a div or span.</li>
      <li>All overlays should be accessible via the keyboard.</li>
    </ul>
  </div>
</div>

<h2 class="usa-heading">Carousels</h2>
<p class="usa-font-lead">Carousels are used to display both transactional and informational content. Example uses <a href="https://a11y.nicolas-hoffmann.net/carrousel/" target="_blank">Accessible Carousel</a> jquery plugin.</p>

<div class="preview carousels">

<!--   <h3>Informational Carousel</h3>
  <p>Primarily used for displaying multiple marketing initiatives. Usually displaying only one instance per page.</p>

  <div class="carrousel relative">      
    <ul class="fd-carousel carrousel__container mod--hidden" 
     data-carrousel-btn-previous-text="Previous"
     data-carrousel-btn-next-text="Next"
     data-carrousel-prefix-classes="fd"
     data-carrousel-span-text-class="invisible"
     data-carrousel-transition="slide"
     data-carrousel-existing-hx="h3">
            
      <li class="carrousel__content">
        <h3>Baked Potato</h3>
        <p>A beautiful story about a potato's day at the beach</p>
      </li><li class="carrousel__content">
        <h3>Stir-Fry Salad</h3>
        <p>Something went very, very wrong here</p>
      </li><li class="carrousel__content">
        <h3>Avocado Bag</h3>
        <p>The one when customers shopped at FoodKick</p>
      </li>
            
    </ul>
  </div>

  <h4>Features include:</h4>
  
  <ul class="usa-content-list c-features">
    <li>
      <strong>General</strong>
      <p>Carousel can have only one path destination. Usually making the entire slide one big link is most effective.</p>
      <p>Slide Header is focusable.</p>
    </li>
    <li>
      <strong>Pagination Dots</strong>
      <p>Accessible through the keyboard.</p>
      <p>Labeled with the copy text of its corresponding slide header (Screen Reader friendly).</p>
    </li>
  </ul>

  <h3 class="trans">Transactional Carousel</h3>
  <p>Displays slides of product cards. This type of carousel is used on a page that requires multiple sets of carousels.</p> -->

  <div class="carousel-top">
    <!-- <a class="header-btn fd-link" href="#">Summer Time Blueberry Fix</a> -->
    <h3 tabindex="0">Summer Time Blueberry Fix</h3>
  </div>
  
  <div id="t-carousel-1" class="multi-product carrousel relative">      
    <ul class="fd-carousel carrousel__container mod--hidden" 
     data-carrousel-btn-previous-text="Previous"
     data-carrousel-btn-next-text="Next"
     data-carrousel-prefix-classes="fd"
     data-carrousel-span-text-class="invisible"
     data-carrousel-transition="slide"
     data-carrousel-existing-hx="h3">
            
      <li class="carrousel__content">

        <h3 aria-hidden="true">Page 1 of 3</h3>
        <div class="fd-pcard">
          <div class="img-box"></div>
          <a class="first-element" href="#">
            <h4>Famous Buffalo <span class="off-screen">$9.00</span></h4>
          </a>
          <div class="fd-pblurb">Blueberry Pie</div>
          <div class="fd-pprice">$9.00</div>
          <button class="fd-button-green fd-button-small">Add to Cart</button>
        </div>
        <div class="fd-pcard">
          <div class="img-box"></div>
          <a href="#">
            <h4>Famous Buffalo <span class="off-screen">$9.00</span></h4>
          </a>
          <div class="fd-pblurb">Blueberry Pie</div>
          <div class="fd-pprice">$9.00</div>
          <button class="fd-button-green fd-button-small">Add to Cart</button>
        </div>
        <div class="fd-pcard">
          <div class="img-box"></div>
          <a href="#">
            <h4>Famous Buffalo <span class="off-screen">$9.00</span></h4>
          </a>
          <div class="fd-pblurb">Blueberry Pie</div>
          <div class="fd-pprice">$9.00</div>
          <button class="fd-button-green fd-button-small">Add to Cart</button>
        </div>
        <div class="fd-pcard">
          <div class="img-box"></div>
          <a href="#">
            <h4>Famous Buffalo <span class="off-screen">$9.00</span></h4>
          </a>
          <div class="fd-pblurb">Blueberry Pie</div>
          <div class="fd-pprice">$9.00</div>
          <button class="fd-button-green fd-button-small">Add to Cart</button>
        </div>

      </li><!--
   --><li class="carrousel__content">

        <h3 aria-hidden="true">Page 2 of 3</h3>
        <div class="fd-pcard">
          <div class="img-box"></div>
          <a class="first-element" href="#">
            <h4>Famous Buffalo <span class="off-screen">$9.00</span></h4>
          </a>
          <div class="fd-pblurb">Blueberry Pie</div>
          <div class="fd-pprice">$9.00</div>
          <button class="fd-button-green fd-button-small">Add to Cart</button>
        </div>
        <div class="fd-pcard">
          <div class="img-box"></div>
          <a href="#">
            <h4>Famous Buffalo <span class="off-screen">$9.00</span></h4>
          </a>
          <div class="fd-pblurb">Blueberry Pie</div>
          <div class="fd-pprice">$9.00</div>
          <button class="fd-button-green fd-button-small">Add to Cart</button>
        </div>
        <div class="fd-pcard">
          <div class="img-box"></div>
          <a href="#">
            <h4>Famous Buffalo <span class="off-screen">$9.00</span></h4>
          </a>
          <div class="fd-pblurb">Blueberry Pie</div>
          <div class="fd-pprice">$9.00</div>
          <button class="fd-button-green fd-button-small">Add to Cart</button>
        </div>
        <div class="fd-pcard">
          <div class="img-box"></div>
          <a href="#">
            <h4>Famous Buffalo <span class="off-screen">$9.00</span></h4>
          </a>
          <div class="fd-pblurb">Blueberry Pie</div>
          <div class="fd-pprice">$9.00</div>
          <button class="fd-button-green fd-button-small">Add to Cart</button>
        </div>

      </li><!--
   --><li class="carrousel__content">

        <h3 aria-hidden="true">Page 3 of 3</h3>
        <div class="fd-pcard">
          <div class="img-box"></div>
          <a class="first-element" href="#">
            <h4>Famous Buffalo <span class="off-screen">$9.00</span></h4>
          </a>
          <div class="fd-pblurb">Blueberry Pie</div>
          <div class="fd-pprice">$9.00</div>
          <button class="fd-button-green fd-button-small">Add to Cart</button>
        </div>
        <div class="fd-pcard">
          <div class="img-box"></div>
          <a href="#">
            <h4>Famous Buffalo <span class="off-screen">$9.00</span></h4>
          </a>
          <div class="fd-pblurb">Blueberry Pie</div>
          <div class="fd-pprice">$9.00</div>
          <button class="fd-button-green fd-button-small">Add to Cart</button>
        </div>
        <div class="fd-pcard">
          <div class="img-box"></div>
          <a href="#">
            <h4>Famous Buffalo <span class="off-screen">$9.00</span></h4>
          </a>
          <div class="fd-pblurb">Blueberry Pie</div>
          <div class="fd-pprice">$9.00</div>
          <button class="fd-button-green fd-button-small">Add to Cart</button>
        </div>
        <div class="fd-pcard">
          <div class="img-box"></div>
          <a href="#">
            <h4>Famous Buffalo <span class="off-screen">$9.00</span></h4>
          </a>
          <div class="fd-pblurb">Blueberry Pie</div>
          <div class="fd-pprice">$9.00</div>
          <button class="fd-button-green fd-button-small">Add to Cart</button>
        </div>

      </li>
            
    </ul>
  </div>
  <button class="fd-button-ghost-green fd-button-small view-all">View All<span class="off-screen">Summer Time Blueverry Fix - 18 items</span></button>

  <h4>Features include:</h4>
  
  <ul class="usa-content-list c-features">
    <li>
      <strong>General</strong>
      <p>Customer is be able to TAB through all products in carousel without using pagination buttons</p>
    </li>
    <li>
      <strong>Carousel Header</strong> 
      <p>Header will have the name of the product list</p>
      <p>It's focusable</p>
    </li>
    <li>
      <strong>"View All" Button</strong>
      <p>Copy text format includes product list name and number of items. Example: <em class="em-yellow-bg"><code>View All [Product List Name] [Number of Items]</code></em></p>
      <p>Focusable after last item in carousel</p>
      <p>Clicking button displays full product list</p>
    </li>
    <li>
      <strong>Pagination Buttons</strong>
      <p>Previous button is disabled when first slide is displayed</p>
      <p>Next button is disabled when last slide is displayed</p>
    </li>
    <li>
      <strong>Pagination Dots</strong> 
      <p>NOT accessible through the keyboard</p>
    </li>
  </ul>

</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li>Users must be able to pause carousel movement because it can be too fast or distracting, making text hard to read.</li>
      <li>All functionality, including navigating between carousel items, must be operable by keyboard.
</li>
      <li>Changes to carousel items must be communicated to all users, including screen reader users.
</li>
      <li>The keyboard position (“focus”) is managed in a reasonable and comprehensible fashion.
</li>
    </ul>
  </div>
</div>

<h2 class="usa-heading" id="text-inputs">Quantity Pickers</h2>
<p class="usa-font-lead">Quantity pickers are present in product detail pages, product lists, and carousels around the store.</p>

<div class="preview">

  <h6>Default</h6>

  <div class="qty-picker">
    <button><i class="material-icons">&#xE15B;</i></button>
    <input type="text" value="1">
    <button class="right"><i class="material-icons">&#xE145;</i></button>
  </div>

  <h6>Short</h6>

  <div class="qty-picker short">
    <button><i class="material-icons">&#xE15B;</i></button>
    <input type="text" value="1">
    <button class="right"><i class="material-icons">&#xE145;</i></button>
  </div>

  <h6>Minimal</h6>

  <div class="qty-picker mini">
    <button><i class="material-icons">&#xE15B;</i></button>
    <input type="text" value="1">
    <button class="right"><i class="material-icons">&#xE145;</i></button>
  </div>

</div>

<div class="css-preview">
<style type="text/css">

  .qty-picker{
    display: inline-block;
    border-radius: 3px;
    border: 1px solid #c2c2c2;
    height: 46px;
    -webkit-transition: width 0.15s ease-in-out 0s; /* Safari */
    transition: width 0.15s ease-in-out 0s;
    overflow: hidden;
  }
  .qty-picker button,
  .qty-picker input{
    display: inline-block;
    vertical-align: top;
    border-width: 0px;
    appearance: none;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    outline: none;
  }
  .qty-picker button{
    height: 44px;
    width: 50px;
    padding: 0;
    margin: 0;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    line-height: 10px;
    color: #4fa157;
    background-color: #ffffff;
    border: 1px solid #ffffff;
  }
  .qty-picker button:focus,
  .qty-picker button:hover{
    background-color: #edf5ee;
    border-color: #edf5ee;
  }
  .qty-picker input{
    height: 44px;
    min-width: 38px;
    width: 38px;
    padding: 6px 4px;
    text-align: center;
    font-weight: bold;
  }
  .qty-picker.short{
    height: 35px;
  }
  .qty-picker.short input,
  .qty-picker.short button{
    height: 33px;
  }
  .qty-picker.mini{
    width: 40px;
  }
  .qty-picker.mini button{
    display: none;
  }
  .qty-picker.mini:hover button{
    display: inline-block;
  }
  .qty-picker.mini:hover{
    width: 147px;
  }

</style>
</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li>Plus and minus controls are buttons.</li>
      <li>Quantity input fields should have a unique name.</li>
    </ul>
  </div>
</div>

<!-- overlays -->
<div class="overlay-bg sm" role="dialog" aria-labelledby="email-reminder">

  <button class="close-btn">Close</button>
  <div class="container-box">
    <h3 id="email-reminder">Sign Up for Reminders</h3>
    <div class="form-row">
      <label>Email</label>
      <input type="text" placeholder="name@website.com">      
    </div>
    <div class="form-row">
      <button class="fd-button-green fd-button-large fd-button-wide center">Send</button>
    </div> 
  </div>

</div>

<div class="overlay-bg md" role="dialog" aria-labelledby="send-msg">
  <button class="close-btn">Close</button>
  <div class="container-box">
    <h3 id="send-msg">Send Us a Message</h3>
    <div class="form-row">
      <label>Email Address / User Name</label>
      <input type="text" placeholder="email@website.com">      
    </div>
    <div class="form-row">
      <label>Name</label>
      <input type="text" placeholder="Full Name">      
    </div>
    <div class="form-row">
      <label>Subject</label>
      <select id="default">
        <option value="1">Problem With My Order</option>
        <option value="2">I Gots No Moneys</option>
        <option value="3">Pluto is Not a Planet Anymore</option>
      </select>      
    </div>
    <div class="form-row">
      <label class="optional">Order #</label>
      <select id="default">
        <option value="1">75894574938759</option>
        <option value="2">92839238239829</option>
        <option value="3">99999999999933</option>
      </select>      
    </div>
    <div class="form-row">
      <textarea name="input-type-text" type="text" placeholder="I ordered radishes for a big dinner I'm cooking for my family and friends, something happened..."></textarea>
    </div>
    <div class="form-row">
      <button class="fd-button-green fd-button-large fd-button-wide center">Send</button>
    </div>
  </div>
</div>

<div class="overlay-bg lg" role="dialog" aria-labelledby="terms-header" aria-describedby="">
  <button class="close-btn">Close</button>
  <div class="container-box">
    <h2 id="terms-header">Terms of Service</h2>
    <p class="terms">Lucas ipsum dolor sit amet chazrach zhell dagobah yoda kamino wesell fel ti medon omwati. Vedder beru chewbacca thrawn mohc carondian duro. Ikrit chewbacca mandalorians yowza vulptereen. Kalarba mod luke hobbie. Carlist tarkin danni bothan boss. Rom koon c-3po chommell aparo han airen frozian jek. Walon geonosis lars gank senex crynyd. Sal-solo halla wilhuff organa p'w'eck zabrak jabba taun antilles. Quelli moor kenobi keshiri hutt veila er'kit. Ssi-ruuk nagai bando wharl watto saché chommell selonian gamorrean.</p>
    <p class="terms">Naberrie felucia ishi felth palpatine dormé vodran chiss. Wroonian ken zabrak daala shi'ido joruus windu. Sal-solo wharl tatooine nien caamasi massans vedder antilles tharin. Ailyn oola moff seerdon pa'lowick. Allana klivian togorian cody klivian dantooine skywalker jobal. Gilad kuat hutt fisto. Veila kal ugnaught castell cassio binks carnor woostoid. Saesee troig tharen kushiban zev kaleesh auril. Moddell sebulba moff ranat motti gonk. Sy wol kastolar quelli antilles amedda sunrider padmé. Rom quee depa jettster jagged biggs lars veknoid.</p>
    <p class="terms">Naberrie ortolan jawa zhell qel-droma derek plo rotta. Gilad rishii sebulba feeorin haako noa sulorine whaladon. Evazan thrella castell yuzzem gado. Darth lama toydarian tahiri dengar frozarns. Weequay tibor yoda darpa grievous maarek nute. Devaronian ysanne ponda natasi psadan kanos triclops. Hutt drovian organa spar dexter corran moff. T'landa cabasshite jek bane gamorr zhell ansuroer moff. Kushiban gizka obi-wan meridian kuat hutt. Kenobi grievous bothan freedon jax grievous aramandi. Koon organa whitesun cadavine.</p><br>
    <div class="form-row">
      <button class="fd-button-green fd-button-large fd-button-wide center">Accept</button><br>

      <button class="fd-button-ghost-green fd-button-large fd-button-wide center">Decline</button>  
    </div>  
  </div>
</div>

<div class="overlay-bg fs" role="dialog" aria-labelledby="terms-header" aria-describedby="">
  <div class="fs-header">
    <div class="close-btn-box">
      <button class="close-btn">Close</button>
    </div>
  </div>
  <div class="container-box m-pcards">

    <h1>Mystery Meals Du Jour</h1>

    <div class="fd-pcard">
      <div class="img-box"></div>
      <a class="first-element" href="#">
        <h4>Famous Buffalo <span class="off-screen">$9.00</span></h4>
      </a>
      <div class="fd-pblurb">Blueberry Pie</div>
      <div class="fd-pprice">$9.00</div>
      <button class="fd-button-green fd-button-small">Add to Cart</button>
    </div>
    <div class="fd-pcard">
      <div class="img-box"></div>
      <a href="#">
        <h4>Famous Buffalo <span class="off-screen">$9.00</span></h4>
      </a>
      <div class="fd-pblurb">Blueberry Pie</div>
      <div class="fd-pprice">$9.00</div>
      <button class="fd-button-green fd-button-small">Add to Cart</button>
    </div>
    <div class="fd-pcard">
      <div class="img-box"></div>
      <a href="#">
        <h4>Famous Buffalo <span class="off-screen">$9.00</span></h4>
      </a>
      <div class="fd-pblurb">Blueberry Pie</div>
      <div class="fd-pprice">$9.00</div>
      <button class="fd-button-green fd-button-small">Add to Cart</button>
    </div>
    <div class="fd-pcard">
      <div class="img-box"></div>
      <a href="#">
        <h4>Famous Buffalo <span class="off-screen">$9.00</span></h4>
      </a>
      <div class="fd-pblurb">Blueberry Pie</div>
      <div class="fd-pprice">$9.00</div>
      <button class="fd-button-green fd-button-small">Add to Cart</button>
    </div>
    <div class="fd-pcard">
      <div class="img-box"></div>
      <a class="first-element" href="#">
        <h4>Famous Buffalo <span class="off-screen">$9.00</span></h4>
      </a>
      <div class="fd-pblurb">Blueberry Pie</div>
      <div class="fd-pprice">$9.00</div>
      <button class="fd-button-green fd-button-small">Add to Cart</button>
    </div>
    <div class="fd-pcard">
      <div class="img-box"></div>
      <a href="#">
        <h4>Famous Buffalo <span class="off-screen">$9.00</span></h4>
      </a>
      <div class="fd-pblurb">Blueberry Pie</div>
      <div class="fd-pprice">$9.00</div>
      <button class="fd-button-green fd-button-small">Add to Cart</button>
    </div>
    <div class="fd-pcard">
      <div class="img-box"></div>
      <a href="#">
        <h4>Famous Buffalo <span class="off-screen">$9.00</span></h4>
      </a>
      <div class="fd-pblurb">Blueberry Pie</div>
      <div class="fd-pprice">$9.00</div>
      <button class="fd-button-green fd-button-small">Add to Cart</button>
    </div>
    <div class="fd-pcard">
      <div class="img-box"></div>
      <a href="#">
        <h4>Famous Buffalo <span class="off-screen">$9.00</span></h4>
      </a>
      <div class="fd-pblurb">Blueberry Pie</div>
      <div class="fd-pprice">$9.00</div>
      <button class="fd-button-green fd-button-small">Add to Cart</button>
    </div>
    <div class="fd-pcard">
      <div class="img-box"></div>
      <a class="first-element" href="#">
        <h4>Famous Buffalo <span class="off-screen">$9.00</span></h4>
      </a>
      <div class="fd-pblurb">Blueberry Pie</div>
      <div class="fd-pprice">$9.00</div>
      <button class="fd-button-green fd-button-small">Add to Cart</button>
    </div>
    <div class="fd-pcard">
      <div class="img-box"></div>
      <a href="#">
        <h4>Famous Buffalo <span class="off-screen">$9.00</span></h4>
      </a>
      <div class="fd-pblurb">Blueberry Pie</div>
      <div class="fd-pprice">$9.00</div>
      <button class="fd-button-green fd-button-small">Add to Cart</button>
    </div>
    <div class="fd-pcard">
      <div class="img-box"></div>
      <a href="#">
        <h4>Famous Buffalo <span class="off-screen">$9.00</span></h4>
      </a>
      <div class="fd-pblurb">Blueberry Pie</div>
      <div class="fd-pprice">$9.00</div>
      <button class="fd-button-green fd-button-small">Add to Cart</button>
    </div>
    <div class="fd-pcard">
      <div class="img-box"></div>
      <a href="#">
        <h4>Famous Buffalo <span class="off-screen">$9.00</span></h4>
      </a>
      <div class="fd-pblurb">Blueberry Pie</div>
      <div class="fd-pprice">$9.00</div>
      <button class="fd-button-green fd-button-small">Add to Cart</button>
    </div>

  </div>
</div>



