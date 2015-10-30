---
layout: styleguide
type: element
title: Tables
lead: Tables show tabular data in columns and rows.
---

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Accessibility</h4>
    <ul class="usa-content-list">
      <li><strong>Use tables only to display tabular data.</strong></li>
      <li>Simple tables can have two levels of headers. Each header cell should have <em class="em-yellow-bg"><code>scope=<wbr>'col'</code></em> or <em class="em-yellow-bg"><code>scope=<wbr>'row'</code></em>.</li>
      <li>Complex tables are tables with more than two levels of headers. Each header should be given a unique <em class="em-yellow-bg"><code>id</code></em> and each data cell should have a <em class="em-yellow-bg"><code>headers</code></em> attribute with each related header cell’s <em class="em-yellow-bg"><code>id</code></em> listed.</li>
      <li>When adding a title to a table, include it in a <em class="em-yellow-bg"><code>&lt;caption&gt;</code></em> tag inside of the <em class="em-yellow-bg"><code>&lt;table&gt;</code></em> element.</li>
    </ul>

  </div>
</div>
