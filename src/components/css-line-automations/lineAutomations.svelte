<script lang="ts">
  const lengths = [
    12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
    12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
    12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
    12, 12, 12,
  ];

  const middleRow = 3;

  function getDelay(index: number): number {
    const delayConstant = 300;
    const row = Math.floor(index / 10);

    let delay = 0;
    if (row < middleRow) {
      delay = (middleRow - row) * delayConstant;
    } else {
      delay = (row - middleRow) * delayConstant;
    }

    return delay * -1; // The -1 is to make sure all animations start on load
  }

  function getDirection(index: number): string {
    const row = Math.floor(index / 10);
    if (row <= middleRow) {
      return "normal";
    } else {
      return "normal"; // set to reverse to make half go the other way
    }
  }
</script>

<div class="my-12">
  <div class="grid grid-cols-10 grid-flow-row w-full">
    {#each lengths as length, index}
      <div class="w-{length} m-5 invert">
        <div
          class="animate"
          style="--delay: {getDelay(index)}ms; --direction: {getDirection(
            index
          )};"
        />
      </div>
    {/each}
  </div>
</div>

<style>
  @keyframes example {
    from {
      transform-origin: bottom;
      transform: rotate(0deg);
    }
    50% {
      transform-origin: bottom;
      transform: rotate(180deg);
    }
    to {
      transform-origin: bottom;
      transform: rotate(360deg);
    }
  }

  .animate {
    width: 5px;
    height: 50px;
    background-color: black;
    animation: example 4s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-delay: var(--delay);
    animation-direction: var(--direction);
  }
</style>
