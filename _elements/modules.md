---
layout: styleguide
title: Modules
lead: A list of global modules around the store.
---

<h2 class="usa-heading" id="text-inputs">Overlays</h2>
<p class="usa-font-lead">Overlays are used to present different kinds of information without loading a new page.</p>

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
