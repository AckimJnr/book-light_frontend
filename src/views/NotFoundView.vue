<template>
    <div class="not-found">
        <h1>404</h1>
        <p>Oops! Page not found.</p>
        <router-link to="/">Go back to home</router-link>
    </div>
</template>

<style>
.not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: Arial, sans-serif;
    text-align: center;
}

h1 {
    font-size: 6rem;
    margin-bottom: 1rem;
}

p {
    font-size: 2rem;
    margin-bottom: 2rem;
}

router-link {
    color: #007bff;
    text-decoration: none;
    font-size: 1.5rem;
}
</style>
