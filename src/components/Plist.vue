<template>
  <div class="bg-blue-50">
    <div class="container mx-auto p-5 pt-24">
      <div>
        <h2 class="md:text-7xl text-5xl font-bold text-blue-950 text-center mb-8">PACKLISTE</h2>
      </div>

      <div class="min-h-screen flex flex-col md:flex-row items-start justify-center">
        <ul class="text-base font-medium text-gray-900 bg-white rounded-lg shadow-md p-4 max-w-md">
          
          <!-- MUSS -->
          <li class="w-full border-b border-gray-200">
            <div class="flex items-center ps-3">
              <p class="w-full py-3 ms-2 text-3xl font-bold text-green-900">MUSS</p>
            </div>
          </li>

          <li v-for="(item, index) in mussItems" :key="'muss-'+index" class="w-full border-b border-gray-200">
            <div class="flex items-center ps-3">
              <input
                type="checkbox"
                :id="'muss-checkbox-' + index"
                class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2"
                v-model="checkedItems[item.id]"
                @change="saveToCookie"
              />
              <label
                :for="'muss-checkbox-' + index"
                :class="[
                  'w-full py-3 ms-2 text-base font-medium text-gray-900',
                  (item.id.startsWith('kulturtasche') || item.id.startsWith('briefumschlag')) && item.id !== 'kulturtasche' && item.id !== 'briefumschlag' ? 'pl-8' : ''
                ]"
              >{{ item.label }}</label>
            </div>
          </li>

          <!-- KANN -->
          <li class="w-full border-b border-gray-200 mt-4">
            <div class="flex items-center ps-3">
              <p class="w-full py-3 ms-2 text-3xl font-bold text-lime-800">KANN</p>
            </div>
          </li>

          <li v-for="(item, index) in kannItems" :key="'kann-'+index" class="w-full border-b border-gray-200">
            <div class="flex items-center ps-3">
              <input
                type="checkbox"
                :id="'kann-checkbox-' + index"
                class="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 focus:ring-2"
                v-model="checkedItems[item.id]"
                @change="saveToCookie"
              />
              <label
                :for="'kann-checkbox-' + index"
                class="w-full py-3 ms-2 text-base font-medium text-gray-900"
                >{{ item.label }}</label
              >
            </div>
          </li>

          <!-- DARF NICHT -->
          <li class="w-full border-b border-gray-200 mt-4">
            <div class="flex items-center ps-3">
              <p class="w-full py-3 ms-2 text-3xl font-bold text-red-900">DARF NICHT</p>
            </div>
          </li>

          <li v-for="(item, index) in darfNichtItems" :key="'darf-'+index" class="w-full border-b border-gray-200">
            <div class="flex items-center ps-3">
              <input
                type="checkbox"
                :id="'darf-checkbox-' + index"
                class="w-5 h-5 accent-red-600 text-red-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-red-500 focus:ring-2"
                v-model="checkedItems[item.id]"
                @change="saveToCookie"
              />
              <label
                :for="'darf-checkbox-' + index"
                class="w-full py-3 ms-2 text-base font-medium text-gray-900"
                >{{ item.label }}</label
              >
            </div>
          </li>

          <!-- Clear All Button -->
          <li class="mt-6">
            <button
              @click="clearAll"
              class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full"
            >
              Alle zurücksetzen
            </button>
          </li>
        </ul>

        <div class="md:w-1/2 xl:w-1/2 p-5 bg-white shadow-md rounded-lg mt-6 md:mt-0 md:ml-6 max-w-lg">
          <img
            src="https://static.bergzeit.com/bz_mag_double-tile-teaser_portrait_desktop/grafik-rucksack-packen-horizontales-gehen-bergzeit-hoch-1708427783.jpg"
            alt="Packliste"
            class="w-full object-cover rounded-lg mb-4"
          />
          <ul class="list-disc pl-6 space-y-2 text-sm text-gray-700">
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

