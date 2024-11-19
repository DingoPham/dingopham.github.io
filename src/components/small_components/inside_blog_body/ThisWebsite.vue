<template>
    <section id='thisWebsite' class='m-b'>
        <AnimatedContent>
            <div class='flex gap-41 flex-column-2'>
                <p class='f-30 tx-center'>
                    {{translations.thisWebsite}}
                </p>
                <img src='https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735928/catNo_hdsqiy.gif' alt=''/>
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