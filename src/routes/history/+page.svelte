<script>
  import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
  } from "svelte-vertical-timeline";
  import Description from "./components/Description.svelte";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  export let data;

  let show = false;
  onMount(() => {
    show = true;
  });
</script>

<article class="px-4 flex flex-col w-full pt-24 pb-10" aria-label="AI timeline">
  {#if show}
    <div in:fade>
      <div class="pb-16 text-center">
        <h1>Exploring the AI Journey</h1>
        <h2>A Historical Timeline</h2>
        <h3 class="text-zinc-50 text-base font-light pt-2">
          Try me in mobile view
        </h3>
      </div>

      <Timeline position="alternate">
        {#each data.history.roadpoints as option, i}
          <TimelineItem>
            <TimelineOppositeContent slot="opposite-content">
              <p>{option.time}</p>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot style={"background-color: #0284c7"} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div class="md:relative">
                <h3 class="font-bold -mt-1 text-sm md:text-base">
                  {option.title}
                </h3>
                <Description
                  text={option.description}
                  title={option.title}
                  alignRight={i % 2 != 0}
                />
              </div>
            </TimelineContent>
          </TimelineItem>
        {/each}
      </Timeline>
    </div>
  {/if}
</article>

<style>
  p {
    color: #71717a;
  }
</style>
