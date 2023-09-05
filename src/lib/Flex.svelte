<script lang="ts">
  import type { Align, Direction, Justify } from './types.ts';

  export let direction: Direction = 'row';
  export let align: Align = 'center';
  export let justify: Justify = 'center';
  export let reverse = false;

  //  'start' | 'center' | 'end' | 'stretch'
  const alignMap: Record<Align, string> = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    stretch: 'stretch',
  };

  //  'start' | 'center' | 'end' | 'around' | 'between' | 'evenly'
  const justifyMap: Record<Justify, string> = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    around: 'space-around',
    between: 'space-between',
    evenly: 'space-evenly',
  };

  $: directionWithReverse = reverse ? `${direction}-reverse` : direction;
</script>

<div
  {...$$restProps}
  style:display="flex"
  style:flex-direction={directionWithReverse}
  style:align-items={alignMap[align]}
  style:justify-content={justifyMap[justify]}
  class={$$restProps.class}
>
  <slot />
</div>
