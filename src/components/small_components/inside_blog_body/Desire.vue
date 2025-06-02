<template>
    <section id='desire' class='m-b'>
        <AnimatedContent>
            <div class='flex flex-reverse gap-41 flex-column-2 items-center-2'>
                <p class='f-30 tx-center'>
                    {{translations.desire}}
                </p>
                <img src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHU5bXAwYndsMHljN3Q2YWp2cW8wdjh0NWIxN2Vwd2tsYXc0cmV6NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/a21hLOoPdGr60/giphy.gif' alt=''/>
            </div>
        </AnimatedContent>
    </section>
</template>

<script>
import { mapGetters } from 'vuex/dist/vuex.common.js';
import AnimatedContent from '../../function_components/AnimatedContent.vue';
export default{
    components:{
        AnimatedContent
    },
    computed:{
        ...mapGetters(['translations'])
    }
}

</script>