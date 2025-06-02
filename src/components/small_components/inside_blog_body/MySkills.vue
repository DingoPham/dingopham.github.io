<template>
    <section id='mySkills' class='m-b'>
        <AnimatedContent>
            <div class='flex space-between flex-column-2 items-center-2'>
                <Assessment />
                <img src='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnA5cnBiMjcxaTAyaDI5dnptNGh1dnc0cTB6M3V0bzAxa20zamh5eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oxHQfvDzo7VhSRy8M/giphy.gif' alt=''/>
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