<script>
  let products = generateRandomArray();

  function generateRandomArray() {
    const words = [
      "apple",
      "banana",
      "cat",
      "dog",
      "elephant",
      "fish",
      "gorilla",
      "house",
      "ice cream",
      "jungle",
      "kiwi",
      "lion",
      "monkey",
      "nest",
      "orange",
      "parrot",
      "queen",
      "rabbit",
      "snake",
      "tiger",
      "umbrella",
      "violet",
      "whale",
      "xylophone",
      "yak",
      "zebra",
    ];

    const getRandomWord = () => words[Math.floor(Math.random() * words.length)];

    const randomArray = [];

    for (let i = 0; i < 30; i++) {
      const title = getRandomWord();
      const text = getRandomWord();

      const obj = {
        Title: title,
        Text: text,
      };

      randomArray.push(obj);
    }

    return randomArray;
  }
</script>

<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
  {#each products as product}
    <div
      class="bg-zinc-50 text-zinc-900 p-6 h-72 lg:h-96 rounded-md text-center"
    >
      <h1>{product.Title}</h1>
      <h2>{product.Text}</h2>
    </div>
  {/each}
</div>
