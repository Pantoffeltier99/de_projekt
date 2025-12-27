<template>
    <div class="bg-blue-50">
        <div class=" container mx-auto p-5 pt-24">

            <h2 class="md:text-7xl text-5xl font-bold bg-gradient-to-r from-blue-700 via-blue-900 to-blue-500 bg-clip-text text-transparent text-center mb-8">UNSERE GRUPPEN</h2>

            <!-- Alle Gruppen -->
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                <!-- Wölflinge -->
                <div v-reveal class="bg-white p-5 rounded-lg shadow-md transition-all duration-700 reveal-on-load opacity-0 scale-75 delay-0">
                    <div class="relative rounded-lg shadow-md overflow-hidden">
                        <!-- Das Bild -->
                        <img src="@\assets\Wölflinge.png" class="w-full h-20 object-cover rounded-lg">

                        <!-- Wölflinge -->
                        <div class="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center p-4 text-white">
                            <h3 class="text-3xl font-semibold text-center mb-2">Wölflinge</h3>
                        </div>
                    </div>
                    <div>
                        <p class="text-center font-semibold mt-2">6 bis 10 Jahre</p>
                        <p class="text-center font-semibold">Donnerstags 16:45 - 18:15</p>
                    </div>
                    <hr class="w-47 h-1 mx-auto rounded-sm dark:bg-blue-800 mb-2 mt-1">
                    <div>
                        <p>
                            Die Gruppe wird von Perry (Timo) und Janne geleitet.
                            <br><br>
                            Die Wölfingsgruppe konzentriert sich auf Spiel und Spaß und versucht damit, den Wölflingen einfache Pfadfindertechniken und Lagerregeln beizubringen. Der Leitsatz lautet hierbei: Ein Wölfing hilft, wo er kann.
                            <br><br>
                            Die Kinder werden auf spielerische Art und Weise mit ihrer Umgebung vertraut gemacht und ihre Fähigkeiten so entwickelt und gefördert.
                            <br><br>
                            Außerdem finden Regelmäßig Aktionen statt wie z.B. das Kinder Sommerlager oder die Kinder Herbstaktion.
                        </p>
                    </div>
                </div>

                <!-- Jupfis -->
                <div v-reveal class="bg-white p-5 rounded-lg shadow-md transition-all duration-700 reveal-on-load opacity-0 scale-75 delay-150">
                    <div class="relative rounded-lg shadow-md overflow-hidden">
                        <!-- Das Bild -->
                        <img src="@\assets\Jupfi.png" class="w-full h-20 object-cover rounded-lg">

                        <!-- Wölflinge -->
                        <div class="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center p-4 text-white">
                            <h3 class="text-3xl font-semibold text-center mb-2">Jungpfadfinder</h3>
                        </div>
                    </div>
                    <div>
                        <p class="text-center font-semibold mt-2">11 bis 13 Jahre</p>
                        <p class="text-center font-semibold">Mittwochs 16:30 - 18:00</p>
                    </div>
                    <hr class="w-44 h-1 mx-auto rounded-sm dark:bg-blue-800 mb-2 mt-1">
                    <div>
                        <p>
                            Die Gruppe wird von Perry (Timo) und Pingpong (Nick) geleitet.
                            <br><br>
                            Die wilden Löwen ais Jungen und Mädchen ab 10 Jahren treffen sich jeden Mittwoch im Pfadihaus. In der Jungpfadfinder Stufe beschäftigen wir uns mit Grundlagen für Lager, Knoten und anderen Pfadfindertechniken. Spiele kommen aber natürlich nicht zu kurz.
                            <br><br>
                            Ab der Jungpfadfinderstufe können die Kinder auch auf größere Aktionen wie das Bundeslager oder das Nordlager mitkommen, bei dem sich Pfadis aus ganz Deutschland treffen.
                        </p>
                    </div>
                </div>

                <!-- Pfadis & R*Rs -->
                <div v-reveal class="bg-white p-5 rounded-lg shadow-md transition-all duration-700 reveal-on-load opacity-0 scale-75 delay-300">
                    <div class="relative rounded-lg shadow-md overflow-hidden">
                        <!-- Das Bild -->
                        <img src="@\assets\PfadiRR.png" class="w-full h-20 object-cover rounded-lg">

                        <!-- Wölflinge -->
                        <div class="absolute inset-0 bg-opacity-50 flex flex-col justify-center items-center p-4 text-white">
                            <h3 class="text-3xl font-semibold text-center mb-2">Pfadfinder & R*Rs</h3>
                        </div>
                    </div>
                    <div>
                        <p class="text-center font-semibold mt-2">Ab 14 Jahren</p>
                        <p class="text-center font-semibold">Freitags 16:30 - 18:00</p>
                    </div>
                    <hr class="w-47 h-1 mx-auto rounded-sm dark:bg-blue-800 mb-2 mt-1">
                    <div>
                        <p>
                            Die Gruppe der flinken Wiesel wird von Pingpong (Nick) geleitet.
                            <br><br>
                            Die flinken Wiesel ist eine Gruppe im Alter ab 14 Jahren. Die Gruppenstunden sind hierbei etwas offener gestaltet. Es wird gekocht, es werden Gesellschaftsspiele gespielt oder Aktionen werden geplant. Dafür tragen die Älteren auf Lagern natürlich auch mehr Verantwortung. Für 14 bis 17-Jährige findet außerdem alle 4 Jahre das Jamboree statt, welches das weltweit größte Pfadfinderlager ist. Aber auch kleinere Aktionen und Lager wie das Grünzeugs oder die Ranger Rover Aktion werden regelmäßig veranstaltet.
                            <br><br>
                            Auf dem Programm steht natürlich auch das Spiel, die Natur und die Festigung des Gruppengefüges.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>