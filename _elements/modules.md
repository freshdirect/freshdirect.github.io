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
    <li>Close button (X) is <strong>always visible</strong></li>
  </ul>
  
  <h4>LARGE</h4>
  <ul class="overlay-numbers">
    <li><span>width:</span> 860px</li>
    <li><span>min-height:</span> 514px</li>
    <li><span>padding:</span> 40px / 60px</li>
    <li><span>margin-top:</span> 256px</li>
  </ul>
  <button id="lg-overlay-btn" class="fd-button-ghost-green fd-button-small fd-button-wide">View Example</button>

  <h4>MEDIUM</h4>
  <ul class="overlay-numbers">
    <li><span>width:</span> 630px</li>
    <li><span>min-height:</span> 246px</li>
    <li><span>padding:</span> 40px / 60px</li>
    <li><span>margin-top:</span> 256px</li>
  </ul>
  <button id="md-overlay-btn" class="fd-button-ghost-green fd-button-small fd-button-wide">View Example</button>

  <h4>SMALL</h4>
  <ul class="overlay-numbers">
    <li><span>width:</span> 386px</li>
    <li><span>min-height:</span> 232px</li>
    <li><span>padding:</span> 30px / 40px</li>
    <li><span>margin-top:</span> 256px</li>
  </ul>
  <button id="sm-overlay-btn" class="fd-button-ghost-green fd-button-small fd-button-wide">View Example</button>

</div>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li>All overlays should have Aria tag <em class="em-yellow-bg"><code>aria-haspopup=”true”</code></em> attribute.</li>
      <li>All overlays should be accessible via the keyboard.</li>
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

<div class="overlay-bg sm">
  <span class="close-btn"></span>
  <div class="container-box">
    <h3>Sign Up for Reminders</h3>
    <div class="form-row">
      <label>Email</label>
      <input type="text" placeholder="name@website.com">      
    </div>
    <div class="form-row">
      <button class="fd-button-green fd-button-large fd-button-wide center">Send</button>
    </div> 
  </div>
</div>

<div class="overlay-bg md">
  <span class="close-btn"></span>
  <div class="container-box">
    <h3>Send Us a Message</h3>
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

<div class="overlay-bg lg">
  <span class="close-btn"></span>
  <div class="container-box">
    <h2>Terms of Service</h2>
    <p>Lucas ipsum dolor sit amet chazrach zhell dagobah yoda kamino wesell fel ti medon omwati. Vedder beru chewbacca thrawn mohc carondian duro. Ikrit chewbacca mandalorians yowza vulptereen. Kalarba mod luke hobbie. Carlist tarkin danni bothan boss. Rom koon c-3po chommell aparo han airen frozian jek. Walon geonosis lars gank senex crynyd. Sal-solo halla wilhuff organa p'w'eck zabrak jabba taun antilles. Quelli moor kenobi keshiri hutt veila er'kit. Ssi-ruuk nagai bando wharl watto saché chommell selonian gamorrean.</p>
    <p>Naberrie felucia ishi felth palpatine dormé vodran chiss. Wroonian ken zabrak daala shi'ido joruus windu. Sal-solo wharl tatooine nien caamasi massans vedder antilles tharin. Ailyn oola moff seerdon pa'lowick. Allana klivian togorian cody klivian dantooine skywalker jobal. Gilad kuat hutt fisto. Veila kal ugnaught castell cassio binks carnor woostoid. Saesee troig tharen kushiban zev kaleesh auril. Moddell sebulba moff ranat motti gonk. Sy wol kastolar quelli antilles amedda sunrider padmé. Rom quee depa jettster jagged biggs lars veknoid.</p>
    <p>Naberrie ortolan jawa zhell qel-droma derek plo rotta. Gilad rishii sebulba feeorin haako noa sulorine whaladon. Evazan thrella castell yuzzem gado. Darth lama toydarian tahiri dengar frozarns. Weequay tibor yoda darpa grievous maarek nute. Devaronian ysanne ponda natasi psadan kanos triclops. Hutt drovian organa spar dexter corran moff. T'landa cabasshite jek bane gamorr zhell ansuroer moff. Kushiban gizka obi-wan meridian kuat hutt. Kenobi grievous bothan freedon jax grievous aramandi. Koon organa whitesun cadavine.</p><br>
    <div class="form-row">
      <button class="fd-button-green fd-button-large fd-button-wide center">Accept</button><br>

      <button class="fd-button-ghost-green fd-button-large fd-button-wide center">Decline</button>  
    </div>  
  </div>
</div>

