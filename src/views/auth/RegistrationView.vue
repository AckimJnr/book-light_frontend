<template>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <router-link :to="{ name: 'home' }"><img class="mx-auto h-20 w-auto" src="@/assets/images/booklight.png"
                    alt="Book Light"></router-link>
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create your account</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" @submit.prevent="validateAndSignUp">
                <div v-if="errors.length" class="mt-4 text-red-500">
                    <ul>
                        <li v-for="error in errors" :key="error">{{ error }}</li>
                    </ul>
                </div>
                <div>
                    <label for="full_name" class="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
                    <div class="mt-2">
                        <input id="full_name" name="full_name" type="text" autocomplete="full_name" v-model="full_name"
                            required
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                    <div class="mt-2">
                        <input id="email" name="email" type="email" autocomplete="email" v-model="email" required
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>

                    </div>
                    <div class="mt-2">
                        <input id="password" name="password" type="password" autocomplete="false" required
                            v-model="password"
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>

                <div>
                    <label for="confirm_password" class="block text-sm font-medium leading-6 text-gray-900">Confirm
                        Password</label>
                    <div class="mt-2">
                        <input id="confirm_password" name="confirm_password" type="password" autocomplete="false"
                            v-model="confirm_password" required
                            class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>

                <div>
                    <button type="submit" :disabled="loading"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        {{ loading ? 'Registering...' : 'Register' }}
                    </button>
                </div>
            </form>
            <p class="mt-10 text-center text-sm text-gray-500">
                Already have an account?
                <router-link :to="{ name: 'login' }"
                    class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login</router-link>
            </p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'RegistrationView',

    data() {
        return {
            full_name: '',
            email: '',
            password: '',
            confirm_password: '',
            errors: [],
            loading: false,
            showCustomAlert: true,
        };
    },
    methods: {

        async validateAndSignUp() {
            this.errors = [];

            if (!this.full_name.trim()) {
                this.errors.push('Full Name is required');
            }

            if (!this.email.trim()) {
                this.errors.push('Email address is required');
            } else if (!/\S+@\S+\.\S+/.test(this.email)) {
                this.errors.push('Invalid email address');
            }

            if (!this.password.trim()) {
                this.errors.push('Password is required');
            } else if (this.password.length < 6) {
                this.errors.push('Password must be at least 6 characters long');
            }

            if (this.password !== this.confirm_password) {
                this.errors.push('Passwords do not match');
            }

            if (this.errors.length === 0) {
                // Perform signup only if there are no errors
                this.signUp();
            }
        },
        async signUp() {
            try {
                let result = await axios.post('http://localhost:8000/api/register', {
                    full_name: this.full_name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.confirm_password
                });

                console.log(result);

                if (result.status === 201) {
                    this.showDismissibleAlert = true;
                    this.$router.push({ name: 'login' });
                }
                else if (result.status === 422) {
                    this.handleServerErrors(result.data.errors);
                }
            } catch (error) {
                if (error.response)
                    this.handleServerErrors(error.response.data.errors);
                else if (error.request) {
                    this.errors.push('Something went wrong. Please try again later.');
                }
                else {
                    this.errors.push('Something went wrong. Please try again later.', error.message);
                }
            } finally {
                this.loading = false;
            }
        },

        handleServerErrors(serverErrors) {
            this.errors = [];
            for (const key in serverErrors) {
                this.errors.push(serverErrors[key][0]);
            }
        }

    }
}

</script>