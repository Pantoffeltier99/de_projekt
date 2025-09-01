<template>
    <div class="bg-blue-50">
        <div class="container mx-auto p-5 pt-24">

            <div class="grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-6 xl-gap-8">
                <div class="p-5 bg-white rounded-lg shadow-md">
                    <h5 class="text-3xl font-bold mb-4">Werde Teil unseres Stammes</h5>
                    <p class="text-jusify mb-4">
                        Du möchtest Pfadfinder*in werden? Bei uns bist du herzlich willkommen! Egal ob du neu in der Pfadfinderwelt bist oder bereits Erfahrung hast, wir freuen uns auf dich.
                    </p>
                    <p class="text-jusify mb-4">
                        Unsere Gruppenstunden finden regelmäßig statt und bieten dir die Möglichkeit, neue Freunde zu finden, spannende Abenteuer zu erleben und viel über die Natur zu lernen.
                    </p>
                    <p class="text-jusify mb-4">
                        Wenn du Interesse hast, melde dich bei uns oder komm einfach zu einer unserer Gruppenstunden vorbei. Wir freuen uns darauf, dich kennenzulernen! 
                    </p>
                </div>

                <div class="p-5 items-center justify-center flex flex-col">
                    <router-link
                        to="/kontakt"
                        class="group"
                        active-class="active-link"
                    >
                        <button
                        class="w-full max-w-xs sm:max-w-sm md:max-w-md 
                                px-8 md:px-10 py-7 md:py-9 
                                    text-4xl md:text-6xl
                                    font-bold 

                                    bg-yellow-200 text-black 
                                    rounded-lg hover:bg-yellow-300 transition-all duration-300"
                        >
                        Kontakt aufnehmen
                        </button>
                    </router-link>
                </div>
            </div>

            <div class="mb-8 mt-0 md:mt-10 md:mb-10">
                <h4 class="md:text-7xl text-5xl font-bold mt-10 bg-gradient-to-r from-blue-700 via-blue-900 to-blue-500 bg-clip-text text-transparent text-center">Komm einfach vorbei!</h4>
            </div>

            <div class="grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-6 xl-gap-8">
                
                <div class="p-5 items-center justify-center flex flex-col">
                    <a href="https://vcp.de/mitmachen/zum-mitgliedsantrag/" class="group" target="_blank" rel="noopener noreferrer">
                        <button 
                            class="w-full max-w-xs sm:max-w-sm md:max-w-md 
                            px-8 md:px-10 py-7 md:py-9
                            text-4xl md:text-6xl
                            font-bold 
                            bg-blue-800 text-white 
                            rounded-lg hover:bg-blue-900 transition-all duration-300">
                        
                            Mitglied werden
                        </button>
                    </a>
                </div>
                <div class="p-5 bg-white rounded-lg shadow-md">
                    <h5 class="text-3xl font-bold mb-4">Melde dich einfach online an</h5>
                    <p class="text-jusify mb-4">
                        Wenn du dich online anmelden möchtest, kannst du das über den Link auf der linken Seite tun. Dort findest du alle Informationen, die du benötigst, um Mitglied im VCP zu werden.
                    </p>
                    <p class="text-jusify mb-4">
                        Du kannst auch deine Gruppenleitung nach einem analogen Anmeldeformular fragen, wenn du das bevorzugst.
                    </p>
                </div>
            </div>

        </div>
    </div>
</template>

