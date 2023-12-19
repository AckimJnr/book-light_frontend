
<template>
   <ProfileHeader />

   <SideBar />

   <div class="p-4 sm:ml-64">
      <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
         <div class="content">


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