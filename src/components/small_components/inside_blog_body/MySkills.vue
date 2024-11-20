<template>
    <section id='mySkills' class='m-b'>
        <AnimatedContent>
            <div class='flex space-between flex-column-2 items-center-2'>
                <Assessment />
                <img src='https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735953/catLearn_cyklvf.gif' alt=''/>
            </div>
        </AnimatedContent>
    </section>
</template>

<script>
import AnimatedContent from '../../function_components/AnimatedContent.vue';
import Assessment from './Assessment.vue';

export default{
    components:{
        Assessment, AnimatedContent
    }
}
</script>