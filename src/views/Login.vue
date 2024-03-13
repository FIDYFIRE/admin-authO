<template>
  <div class="container mx-auto p-4">
     <div class="flex flex-col items-center justify-center">
       <div class="w-full max-w-md">
         <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
           <div class="mb-4">
             <h3 class="text-xl font-bold">Welcome</h3>
             <p class="mt-2">Welcome to My Application.</p>
             <p class="mt-2">Login to connect.</p>
             <p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
           </div>
           <div class="flex items-center justify-between">
             <button @click="auth0Login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
               Login
             </button>
           </div>
         </div>
       </div>
     </div>
  </div>
 </template>
 
 <script>
 export default {
  name: 'Login',
  methods: {
     auth0Login() {
       this.$store.dispatch('auth0Login');
       console.log('we are in auth0Login');
     },
  },
 };
 </script>
 