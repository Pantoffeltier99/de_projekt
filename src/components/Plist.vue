<template>
    <div class="bg-blue-50">
        <div class="container mx-auto p-5 pt-24">
            <div>
                <h2 class="md:text-7xl text-5xl font-bold text-blue-950 text-center mb-8">PACKLISTE</h2>
            </div>

            <div class="min-h-screen flex flex-col md:flex-row items-start justify-center">
                <ul class="text-base font-medium text-gray-900 bg-white rounded-lg shadow-md p-4">
                    
                    <!--MUSS-->
                    <li class="w-full border-b border-gray-200">
                        <div class="flex items-center ps-3">
                            <p class="w-full py-3 ms-2 text-3xl font-bold text-green-900">MUSS</p>
                        </div>
                    </li>
                    
                    <li class="w-full border-b border-gray-200">
                        <div class="flex items-center ps-3">
                            <input id="vue-checkbox" type="checkbox" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2">
                            <label for="vue-checkbox" class="w-full py-3 ms-2 text-base font-medium text-gray-900">Schlafsack</label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200">
                        <div class="flex items-center ps-3">
                            <input id="react-checkbox" type="checkbox" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2">
                            <label for="react-checkbox" class="w-full py-3 ms-2 text-base font-medium text-gray-900">Isomatte</label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200">
                        <div class="flex items-center ps-3">
                            <input id="angular-checkbox" type="checkbox" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2">
                            <label for="angular-checkbox" class="w-full py-3 ms-2 text-base font-medium text-gray-900">Festes, warmes Schuhwerk (Wanderstiefel, Trackingschuhe etc.)</label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200">
                        <div class="flex items-center ps-3">
                            <input id="laravel-checkbox" type="checkbox" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2">
                            <label for="laravel-checkbox" class="w-full py-3 ms-2 text-base font-medium text-gray-900">Ausreichend warme Kleidung</label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200">
                        <div class="flex items-center ps-3">
                            <input id="laravel-checkbox" type="checkbox" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2">
                            <label for="laravel-checkbox" class="w-full py-3 ms-2 text-base font-medium text-gray-900">Regenkleidung</label>
                        </div>
                    </li>

                    <div class="w-full border-b border-gray-200">
                    <li class="w-full">
                        <div class="flex items-center ps-3">
                            <input id="laravel-checkbox" type="checkbox" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2">
                            <label for="laravel-checkbox" class="w-full py-3 ms-2 text-base font-medium text-gray-900">Kulturtasche</label>
                        </div>
                    </li>

                    <ul class="pl-8 space-y-1 text-sm text-gray-700">

                        <li class="flex items-center">
                            <input id="vue-setup" type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2">
                            <label for="vue-setup" class="ms-2">Zahnputzzeug</label>
                        </li>

                        <li class="flex items-center">
                            <input id="vue-router" type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2">
                            <label for="vue-router" class="ms-2">ggf. Medikamente</label>
                        </li>

                        <li class="flex items-center">
                            <input id="vue-router" type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2">
                            <label for="vue-router" class="ms-2">Duschutensilien</label>
                        </li>

                        <li class="flex items-center">
                            <input id="vue-router" type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2">
                            <label for="vue-router" class="ms-2">Hygieneprodukte</label>
                        </li>

                    </ul>
                    </div>

                    <li class="w-full border-b border-gray-200">
                        <div class="flex items-center ps-3">
                            <input id="laravel-checkbox" type="checkbox" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2">
                            <label for="laravel-checkbox" class="w-full py-3 ms-2 text-base font-medium text-gray-900">Handtücher (eins zum Baden, eins zum Duschen)</label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200">
                        <div class="flex items-center ps-3">
                            <input id="laravel-checkbox" type="checkbox" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2">
                            <label for="laravel-checkbox" class="w-full py-3 ms-2 text-base font-medium text-gray-900">Badesachen</label>
                        </div>
                    </li>

                    <div class="w-full border-b border-gray-200">
                    <li class="w-full">
                        <div class="flex items-center ps-3">
                            <input id="laravel-checkbox" type="checkbox" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2">
                            <label for="laravel-checkbox" class="w-full py-3 ms-2 text-base font-medium text-gray-900">Briefumschlag</label>
                        </div>
                    </li>

                    <ul class="pl-8 space-y-1 text-sm text-gray-700">

                        <li class="flex items-center">
                            <input id="vue-setup" type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2">
                            <label for="vue-setup" class="ms-2">Krankenkassenkarte</label>
                        </li>

                        <li class="flex items-center">
                            <input id="vue-router" type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2">
                            <label for="vue-router" class="ms-2">Personalausweis oder Reisepass (im Ausland)</label>
                        </li>

                        <li class="flex items-center">
                            <input id="vue-router" type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2">
                            <label for="vue-router" class="ms-2">Kopie des Impfpasses</label>
                        </li>

                        <li class="flex items-center">
                            <input id="vue-router" type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2">
                            <label for="vue-router" class="ms-2">Name, Anschrift und Kontakt der Eltern</label>
                        </li>

                        <li class="flex items-center">
                            <input id="vue-router" type="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2">
                            <label for="vue-router" class="ms-2">ggf. Medikationsplan</label>
                        </li>

                    </ul>
                    </div>

                    <li class="w-full border-b border-gray-200">
                        <div class="flex items-center ps-3">
                            <input id="laravel-checkbox" type="checkbox" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2">
                            <label for="laravel-checkbox" class="w-full py-3 ms-2 text-base font-medium text-gray-900">Pfadihemd und Halstuch (falls vorhanden)</label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200">
                        <div class="flex items-center ps-3">
                            <input id="laravel-checkbox" type="checkbox" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2">
                            <label for="laravel-checkbox" class="w-full py-3 ms-2 text-base font-medium text-gray-900">Trinkflasche</label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200">
                        <div class="flex items-center ps-3">
                            <input id="laravel-checkbox" type="checkbox" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2">
                            <label for="laravel-checkbox" class="w-full py-3 ms-2 text-base font-medium text-gray-900">ggf. Tagesrucksack (bei längeren Lagern)</label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200">
                        <div class="flex items-center ps-3">
                            <input id="laravel-checkbox" type="checkbox" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2">
                            <label for="laravel-checkbox" class="w-full py-3 ms-2 text-base font-medium text-gray-900">Taschen- und/oder Kopflampe</label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200">
                        <div class="flex items-center ps-3">
                            <input id="laravel-checkbox" type="checkbox" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2">
                            <label for="laravel-checkbox" class="w-full py-3 ms-2 text-base font-medium text-gray-900">1-2 große Müllsäcke, um bei Regen alles regensicher verpacken zu können</label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200">
                        <div class="flex items-center ps-3">
                            <input id="laravel-checkbox" type="checkbox" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2">
                            <label for="laravel-checkbox" class="w-full py-3 ms-2 text-base font-medium text-gray-900">Kopfbedeckung und Sonnenschutz</label>
                        </div>
                    </li>

                    
                    <!--KANN-->
                    <li class="w-full border-b border-gray-200">
                        <div class="flex items-center ps-3">
                            <p class="w-full py-3 ms-2 text-3xl font-bold text-lime-800">KANN</p>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200">
                        <div class="flex items-center ps-3">
                            <input id="laravel-checkbox" type="checkbox" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2">
                            <label for="laravel-checkbox" class="w-full py-3 ms-2 text-base font-medium text-gray-900">Musikinstrumente</label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200">
                        <div class="flex items-center ps-3">
                            <input id="laravel-checkbox" type="checkbox" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2">
                            <label for="laravel-checkbox" class="w-full py-3 ms-2 text-base font-medium text-gray-900">Liederbücher</label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200">
                        <div class="flex items-center ps-3">
                            <input id="laravel-checkbox" type="checkbox" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2">
                            <label for="laravel-checkbox" class="w-full py-3 ms-2 text-base font-medium text-gray-900">Gesellschaftsspiele (nicht zu groß)</label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200">
                        <div class="flex items-center ps-3">
                            <input id="laravel-checkbox" type="checkbox" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2">
                            <label for="laravel-checkbox" class="w-full py-3 ms-2 text-base font-medium text-gray-900">Fahrtenmesser (Nur mit Messerprüfung)</label>
                        </div>
                    </li>
                    
                    <li class="w-full border-b border-gray-200">
                        <div class="flex items-center ps-3">
                            <input id="laravel-checkbox" type="checkbox" class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2">
                            <label for="laravel-checkbox" class="w-full py-3 ms-2 text-base font-medium text-gray-900">Süßigkeiten nicht zu viel und nur in einer Luftdichten Dose verpackt</label>
                        </div>
                    </li>
                    
                    <!--DARF NICHT-->
                    <li class="w-full border-b border-gray-200">
                        <div class="flex items-center ps-3">
                            <p class="w-full py-3 ms-2 text-3xl font-bold text-red-900">DARF NICHT</p>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200">
                        <div class="flex items-center ps-3">
                            <input id="laravel-checkbox" type="checkbox" class="w-5 h-5 text-red-600 accent-red-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-red-500 focus:ring-2">
                            <label for="laravel-checkbox" class="w-full py-3 ms-2 text-base font-medium text-gray-900">Handheld Spielekonsolen (Switch, Steamdeck etc.) oder andere Unterhaltungselektronik</label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200">
                        <div class="flex items-center ps-3">
                            <input id="laravel-checkbox" type="checkbox" class="w-5 h-5 text-red-600 accent-red-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-red-500 focus:ring-2">
                            <label for="laravel-checkbox" class="w-full py-3 ms-2 text-base font-medium text-gray-900">Handys und Smartwatches</label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200">
                        <div class="flex items-center ps-3">
                            <input id="laravel-checkbox" type="checkbox" class="w-5 h-5 text-red-600 accent-red-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-red-500 focus:ring-2">
                            <label for="laravel-checkbox" class="w-full py-3 ms-2 text-base font-medium text-gray-900">Schmuck und andere wertvolle Dinge, da sie zu leicht verloren gehen</label>
                        </div>
                    </li>

                    <li class="w-full border-b border-gray-200">
                        <div class="flex items-center ps-3">
                            <input id="laravel-checkbox" type="checkbox" class="w-5 h-5 accent-red-500 text-red-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-red-500 focus:ring-2">
                            <label for="laravel-checkbox" class="w-full py-3 ms-2 text-base font-medium text-gray-900">Sußigkeiten und Knabberzeug ohne Dose</label>
                        </div>
                    </li>
                    
                </ul>
                <div class="md:w-1/2 xl:w-1/2 p-5 bg-white shadow-md rounded-lg mt-6 md:mt-0 md:ml-6">
                    <img src="https://static.bergzeit.com/bz_mag_double-tile-teaser_portrait_desktop/grafik-rucksack-packen-horizontales-gehen-bergzeit-hoch-1708427783.jpg" alt="Packliste" class="w-full object-cover rounded-lg mb-4">
                    <ul class="list-disc pl-6 space-y-2">
                        <li>Informiert eure Gruppenleitung rechtzeitig vor dem Lager über Krankheiten, Medikamente und Verhaltensauffälligkeiten.</li>
                        <li>Wenn ihr euch nicht sicher seid, ob etwas mitdarf, fragt bitte bei eurer Gruppenleitung nach.</li>
                        <li>Nicht zu viel mitgeben, es kann sein, dass jeder seine Ausrüstung über eine längere Strecke tragen muss. (Außerdem wird eh nicht viel gewechselt, Pfadis sind schmerzfrei und die Zelte gut gelüftet.)</li>
                        <li>Das Ganze bitte in einen RUCKSACK verpacken, mit dem man auch mal ein paar Kilometer laufen kann.</li>
                        <li>Wenn ihr eure Wäsche mit einem kleinen Zeichen verseht (Name oder kleines gesticktes Kreuz oder ähnliches), ist es leichter, sie auseinanderzuhalten. Am besten ihr helft den Eltern beim Einpacken der Sachen, so wisst ihr, welche Sachen zu euch gehören.</li>
                        <li>Wir erwarten, dass ihr auf dem Lager erreichbar seid, besonders wenn ihr wisst, dass euer Kind Probleme mit Heimweh hat.</li>
                        <li>Bei gravierendem Fehlverhalten der Kinder schicken wir die Kinder auf Kosten der Erziehungsberechtigten zurück nach Hause.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>