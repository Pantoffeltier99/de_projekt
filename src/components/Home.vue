<!-- Homepage -->

<template>
  <div class="bg-blue-50">
    <div class="relative w-full">
      <img src="@\assets\NIMROD3.jpg" class="w-full h-full object-cover" alt="Nimrod" />
        <h1 v-reveal class="delay-200 transition-all duration-1000 reveal-on-load opacity-0 scale-75 absolute top-5/13 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-200 text-5xl md:text-7xl xl:text-9xl font-bold text-center">
          PFADFINDEN MIT ALLEN
        </h1>
    </div>

    <div>
      <div class="container mx-auto xl:p-5 p-0 pt-24">
        <h1 class="md:text-8xl text-4xl text-center font-bold xl:mt-10 mt-0 bg-gradient-to-r from-blue-700 via-blue-900 to-blue-500 bg-clip-text text-transparent">Raus aus dem Alltag, rein ins Abenteuer!</h1>
      </div>

      <div class="container mx-auto p-5 pt-24 xl:mt-8 md:mt-5 mt-0 xl:mb-8 md:mb-5 mb-0"> 
        <div class="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-4 md:gap-6 xl-gap-8">

          <!-- Kürzlich -->
          <div>
              <div class="mt-0 mb-0 rounded-2xl">
                  <h1 class="text-3xl font-bold text-center">Kürzlich</h1>
                  <hr class="h-1 mx-auto rounded-sm my-8 dark:bg-blue-800">
                  <div v-reveal class="bg-white shadow-md p-5 rounded-2xl transition-all duration-700 reveal-on-scroll opacity-0 scale-75 delay-0">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Aerial_image_of_the_Rieneck_Castle.jpg/1200px-Aerial_image_of_the_Rieneck_Castle.jpg" alt="Bundeslager 2022" class="w-full h-64 object-cover rounded-lg">
                    <h5 class="text-3xl font-bold mt-2 mb-4">Rieneck 2025</h5>
                    <p class="text-jusify mt-2 mb-4">
                        Dieses Jahr in den Sommerferien waren wir zusammen mit dem Stamm Heide zehn Tage auf der Burg Rieneck.
                    </p>
                    <div class="mt-4 flex items-center justify-between">
                        <p class="text-sm text-gray-500 italic">Datum: 23.08.25 - 01.09.24</p>
                        <p class="text-sm text-gray-500 italic">Rieneck</p>
                    </div>
                  </div>
              </div>
          </div>

          <!-- Kürzlich -->
          <div>       
              <div class="rounded-2xl">
                  <h1 class="text-3xl font-bold text-center">Nächstes Lager</h1>
                  <hr class="h-1 mx-auto rounded-sm my-8 dark:bg-blue-800">
                  <div v-reveal class="bg-white shadow-md p-5 rounded-2xl transition-all duration-700 reveal-on-scroll opacity-0 scale-75 delay-150">
                    <img src="https://vcp.sh/images/Pfila2023_2.jpg" alt="Bundeslager 2022" class="w-full h-64 object-cover rounded-lg">
                    <h5 class="text-3xl font-bold mt-2 mb-4">Pfingstlager 2026</h5>
                    <p class="text-jusify mt-2 mb-4">
                        Nächstes Jahr über Pfingsten fahren wir wie jedes Jahr zum Landespfingstlager des VCP SH nach Tydal. Das Motto wird noch bekannt gegeben.
                    </p>
                    <div class="mt-4 flex items-center justify-between">
                        <p class="text-sm text-gray-500 italic">Datum: 22.05.2026 - 25.05.2026</p>
                        <p class="text-sm text-gray-500 italic">Tydal</p>
                    </div>
                  </div>
              </div>
          </div>

          <!-- Wichtig -->
          <div>
              <div class="mt-0 mb-0 rounded-2xl">
                  <h1 class="text-3xl font-bold text-center">Wichtig</h1>
                  <hr class="h-1 mx-auto rounded-sm my-8 dark:bg-blue-800">
                  <div v-reveal class="bg-white shadow-md p-5 rounded-2xl  transition-all duration-700 reveal-on-scroll opacity-0 scale-75 delay-300">
                    <img src="https://as2.ftcdn.net/v2/jpg/01/62/17/79/1000_F_162177937_uTe0UImsLygFsJMkMooYagoBP55rK3B5.jpg" alt="Bundeslager 2022" class="w-full h-64 object-cover rounded-lg">
                    <h5 class="text-3xl font-bold mt-2 mb-4">Ferien</h5>
                    <p class="text-jusify mt-2 mb-4">
                        In den Sommerferien finden keine Gruppenstunden statt, dafür sind wir mit den Jüngeren auf dem KiSoLa und mit allen älteren auf der Burg Rieneck.
                    </p>
                    <div class="mt-4 flex items-center justify-between">
                        <p class="text-sm text-gray-500 italic">Datum: 28.07.25 - 05.09.25</p>
                        <p class="text-sm text-gray-500 italic"></p>
                    </div>
                  </div>
              </div>
          </div>

        </div>
      </div>

      <div class="container mx-auto p-0 flex flex-col items-center mb-10">
        <button class="mt-0 px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors">
          <router-link
              to="/termine"
              class="font-bold text-white px-30 py-2 rounded transition-all duration-300 2xl:flex flex-col items-center group"
              active-class="active-link"
          >
              Mehr anzeigen
          </router-link>
        </button>
      </div>

            <!-- Gruppenstunden -->
      <div class="container mx-auto p-3 pt-24 mt-10">
        <h1 class="text-3xl md:text-5xl font-bold text-center text-blue-950">Gruppenstunden</h1>
        <hr class="h-1 mx-auto rounded-sm my-8 dark:bg-blue-800">
        <div class="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 xl-gap-8">

          <router-link to="/gruppen" class="block">
            <div v-reveal class="relative rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-105
            transition-all duration-700 reveal-on-scroll opacity-0 scale-75 delay-0">
              <!-- Das Bild -->
              <img src="@/assets/Wölflinge.png" class="w-full h-40 object-cover rounded-lg">

              <!-- Overlay -->
              <div class="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center p-4 text-white">
                <h3 class="text-3xl font-semibold text-center mb-2">Wölflinge</h3>
                <p class="text-center font-semibold p-1">6 bis 10 Jahre</p>
                <p class="text-center font-semibold p-1">16:45 bis 18:15, Donnerstags</p>
              </div>
            </div>
          </router-link>

          <router-link to="/gruppen" class="block">
            <div v-reveal class="relative rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-105
            transition-all duration-700 reveal-on-scroll opacity-0 scale-75 delay-150">
              <!-- Das Bild -->
              <img src="@\assets\Jupfi.png" class="w-full h-40 object-cover rounded-lg">

              <!-- Jupfis -->
              <div class="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center p-4 text-white">
                  <h3 class="text-3xl font-semibold text-center mb-2">Jungpfadfinder</h3>
                  <p class="text-center font-semibold p-1">11 bis 13 Jahre</p>
                  <p class="text-center font-semibold p-1">16:30 bis 18:00, Mitwochs</p>
              </div>
            </div>
          </router-link>

          <router-link to="/gruppen" class="block">
            <div v-reveal class="relative rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-105
            transition-all duration-700 reveal-on-scroll opacity-0 scale-75 delay-300">
              <!-- Das Bild -->
              <img src="@/assets/PfadiRR.png" class="w-full h-40 object-cover rounded-lg">

              <!-- Overlay -->
              <div class="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center p-4 text-white">
                <h3 class="text-3xl font-semibold text-center mb-2">Pfadfinder & Ranger*Rover</h3>
                <p class="text-center font-semibold p-1">ab 14 Jahren</p>
                <p class="text-center font-semibold p-1">16:30 bis 18:00, Freitags</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <div class="container mx-auto p-5">
        <a
          href="https://fahrtenbedarf.de/"
          target="_blank"
          rel="noopener noreferrer">
            <div v-reveal class="bg-white shadow-md p-5 rounded-2xl container mx-auto md:w-200 w-100 transition-all duration-700 relative overflow-hidden opacity-0 scale-75 delay-200 reveal-on-scroll">
              <img src="https://www.fahrtenbedarf.de/media/fb/48/d9/1712389706/fahrtenbedarflogo.png" alt="Bundeslager 2022" class="w-full h-full object-cover rounded-lg">
              <h5 class="text-3xl font-bold mt-2 mb-4"></h5>
              <p class="text-center mt-2 font-semibold mb-4">
                Freizeit&Fahrtenbedarf bietet eine große Auswahl an Pfadfinderbedarf und Outdoor-Ausrüstung
              </p>
              <p class="text-center text-xl mt-4 font-bold mb-4">
                  Als VCP-Mitglied erhälst du <span class="bg-gradient-to-l from-red-600 to-blue-700 bg-clip-text text-transparent font-bold">5% Rabatt</span> auf jeden Artikel
              </p>
            </div>
        </a>
      </div>
      
    </div>
  </div>
</template>

