<div align="center" margin="0 auto 20px">
  <h1>svelte-flex</h1>
  <p style="font-style: italic;">💪 A simple and reusable flexbox component for Svelte.</p>
  <div>
    <a href='https://github.com/himynameisdave/svelte-flex/actions?query=workflow%3Atest+branch%3Amain'>
      <img src="https://github.com/himynameisdave/svelte-flex/workflows/test/badge.svg" alt="GitHub Actions - Test Workflow Badge" />
    </a>
    <a href="https://packagephobia.now.sh/result?p=svelte-flex">
        <img src="https://packagephobia.now.sh/badge?p=svelte-flex" alt="Install size" />
    </a>
    <a href="https://bundlephobia.com/result?p=svelte-flex">
        <img src="https://img.shields.io/bundlephobia/min/svelte-flex.svg" alt="Bundle size (minified)" />
    </a>
    <a title="MadeWithSvelte.com Shield" href="https://madewithsvelte.com/p/svelte-frappe-charts/shield-link">
      <img src="https://madewithsvelte.com/storage/repo-shields/2411-shield.svg" />
    </a>
  </div>
</div>

---

A simple and reusable flexbox component for [Svelte](https://svelte.dev/).

- Sane defaults.
- Simple API.
- Reactive props.
- Minimal size.

[**Try me on CodeSandbox!**](https://codesandbox.io/s/svelte-flex-5s45y)

### Requirements

This package assumes you are using at least Svelte `4.x`, and that is the only major version which is actively tested. It may work in some older versions, however

This package requires at least `svelte@3.46.2` to work, as it makes use of the [style directives](https://github.com/sveltejs/rfcs/pull/42) feature introduced in the [`3.46.x` version](https://github.com/sveltejs/svelte/blob/master/CHANGELOG.md#3462).

### Installation

This package is available on NPM, and you can install it with `npm` or `yarn`:

```
npm install -D svelte-flex

yarn add -D svelte-flex
```

### Usage

Import the `Flex` component and use it in your Svelte project.

```svelte
<script>
  import Flex from 'svelte-flex';
</script>

<Flex>
  <div>Flexbox child!</div>
  <div>Flexbox child!</div>
  <div>Flexbox child!</div>
</Flex>
```

#### Props

All props are optional (as they all have default values).

**Prop** | **Possible Values** | **Default Value**
---|---|---
[`direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction) | `'row'` \| `'column'` | `'row'`
[`align`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) | `'start'` \| `'center'` \| `'end'` \| `'stretch'` | `'center'`
[`justify`](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) | `'start'` \| `'center'` \| `'end'` \| `'around'` \| `'between'` \| `'evenly'`  | `'center'`
[`reverse`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction#Result) | `true` \| `false` | `false`

Check out the [test suite](https://github.com/himynameisdave/svelte-flex/blob/master/src/__tests__/Flex.spec.js#L11) if you're unsure what CSS styles are applied by these props.

The props are reactive, meaning that if they are dynamically updated, the component will update in response.

#### Additional Props

Any additional props you provide to `Flex` will be spread onto the root element. This includes custom CSS classes, which will be applied after the flex classes:

**Input**

```html
<Flex class="my-custom-class" aria-label="flex-boi">
  <span>Flex child</span>
</Flex>
```

**HTML Output**
```html
<div class="flex flex-direction--row flex-align--center flex-justify--center my-custom-class" aria-label="flex-boi">
  <span>Flex child</span>
</div>
```

### "Why does this exist?"

I get plenty of comments asking about why this package exists and what value it adds, especially when you could just add your own flex styles and be done with it. This package helps do this in a reusable way so you don't have to think about it, as well as making it easier for folks who may not be as familiar with working with flexbox. Just a reminder that _✨you don't have to use this package✨_ if it doesn't suit your needs.

### Contributing

Feel free to [file an issue](https://github.com/himynameisdave/svelte-flex/issues/new) or open a pull request. Ensure that you add tests for any new functionality.

---

_👌 Built by [Dave Lunny](http://himynameisdave.com)._
