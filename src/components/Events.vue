<template>
    <div class="container mx-auto p-5 pt-24">

        <div class="mb-8">
            <h4 class="text-7xl font-bold md:text-left text-blue-950 text-center">NÄCHSTE TERMINE</h4>
        </div>

        <div class="grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-6 xl-gap-8">
            <!-- v Aktuelle Termine v -->
            <div>
                <div class="mb-8">
                    <p class="text-xl font-bold md:text-right text-center">Aktuelles</p>
                    <hr class="w-23 h-1 mx-auto rounded-sm md:my-1 dark:bg-blue-800 md:mr-0">  
                </div>
                

                <div class="mt-2 mb-4 rounded-2xl">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Aerial_image_of_the_Rieneck_Castle.jpg/1200px-Aerial_image_of_the_Rieneck_Castle.jpg" alt="Bundeslager 2022" class="w-full h-64 object-cover rounded-lg">
                    <h5 class="text-3xl font-bol mt-2 mb-4">Rieneck 2025</h5>
                    <p class="text-jusify mt-2 mb-4">
                        Dieses Jahr in den Sommerferien fahren wir zusammen mit dem Stamm Heide zehn Tage auf die Burg Rieneck.
                    </p>
                    <div class="mt-4 flex items-center justify-between">
                        <p class="text-sm text-gray-500 italic">Datum: 23.08.25 - 01.09.24</p>
                        <p class="text-sm text-gray-500 italic">Rieneck</p>
                    </div>
                </div>

                <hr class="h-1 mx-auto rounded-sm my-8 dark:bg-blue-800">

                <div class="mt-2 mb-4 rounded-2xl">
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

                <div class="flex items-center gap-4 rounded-2xl">
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

                <div class="flex items-center gap-4 rounded-2xl">
                    <img src="https://vcp.sh/images/thumbnails/images/Nola2024_2_Tim_Sekulic_k-fill-450x290.jpg" alt="Bundeslager 2022" class="w-36 h-36 object-cover rounded-xl">
                    <div>
                        <h5 class="text-2xl font-bold">Nordlager 2024</h5>
                        <p class="text-jusify mt-2 mb-4">
                            Das Nordlager 2024 fand in Großzerlang unter dem Motto "Wikinger" zusammen mit dem VCP Hamburg und Mecklenburg-Vorpommern statt.
                        </p>
                        <div class="mt-4 flex items-center justify-between">
                            <p class="text-sm text-gray-500 italic">Datum: 14.08.2024 - 24.09.2024</p>
                            <p class="text-sm text-gray-500 italic">Großzerlang</p>
                        </div>
                    </div>
                </div>
                
                <div class="flex items-center gap-4 rounded-2xl">
                    <img src="https://vcp.de/pfadfinden/wp-content/uploads/2020/12/Luftbild_VCP-Fabian-Wisner-Beitragsbild-scaled.jpg" alt="Bundeslager 2022" class="w-36 h-36 object-cover rounded-xl">
                    <div>
                        <h5 class="text-2xl font-bold">Bundeslager 2022</h5>
                        <p class="text-jusify mt-2 mb-4">
                            Das Bundeslager 2022 fand in Großzerlang unter dem Thema "Neustadt" statt und war ein unvergessliches Erlebnis für alle Teilnehmer.
                        </p>
                        <div class="mt-4 flex items-center justify-between">
                            <p class="text-sm text-gray-500 italic">Datum: 30.08.2022 - 08.09.2022</p>
                            <p class="text-sm text-gray-500 italic">Großzerlang</p>
                        </div>
                    </div>
                </div>

                <button class="mt-4 px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors">
                    Mehr anzeigen
                </button>
            </div>
        </div>

    </div>
</template>