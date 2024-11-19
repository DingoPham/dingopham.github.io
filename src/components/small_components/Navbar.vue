<template>
    <div class="navbar p-1 w-p-100" id="navBar">
        <div class='flex space-around navbar-container tx-c f-30'>
            <a href='/'>DINGOPHAM</a>
            <div class='flex gap'>
                <a href="#aboutMe">{{currentTranslations.abtMe}}</a>
                <a href="#thisWebsite">THISWEBSITE</a>
                <a href="#desire">DESIRE</a>
                <a href="#mySkills">MYSKILLS</a>
                <a href="#otherThings">OTHERTHINGS</a>
            </div>
        </div>
    </div>
</template>

<script>
import TranslationList from '../function_components/function_container_folder/language_container/TranslationList';

export default {
    name: 'Navbar',
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
    mixins: [TranslationList]
};
</script>
