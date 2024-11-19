<template>
    <div class="navbar p-1 w-p-100" id="navBar">
        <div class="flex space-around navbar-container items-center-2 space-between-2 tx-c f-30">
            <a href='/'>DINGOPHAM</a>

            <NavbarIcon @toggle-menu="toggleMenu"/>
            
            <div class='flex gap navbar-links' :class="{ 'menu-open': isMenuOpen }">
                <a href="#aboutMe" >{{translations.abtMe}}</a>
                <a href="#thisWebsite" >{{translations.thisWeb}}</a>
                <a href="#desire" >{{translations.des}}</a>
                <a href="#mySkills" >{{translations.mySki}}</a>
                <a href="#otherThings" >{{translations.otherThi}}</a>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex/dist/vuex.common.js';
import NavbarIcon from '../mobile_function/NavbarIcon.vue';


export default {
    components:{
        NavbarIcon
    },
    data(){
        return{
            isMenuOpen: false
        }
    },
    methods:{
        toggleMenu(isOpen){
            this.isMenuOpen = isOpen
        },
        closeMenu(){
            this.isMenuOpen = false
        }
    },
    mounted() {
        const handleAnchorClick = (e) => {
            e.preventDefault();

            const href = e.target.getAttribute('href');

            if (href === '/') {
                window.location.href = href;
                return;
            }

            const targetId = href.substring(1); // Lấy id từ href (bỏ ký tự '#')
            const targetEle = document.getElementById(targetId); // Tìm element theo id
            if (targetEle) {
                const targetOffSet = targetEle.offsetTop; // Lấy vị trí của element

                const windowHeight = window.innerHeight; // Chiều cao của cửa sổ
                const targetHeight = targetEle.offsetHeight; // Chiều cao của phần tử
                const scroll = targetOffSet - (windowHeight - targetHeight) / 2; // Tính khoảng cách cần scroll

                window.scrollTo({
                    top: scroll,
                    behavior: 'smooth' // Scroll mượt
                });
            }
        };

        const anchors = document.querySelectorAll('#navBar a'); // Lấy tất cả anchor trong navbar
        anchors.forEach(anchor => {
            anchor.addEventListener('click', handleAnchorClick); // Thêm sự kiện click cho mỗi anchor
        });

        // Cleanup khi component bị destroy
        this.$once('hook:beforeDestroy', () => {
            anchors.forEach(anchor => {
                anchor.removeEventListener('click', handleAnchorClick); // Gỡ bỏ sự kiện khi component bị hủy
            });
        });
    },
    computed:{
        ...mapGetters(['translations'])
    }
};
</script>
