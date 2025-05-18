import { onMounted, onUnmounted, reactive, toRefs } from "vue";

export function useMonitorSize() {
    const sizes = reactive({
        browserWidth: window.innerWidth,
        deviceWidth: screen.width,
        isMobile: false,
    });

    const browserResize = () => {
        sizes.browserWidth = window.innerWidth;
        sizes.deviceWidth = screen.width;
        sizes.isMobile = isMobile()
    }

    const isMobile = () => {
        return window.innerWidth <= 800 ? true : false;
    }

    onMounted(() => {
        window.addEventListener("resize", browserResize);
    });

    onUnmounted(() => {
        window.removeEventListener("resize", browserResize);
    });

    return {
        ...toRefs(sizes),
    }
}
