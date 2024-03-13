<template>
  <div class="app">
      <header class="bg-blue-500 text-white p-4">
        <div class="container mx-auto flex justify-between items-center">
          <h1 class="text-xl">Auth0 with Vue</h1>
          <nav>
            <router-link to="/" class="mr-2 text-white">Home</router-link>
            <router-link to="/about" class="mr-2 text-white">About</router-link>
            <router-link to="/contact" class="mr-2 text-white">Contact</router-link>
            <router-link to="/members" class="mr-2 text-white">Members</router-link>
            <button @click="login" class="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
          </nav>
        </div>
      </header>
  
      <div id="app">
        <router-view></router-view>
      </div>
  </div>
 </template>
 
 <script>
import authStore from "./store";

export default {
 name: 'App',
 setup() {

    const login = () => {
      authStore.auth0Login();
      console.log('logging in');
    };

    return {
      login,
      authStore
    };
 }
}
</script>