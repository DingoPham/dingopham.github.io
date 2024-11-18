<template>
    <div class='flex flex-column p-6 m-3'>
        <AboutMe />
        <ThisWebsite />
        <Desire />
        <MySkills />
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