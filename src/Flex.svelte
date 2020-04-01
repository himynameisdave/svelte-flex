<script>

  export let direction = 'row';
  export let align = 'center';
  export let justify = 'center';
  export let reverse = false;

  const reverseClass = reverse ? '--reverse' : '';

  let className = `flex flex-direction--${direction}${reverseClass} flex-align--${align} flex-justify--${justify}`;

</script>

<style>
  .flex {
    display: flex;
  }
  /* Direction: row | column */
  .flex-direction--row {
    flex-direction: row;
  }
  .flex-direction--column {
    flex-direction: column;
  }
  /* Reverse the order */
  .flex-direction--row--reverse {
    flex-direction: row-reverse;
  }
  .flex-direction--column--reverse {
    flex-direction: column-reverse;
  }
  /* Align: 'start' | 'center' | 'end' */
  .flex-align--start {
    align-items: flex-start;
  }
  .flex-align--center {
    align-items: center;
  }
  .flex-align--end {
    align-items: flex-end;
  }
  /* Justfy: 'start' | 'center' | 'end' | 'around' | 'between' | 'evenly' */
  .flex-justify--start {
    justify-content: flex-start;
  }
  .flex-justify--center {
    justify-content: center;
  }
  .flex-justify--end {
    justify-content: flex-end;
  }
  .flex-justify--around {
    justify-content: space-around;
  }
  .flex-justify--between {
    justify-content: space-between;
  }
  .flex-justify--evenly {
    justify-content: space-evenly;
  }
</style>

<div class={className}>
	<slot></slot>
</div>
