---
layout: styleguide
type: component
title: Alerts
lead: Alerts keep users informed of important and sometimes time-sensitive changes.
---

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li>Use the ARIA <em class="em-yellow-bg"><code>role=<wbr>"alert"</code></em> to inform assistive technologies of a time-sensitive and important message that is not interactive. If the message is interactive, use the <em class="em-yellow-bg"><code>alertdialog</code></em> role instead.
      <li>Do not visually hide alert messages on the page and then make them visible when they are needed. Users of older assistive technologies may still be able to perceive the alert messages even if they are not currently applicable.</li>
    </ul>
  </div>
</div>
