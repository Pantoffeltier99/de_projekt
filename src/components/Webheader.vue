<!-- Main Header, immer oben zu sehen-->

<template>
    <header class="fixed top-0 left-0 w-full bg-blue-800 z-50">
        <div class="container mx-auto p-5 flex items-center justify-between">
            <!-- Logo und Titel -->
            <div class="flex items-center space-x-3">
                <img 
                    src="@/assets/Stammeslogo.png" 
                    alt="Logo" 
                    class="h-10 w-10 object-contain"
                />
                <h1 class="text-3xl font-bold text-white">
                    STAMM NIMROD
                </h1>
            </div>
            <div>
                <nav class="flex space-x-6">
                    <!-- Hauptlinks, nur auf lg und größer sichtbar -->
                    <a href="/home" class="font-bold text-white hover:bg-blue-900 px-3 py-2 rounded transition hidden md:block">START</a>
                    <a href="/ueber-uns" class="font-bold text-white hover:bg-blue-900 px-3 py-2 rounded transition hidden lg:block">ÜBER UNS</a>
                    <a href="/kontakt" class="font-bold text-white hover:bg-blue-900 px-3 py-2 rounded transition hidden xl:block">KONTAKT</a>
                    <a href="/gruppen" class="font-bold text-white hover:bg-blue-900 px-3 py-2 rounded transition hidden 2xl:block">UNSERE GRUPPEN</a>
                    <div class="relative group">
                        <button class="font-bold text-white hover:bg-blue-900 px-3 py-2 rounded transition flex items-center">
                            MEHR
                            <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
                            </svg>
                        </button>
                        <div class="absolute right-0 top-full w-40 bg-white rounded shadow-lg hidden group-hover:block transition-opacity z-10">
                            <!-- Diese Links sind IMMER im Dropdown -->
                            <a href="/termine" class="block px-4 py-2 text-black hover:bg-blue-100">Termine</a>
                            <a href="/packliste" class="block px-4 py-2 text-black hover:bg-blue-100">Packliste</a>
                            <a href="https://www.fahrtenbedarf.de/" target="_blank" rel="noopener noreferrer" class="block px-4 py-2 text-black hover:bg-blue-100">F&F Fahrtenbedarf</a>
                            <!-- Diese Links sind auf kleinen Bildschirmen zusätzlich im Dropdown -->
                            <a href="/gruppen" class="block px-4 py-2 text-black hover:bg-blue-100 md:hidden">Unsere Gruppen</a>
                            <a href="/home" class="block px-4 py-2 text-black hover:bg-blue-100 lg:hidden">Start</a>
                            <a href="/ueber-uns" class="block px-4 py-2 text-black hover:bg-blue-100 xl:hidden">Über Uns</a>
                            <a href="/kontakt" class="block px-4 py-2 text-black hover:bg-blue-100 2xl:hidden">Kontakt</a>

                        </div>
                    </div>                                      
                    <div class="flex items-center space-x-4">
                      <!-- Instagram -->
                      <a
                        href="https://www.instagram.com/vcp_stamm_nimrod/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        class="hover:text-white transition-colors duration-200"
                      >
                        <svg class="w-7 h-7" fill="white" viewBox="0 0 24 24">
                          <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.13.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0z"/>
                        </svg>
                      </a>
                      <!-- Mail -->
                      <a
                        href="mailto:kontakt.nimrod@vcp.sh"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="E-Mail"
                        class="hover:text-white transition-colors duration-200"
                      >
                        <svg class="w-7 h-7" fill="white" viewBox="0 0 24 24">
                          <path d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75zm1.5 0v.638l8.25 5.775 8.25-5.775V6.75a.75.75 0 0 0-.75-.75h-15a.75.75 0 0 0-.75.75zm17.25 1.987-7.79 5.46a1.5 1.5 0 0 1-1.72 0l-7.79-5.46v8.513c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75z"/>
                        </svg>
                      </a>
                    </div>
                </nav>
            </div>
        </div>
    </header>
</template> -

