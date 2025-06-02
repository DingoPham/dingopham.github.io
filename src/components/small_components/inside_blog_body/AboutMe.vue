<template>
    <section id='aboutMe' class='m-b'>
        <AnimatedContent>
            <div class='flex flex-reverse gap-41 flex-column-2 items-center-2'>
                <p class='f-30 tx-center'>
                    {{translations.aboutMe}}
                </p>
                <img src='https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHYzNjdhajYzdTFjZWVnYmdtZml1ZXB0emk3OHk2bDNrYXVzZzN0aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/14xfuigYwofmYo/giphy.gif' alt=''/>
            </div>
        </AnimatedContent>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';
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