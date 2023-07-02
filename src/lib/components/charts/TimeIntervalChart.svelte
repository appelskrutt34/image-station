<script>
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let title;
  export let data = {};
  export let labels = [];
  export let id;
  export let color = "#0284c7";
  export let activeInterval = "1h";

  function getLocaleString(d) {
    if (!d) return d;
    return new Date(d).toLocaleString();
  }

  let hourButton, hoursButton, weekButton, activeButton;
  let chart;
  const buttonClass =
    "p-2 disabled:brightness-50 relative rounded-xl overflow-hidden group bg-zinc-500 enabled:hover:bg-gradient-to-r enabled:hover:from-zinc-500 enabled:hover:to-zinc-400 text-white enabled:hover:ring-2 enabled:hover:ring-offset-2 enabled:hover:ring-zinc-400 transition-all ease-out duration-300";

  onMount(() => {
    switch (activeInterval) {
      case "1h":
        activeButton = hourButton;
        break;
      case "24h":
        activeButton = hoursButton;
        break;
      case "1w":
        activeButton = weekButton;
        break;
    }
    activeButton.classList.add("active");
    render();
  });

  $: update(data);

  var options = {
    series: [data],
    chart: {
      type: "area",
      height: "100%",
      width: "100%",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curse: "smooth",
      width: 0,
    },
    colors: [color],
    fill: {
      type: "solid",
    },
    grid: {
      show: false,
    },
    xaxis: {
      labels: {
        maxHeight: 5,
        show: false,
        rotate: 0,
        formatter: getLocaleString,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      tickAmount: 4,
      opposite: true,
      forceNiceScale: true,
    },
    dataLabels: {
      enabled: false,
    },
    labels: labels,
    legend: {
      show: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 2,
        borderRadiusApplication: "end",
      },
    },
  };

  function updateTimeInterval(time) {
    dispatch("updateTimeInterval", {
      time: time,
    });
  }

  function update() {
    if (!data.data || !chart) return;
    chart.updateOptions({
      series: [data],
      labels: labels,
    });
  }

  async function render() {
    const ApexCharts = (await import("apexcharts")).default;
    chart = new ApexCharts(document.querySelector("#" + id), options);
    chart.render();
  }
</script>

<div class="relative h-full">
  <div class="h-2/6 pt-1 text-center">
    <h2 class="pb-2">{title}</h2>
    <button
      bind:this={hourButton}
      on:click={() => {
        activeButton.classList.remove("active");
        hourButton.classList.add("active");
        activeButton = hourButton;
        updateTimeInterval("1h");
      }}
      aria-label="1 hour"
      class={buttonClass}
    >
      1 hour
    </button>
    <button
      bind:this={hoursButton}
      on:click={() => {
        activeButton.classList.remove("active");
        hoursButton.classList.add("active");
        activeButton = hoursButton;
        updateTimeInterval("24h");
      }}
      aria-label="24 hours"
      class={buttonClass}
    >
      24 hours
    </button>
    <button
      bind:this={weekButton}
      on:click={() => {
        activeButton.classList.remove("active");
        weekButton.classList.add("active");
        activeButton = weekButton;
        updateTimeInterval("1w");
      }}
      aria-label="1 week"
      class={buttonClass}
    >
      1 week
    </button>
  </div>
  <div class="h-4/6">
    <div {id} />
  </div>
</div>
