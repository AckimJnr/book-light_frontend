<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <router-link :to="{ name: 'home' }">
        <img class="mx-auto h-20 w-auto" src="@/assets/images/booklight.png" alt="Book Light">
      </router-link>
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit.prevent="handleSubmit">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input v-model="email" id="email" name="email" type="email" required
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div class="text-sm">
              <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
            </div>
          </div>
          <div class="mt-2">
            <input v-model="password" id="password" name="password" type="password" required autocomplete="new-password" 
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            </div>
        </div>

        <div>
          <button type="submit"
          :disabled="isSigningIn"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            <span v-if="isSigningIn">Signing in...</span>
            <span v-else>Sign in</span>
            
          </button>
        </div>
      </form>
      <p class="mt-10 text-center text-sm text-gray-500">
        Don't have an account?
        <router-link :to="{ name: 'register' }" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Create an account</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import router from '@/router';
import axios from 'axios';
import { ref, computed } from 'vue';
import { createToaster } from "@meforma/vue-toaster"
 
const email = ref('');
const password = ref('');
const error = ref(null);
const isSigningIn = ref(false);

const toaster = createToaster({
  dismissible: true,
  type: "warning", 
  position: "top",
});


const handleSubmit = async () => {
  try {
    isSigningIn.value = true;
    const response = await axios.post('http://localhost:8000/api/login', {
      email: email.value,
      password: password.value
    });

    if (response.status === 200) {
      localStorage.setItem('access_token', response.data.access_token);
      router.push({ name: 'explore' });
    } else {
      error.value = response.data.message || 'An error occurred during login.';
      toaster.show(error.value);
    }
  } catch (error) {
    if(error.response)
      if (error.response.status === 401) {
        error.value = 'Invalid email or password. Please try again.';
        toaster.show(error.value);
      } else {

        error.value = 'An error occurred during login.';
        toaster.show(error.value)
      }
      else if (error.request){
        error.value = 'An error occurred during login.';
        toaster.show(error.value);
      }
      else {
        error.value = 'An error occurred during login.';
        toaster.show(error.value);
      }
  } finally {
    isSigningIn.value = false;
  }
};


</script>
