<template>
    <section id='desire' class='m-b'>
        <AnimatedContent>
            <div class='flex flex-reverse gap-41 flex-column-2'>
                <p class='f-30 tx-center'>
                    {{translations.desire}}
                </p>
                <img src='https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735919/catYawn_tbpywt.gif' alt=''/>
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