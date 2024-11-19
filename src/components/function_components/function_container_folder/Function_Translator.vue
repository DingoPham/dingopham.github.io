<template>
    <div>
        <div class="cursor">
            <button @click="toggleLanguage">
                <VietnamButton v-if="language === 'en'" />
                <EnglishButton v-else />
            </button>
        </div>
    </div>
</template>
  
<script>
import { mapGetters, mapMutations } from "vuex/dist/vuex.common.js";
import EnglishButton from "./language_container/EnglishButton.vue";
import VietnamButton from "./language_container/VietnamButton.vue";
  
export default {
    components: {
        VietnamButton,
        EnglishButton,
    },
    computed:{
        ...mapGetters(['currentLanguage']),
        language(){
            return this.currentLanguage;
        },
    },
    methods:{
        ...mapMutations(['setLanguage']),
        toggleLanguage(){
            this.setLanguage(this.language === 'en' ? 'vi' : 'en');
        }
    }
};
</script>