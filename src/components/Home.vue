<template>
    <div>
        <header>
            <Navbar />
        </header>
        <Banner />
        <BlogBody />
        <FuntionContainer />
        <footer>
            <Foot />
        </footer>
    </div>
</template>

<script>
import FuntionContainer from './function_components/FuntionContainer.vue';
import Banner from './small_components/Banner.vue';
import BlogBody from './small_components/BlogBody.vue';
import Foot from './small_components/Foot.vue';
import Navbar from './small_components/Navbar.vue';

    export default{
        name: 'Home',
        components:{
            Navbar, Banner, BlogBody, Foot, FuntionContainer
        }
    }
</script>