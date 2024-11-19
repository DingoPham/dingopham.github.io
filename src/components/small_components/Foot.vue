<template>
    <div class="flex foot tx-c flex-column">
        <AnimatedContent>
            <div class='p-2 flex flex-column'>
                <p>{{translations.footer}}</p>
                <p class="f-30 flex space-between">pencibambo@gmail.com</p>
            </div>
        </AnimatedContent>
    </div>
</template>

<script>
import { mapGetters } from 'vuex/dist/vuex.common.js';
import AnimatedContent from '../function_components/AnimatedContent.vue';

export default{
    components:{AnimatedContent},
    computed:{
        ...mapGetters(['translations'])
    }
}
</script>