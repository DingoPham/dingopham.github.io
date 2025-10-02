<template>
    <section id='thisWebsite' class='m-b'>
        <AnimatedContent>
            <div class='flex gap-41 flex-column-2 items-center-2'>
                <p class='f-30 tx-center flex items-center'>
                    {{translations.thisWebsite}}
                </p>
                <img src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaDM5ZnUxa282YWhnYnhqbHVhMG83ajI4aGoxMmRyZGt1OTEybWQ1MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Qo6Jvmp6kZD2g/giphy.gif' alt=''/>
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