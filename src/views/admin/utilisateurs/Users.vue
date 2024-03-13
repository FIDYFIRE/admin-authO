<template>
    <div class="flex flex-wrap mt-4">
      <div class="w-full mb-12 px-4">
        <CardPoll :data_header="data_header" :data_body="data_body" :title="title" :delete_action="deletePoll" />
      </div>
    </div>
  </template>
   
  <script>
  import ApiService from "@/services/ApiService";
  import CardPoll from "@/components/Templates/Cards/CardPoll.vue";
  
  export default {
    data() {
      return {
        data_body: [],
        data_header: ['id', 'nom', 'email', 'telephone', 'naissance'],
        title: "utilisateurs"
      };
    },
    components: {
      CardPoll,
    },
    methods: {
      deleteUser(id_user) {
        ApiService.delete(`/api/users/${id_user}/delete`)
          .then(response => {
            console.log('Delete success : ', response);
            const index = this.data_body.findIndex(item => item.id === id_user);
            // Supprimer l'élément du tableau
            if (index !== -1) {
              this.data_body.splice(index, 1);
            }
          })
          .catch(error => console.error('Erreur lors de la suppression des données users:', error));
      },
    },
    mounted() {
      ApiService.get("/api/users")
        .then(response => {
          console.log(response.data.data);
          console.log("oke data");
          this.data_body = response.data.data.map(item => ({
            id: item.id,
            nom: item.fullname,
            email: item.email,
            telephone: item.phone,
            naissance: item.date_of_birth
          }));
        })
        .catch(error => console.error('Erreur lors de la récupération des données dans CardPoll.vue :', error));
   }
  };
  </script>
  
    