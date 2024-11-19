<template>
    <div>
        <div class="position-fixed fu-con fu-con-box p-1">   
            <div class="flex flex-column items-center gap-10">
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