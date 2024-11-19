<template>
    <div>
        <div class="cursor">
        <button @click="toggleLanguage">
            <component :is="currentButton" />
        </button>
        </div>
    </div>
</template>
  
<script>
import EnglishButton from "./language_container/EnglishButton.vue";
import VietnamButton from "./language_container/VietNamButton.vue";
import TranslationList from "./language_container/TranslationList";
  
export default {
    name: "TranslationFunction",
    components: {
        VietnamButton,
        EnglishButton,
    },
    mixins: [TranslationList],
    computed:{
        currentButton(){
            return this.language === "en" ? "VietnamButton" : "EnglishButton";
        }
    },
};
</script>