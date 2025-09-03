<template>
    <div class="bg-blue-50">
        <div class="container mx-auto md:p-15 p-5 pt-24">

            <div class="mb-8 flex items-center justify-center gap-4">
                <router-link to="/termine" class="text-blue-800 hover:text-blue-600 transition">
                    <!-- Pfeil-Icon (←) -->
                    <span class="text-4xl">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 md:h-15 md:w-15 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                        </svg>
                    </span>
                </router-link>
                <h4 class="md:text-7xl text-5xl font-bold bg-gradient-to-l from-blue-600 via-blue-900 to-blue-500 bg-clip-text text-transparent text-center">VERGANGENE TERMINE</h4>
            </div>

            <div class="container mx-auto md:p-20 p-5 md:pt-24">
                <!-- v Alte Termine v -->
                <div>

                    <!-- v Rieneck 25 v -->
                    <div class="mt-2 mb-4 rounded-2xl">
                        <img src="@/assets/Rieneck25.jpg" alt="Rieneck 2025" class="w-full h-100 object-cover rounded-lg">
                        <h5 class="text-3xl font-bold mt-2 mb-4">Rieneck 2025</h5>
                        <p class="text-jusify mt-2 mb-4">
                            Zusammen mit dem VCP Heide waren wir für 10 Tage auf dem Zeltplatz der Burg Rieneck.
                        </p>
                        <br>
                        <div class="mt-4 flex items-center justify-between">
                            <p class="text-sm text-gray-500 italic">Datum: 23.08.2025 - 01.09.2025</p>
                            <p class="text-sm text-gray-500 italic">Rieneck</p>
                        </div>
                    </div>

                    <hr class="h-1 mx-auto rounded-sm my-8 dark:bg-blue-800">
                    <br>

                    <!-- v Pfila 25 v -->
                    <div class="mt-2 mb-4 rounded-2xl">
                        <img src="https://vcp.sh/images/Pfila2023_2.jpg" alt="Bundeslager 2022" class="w-full h-100 object-cover rounded-lg">
                        <h5 class="text-3xl font-bold mt-2 mb-4">Pfingstlager 2025</h5>
                        <p class="text-jusify mt-2 mb-4">
                            Das Pfingstlager 2025 fand wieder in Tydal statt und hatte das Motto "Streng geheim".
                        </p>
                        <br>
                        <div class="mt-4 flex items-center justify-between">
                            <p class="text-sm text-gray-500 italic">Datum: 17.05.2025 - 20.05.25</p>
                            <p class="text-sm text-gray-500 italic">Tydal</p>
                        </div>
                    </div>

                    <hr class="h-1 mx-auto rounded-sm my-8 dark:bg-blue-800">
                    <br>

                    <!-- v Nola 24 v -->
                    <div class="mt-2 mb-4 rounded-2xl">
                        <img src="https://pfadfinden-in-mv.de/wp-content/uploads/2024/09/20240815_094340-1024x768.jpg" alt="Bundeslager 2022" class="w-full h-100 object-cover rounded-lg">
                        <h5 class="text-3xl font-bold mt-2 mb-4">Nordlager 2024</h5>
                        <p class="text-jusify mt-2 mb-4">
                            Das Nordlager 2024 fand in der Nähe in Großzerlang unter dem motto "Wikinger" statt. 
                            Pfadis aus Schleswig-Holstein, Hamburg und Mecklenburg-Vorpommern haben sich dort getroffen um 10 Tage Spaß und Action zu erleben.
                            Auch wir waren dort und haben zusammen mit dem VCP Heide, KSF und CPW eine Kochgruppe gebildet.
                        </p>
                        <br>
                        <div class="mt-4 flex items-center justify-between">
                            <p class="text-sm text-gray-500 italic">Datum: 14.08.2024 - 24.08.2024</p>
                            <p class="text-sm text-gray-500 italic">Bundeszeltplatz Großzerlang</p>
                        </div>
                    </div>

                    <hr class="h-1 mx-auto rounded-sm my-8 dark:bg-blue-800">
                    <br>
                    
                    <!-- v Bula 22 v -->
                    <div class="mt-2 mb-4 rounded-2xl">
                        <img src="https://vcp.de/pfadfinden/wp-content/uploads/2020/12/Luftbild_VCP-Fabian-Wisner-Beitragsbild-scaled.jpg" alt="Bundeslager 2022" class="w-full h-100 object-cover rounded-lg">
                        <h5 class="text-3xl font-bold mt-2 mb-4">Bundeslager 2022</h5>
                        <p class="text-jusify mt-2 mb-4">
                            Zusammen mit über 4.000 Pfadfindern aus ganz Deutschland haben wir 2022 in Großzerlang unter dem Thema "Neustadt" ein Lager aufgebaut. 
                        </p>
                        <br>
                        <div class="mt-4 flex items-center justify-between">
                            <p class="text-sm text-gray-500 italic">Datum: 30.08.2022 - 08.09.2024</p>
                            <p class="text-sm text-gray-500 italic">Bundeszeltplatz Großzerlang</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>