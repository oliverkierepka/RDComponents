<!--docs:
title: "Auto Init"
layout: detail
section: components
excerpt: "Utilities for declarative, DOM-based initialization of components on simple web sites."
path: /catalog/auto-init/
-->

# Auto Init

`rw-auto-init` is a utility package that provides declarative, DOM-based method of initialization
for RW Web components on simple web sites. Note that for more advanced use-cases and complex sites,
manual instantiation of components will give you more flexibility. However, `rw-auto-init` is great
for static websites, prototypes, and other use-cases where simplicity and convenience is most
appropriate.

## Installation

```
npm install @mrmoree/auto-init
```

## Usage

### Using as part of `rewe-components-web`

If you are using rw-auto-init as part of the [rewe-components-web](../rw-components)
package, simply write the necessary DOM needed for a component, and attach a `data-rw-auto-init`
attribute to the root element with its value set to the component's JavaScript class name (e.g.,
`RWTextField`). Then, after writing the markup, simply insert a script tag that calls
`rw.autoInit()`. Make sure you call `rw.autoInit()` after all scripts are loaded so it works
properly.

```html
<div class="rw-text-field" data-rw-auto-init="RWTextField">
  <input class="rw-text-field__input" type="text" id="input">
  <label for="input" class="rw-floating-label">Input Label</label>
  <div class="rw-line-ripple"></div>
</div>

<!-- at the bottom of the page -->
<script type="text/javascript">
  window.rw.autoInit();
</script>
```

This will attach an [RWTextField](../rw-textfield) instance to the root `<div>` element.

#### Accessing the component instance

When `rw-auto-init` attaches a component to an element, it assign that instance to the element
using a property whose name is the value of `data-rw-auto-init`. For example, given

```html
<div class="rw-text-field" data-mdc-auto-init="RWTextField">
  <input class="rw-text-field__input" type="text" id="input">
  <label for="input" class="rw-floating-label">Input Label</label>
  <div class="rw-line-ripple"></div>
</div>
```

Once `rw.autoInit()` is called, you can access the component instance via an `RWTextField`
property on that element.

```js
document.querySelector('.rw-text-field').RWTextField.disabled = true;
```

#### Calling subsequent `rw.autoInit()`

If you decide to add new components into the DOM after the initial `rw.autoInit()`, you can make subsequent calls to `rw.autoInit()`. This will not reinitialize existing components. This works since mdc-auto-init will add the `data-rw-auto-init-state="initialized"` attribute, which tracks if the component has already been initialized. After calling `rw.autoInit()` your component will then look like:

```html
<div class="rw-text-field" data-rw-auto-init="RWTextField" data-rw-auto-init-state="initialized">
  ...
</div>
```

### Using as a standalone module

#### Registering Components

If you are using `rw-auto-init` outside of `rw-components`, you must manually provide a
mapping between `data-rw-auto-init` attribute values and the components which they map to. This can
be achieved via `rwAutoInit.register`.

```js
import rwAutoInit from '@mrmoree/auto-init';
import {RWTextField} from '@mrmoree/textfield';

rwAutoInit.register('RWTextField', RWTextField);
```

`rwAutoInit.register()` tells `rw-auto-init` that when it comes across an element with a
`data-rw-auto-init` attribute set to `"RWTextField"`, it should initialize an `RWTextField`
instance on that element. The `rewe-components` package does this for all components for
convenience.

Also note that a component can be mapped to any string, not necessarily the name of its constructor.

```js
import rwAutoInit from '@mrmoree/auto-init';
import {MDCTextField} from '@mrmoree/textfield';

rwAutoInit.register('My amazing text field!!!', RWTextField);
```

```html
<div class="rw-text-field" data-rw-auto-init="My amazing text field!!!">
  <!-- ... -->
</div>
<script>window.rw.autoInit();</script>
```

### De-registering components

Any component can be deregistered by calling `rwAutoInit.deregister` with the name used to register
the component.

```js
mdcAutoInit.deregister('RWTextField');
```

This will simply remove the name -> component mapping. It will _not_ affect any already-instantiated
components on the page.

To unregister all name -> component mappings, you can use `rwAutoInit.deregisterAll()`.

## How `rw-auto-init` works

component constructors. When the default exported function - `rwAutoInit()` - is called,
`rw-auto-init` maintains a registry object which maps string identifiers, or **names**, to
`rw-auto-init` queries the DOM for all elements with a `data-rw-auto-init` attribute. For each
element returned, the following steps are taken:

1. If the `data-rw-auto-init` attribute does not have a value associated with it, throw an error
2. If the value of `data-rw-auto-init` cannot be found in the registry, throw an error
3. If the element has an existing property whose name is the value of `data-rw-auto-init`, it is
   assumed to have already been initialized. Therefore it is skipped, and a warning will be logged
   to the console (this behavior can be overridden).
4. Let `Ctor` be the component constructor associated with the given name in the register
5. Let `instance` be the result of calling `Ctor.attachTo()` and passing in the element as an
   argument.
6. Create a non-writable, non-enumerable property on the node whose name is the value of
   `data-rw-auto-init` and whose value is `instance`.

### Initializing only a certain part of the page

By default, `rw-auto-init` will query the entire document to figure out which components to
initialize. To override this behavior, you can pass in an optional `root` first argument specifying
the root node whose children will be queried for instantiation.

```html
<div id="rw-section">
  <!-- RW Web Components, etc. -->
</div>
<script>window.rw.autoInit(document.getElementById('rw-section'));</script>
```

In the above example, only elements within `<div id="rw-section">` will be queried.

### Calling autoInit() multiple times

By default, `rw-auto-init` only expects to be called once, at page-load time. However, there may be
certain scenarios where one may want to use `rw-auto-init` and may still need to call it multiple
times, such as on a Wordpress site that contains an infinitely-scrolling list of new blog post
elements containing MDC Web components. `rwAutoInit()` takes an optional second argument which is the
function used to warn users when a component is initialized multiple times. By default, this is just
`console.warn()`. However, to skip over already-initialized components without logging a
warning, you could simply pass in a nop.

```html
<script>window.rw.autoInit(/* root */ document, () => {});</script>
```

This will suppress any warnings about already initialized elements.

### Events

#### RWAutoInit:End
Triggered when initialization of all components is complete.

`document.addEventListener("RWAutoInit:End", () => {...});`
