<template>
  <div>
    <a
      class="text-blueGray-500 py-1 px-3"
      href="#pablo"
      ref="btnDropdownRef"
      v-on:click="toggleDropdown($event)"
    >
      <i class="fas fa-ellipsis-v"></i>
    </a>
    <div
      ref="popoverDropdownRef"
      class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
    >
      <router-link
          :to="{ name: 'modifUser', params: { id: id }}"
          v-slot="{ href, navigate}"
      >
      <a
        :href="href"
        @click="navigate"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        Modifier
      </a>
    </router-link>
      <a
        href="javascript:void(0);"
        @click="deleteFonction()"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        Supprimer
      </a>
      <a
        href="javascript:void(0);"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        Liste noir (Ohatra)
      </a>
    </div>
  </div>
</template>
<script>
import { createPopper } from "@popperjs/core";
// import axios from "axios";

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    can_delete: {
      type: Boolean,
      default: false,
    },
    delete: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      dropdownPopoverShow: false,
    };
  },
  methods: {
    toggleDropdown: function (event) {
      event.preventDefault();
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start",
        });
      }
    },
    props: ['id'],
    deleteFonction(){
      // const id = this.id;
      // const url = 'http://localhost:8000/api/users/'+id+'/'+url_delete;
      // console.log(url);
      // axios.post(url)
      //       .then(response => {
      //         console.log('Delete success : ', response);
      //         this.$router.push({ name: 'Liste' });
      //       })
      //       .catch(error => console.error('Erreur lors de la récupération des données :', error));
      if(this.can_delete){
        console.log("true io: ", this.id);
        this.delete(this.id);
      }
    }
  },
};
</script>
