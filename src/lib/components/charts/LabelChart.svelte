<script>
  import { COLORS } from "$lib/data/colors";
  import { onMount } from "svelte";
  import { innerWidth } from "$lib/stores/data";

  export let type = "area";
  export let data = [];
  export let labels = [];
  export let id = "";
  export let colors = COLORS;
  export let yFormatter = (v) => {
    return v;
  };

  function formatDate(d) {
    d = new Date(d);
    var month = d.getMonth();
    var day = d.getDate().toString().padStart(2, "0");
    var year = d.getFullYear();
    year = year.toString().substr(-2);
    month = (month + 1).toString().padStart(2, "0");
    return month + "/" + day + "/" + year;
  }

  var options = {
    series: data,
    chart: {
      foreColor: "#fafafa",
      type: type,
      height: "100%",
      width: "100%",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
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
    yaxis: {
      opposite: true,
      labels: {
        formatter: yFormatter,
      },
    },
    xaxis: {
      tickPlacement: "between",
      tickAmount: $innerWidth > 768 ? 4 : 2,
      labels: {
        formatter: formatDate,
        hideOverlappingLabels: true,
        rotate: 0,
        offsetX: 4,
      },
      tooltip: {
        enabled: false,
      },
    },
    labels: labels,
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: $innerWidth > 768 ? true : false,
    },
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
