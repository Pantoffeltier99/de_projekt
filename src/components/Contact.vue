<!-- Kontaktseite -->

<template>
    <div class="container mx-auto p-5 pt-24">
        <h1 class="text-5xl text-center font-bold">Kontakt</h1>
        <p class="text-center mt-4">Hier ist die Kontaktseite.</p>
    </div>
    <div>
        <GoogleMap
            :center="center"
            zoom="10"
            class="w-full h-96">
        </GoogleMap>
    </div>
</template>

<script>
    import {defineComponent} from 'vue';
    import {GoogleMap, Marker} from 'vue3-google-map';

    export default defineComponent({
        components: {
            GoogleMap,
            Marker
        },
        setup() {
            const center = { lat: 48.137154, lng: 11.576124 }; 
            return {
                center
            };
        }
    })
</script>