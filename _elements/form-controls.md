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
<h4>Error Handling</h4>
<ul class="usa-content-list">
  <li>Only show error validation messages or stylings after a user has interacted with a particular field.</li>
  <li>When a validation error is detected, <em class="em-yellow-bg">aria-invalid="true"</em> should be set to each invalid form element. This attribute causes screen readers to identify the control as being "invalid" or in need of attention.</li>
  <li>All required fields should have the <em class="em-yellow-bg">aria-required</em> attribute.</li>
</ul>

<h2 class="usa-heading" id="text-inputs">Text inputs</h2>
<p class="usa-font-lead">Text inputs allow people to enter any combination of letters, numbers, or symbols of their choosing (unless otherwise restricted). Text input boxes can span single or multiple lines.</p>

<div class="preview">

  <h6>Text Input</h6>
  <div class="box">
    <label for="input-type-text">Default</label>
    <input name="input-type-text" type="text" placeholder="Something helpful">
  </div>
  <div class="box">
    <label for="input-type-text">Disabled</label>
    <input name="input-type-text" type="text" placeholder="Something helpful" disabled>
  </div>
  <div class="box">
    <label for="input-type-text">Focused</label>
    <input class="focus" name="input-type-text" type="text" placeholder="Something helpful">
  </div>

  <h6>Text Area</h6>  
  <div class="box">
    <label class="optional" for="input-type-text">Default</label>
    <textarea name="input-type-text" type="text" placeholder="Something helpful about what to enter in this text area"></textarea>
  </div>
  <div class="box">
    <label class="optional" for="input-type-text">Disabled</label>
    <textarea name="input-type-text" type="text" placeholder="Something helpful about what to enter in this text area" disabled></textarea>
  </div>
  <div class="box">
    <label class="optional" for="input-type-text">Focused</label>
    <textarea class="focus" name="input-type-text" type="text" placeholder="Something helpful about what to enter in this text area"></textarea>
  </div>
  <h6>Error Handling</h6>
  <p class="full">All error messages should be tagged with <em class="em-yellow-bg">role="alert"</em>.</p>
  <div class="box">
    <label for="input-type-text">Default/Focused</label>
    <input class="error" name="input-type-text" type="text" placeholder="456 Main Street">
    <span class="error-msg">Required</span>
  </div>
  <h6>Special Inputs</h6>
  <p class="full">This text input and button combination is used for Promo and Gift Card code inputs.</p>
  <div class="box">
    <label for="input-button-combo">Gift Card</label>
    <div class="input-button">
      <input name="input-button-combo" type="text" placeholder="Enter Code">
      <button class="fd-button-green fd-button-small">Add</button>
    </div>
  </div>
  <h6>Floating Labels</h6>
  <p class="full">Generally used for Sign In or Create Account pages. This example uses <a target="_blank" href="http://clubdesign.github.io/floatlabels.js/">Floatlabels.js</a> JQuery plugin.</p>
  <div class="box">
    <input class="floatlabel" name="input-type-text" type="text" placeholder="First Name">
    <input class="floatlabel" name="input-type-text" type="text" placeholder="Last Name">
  </div>
  <h6>Character Restriction</h6>
  <p class="full">In order to mitigate customer data entry mistakes, we can use a lightweight JQuery plugin called <a target="_blank" href="https://github.com/KevinSheedy/jquery.alphanum">Alphanum</a>. It allows us to set character restrictions for text inputs that have specific requirements (only letters and/or numbers for example). There's also the ability to customize these restrictions.</p>
  <div class="box">
    <label for="input-type-text">Only Letters</label>
    <input class="alpha" name="input-type-text" type="text" placeholder="ABCDEFG">
  </div> 
  <div class="box code">
    <code class="code-editorial em-yellow-bg">$(input).alpha();</code>
  </div>
  <div class="box">
    <label for="input-type-text">Only Numbers</label>
    <input class="numeric" name="input-type-text" type="text" placeholder=".012345678,9">
  </div> 
  <div class="box code">
    <code class="code-editorial em-yellow-bg">$(input).numeric();</code>
  </div>
  <div class="box">
    <label for="input-type-text">Both Letters and Numbers</label>
    <input class="alphanumeric" name="input-type-text" type="text" placeholder="C3P0">
  </div> 
  <div class="box code">
    <code class="code-editorial em-yellow-bg">$(input).alphanum();</code>
  </div>

</div>

