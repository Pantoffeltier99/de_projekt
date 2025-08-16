<template>
    <a href="#" @click.prevent="scrollToTop">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-10 h-10 text-black transition-transform duration-200 ease-out scale-175 hover:scale-200 cursor-pointer z-50 fixed bottom-6 right-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            role="img"
            aria-label="Pfeil nach oben"
            v-show="isVisible"
        >
            <path d="M6 14 L12 8 L18 14" />
        </svg>
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