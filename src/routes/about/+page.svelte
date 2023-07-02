<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  let show = false;
  onMount(() => {
    show = true;
  });
</script>

<article
  class="px-4 flex flex-col items-center justify-center w-full pt-24 pb-10"
  aria-label="Introduction to AI"
>
  {#if show}
    <div in:fade class="container">
      <div class="pb-16 text-center">
        <h1>Making Sense of AI</h1>
        <h2>An Introduction to Artificial Intelligence</h2>
      </div>

      <div class="flex gap-8 items-center justify-center">
        <img src="about/1.jpeg" alt="" class="w-auto h-96 rounded-md" />
        <p class="w-1/3">
          AI, or Artificial Intelligence, refers to the development of computer
          systems that can perform tasks that typically require human
          intelligence. It involves creating machines capable of perceiving
          their environment, reasoning, learning from experience, and making
          decisions. AI enables computers to mimic cognitive functions such as
          problem-solving, pattern recognition, language understanding, and
          decision-making.
        </p>
      </div>

      <div class="flex gap-8 items-center justify-center">
        <p class="w-1/3">
          There are various subfields within AI, including machine learning,
          natural language processing, computer vision, robotics, and expert
          systems. Machine learning plays a fundamental role in AI, allowing
          computers to learn from data without being explicitly programmed. By
          training algorithms with large datasets, AI systems can recognize
          patterns, make predictions, and adapt their behavior based on the
          available information.
        </p>
        <img src="about/2.jpeg" alt="" class="w-auto h-96 rounded-md" />
      </div>
    </div>
  {/if}
</article>
