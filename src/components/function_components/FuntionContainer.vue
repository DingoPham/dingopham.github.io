<style scoped>
    .padding-20{
        padding: 10px;
    }
</style>

<template>
    <div>
        <div class="function-box">   
            <div class="flex flex-column items-center gap-10 padding-20">
                <Function_GoToTop />
                <Function_ThemeSwitcher />
                <Function_Translator />
            </div>
        </div>
    </div>
</template>

<script>
import Function_GoToTop from './function_container_folder/Function_GoToTop.vue';
import Function_ThemeSwitcher from './function_container_folder/Function_ThemeSwitcher.vue';
import Function_Translator from './function_container_folder/Function_Translator.vue';

export default{
    components:{
        Function_GoToTop, Function_ThemeSwitcher, Function_Translator
    }
}
</script>