
<template>
   <ProfileHeader />

   <SideBar />

   <div class="p-4 sm:ml-64">
      <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
         <div class="content">
            <!-- Begin profile picture-->
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
               <router-link :to="{ name: 'home' }"><img class="mx-auto h-20 w-auto" src="@/assets/images/booklight.png"
                     alt="Book Light"></router-link>
               <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Profile</h2>
            </div>
            <!--End profile picuture-->
            <div>
                    <label for="full_name" class="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
                    <div class="mt-2">
                        <input id="full_name" name="full_name" type="text" autocomplete="full_name" v-model="full_name"
                            required
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>

            Me
         </div>

      </div>
   </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import SideBar from '@/components/common/SideBar.vue';
import ProfileHeader from '@/components/common/ProfileHeader.vue';

const router = useRouter();

const signOut = () => {
   localStorage.removeItem('access_token');
   router.push({ name: 'home' });
};
</script>
 
 
<style scoped></style>