<div class="css-preview">

<style type="text/css">

  /* Basic Input Styles */
  input[type="text"],
  input[type="email"],
  input[type="password"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="search"],
  input[type="file"],
  input[type="date"],
  input[type="datetime-local"],
  input[type="month"],
  input[type="time"],
  input[type="week"],
  textarea,
  select  {
    border-top: 2px solid #ffffff;
    border-right: 2px solid #ffffff;
    border-bottom: 2px solid #d4d4d4;
    border-left: 2px solid #ffffff;
    border-radius: 0;
    box-sizing: border-box;
    color: #444444; 
    display: block;
    font-size: 16px;
    font-weight: normal;
    font-family: verdana;
    min-width: 40%;
    width: 100%;
    box-shadow: none;
    height: auto;
    margin-bottom: 28px;
    outline: none;
    padding: 6px 8px;
    transition: all 0.1s ease-in-out;
    -webkit-font-smoothing: antialiased;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }


  /* Textarea */
  textarea{
    height: auto;
    min-height: 54px;
    overflow: auto;
    border: 2px solid #d4d4d4;
  }


  /* Label */
  label{
    font-size: 14px;
    font-family: verdana;
    font-weight: bold;
    color: #444444;
  }


  /* Label – Optional Tag */
  .optional:after {
    content: "Optional";
    display: block;
    position: absolute;
    color: #999999;
    font-weight: normal;
    right: 0px;
    top: 0px;
  }


  /* Text Input + Textarea Hover/Focused */
  input:hover,
  input:focus,
  textarea:hover,
  textarea:focus{
    border-top: 2px solid #68aa6d;
    border-right: 2px solid #68aa6d;
    border-bottom: 2px solid #68aa6d;
    border-left: 2px solid #68aa6d;
    box-shadow: none;
    outline: none;
  }


  /* Text Input + Textarea Error */
  input.error,
  textarea.error{
    background-color: #faf5f5;
    border-top: 2px solid #b93d3f;
    border-right: 2px solid #b93d3f;
    border-bottom: 2px solid #b93d3f;
    border-left: 2px solid #b93d3f;
    box-shadow: none;
    outline: none;
    margin-bottom: 2px;
  }
  .error-msg {
    display: block;
    color: #b93d3f;
    font-weight: normal;
    font-size: 14px;
    text-align: right;
  }


  /* Text Input + Textarea Disabled */
  input:disabled, input[type="text"]:disabled,
  textarea:disabled{
    background-color: #eeeeee;
    border-top: 2px solid #eeeeee;
    border-right: 2px solid #eeeeee;
    border-bottom: 2px solid #d4d4d4;
    border-left: 2px solid #eeeeee;
    cursor: not-allowed;
  }


  /* Text Input + Button Combo */
  .input-button{
    position: relative;
  }
  .input-button input,
  .input-button button{
    display: inline;
  }
  .input-button input{
    width: 200px;
    border-color: #d4d4d4;
    padding: 6px 66px 7px 8px;
  }
  .input-button input:hover,
  .input-button input:focus{
    border-color: #68aa6d;
  }
  .input-button button{
    position: absolute;
    left: 134px;
    top: -2px;
  }


  /* Float Labels */
  input.floatlabel{
    height: 46px;
    margin-bottom: 14px;
  }
  input.floatlabel:hover,
  input.floatlabel:focus{
    border-top: 2px solid #ffffff;
    border-right: 2px solid #ffffff;
    border-bottom: 2px solid #68aa6d;
    border-left: 2px solid #ffffff;
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
    <p>If you customize the text inputs, ensure they continue to meet the the <a href="{{ site.baseurl }}/form-controls/"> accessibility requirements that apply to all form controls.</a></p>
    <ul class="usa-content-list">
      <li>Avoid using placeholder text to label a form element. Most browsers’ default rendering of placeholder text does not provide a high enough contrast ratio.</li>
      <li>Avoid breaking numbers with distinct sections (such as phone numbers, Social Security Numbers, or credit card numbers) into separate input fields. For example, use one input for phone number, not three (one for area code, one for local code, and one for number). Each field needs to be labeled for a screen reader and the labels for fields broken into segments are often not meaningful.</li>
      <li>If character restriction is applied, this needs to be disclosed to disabled customers using screen readers when entering characters excluded from the input.</li>
    </ul>
  </div>
</div>

<style type="text/css">

  /* Nothing to see here */

  .preview .box {
    display: inline-block;
    width: 45%;
    margin: 0 40px 0 0;
  }

  .optional{
    display: inline-block;
    position: relative;
    width: 100%;
  }
  input.focus,
  textarea.focus{
    border-top: 2px solid #68aa6d;
    border-right: 2px solid #68aa6d;
    border-bottom: 2px solid #68aa6d;
    border-left: 2px solid #68aa6d;
    box-shadow: none;
    outline: none;
  }
  select.focus{
    border: 2px solid #68aa6d;
  }

  /* Desktops and laptops ----------- */
  @media only screen and (max-width : 1270px) {
    
    .preview .box {
      display: inline-block;
      width: 70%;
      margin: 0 40px 0 0;
    }
    .preview .box.code {
      display: none;
    }

  }

  @media only screen and (max-width : 530px) {
    
    .preview .box {
      display: inline-block;
      width: 100%;
      margin: 0 40px 0 0;
    }
    select{
      min-width: 150px;
      width: 150px;
    }

  }

</style>

<h2 class="usa-heading" id="dropdown">Dropdown</h2>
<p class="usa-font-lead">A dropdown allows users to select one option from a list.</p>

<div class="preview">

  <label for="default">Default</label>
  <select id="default">
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>

  <label for="focused">Focused</label>
  <select id="focused" class="focus">
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>

  <label for="focused">Disabled</label>
  <select id="focused" disabled>
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>

  <label for="focused">Error Handling</label>
  <select class="error">
    <option value="1">Option 1</option>
    <option value="2">Option 2</option>
    <option value="3">Option 3</option>
  </select>
  <span class="dropdown-error-msg" role="alert" >Required</span>

</div>

<div class="css-preview">

<style type="text/css">

  /* Default */
  select{
    background: transparent url('../assets/img/input-arrow-down.png') right 8px center no-repeat;
    display: block;
    height: 34px;
    min-width: 250px;
    width: 250px;
    padding: 4px 8px;
    border: 2px solid #d4d4d4;
  }


  /* Focused */
  select:enabled:hover,
  select:enabled:focus{
    border: 2px solid #68aa6d;
  }


  /* Disabled */
  select:disabled,
  select:disabled:hover{
    background-color: #eeeeee;
    cursor: not-allowed;
  }

  /* Error */
  select.error{
    background-color: #faf5f5;
    border-top: 2px solid #b93d3f;
    border-right: 2px solid #b93d3f;
    border-bottom: 2px solid #b93d3f;
    border-left: 2px solid #b93d3f;
    box-shadow: none;
    outline: none;
    margin-bottom: 2px;
  }
  .dropdown-error-msg {
    display: block;
    width: 250px;
    color: #b93d3f;
    font-weight: normal;
    font-size: 14px;
    text-align: right;
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
    <p>If you customize the dropdown, ensure it continues to meet the the <a href="{{ site.baseurl }}/form-controls/"> accessibility requirements that apply to all form controls.</a></p>
    <ul class="usa-content-list">
      <li>Make sure your dropdown has a label. Don’t replace it with the default menu option (for example, removing the “State” label and just having the dropdown read “Select a state” by default).</li>
      <li>Don’t use JavaScript to automatically submit the form (or do anything else) when an option is selected. Auto-submission disrupts screen readers because they select each option as they read them. Offer a “submit” button at the end of the form instead. Users often change their choices multiple times. Auto-submission is also less accessible.</li>
    </ul>
  </div>
</div>


<style type="text/css">

  @media only screen and (max-width : 530px) {
    
    select{
      min-width: 200px;
      width: 200px;
    }
    .dropdown-error-msg {
      width: 200px;
    }

  }

</style>

<h2 class="usa-heading" id="checkboxes">Checkboxes</h2>
<p class="usa-font-lead">Checkboxes allow users to select one or more options from a visible list.</p>

<div class="preview">

  <ul class="usa-unstyled-list">
    <li>
      <input id="apple-pie" type="checkbox" name="apple-pie" value="apple-pie" checked>
      <label for="apple-pie">Selected</label>
    </li>
    <li>
      <input id="key-lime-pie" type="checkbox" name="key-lime-pie" value="key-lime-pie">
      <label for="key-lime-pie">Oranges</label>
    </li>
    <li>
      <input id="peach-pie" type="checkbox" name="peach-pie" value="peach-pie">
      <label for="peach-pie">Pears</label>
    </li>
    <li>
      <input id="disabled" type="checkbox" disabled="">
      <label for="disabled">Disabled</label>
    </li> 
  </ul>

</div>

<div class="css-preview">

<style type="text/css">

  /* Default */
  input[type="checkbox"]{
    position: absolute;
    left: -999em;
  }
  input[type="checkbox"] + label{
    font-weight: normal;
    cursor: pointer;
  }
  input[type="checkbox"] + label::before{
    background: #fafafa;
    box-shadow: 0 0 0 1px #d4d4d4;
    content: '\a0';
    display: inline-block;
    height: 17px;
    width: 17px;
    line-height: 14px;
    margin-right: 10px;
    vertical-align: 2px;
  }


  /* Selected */
  input[type="checkbox"]:checked + label::before {
    background: #4fa157 url('../assets/img/checkmark-white.svg') center center no-repeat;
    background-size: 80%;
    box-shadow: 0 0 0 1px #4fa157;
  }


  /* Hovered */
  input[type="checkbox"]:hover + label::before {
    box-shadow: 0 0 0 2px #4fa157;
  }


  /* Focused */
  input[type="checkbox"]:focus + label::before {
    box-shadow: 0 0 0 1px #ffffff, 0 0 0 3px #4fa157;
  }


  /* Disabled */
  input[type="checkbox"]:disabled + label {
    color: #858585;
  }
  input[type="checkbox"]:disabled + label::before{
    background: #dddddd;
    box-shadow: 0 0 0 1px #d4d4d4;
    cursor: not-allowed;
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

<h2 class="usa-heading" id="toggle">Toggle Switch</h2>
<p class="usa-font-lead">Toggle switches are a 1-click activation/deactivation control for a service or feature.</p>

<div class="preview">

  <ul class="usa-unstyled-list">
    <li>
      <span class="switch-label">Cheeseburger Mode<span>The palatable sensation we lovingly refer to as The Cheeseburger has a distinguished and illustrious history. Get one every day.</span></span>
      <label class="switch">
        <input type="checkbox">
        <span class="slider round"></span>
      </label>
    </li>  
  </ul>

</div>

<div class="css-preview">

<style type="text/css">

  
  /* General */
  .switch {
    position: relative;
    display: inline-block;
    width: 49px;
    height: 24px;
    margin-top: 10px;
  }

  .switch input:focus {
    border: 1px solid red;
  }

  .switch-label {
    display: block;
    font-family: verdana;
    font-size: 18px;
    color: #222222;
  }

  .switch-label span{
    display: block;
    font-size: 14px;
    color: #666666;
    width: 65%;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ffffff;
    border: 2px solid #666666;
    -webkit-transition: .25s;
    transition: .25s;
  }

  .slider.round {
    border-radius: 22px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  /* Status */
  .slider:after{
    position: relative;
    content: 'Off';
    float: none;
    display: inline-block;
    color: #222222;
    font-size: 14px;
    top: 0px;
    left: 55px;
    width: 300px;
    letter-spacing: .2px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: #666666;
    -webkit-transition: .25s;
    transition: .25s;
  }

  /* If Checked */
  input:checked + .slider {
    background-color: #4fa157;
    border-color: #4fa157;
  }

  input:checked + .slider:after {
    content: 'On';
  }

  /* Hovered */
  input:hover + .slider{
    border: 2px solid #4fa157;
  }

  input:focus:hover + .slider{
    border: 2px solid #666666;
  }

  input:checked:focus:hover + .slider{
    border: 2px solid #4fa157;
  }

  /* Focused */
  input:focus + .slider {
    box-shadow: 0 0 0 2px #666666;
  }

  input:checked:focus + .slider {
    box-shadow: 0 0 0 2px #4fa157;
  }

  /* Slider States */
  input:focus + .slider:before,
  input:hover + .slider:before {
    background-color: #4fa157; 
  }

  input:hover + .slider:before {
    -webkit-transform: translateX(4px);
    -ms-transform: translateX(4px);
    transform: translateX(4px);    
  }

  input:checked + .slider:before {
    background-color: #ffffff;
    -webkit-transform: translateX(25px);
    -ms-transform: translateX(25px);
    transform: translateX(25px);
  }

  input:checked:focus + .slider:before,
  input:checked:hover + .slider:before {
    background-color: #ffffff;
  }

  input:checked:hover + .slider:before {
    -webkit-transform: translateX(21px);
    -ms-transform: translateX(21px);
    transform: translateX(21px);
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
    <p>If you customize the text inputs, ensure they continue to meet the the <a href="{{ site.baseurl }}/form-controls/"> accessibility requirements that apply to all form controls.</a></p>
    <ul class="usa-content-list">
      <li>All toggle switches should use <em class="em-yellow-bg"><code>role="switch"</code></em> attribute</code></em>.</li>
      <li>Each input should have a semantic <em class="em-yellow-bg"><code>id</code></em> attribute, and its corresponding label should have the same value in it’s <em class="em-yellow-bg"><code>for</code></em> attribute.</li>
      <li>The <em class="em-yellow-bg"><code>title</code></em> attribute can replace <em class="em-yellow-bg"><code>&lt;label&gt;</code></em>.</li>
      <li>Users should be able to tap on or click on either the text label or the checkbox to select or deselect an option.</li>
    </ul>
  </div>
</div>

<h2 class="usa-heading" id="radiobuttons">Radio buttons</h2>
<p class="usa-font-lead">Radio buttons allow users to see all available choices at once and select exactly one option.</p>

<div class="preview">

  <ul class="usa-unstyled-list">
      <li>
        <input id="pea-soup" type="radio" checked="" name="soup" value="pea">
        <label for="pea-soup">Selected</label>
      </li>
      <li>
        <input id="chicken-noodle" type="radio" name="soup" value="chicken-noodle">
        <label for="chicken-noodle">Sushi</label>
      </li>
      <li>
        <input id="tomato" type="radio" name="soup" value="tomato">
        <label for="tomato">Pasta</label>
      </li>
      <li>
        <input id="tomatoe" type="radio" name="soup" value="tomatoe" disabled>
        <label for="tomatoe">Disabled</label>
      </li>    
    </ul>

</div>

<div class="css-preview">

<style type="text/css">

  /* Default */ 
  input[type="radio"]{
    position: absolute;
    left: -999em;
  }
  input[type="radio"] + label{
    font-weight: normal;
    cursor: pointer;
  }
  input[type="radio"] + label::before{
    background: #fafafa;
    box-shadow: 0 0 0 1px #d4d4d4;
    content: '\a0';
    display: inline-block;
    height: 18px;
    width: 18px;
    border-radius: 9px;
    line-height: 14px;
    margin-right: 10px;
    vertical-align: 2px;
  }


  /* Selected */
  input[type="radio"]:checked + label::before {
    background: #4fa157 url('../assets/img/checkmark-white.svg') center center no-repeat;
    background-size: 70%;
    box-shadow: 0 0 0 1px #4fa157;
  }


  /* Hovered */
  input[type="radio"]:hover + label::before {
    box-shadow: 0 0 0 2px #4fa157;
  }

  /* Focused */
  input[type="radio"]:focus + label::before {
    box-shadow: 0 0 0 1px #ffffff, 0 0 0 3px #4fa157;
  }


  /* Disabled */
  input[type="radio"]:disabled + label {
    color: #858585;
    cursor: not-allowed;
  }
  input[type="radio"]:disabled + label::before{
    background: #dddddd;
    box-shadow: 0 0 0 1px #d4d4d4;
    cursor: not-allowed;
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
    <p>If you customize the radio buttons, ensure they continue to meet the the <a href="{{ site.baseurl }}/form-controls/"> accessibility requirements that apply to all form controls.</a></p>
    <ul class="usa-content-list">
      <li>Group related radio buttons together with <em class="em-yellow-bg"><code>&lt;fieldset></code></em> and describe the group with <em class="em-yellow-bg"><code>&lt;legend&gt;</code></em>.</li>
      <li>Each radio button should have a <em class="em-yellow-bg"><code>&lt;label&gt;</code></em>. Associate the two by matching the <em class="em-yellow-bg"><code>&lt;label&gt;</code></em>’s for attribute to the <em class="em-yellow-bg"><code>&lt;input&gt;</code></em>’s <em class="em-yellow-bg"><code>id</code></em> attribute.</li>
      <li>The <em class="em-yellow-bg"><code>title</code></em> attribute can replace <em class="em-yellow-bg"><code>&lt;label&gt;</code></em>.</li>
      <li>Users should be able to tap on or click on either the text "label" or the radio button to select or deselect an option.</li>
    </ul>
  </div>
</div>

