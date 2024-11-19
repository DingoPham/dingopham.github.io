<template>
        <div class='f-30 tx-center m-as'>
            <ul class='flex flex-column'> 
                {{translations.mySkills}}
                <li class="flex gap flex-end">HTML/CSS:
                    <div class="flex">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </li>
                <li class="flex gap flex-end">JS:
                    <div class="flex">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </li>
                <li class="flex gap flex-end">VueJS:
                    <div class="flex">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </li>
                <li class="flex gap flex-end">ReactJS:
                    <div class="flex">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </li>
                <li class="flex gap flex-end">C#:
                    <div class="flex">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </li>
                <li class="flex gap flex-end">PHP:
                    <div class='flex'>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </li>
                <li class="flex gap flex-end">WordPress:
                    <div class="flex">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                        <span class="fa fa-star"></span>
                    </div>
                </li>
            </ul>
        </div>
</template>

<script>
import { mapGetters } from 'vuex/dist/vuex.common.js';

export default{
    computed:{
        ...mapGetters(['translations'])
    }
}
</script>