---
layout: styleguide
type: element
title: Text Links
lead: Use text links to lead users through the site. 
---

<div class="preview">

  <h4>Text Link</h4>
  <div><a class="fd-link" href="#">Grocery</a>  >  <a class="fd-link" href="#">Beverages</a>  >  <a class="fd-link" href="#">Water & Seltzer</a></div>
  
  <h4>Text Link in a Paragraph</h4>
  <p>Text Links in a paragraph <a class="fd-link" href="#">look like this</a>. With pretty stories for which there's little good evidence quasar. Stirred by starlight cosmic ocean, with <a class="fd-link" href="#">pretty stories for which there's little good evidence</a> rogue extraordinary claims require extraordinary evidence lorem ipsum dolor sit amet!</p>
  <p><a class="fd-link-visited" href="#">This is a visited link</a> inside a paragraph.</p>

<!--   <div class="usa-background-dark">
    <p><a class="fd-link" href="#">This</a> is a text link on a dark background.</p>
  </div> -->

</div>

<div class="css-preview">

<style type="text/css">

  /* Text Link: Default, Hover */
  .fd-link{
    color: #458b4c;
  }
  .fd-link:hover{
    color: #5fb069;
  }

  /* Visited Text Link: Default, Hover */
  .fd-link-visited{
    color: #777777;
  }
  .fd-link-visited:hover{
    color: #333333;
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
