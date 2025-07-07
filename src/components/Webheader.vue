<!-- Main Header, immer oben zu sehen-->

<template>
    <header class="fixed top-0 left-0 w-full bg-blue-800 z-50">
        <div class="container mx-auto p-5 flex items-center justify-between">
            <!-- Links: Logo und Titel -->
            <div class="flex items-center space-x-3">
                <img 
                    src="@/assets/Stammeslogo.png" 
                    alt="Logo" 
                    class="h-10 w-10 object-contain transition-all duration-300"
                />
                <h1 class="text-3xl font-bold text-white transition-all duration-300">
                    STAMM NIMROD
                </h1>
            </div>
            <!-- Rechts: Navigation, Icons -->
            <div class="flex items-center space-x-4">
                <nav class="flex space-x-4 items-center">
                    <!-- Hauptlinks, nur auf lg und größer sichtbar -->
                    <router-link
                        to="/home"
                        class="font-bold text-white px-3 py-2 rounded transition-all duration-300 hidden md:flex flex-col items-center group"
                        active-class="active-link"
                    >
                        START
                        <span
                            class="block h-1 rounded mt-1 bg-white transition-all duration-300"
                            :class="[$route.path === '/home' || $route.name === 'home' ? 'w-6 opacity-100' : 'w-0 opacity-0', 'group-hover:w-6 group-hover:opacity-100']"
                        ></span>
                    </router-link>
                    <router-link
                        to="/ueber-uns"
                        class="font-bold text-white px-3 py-2 rounded transition-all duration-300 hidden lg:flex flex-col items-center group"
                        active-class="active-link"
                    >
                        ÜBER UNS
                        <span
                            class="block h-1 rounded mt-1 bg-white transition-all duration-300"
                            :class="[$route.path === '/ueber-uns' ? 'w-6 opacity-100' : 'w-0 opacity-0', 'group-hover:w-6 group-hover:opacity-100']"
                        ></span>
                    </router-link>
                    <router-link
                        to="/kontakt"
                        class="font-bold text-white px-3 py-2 rounded transition-all duration-300 hidden xl:flex flex-col items-center group"
                        active-class="active-link"
                    >
                        KONTAKT
                        <span
                            class="block h-1 rounded mt-1 bg-white transition-all duration-300"
                            :class="[$route.path === '/kontakt' ? 'w-6 opacity-100' : 'w-0 opacity-0', 'group-hover:w-6 group-hover:opacity-100']"
                        ></span>
                    </router-link>
                    <router-link
                        to="/gruppen"
                        class="font-bold text-white px-3 py-2 rounded transition-all duration-300 hidden 2xl:flex flex-col items-center group"
                        active-class="active-link"
                    >
                        UNSERE GRUPPEN
                        <span
                            class="block h-1 rounded mt-1 bg-white transition-all duration-300"
                            :class="[$route.path === '/gruppen' ? 'w-6 opacity-100' : 'w-0 opacity-0', 'group-hover:w-6 group-hover:opacity-100']"
                        ></span>
                    </router-link>
                    <div class="relative group flex flex-col items-center">
                        <button class="font-bold text-white px-3 py-2 rounded transition flex items-center">
                            MEHR
                            <svg class="ml-1 w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
                            </svg>
                        </button>
                        <span class="block h-1 mt-1" style="visibility: hidden;">&nbsp;</span>
                        <div class="absolute right-0 top-full w-40 bg-white rounded shadow-lg opacity-0 scale-y-75 pointer-events-none group-hover:opacity-100 group-hover:scale-y-100 group-hover:pointer-events-auto transition-all duration-300 origin-top z-10">
                            <!-- Diese Links sind IMMER im Dropdown -->
                            <router-link
                                to="/termine"
                                class="flex flex-col items-start px-4 py-2 text-black hover:bg-blue-100 transition-all duration-300 group"
                                active-class="active-link"
                            >
                                Termine
                                <span
                                    v-if="$route.path === '/termine'"
                                    class="block w-6 h-1 bg-black rounded mt-1 transition-all duration-300"
                                ></span>
                            </router-link>
                            <router-link
                                to="/packliste"
                                class="flex flex-col items-start px-4 py-2 text-black hover:bg-blue-100 transition-all duration-300 group"
                                active-class="active-link"
                            >
                                Packliste
                                <span
                                    v-if="$route.path === '/packliste'"
                                    class="block w-6 h-1 bg-black rounded mt-1 transition-all duration-300"
                                ></span>
                            </router-link>
                            <a href="https://www.fahrtenbedarf.de/" target="_blank" rel="noopener noreferrer" class="block px-4 py-2 text-black hover:bg-blue-100 transition-all duration-300">F&F Fahrtenbedarf</a>
                            <!-- Diese Links sind auf kleinen Bildschirmen zusätzlich im Dropdown -->
                            <router-link
                                to="/gruppen"
                                class="flex flex-col items-start px-4 py-2 text-black hover:bg-blue-100 md:hidden transition-all duration-300 group"
                                active-class="active-link"
                            >
                                Unsere Gruppen
                                <span
                                    v-if="$route.path === '/gruppen'"
                                    class="block w-6 h-1 bg-black rounded mt-1 transition-all duration-300"
                                ></span>
                            </router-link>
                            <router-link
                                to="/home"
                                class="flex flex-col items-start px-4 py-2 text-black hover:bg-blue-100 lg:hidden transition-all duration-300 group"
                                active-class="active-link"
                            >
                                Start
                                <span
                                    v-if="$route.path === '/home'"
                                    class="block w-6 h-1 bg-black rounded mt-1 transition-all duration-300"
                                ></span>
                            </router-link>
                            <router-link
                                to="/ueber-uns"
                                class="flex flex-col items-start px-4 py-2 text-black hover:bg-blue-100 xl:hidden transition-all duration-300 group"
                                active-class="active-link"
                            >
                                Über Uns
                                <span
                                    v-if="$route.path === '/ueber-uns'"
                                    class="block w-6 h-1 bg-black rounded mt-1 transition-all duration-300"
                                ></span>
                            </router-link>
                            <router-link
                                to="/kontakt"
                                class="flex flex-col items-start px-4 py-2 text-black hover:bg-blue-100 2xl:hidden transition-all duration-300 group"
                                active-class="active-link"
                            >
                                Kontakt
                                <span
                                    v-if="$route.path === '/kontakt'"
                                    class="block w-6 h-1 bg-black rounded mt-1 transition-all duration-300"
                                ></span>
                            </router-link>
                        </div>
                    </div>
                </nav>
                <!-- Icons: Instagram & Mail -->
                <div class="flex items-center space-x-2">
                    <a
                        href="https://www.instagram.com/vcp_stamm_nimrod/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        class="hover:text-white transition-colors duration-200"
                    >
                        <img class="w-8 h-8 hover:bg-blue-900 rounded transition-all duration-300" src="@/assets/instagram-new.png" alt="Insta">
                    </a>
                    <a
                        href="mailto:kontakt.nimrod@vcp.sh"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="E-Mail"
                        class="hover:text-white transition-colors duration-200"
                    >
                        <img class="w-7 h-7 hover:bg-blue-900 rounded transition-all duration-300" src="@/assets/mail.png" alt="Mail">
                    </a>
                </div>
            </div>
        </div>
    </header>
</template> -

