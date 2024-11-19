<template>
    <section id='otherThings' class='m-b'>
        <AnimatedContent>
            <div class='flex flex-column items-center gap'>
                <p class='f-30 tx-center'>
                    - If you are interested, please join me via social networks below -
                </p>
                <div class='flex gap'>
                <a href='https://github.com/DingoPham'>
                    <img src='https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718737427/github-icon_cw4l1f.png' alt=''/>
                </a>
                <a href='https://www.facebook.com/dingopham.3'>
                    <img src='https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735889/facebook-icon_d1adza.webp' alt=''/>
                </a>
                <a href='https://twitter.com/DingoPham'>
                    <img src='https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735900/x-icon_r2t7p0.png' alt=''/>
                </a>
                <a href='https://discord.gg/JKqGQPTN4f'>
                    <img src='https://res.cloudinary.com/dtqyzzv0h/image/upload/v1718735887/discord-icon_afyadp.png' alt=''/>
                </a>
                    </div>
                    <p class='f-30 tx-center'>
                        - My artwork site -
                    </p>
                <a href='/'>
                    <button class='bg-btn-color btn-color f-17'>
                        Artwork Site
                    </button>
                </a>
            </div>
        </AnimatedContent>
    </section>
</template>

<script>
import AnimatedContent from '../../function_components/AnimatedContent.vue';
export default{
    components:{
        AnimatedContent
    }
}

</script>