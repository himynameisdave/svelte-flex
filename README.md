<div align="center" margin="0 auto 20px">
  <h1>svelte-flex</h1>
  <p style="font-style: italic;">💪 A simple and reusable flexbox component for Svelte.</p>
  <div>
    <a href='https://travis-ci.com/github/himynameisdave/svelte-flex'>
        <img src="https://travis-ci.com/himynameisdave/svelte-flex.svg?branch=master" alt="Travis Badge" />
    </a>
    <a href="https://packagephobia.now.sh/result?p=svelte-flex">
        <img src="https://packagephobia.now.sh/badge?p=svelte-flex" alt="Install size" />
    </a>
    <a href="https://bundlephobia.com/result?p=svelte-flex">
        <img src="https://img.shields.io/bundlephobia/min/svelte-flex.svg" alt="Bundle size (minified)" />
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

### Installation

This package is available on NPM, and you can install it with `npm` or `yarn`:

```
npm install svelte-flex

yarn add svelte-flex
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

Check out the [test suite](https://github.com/himynameisdave/svelte-flex/blob/026926b4a41234a26607e05a619e2ee9acbf2ebd/src/__tests__/Flex.spec.js#L11) if you're unsure what CSS styles are applied by these props.

The props are reactive, meaning that if they are dynamically updated, the component will update in response.

### Contributing

Feel free to [file an issue](https://github.com/himynameisdave/svelte-flex/issues/new) or open a pull request. Ensure that you add tests for any new functionality.

---

_👌 Built by [Dave Lunny](http://himynameisdave.com)._
