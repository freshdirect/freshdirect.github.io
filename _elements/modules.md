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
    <li>Overlay background color value (CSS): <em class="em-yellow-bg"><code>rgba(0, 0, 0, 0.8);</code></em></li>
  </ul>

  <h4>SMALL</h4>
  <ul class="overlay-numbers">
    <li><span>width:</span> 400px</li>
    <li><span>min-height:</span> 232px</li>
    <li><span>padding:</span> 30px</li>
    <li><span>top:</span> 150px</li>
  </ul>
  <button id="sm-overlay-btn" class="fd-button-ghost-green fd-button-small fd-button-wide">View Example</button>

  <h4>MEDIUM</h4>
  <ul class="overlay-numbers">
    <li><span>width:</span> 480px</li>
    <li><span>min-height:</span> 246px</li>
    <li><span>padding:</span> 30px</li>
    <li><span>top:</span> 150px</li>
  </ul>
  <button id="md-overlay-btn" class="fd-button-ghost-green fd-button-small fd-button-wide">View Example</button>

  <h4>LARGE</h4>
  <ul class="overlay-numbers">
    <li><span>width:</span> 800px</li>
    <li><span>min-height:</span> 514px</li>
    <li><span>padding:</span> 40px</li>
    <li><span>top:</span> 150px</li>
  </ul>
  <button id="lg-overlay-btn" class="fd-button-ghost-green fd-button-small fd-button-wide">View Example</button>

  <h4>FULL SCREEN</h4>
  <ul class="overlay-numbers">
    <li><span>width:</span> full width</li>
    <li><span>height:</span> full height</li>
    <li><span>content-width:</span> 1368px</li>
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





<!-- overlays -->
<div class="overlay-bg sm" role="dialog" aria-labelledby="email-reminder">

  <button class="close-btn">Close</button>
  <div class="container-box">
    <h3 id="email-reminder">Sign Up for Reminders</h3>
    <div class="form-row">
      <label>Email</label>
      <input type="text" placeholder="name@website.com">      
    </div>
    <div class="">
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
    <div class="">
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
    <p class="terms">Naberrie felucia ishi felth palpatine dormé vodran chiss. Wroonian ken zabrak daala shi'ido joruus windu. Sal-solo wharl tatooine nien caamasi massans vedder antilles tharin. Ailyn oola moff seerdon pa'lowick. Allana klivian togorian cody klivian dantooine skywalker jobal. Gilad kuat hutt fisto. Veila kal ugnaught castell cassio binks carnor woostoid. Saesee troig tharen kushiban zev kaleesh auril. Moddell sebulba moff ranat motti gonk. Sy wol kastolar quelli antilles amedda sunrider padmé. Rom quee depa jettster jagged biggs lars veknoid.</p>
    <p class="terms">Naberrie ortolan jawa zhell qel-droma derek plo rotta. Gilad rishii sebulba feeorin haako noa sulorine whaladon. Evazan thrella castell yuzzem gado. Darth lama toydarian tahiri dengar frozarns. Weequay tibor yoda darpa grievous maarek nute. Devaronian ysanne ponda natasi psadan kanos triclops. Hutt drovian organa spar dexter corran moff. T'landa cabasshite jek bane gamorr zhell ansuroer moff. Kushiban gizka obi-wan meridian kuat hutt. Kenobi grievous bothan freedon jax grievous aramandi. Koon organa whitesun cadavine.</p><br>
    <div class="">
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



