<script>
  import { COLORS } from "$lib/data/colors";
  import { onMount } from "svelte";

  export let type = "area";
  export let data = [];
  export let labels = [
    "2018-09-19T00:00:00.000Z",
    "2018-09-19T01:30:00.000Z",
    "2018-09-19T02:30:00.000Z",
    "2018-09-19T03:30:00.000Z",
    "2018-09-19T04:30:00.000Z",
    "2018-09-19T05:30:00.000Z",
    "2018-09-19T06:30:00.000Z",
  ];
  export let id = "";
  export let colors = COLORS;

  function getLocaleString(d) {
    if (!d) return d;
    return new Date(d).toLocaleString();
  }

  var options = {
    series: data,
    chart: {
      type: type,
      height: "100%",
      width: "100%",
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      curse: "smooth",
      width: type == "line" ? 4 : 0,
    },
    colors: colors,
    fill: {
      type: "solid",
    },
    grid: {
      show: false,
    },
    xaxis: {
      labels: {
        formatter: getLocaleString,
      },
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

  onMount(async () => {
    const ApexCharts = (await import("apexcharts")).default;
    var chart = new ApexCharts(document.querySelector("#" + id), options);
    chart.render();
  });
</script>

<div {id} />
