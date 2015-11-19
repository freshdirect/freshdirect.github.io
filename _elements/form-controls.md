---
layout: styleguide
type: component
title: Form controls
lead: Form controls allow users to enter information into a page.
---

<h3 class="usa-heading">Accessibility</h3>

<p>As you customize form controls from this library, be sure they continue to meet the following accessibility requirements:</p>

<ul class="usa-content-list">
  <li>All form control tags should have an associated label. The labels for attribute value should match the related input <em class="em-yellow-bg"><code>id</code></em> attribute and should also be unique to the entire page. For example, the input with <em class="em-yellow-bg"><code>id=<wbr>"delicious-ramen"</code></em> will always have a label with <em class="em-yellow-bg"><code>for=<wbr>"delicious-ramen"</code></em>. This way screen readers are able to perceive the relevant content.</li>
  <li>Any additional information — such as required, optional, or example text — should be wrapped within the label tags. For example: <em class="em-yellow-bg"><code>&lt;label for=<wbr>"name"&gt;Favorite Pie &lt;span&gt;Optional&lt;/span&gt;&lt;/label&gt;</code></em>. This way screen readers know what additional information is related to each field.</li>
  <li>Do not replace <em class="em-yellow-bg"><code>&lt;input&gt;</code></em> tag-based form controls with styled <em class="em-yellow-bg"><code>&lt;div&gt;</code></em> tags, or use JavaScript to create 'fake' form controls. Screen readers have a difficult time reading form controls that are not written in semantic HTML.</li>
  <li>If you adjust the color scheme of the buttons, ensure a minimum contrast ratio of 4.5:1 (for small text, 3:1 for large) for all states of the button. This includes default, hover, selected, and disabled.</li>
  <li>Do not use JavaScript to auto advance the focus from one field to the next. This makes it difficult for keyboard-only users to navigate and correct mistakes.</li>
  <li>Display form controls in the same order in HTML as they do on screen. Do not use CSS to rearrange the form controls. Screen readers narrate forms in the order they appear in the HTML.</li>
  <li>Group each set of thematically related controls in a fieldset element. Use the legend element to offer a label within each one. The fieldset and legend elements make it easier for screen reader users to navigate the form.</li>
  <li>A single legend is always required for fieldset. A common use of fieldset and legend is a question with radio button options for answers. The question text and radio buttons are wrapped in a fieldset, with the question itself being inside the legend tag.</li>
  <li>You can embed multiple fieldsets and legends for more complex forms.</li> 
</ul>

<h2 class="usa-heading" id="text-inputs">Text inputs</h2>
<p class="usa-font-lead">Text inputs allow people to enter any combination of letters, numbers, or symbols of their choosing (unless otherwise restricted). Text input boxes can span single or multiple lines.</p>


<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Accessibility</h4>
    <p>If you customize the text inputs, ensure they continue to meet the the <a href="{{ site.baseurl }}/form-controls/"> accessibility requirements that apply to all form controls.</a></p>
    <ul class="usa-content-list">
      <li>Avoid placeholder text for accessibility reasons. Most browsers’ default rendering of placeholder text does not provide a high enough contrast ratio.</li>
      <li>Avoid breaking numbers with distinct sections (such as phone numbers, Social Security Numbers, or credit card numbers) into separate input fields. For example, use one input for phone number, not three (one for area code, one for local code, and one for number). Each field needs to be labeled for a screen reader and the labels for fields broken into segments are often not meaningful.</li>
      <li>Only show error validation messages or stylings after a user has interacted with a particular field.</li>
    </ul>
  </div>
</div>

<h2 class="usa-heading" id="dropdown">Dropdown</h2>
<p class="usa-font-lead">A dropdown allows users to select one option from a list.</p>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Accessibility</h4>
    <p>If you customize the dropdown, ensure it continues to meet the the <a href="{{ site.baseurl }}/form-controls/"> accessibility requirements that apply to all form controls.</a></p>
    <ul class="usa-content-list">
      <li>Make sure your dropdown has a label. Don’t replace it with the default menu option (for example, removing the “State” label and just having the dropdown read “Select a state” by default).</li>
      <li>Don’t use JavaScript to automatically submit the form (or do anything else) when an option is selected. Auto-submission disrupts screen readers because they select each option as they read them. Offer a “submit” button at the end of the form instead. Users often change their choices multiple times. Auto-submission is also less accessible.</li>
    </ul>
  </div>
</div>

<h2 class="usa-heading" id="checkboxes">Checkboxes</h2>
<p class="usa-font-lead">Checkboxes allow users to select one or more options from a visible list.</p>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Accessibility</h4>
    <p>If you customize the text inputs, ensure they continue to meet the the <a href="{{ site.baseurl }}/form-controls/"> accessibility requirements that apply to all form controls.</a></p>
    <ul class="usa-content-list">
      <li>Surround a related set of checkboxes with a <em class="em-yellow-bg"><code>&lt;fieldset&gt;</code></em>. The <em class="em-yellow-bg"><code>&lt;legend&gt;</code></em> provides context for the grouping. Do not use fieldset and legend for a single check.</li>
      <li>The custom checkboxes here are accessible to screen readers because the default checkboxes are moved off-screen with <em class="em-yellow-bg"><code>position: absolute; left: -999em</code></em>.</li>
      <li>Each input should have a semantic <em class="em-yellow-bg"><code>id</code></em> attribute, and its corresponding label should have the same value in it’s <em class="em-yellow-bg"><code>for</code></em> attribute.</li>
      <li>The <em class="em-yellow-bg"><code>title</code></em> attribute can replace <em class="em-yellow-bg"><code>&lt;label&gt;</code></em>.</li>
      <li>Users should be able to tap on or click on either the text label or the checkbox to select or deselect an option.</li>
    </ul>
  </div>
</div>

<h2 class="usa-heading" id="radiobuttons">Radio buttons</h2>
<p class="usa-font-lead">Radio buttons allow users to see all available choices at once and select exactly one option.</p>

<div class="usa-accordion-bordered usa-accordion-docs">
  <button class="usa-button-unstyled usa-accordion-button"
      aria-expanded="true" aria-controls="collapsible-0">
    Documentation
  </button>
  <div id="collapsible-0" aria-hidden="false" class="usa-accordion-content">
    <h4 class="usa-heading">Accessibility</h4>
    <p>If you customize the radio buttons, ensure they continue to meet the the <a href="{{ site.baseurl }}/form-controls/"> accessibility requirements that apply to all form controls.</a></p>
    <ul class="usa-content-list">
      <li>Group related radio buttons together with <em class="em-yellow-bg"><code>&lt;fieldset></code></em> and describe the group with <em class="em-yellow-bg"><code>&lt;legend&gt;</code></em>.</li>
      <li>Each radio button should have a <em class="em-yellow-bg"><code>&lt;label&gt;</code></em>. Associate the two by matching the <em class="em-yellow-bg"><code>&lt;label&gt;</code></em>’s for attribute to the <em class="em-yellow-bg"><code>&lt;input&gt;</code></em>’s <em class="em-yellow-bg"><code>id</code></em> attribute.</li>
      <li>The <em class="em-yellow-bg"><code>title</code></em> attribute can replace <em class="em-yellow-bg"><code>&lt;label&gt;</code></em>.</li>
      <li>Users should be able to tap on or click on either the text "label" or the radio button to select or deselect an option.</li>
    </ul>
  </div>
</div>

