<template>
    <div class="flex flex-wrap mt-4">
      <div class="w-full mb-12 px-4">
        <card-table />
      </div>
    </div>
  </template>
  <script>
  import CardTable from "@/components/Templates/Cards/CardPublication.vue";
  
  export default {
    components: {
      CardTable,
    },
  };
  </script>
  