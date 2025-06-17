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
                </nav>
            </div>
        </div>
    </header>
</template> -

