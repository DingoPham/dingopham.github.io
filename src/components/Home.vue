<template>
    <div>
        <header>
            <Navbar />
        </header>
        <Banner />
        <BlogBody />
        <footer>
            <Foot />
        </footer>
    </div>
</template>

<script>
import Banner from './small_components/Banner.vue';
import BlogBody from './small_components/BlogBody.vue';
import Foot from './small_components/Foot.vue';
import Navbar from './small_components/Navbar.vue';

    export default{
        name: 'Home',
        components:{
            Navbar, Banner, BlogBody, Foot
        }
    }
</script>