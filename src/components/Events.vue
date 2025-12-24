<template>
    <div class="bg-blue-50">
        <div class="container mx-auto p-5 pt-24">

            <div class="mb-8">
                <h4 class="md:text-7xl text-5xl font-bold bg-gradient-to-l from-blue-600 via-blue-900 to-blue-500 bg-clip-text text-transparent text-center">NÄCHSTE TERMINE</h4>
            </div>

            <div class="grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-6 xl-gap-8">
                <!-- v Aktuelle Termine v -->
                <div>
                    <div class="mb-8">
                        <p class="text-xl font-bold md:text-right text-center">Aktuelles</p>
                        <hr class="w-23 h-1 mx-auto rounded-sm md:my-1 dark:bg-blue-800 md:mr-0">  
                    </div>
                    
                    <!-- v Pfila 26 v -->
                    <div v-reveal class="mt-2 mb-4 rounded-2xl p-5 bg-white shadow-md reveal-on-load transition-all duration-500 scale-75 opacity-0 delay-0">
                        <img src="https://www.vcp-niedersachsen.de/wp-content/uploads/2014/06/PfilaS%C3%BCntel.jpg" alt="Pfila" class="w-full h-64 object-cover rounded-lg">
                        <h5 class="text-3xl font-bold mt-2 mb-4">Pfingstlager 2026</h5>
                        <p class="text-jusify mt-2 mb-4">
                            Nächstes Jahr über Pfingsten fahren wir wie jedes Jahr zum Landespfingstlager des VCP SH nach Tydal. Das Motto wird noch bekannt gegeben.
                        </p>

                        <div class="mt-4 flex items-center justify-between">
                            <p class="text-sm text-gray-500 italic">Datum: 22.05.26 - 25.05.26</p>
                            <p class="text-sm text-gray-500 italic">Tydal</p>
                        </div>
                    </div>

                    <hr class="h-1 mx-auto rounded-sm my-8 dark:bg-blue-800">

                    <!-- v Bula 26 v -->
                    <div v-reveal class="mt-2 mb-4 rounded-2xl p-5 bg-white shadow-md reveal-on-load transition-all duration-500 scale-75 opacity-0 delay-150">
                        <img src="https://bundeslager.vcp.de/wp-content/uploads/2025/03/20220806-142752_VCP-Bahl-1-scaled.jpg" alt="Bundeslager 2022" class="w-full h-64 object-cover rounded-lg">
                        <h5 class="text-3xl font-bold mt-2 mb-4">Bundeslager 2026</h5>
                        <p class="text-jusify mt-2 mb-4">
                            Unter dem Motto "ungeschrieben" findet 2026 das Bundeslager in Almke bei Wolsburg statt. Erlebe neun Tage mit über
                            4.000 Pfadfindern aus Deutschland sowie internationalen Gästen und genieße ein unvergessliches Lagerfeeling.
                        </p>
                        <div class="mt-4 flex items-center justify-between">
                            <p class="text-sm text-gray-500 italic">Datum: 30.08.2026 - 08.09.2026</p>
                            <p class="text-sm text-gray-500 italic">Almke bei Wolfsburg</p>
                        </div>
                    </div>
                    

                </div>
                <!-- v Alte termine v -->
                <div class="flex flex-col gap-3">
                    <div class="mb-4">
                        <p class="text-xl font-bold md:text-right text-center">Vergangenes</p>
                        <hr class="w-32 h-1 mx-auto rounded-sm my-1 dark:bg-blue-800 md:mr-0">
                    </div>

                    <!-- v Rieneck 25v -->
                    <div v-reveal class="flex items-center gap-4 p-3 rounded-2xl bg-white shadow-md reveal-on-load transition-all duration-500 scale-75 opacity-0 delay-0">
                        <img src="@/assets/Rieneck25.jpg" alt="Rieneck 2025" class="w-36 h-36 object-cover rounded-xl">
                        <div>
                            <h5 class="text-2xl font-bold">Rieneck 2025</h5>
                            <p class="text-jusify mt-2 mb-4">
                                Zusammen mit dem VCP Heide waren wir für 10 Tage auf dem Zeltplatz der Burg Rieneck.
                            </p>
                            <div class="mt-4 flex items-center justify-between">
                                <p class="text-sm text-gray-500 italic">Datum: 23.08.2025 - 01.09.2025</p>
                                <p class="text-sm text-gray-500 italic">Rieneck</p>
                            </div>
                        </div>
                    </div>

                    <!-- v Pfila 25 v -->
                    <div v-reveal class="flex items-center gap-4 p-3 rounded-2xl bg-white shadow-md  reveal-on-load transition-all duration-500 scale-75 opacity-0 delay-100">
                        <img src="https://www.nordkirche.de/fileadmin/_processed_/c/e/csm_pfingstlager_vcp2018-1_0027759e3c.jpg" alt="Bundeslager 2022" class="w-36 h-36 object-cover rounded-xl">
                        <div>
                            <h5 class="text-2xl font-bold">Pfingstlager 2025</h5>
                            <p class="text-jusify mt-2 mb-4">
                                Das Pfingstlager 2025 fand wieder in Tydal statt und hatte das Motto "Streng geheim".
                            </p>
                            <div class="mt-4 flex items-center justify-between">
                                <p class="text-sm text-gray-500 italic">Datum: 17.05.2025 - 20.05.2025</p>
                                <p class="text-sm text-gray-500 italic">Tydal</p>
                            </div>
                        </div>
                    </div>

                    <!-- v Nola 25 v -->
                    <div v-reveal class="flex items-center gap-4 p-3 rounded-2xl bg-white shadow-md reveal-on-load transition-all duration-500 scale-75 opacity-0 delay-200">
                        <img src="https://vcp.sh/images/thumbnails/images/Nola2024_2_Tim_Sekulic_k-fill-450x290.jpg" alt="Bundeslager 2022" class="w-36 h-36 object-cover rounded-xl">
                        <div>
                            <h5 class="text-2xl font-bold">Nordlager 2024</h5>
                            <p class="text-jusify mt-2 mb-4">
                                Das Nordlager 2024 fand in Großzerlang unter dem Motto "Wikinger" zusammen mit dem VCP Hamburg und Mecklenburg-Vorpommern statt.
                            </p>
                            <div class="mt-4 flex items-center justify-between">
                                <p class="text-sm text-gray-500 italic">Datum: 14.08.2024 - 24.08.2024</p>
                                <p class="text-sm text-gray-500 italic">Großzerlang</p>
                            </div>
                        </div>
                    </div>
                

                    <button class="mt-4 px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors">
                        <router-link
                            to="/termine/vergangenes"
                            class="font-bold text-white md:px-11 px-25 py-2 rounded transition-all duration-300 2xl:flex flex-col items-center group"
                            active-class="active-link"
                        >
                            Mehr anzeigen
                        </router-link>
                    </button>
                    
                </div>
            </div>

        </div>
    </div>
</template>