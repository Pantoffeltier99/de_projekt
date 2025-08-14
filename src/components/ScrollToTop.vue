<template>
    <a href="#" @click.prevent="scrollToTop">
        <img
            v-if="isVisible"
            src="@/assets/Scrolltop.png"
            alt="Scroll to top"
            class="fixed bottom-4 right-4 w-12 h-12 rounded-full shadow-lg cursor-pointer hover:bg-gray-200 transition-colors duration-300"
        />
    </a>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue';
const isVisible = ref(false);

const handleScroll = () => {
    if (window.scrollY > 300) {
        isVisible.value = true;
    } else {
        isVisible.value = false;
    }
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
onMounted(
    () => {
        window.addEventListener('scroll', handleScroll);
    }
)

onUnmounted(
    () => {
        window.removeEventListener('scroll', handleScroll);
    }
)

</script>