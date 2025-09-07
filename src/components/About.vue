<!-- About Page -->
<template>
  <div class="bg-blue-50">
    <div class="container mx-auto p-5 pt-24">
      <div class="grid md:grid-cols-2 grid-cols-1 gap-3">
        <img
          src="@/assets/Nimrod_Flagge.webp"
          alt="Nimrod Flagge"
          v-reveal
          class="h-64 md:h-96 w-full object-cover mb-8 rounded-lg shadow-md reveal-on-load transition-all duration-500 scale-75 opacity-0 delay-0"
        />
        <img
          src="@/assets/NimrodHeidePfila.jpeg"
          alt="Nimrod Pfila"
          v-reveal
          class="h-64 md:h-96 w-full object-cover mb-8 rounded-lg shadow-md reveal-on-load transition-all duration-500 scale-75 opacity-0 delay-100"
        />
      </div>
      <div class="mb-8 mt-0 md:mt-10 md:mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 via-blue-900 to-blue-500 bg-clip-text text-transparent">
          VCP Stamm Nimrod Satrup
        </h2>
        <p class="text-2xl md:text-3xl font-semibold mb-4 text-center bg-gradient-to-l from-blue-700 via-blue-900 to-blue-500 bg-clip-text text-transparent">
          - seit 1996 -
        </p>
      </div>
      <div v-reveal class="bg-white p-6 md:p-10 rounded-lg shadow-md md:reveal-on-load reveal-on-scroll transition-all duration-500 scale-75 opacity-0 delay-200">
        <p class="text-justify text-lg md:text-xl mb-6">
          Seit 1996 sind wir Teil der großen Pfadfinderbewegung und bieten Kindern und Jugendlichen die Möglichkeit, Gemeinschaft, Abenteuer und Natur hautnah zu erleben. In unseren regelmäßigen Gruppenstunden wird gespielt, gelacht, gewerkelt und gelernt – immer mit dem Ziel, die Welt ein Stück besser zu hinterlassen, als wir sie vorgefunden haben.
          <br>
          Unser Zuhause ist das Alte Kutscherhaus in Satrup (Flensburger Straße 1), wo wir uns treffen, Pläne schmieden und gemeinsam aufbrechen – zu kleinen Abenteuern im Alltag oder großen Fahrten in die Ferne.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
</script>