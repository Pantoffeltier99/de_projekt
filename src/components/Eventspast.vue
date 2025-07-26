<template>
    <div class="container mx-auto p-5 pt-24">

        <div class="mb-8 flex items-center justify-center gap-4">
            <router-link to="/termine" class="text-blue-800 hover:text-blue-600 transition">
                <!-- Pfeil-Icon (←) -->
                <span class="text-4xl">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 md:h-15 md:w-15 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                    </svg>
                </span>
            </router-link>
            <h4 class="md:text-7xl text-5xl font-bold text-blue-950 text-center">VERGANGENE TERMINE</h4>
        </div>

        <div class="container mx-auto p-5 pt-24">
            <!-- v Aktuelle Termine v -->
            <div>
                <div class="mt-2 mb-4 rounded-2xl">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Aerial_image_of_the_Rieneck_Castle.jpg/1200px-Aerial_image_of_the_Rieneck_Castle.jpg" alt="Bundeslager 2022" class="w-full h-100 object-cover rounded-lg">
                    <h5 class="text-3xl font-bold mt-2 mb-4">Rieneck 2025</h5>
                    <p class="text-jusify mt-2 mb-4">
                        Dieses Jahr in den Sommerferien fahren wir zusammen mit dem Stamm Heide zehn Tage auf die Burg Rieneck.
                    </p>
                    <br>
                    <div class="mt-4 flex items-center justify-between">
                        <p class="text-sm text-gray-500 italic">Datum: 23.08.25 - 01.09.24</p>
                        <p class="text-sm text-gray-500 italic">Rieneck</p>
                    </div>
                </div>
                <hr class="h-1 mx-auto rounded-sm my-8 dark:bg-blue-800">
                <br>
                <div class="mt-2 mb-4 rounded-2xl">
                    <img src="https://bundeslager.vcp.de/wp-content/uploads/2025/03/20220806-142752_VCP-Bahl-1-scaled.jpg" alt="Bundeslager 2022" class="w-full h-100 object-cover rounded-lg">
                    <h5 class="text-3xl font-bold mt-2 mb-4">Bundeslager 2026</h5>
                    <p class="text-jusify mt-2 mb-4">
                        Unter dem Motto "ungeschrieben" findet 2026 das Bundeslager in Almke bei Wolsburg statt. Erlebe neun Tage mit über
                        4.000 Pfadfindern aus Deutschland sowie internationalen Gästen und genieße ein unvergessliches Lagerfeeling.
                    </p>
                    <br>
                    <div class="mt-4 flex items-center justify-between">
                        <p class="text-sm text-gray-500 italic">Datum: 30.08.2026 - 08.09.2026</p>
                        <p class="text-sm text-gray-500 italic">Almke bei Wolfsburg</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>