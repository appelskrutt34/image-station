<script>
  export let link = "/";
  export let text = "";
</script>

<a href={link} class="group transition duration-200 hover:text-zinc-50">
  {text}
  <span
    class="block opacity-0 group-hover:opacity-100 transition-all duration-200 h-0.5 bg-sky-600"
  />
</a>