<script>
import Cookies from 'js-cookie'
export default {
  name: "Packliste",
  data() {
    return {
      // Alle Items mit eindeutiger ID
      mussItems: [
        { id: "schlafsack", label: "Schlafsack" },
        { id: "isomatte", label: "Isomatte" },
        { id: "schuhe", label: "Festes, warmes Schuhwerk (Wanderstiefel, Trackingschuhe etc.)" },
        { id: "warmeKleidung", label: "Ausreichend warme Kleidung" },
        { id: "regenkleidung", label: "Regenkleidung" },
        { id: "kulturtasche", label: "Kulturtasche" },
        { id: "kulturtascheZahnputzzeug", label: "- Zahnputzzeug" },
        { id: "kulturtascheMedikamente", label: "- ggf. Medikamente" },
        { id: "kulturtascheDuschutensilien", label: "- Duschutensilien" },
        { id: "kulturtascheHygieneprodukte", label: "- Hygieneprodukte" },
        { id: "handtuecher", label: "Handtücher (eins zum Baden, eins zum Duschen)" },
        { id: "badesachen", label: "Badesachen" },
        { id: "briefumschlag", label: "Briefumschlag" },
        { id: "briefumschlagKrankenkassenkarte", label: "- Krankenkassenkarte" },
        { id: "briefumschlagAusweis", label: "- Personalausweis oder Reisepass (im Ausland)" },
        { id: "briefumschlagImpfpass", label: "- Kopie des Impfpasses" },
        { id: "briefumschlagKontaktEltern", label: "- Name, Anschrift und Kontakt der Eltern" },
        { id: "briefumschlagMedikationsplan", label: "- ggf. Medikationsplan" },
        { id: "pfadihemd", label: "Pfadihemd und Halstuch (falls vorhanden)" },
        { id: "trinkflasche", label: "Trinkflasche" },
        { id: "tagesrucksack", label: "ggf. Tagesrucksack (bei längeren Lagern)" },
        { id: "lampe", label: "Taschen- und/oder Kopflampe" },
        { id: "muellsack", label: "1-2 große Müllsäcke, um bei Regen alles regensicher verpacken zu können" },
        { id: "sonnenschutz", label: "Kopfbedeckung und Sonnenschutz" },
      ],
      kannItems: [
        { id: "musikinstrumente", label: "Musikinstrumente" },
        { id: "liederbuecher", label: "Liederbücher" },
        { id: "gesellschaftsspiele", label: "Gesellschaftsspiele" },
        { id: "buch", label: "Buch zum Lesen" },
        { id: "kamera", label: "Kamera" },
        { id: "taschenmesser", label: "Taschenmesser" },
      ],
      darfNichtItems: [
        { id: "elektronikgeraete", label: "Elektronische Geräte (außer Taschenlampe)" },
        { id: "handy", label: "Handy" },
      ],
      checkedItems: {}
    }
  },
  created() {
    this.initCheckedItems()
    this.loadFromCookie()
  },
  methods: {
    saveToCookie() {
      // Speichere alle checkedItems als JSON-String im Cookie, z.B. 30 Tage lang
      Cookies.set('packlisteChecked', JSON.stringify(this.checkedItems), { expires: 30 })
    },
    loadFromCookie() {
      const saved = Cookies.get('packlisteChecked')
      if (saved) {
        try {
          const parsed = JSON.parse(saved)
          // Ensure all keys exist
          this.initCheckedItems()
          Object.keys(parsed).forEach(key => {
            if (key in this.checkedItems) {
              this.checkedItems[key] = parsed[key]
            }
          })
        } catch (e) {
          // Fehler ignorieren und neuen State nehmen
          this.initCheckedItems()
        }
      } else {
        // Init alle keys als false
        this.initCheckedItems()
      }
    },
    initCheckedItems() {
      // Setzt alle Items auf false (nicht angehakt)
      const allItems = [...this.mussItems, ...this.kannItems, ...this.darfNichtItems]
      allItems.forEach(item => {
        this.checkedItems[item.id] = false
      })
    },
    clearAll() {
      // Alles zurücksetzen und speichern
      this.initCheckedItems()
      this.saveToCookie()
    }
  }
}
</script>

