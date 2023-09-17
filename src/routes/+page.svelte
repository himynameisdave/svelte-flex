<script lang="ts">
  import Flex from '../lib/Flex.svelte';
</script>

<h1>
  svelte-flex
</h1>

<p>
  This page is used to test the functionality of the `svelte-flex` package. This page can be previewed by running `npm run preview`, and the tests themselves can be run with `npm run test:integration`.
</p>

<Flex data-testid="basic">
  <span>1</span>
  <span>2</span>
  <span>3</span>
</Flex>

<Flex align="start" data-testid="start" justify="start">
  <span>1</span>
  <span>2</span>
  <span>3</span>
</Flex>

<Flex data-testid="column" direction="column">
  <span>1</span>
  <span>2</span>
  <span>3</span>
</Flex>

<Flex class="test-class" data-foo="bar" data-testid="additionalProps">
  <span>1</span>
  <span>2</span>
  <span>3</span>
</Flex>

<Flex data-testid="reverse" reverse>
  <span>1</span>
  <span>2</span>
  <span>3</span>
</Flex>

<Flex data-test-id="gap" gap="1rem">
  <span>1</span>
  <span>2</span>
  <span>3</span>
</Flex>
