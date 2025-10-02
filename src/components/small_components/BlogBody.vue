<style scoped>
    .gap-cus{
        gap: 100px;
        margin-top: 300px
    }
</style>

<template>
    <div class='flex flex-column p-3 m-3 gap-cus'>
        <AboutMe />
        <ThisWebsite />
        <Desire />
        <!-- <MySkills /> -->
        <OtherThings />
    </div>
</template>

<script>
import AboutMe from './inside_blog_body/AboutMe.vue';
import Desire from './inside_blog_body/Desire.vue';
import MySkills from './inside_blog_body/MySkills.vue';
import OtherThings from './inside_blog_body/OtherThings.vue';
import ThisWebsite from './inside_blog_body/ThisWebsite.vue';

export default{
    components:{
        AboutMe, ThisWebsite, Desire, MySkills, OtherThings
    }
}
</script>