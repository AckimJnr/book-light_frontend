<script setup>

</script>

<template>
    <!-- Hero Section Start -->
    <div class="container mx-auto px-5 overflow-x-hidden xlg:overflow-x-visible" id="Books">
        <section class="grid grid-cols-none lg:grid-cols-2 pb-16 pt-8 items-center">
            <div class="lg:w-5/6 order-2 lg:order-none">
                <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Online book shelf</h1>
                <p class="mt-6 text-lg leading-8 text-gray-600">
                    On BookLight, you can read books, publish books, and even sell books. You can also read books from other authors and publishers.
                    We have a wide range of books from different genres, from fiction to non-fiction, from romance to horror, from fantasy to sci-fi, motivational and many more.
                </p>
                <!-- <div class="flex justify-center lg:justify-start mt-10">
                    <LinkButton btn-type="primary" link="#download-section">Get It On Chrome</LinkButton>
                    <LinkButton btn-type="muted" link="#download-section">Get It On Firefox</LinkButton>
                </div> -->
            </div>
            <div class="relative order-1 lg:order-none mb-20 lg:mt-0 lg:mb-0 lg:-mr-10">
                <img class="z-10 w-full" src="@/assets/images/landing_page/books_section.jpeg"  />
                <div class="-z-10 bg-theme-primary h-52 w-full sm:h-80 sm:w-full rounded-l-full absolute -right-28 md:-right-48 -bottom-8"></div>
            </div>
        </section>
    </div>
    <!-- Hero Section End -->
</template>
