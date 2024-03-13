<!-- <template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16"
  >
    <div class="px-6">
      <div class="flex flex-wrap justify-center">
        <div class="w-full px-2 text-center mt-10">
            <div class="flex justify-center py-2 lg:pt-2 pt-4">
              <div class="lg:mr-2 text-center">
                <span class="text-sm font-semibold block uppercase tracking-wide text-blueGray-600">
                  {{ poll.likes }}
                </span>
                <span class="text-xs text-blueGray-400">Likes</span>
              </div>
            </div>
        </div>
      </div>
      <div class="text-center mt-12">
        <h3
          class="text-xl font-semibold leading-normal mb-2 text-blueGray-700"
        >
        {{ owner.fullname }}
        </h3>
        <div
          class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"
        >
          <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
          {{ owner.quarter }}, {{ owner.city }}, {{ owner.country }}
        </div>
        <div class="mb-2 text-blueGray-600 mt-10">
          <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
          {{ poll.createdAt }}
        </div>
      </div>
      <div class="mt-10 py-8 border-t border-blueGray-200 text-center">
        <div class="flex flex-wrap justify-center">
          <div class="w-full lg:w-9/12 px-4">
            <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
              {{ poll.descriptions }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import team2 from "@/assets/img/team-2-800x800.jpg";

  export default {
    props : {
      poll: {
        type: Object,
        required: true
      },
      owner: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        team2,
      };
    },
  };
</script> -->

<template>
  <div>
    <div
      class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded"
      :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']"
    >
      <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3
              class="font-semibold text-lg"
              :class="[color === 'light' ? 'text-blueGray-700' : 'text-white']"
            >
              Liste des {{ title }} : {{ data_body.length }}
            </h3>
          </div>
        </div>
      </div>
      <div class="block w-full overflow-x-auto">
        <!-- Projects table -->
        <table class="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th v-for="header in data_header" :key="header"
                class="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                :class="[
                  color === 'light'
                    ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                    : 'bg-emerald-800 text-emerald-300 border-emerald-700',
                ]"
              >
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in data_body" :key="row.id">
              <td v-for="(value, key) in row" :key="key"
                  class="border-t-0 px-8 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                  style="word-wrap: break-word; max-width: 300px; white-space: normal;"
              >
                {{ value }}
              </td>
              <td
                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right"
              >
                <table-dropdown :id="row.id" :can_delete="true" :delete="delete_action"/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import TableDropdown from "@/components/Templates/Dropdowns/TableDropdown.vue";

import bootstrap from "@/assets/img/bootstrap.jpg";
import angular from "@/assets/img/angular.jpg";
import sketch from "@/assets/img/sketch.jpg";
import react from "@/assets/img/react.jpg";
import vue from "@/assets/img/react.jpg";

console.log("unhunn");

export default {
  data() {
    return {
      bootstrap,
      angular,
      sketch,
      react,
      vue,
      info: []
    };
  },
  components: {
    TableDropdown,
  },
  props : {
    color: {
      default: "light",
      validator: function (value) {
        // The value must match one of these strings
        return ["light", "dark"].indexOf(value) !== -1;
      },
    },
    data_header: {
      type: Array,
      required: true
    },
    data_body: {
      type: Array,
      required: true
    },
    title: {
      type: Object,
      required: true
    },
    delete_action: {
      type: Function,
      required: true,
    },
  },
};
</script>
