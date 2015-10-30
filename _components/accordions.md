---
layout: styleguide
type: component
title: Accordions
lead: Accordions are a list of headers that can be clicked to hide or reveal additional content.
---

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
    aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li>
        Code header areas in the accordion as <em class="em-yellow-bg"><code>&lt;buttons&gt;</code></em> so that they are usable with both screen readers and the keyboard.
      </li>
      <li>
        Buttons should  state whether they are expanded or not with the appropriate attribute: use either <em class="em-yellow-bg"><code>aria-expanded=<wbr>’true’</code></em> or <em class="em-yellow-bg"><code>aria-expanded=<wbr>’false’</code></em>.
      </li>
      <li>
        Each button has a unique name <em class="em-yellow-bg"><code>aria-controls=<wbr>’collapsible-#’</code></em> that associates the control to the appropriate region by referencing the controlled elements <em class="em-yellow-bg"><code>id</code></em>.
      </li>
      <li>
        Each content area has an <em class="em-yellow-bg"><code>aria-hidden</code></em> attribute set to either <em class="em-yellow-bg"><code>true</code></em> or <em class="em-yellow-bg"><code>false</code></em>. When <em class="em-yellow-bg"><code>true</code></em>, the element (and all children) are neither visible or perceivable, and assistive technologies will skip this content.
      </li>
      <li>Allow users to click anywhere in the header area to expand or collapse the content; a larger target is easier to manipulate.</li>
    </ul>
  </div>
</div>
