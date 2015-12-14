---
layout: styleguide
type: element
title: Text Links
lead: Text Links are used to trigger actions or lead users through the site. They can also be used as a tooltip to reveal details about our services.
---

<div class="preview">

  <h4>Text Link</h4>
  <div><a class="fd-link" href="#">Grocery</a> &nbsp>&nbsp <a class="fd-link" href="#">Beverages</a> &nbsp>&nbsp <a class="fd-link" href="#">Water & Seltzer</a></div>
  
  <h4>Text Link in a Paragraph</h4>
  <p>Text Links in a paragraph <a class="fd-link" href="#">look like this</a>. With pretty stories for which there's little good evidence quasar. Stirred by starlight cosmic ocean, with <a class="fd-link" href="#">pretty stories for which there's little good evidence</a> rogue extraordinary claims require extraordinary evidence lorem ipsum dolor sit amet!</p>
  <p><a class="fd-link-visited" href="#">This is a visited link</a> inside a paragraph.</p>

  <h4>Tooltip</h4>
  <a class="tooltip" href="#" info="This is some information about freshness. PLEASE, disregard the styling of this overlay.">Our Freshness Guarantee</a>
  <p><strong>Super Salmon</strong> <a class="tooltip-small" href="#" info="This is some information about freshness. PLEASE, disregard the styling of this overlay.">?</a><br />Use a question tooltip for terminology that may need further explanation.</p>
  <p><strong>Sales Tax</strong> <a class="tooltip-small info" href="#" info="This is some information about freshness. PLEASE, disregard the styling of this overlay.">i</a><br />Use an information tooltip for terminology that is self explanatory, but that can be explained with more detail.</p>

<!--   <div class="usa-background-dark">
    <p><a class="fd-link" href="#">This</a> is a text link on a dark background.</p>
  </div> -->

</div>

<div class="css-preview">

<style type="text/css">

  /* Text Link: Default, Hover */
  a.fd-link{
    color: #458b4c;
  }
  a.fd-link:hover{
    color: #5fb069;
  }
  a.fd-link:focus,
  .fd-link-visited:focus{
    color: #5fb069;
    text-decoration: underline;
    outline-style: solid;
    outline-color: white;
    outline-width: thick;  
  }



  /* Visited Text Link: Default, Hover */
  .fd-link:visited{
    color: #777777;
  }
  .fd-link-visited:hover{
    color: #5fb069;
  }

 

  /* Text Link in Sentence */
  p .fd-link{
    text-decoration: underline;
  }



  /* Text link in Dark BG: Default, Hover */
  .usa-background-dark .fd-link{
    color: #88c58f;
  }
  .usa-background-dark .fd-link:hover{
    color: #b1d9b6;
  }



  /* Tooltip: Default, Hover */
  a.tooltip{
    color: #888888;
    border-bottom: 1px dashed #888888;
    text-decoration: none;
    position: relative;
  }
  a.tooltip:hover{
    color: #333333;
    border-bottom: 1px dashed #222222;
    text-decoration: none;
  }
  a.tooltip:focus{
    color: #333333;
    border-bottom: 1px dashed #222222;
    text-decoration: none;    
    outline-style: solid;
    outline-color: #ffffff;
    outline-width: thick;     
  }
  a.tooltip-small{
    display: inline-block;
    font-family: arial;
    font-weight: bold;
    font-size: 12px;
    color: #ffffff;
    text-decoration: none;
    text-align: center;
    width: 17px;
    height: 17px;
    margin: 0;
    padding: 0;
    background-color: #888888;
    border-radius: 15px;
    position: relative;
    top: -10px;
  }
  a.tooltip-small.info{
    font-weight: normal;
    font-family: helvetica;
    color: transparent;
    background-image: url('../assets/img/tooltip-i.png');
    background-position: center;
    background-repeat: no-repeat;
  }
  a.tooltip-small:hover{
    background-color: #4fa157;
  }
  a.tooltip-small:focus{
    background-color: #4fa157;
    box-shadow: 0 0 3px #999999, 0 0 7px #999999;
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
      <li><strong>Use <em class="em-yellow-bg"><code>&lt;a&gt;</code></em> tags to create text links.</strong></li>
      <li>Users should be able to tab to navigate between links.</li>
      <li>Users should be able to activate a link when pressing ‘Enter’ on their keyboard.</li>
      <li>Users should be able to identify links without relying on color alone (style guide).</li>
      <li>Users should be able to activate hover and and focus states with both a mouse and a keyboard.</li>
    </ul>

  </div>
</div>

<style type="text/css">
  a.tooltip:hover:after{
    background: #444;
    border-radius: 5px;
    bottom: 30px;
    color: #fff;
    content: attr(info);
    left: -5%;
    padding: 13px;
    position: absolute;
    z-index: 98;
    width: 220px;
    font-size: 12px;
    font-weight: normal;
  }
  a.tooltip:hover:before{
    border: solid;
    border-color: #444 transparent;
    border-width: 6px 6px 0 6px;
    bottom: 24px;
    content: "";
    left: 50%;
    position: absolute;
    z-index: 99;
  }
  a.tooltip-small:hover:after{
    text-align: left;
    font-family: "Source Sans Pro", "Helvetica", "Arial", sans-serif;
    line-height: 14px;
    height: auto;
    background-color: #444;
    outline: 0;
    border-radius: 5px;
    bottom: 25px;
    color: #fff;
    content: attr(info);
    left: -35%;
    padding: 13px;
    position: absolute;
    z-index: 98;
    width: 220px;
    font-size: 12px;
    font-weight: normal;
  }
  a.tooltip-small:hover:before{
    border: solid;
    border-color: #444 transparent;
    border-width: 6px 6px 0 6px;
    bottom: 19px;
    content: "";
    left: 18%;
    position: absolute;
    z-index: 99;
  }
  .fd-link-visited{
    color: #777777;
  }
</style>
