<div align="center" margin="0 auto 20px">
  <h1>svelte-flex</h1>
  <p style="font-style: italic;">💪 A reusable flexbox component for Svelte.</p>
    <!-- 
  <div>
    <a href='https://travis-ci.org/himynameisdave/svelte-flex'>
        <img src="https://api.travis-ci.org/himynameisdave/svelte-flex.svg?branch=master" alt="Travis Badge" />
    </a>
    <a href="https://bundlephobia.com/result?p=svelte-flex">
        <img src="https://img.shields.io/bundlephobia/min/svelte-flex.svg" alt="Bundle size (minified)" />
    </a>
    <a href="https://www.npmjs.com/package/svelte-flex">
        <img src="https://img.shields.io/npm/dm/svelte-flex.svg" alt="Downloads">
    </a>
    <a href="https://app.fossa.io/projects/git%2Bgithub.com%2Fhimynameisdave%2Fsvelte-flex?ref=badge_shield" alt="FOSSA Status">
        <img src="https://app.fossa.io/api/projects/git%2Bgithub.com%2Fhimynameisdave%2Fsvelte-flex.svg?type=shield"/>
    </a>
  </div>
    -->
</div>

---

A simple and reusable flexbox component for Svelte.

### Installation

This package is available on NPM, and you can install it with `npm` or `yarn`:

```
npm install svelte-flex

yarn add svelte-flex
```

**Browser/UMD**

If you want to just import this library directly in the browser, you can add the following script tag:

```html
<script src="https://unpkg.com/svelte-flex/bin/index.umd.js" />
```

This will expose `Flex` as a component in the global scope.

### Usage

Import the `Flex` component and use it.

```svelte
<script>
  import Flex from 'svelte-flex';
</script>

<Flex>
  <div>Flexbox child!</div>
</Flex>
```

#### Props

All props are optional (as they all have default values).

**Prop** | **Possible Values** | **Default Value**
---|---|---
[`direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction) | `'row'` \| `'column'` | `'row'`
[`align`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) | `'start'` \| `'center'` \| `'end'` | `'center'`
[`justify`](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) | `'start'` \| `'center'` \| `'end'` \| `'around'` \| `'between'` \| `'evenly'`  | `'center'`
[`reverse`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction#Result) | `true` \| `false` | `false`

### Roadmap

- [ ] Support more values for the default properties.
- [ ] Support more flexbox CSS properties.
- [ ] Attempt to reduce CSS size by removing unused selectors.

---

_👌 Built by [Dave Lunny](http://himynameisdave.com)._
