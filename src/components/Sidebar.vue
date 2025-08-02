<template>
  <aside id="default-sidebar" class="fixed top-0 right-0 z-50 w-64 h-screen transition-transform translate-x-0 bg-white" aria-label="Sidebar">

    <div>
      <img src="@/assets/Stammeslogo.png" alt="Logo" class="h-10 w-10 object-contain mx-auto mt-4" />
      <h2 class="text-center text-xl font-bold text-blue-950 mt-2">STAMM NIMROD</h2>
    </div>

    <br>

    <div>
      <nav class="space-y-2">
        <router-link
          to="/home"
          class="font-bold text-black px-3 py-2 rounded transition-all duration-300 flex flex-col items-start group"
          active-class="active-link"
          @click="$emit('close')"
        >
          START
          <span
            class="block h-1 rounded mt-1 bg-black transition-all duration-300"
            :class="[$route.path === '/home' || $route.name === 'home' ? 'w-6 opacity-100' : 'w-0 opacity-0', 'group-hover:w-6 group-hover:opacity-100']"
          ></span>
        </router-link>
        <router-link
          to="/ueber-uns"
          class="font-bold text-black px-3 py-2 rounded transition-all duration-300 flex flex-col items-start group"
          active-class="active-link"
          @click="$emit('close')"
        >
          ÜBER UNS
          <span
            class="block h-1 rounded mt-1 bg-black transition-all duration-300"
            :class="[$route.path === '/ueber-uns' ? 'w-6 opacity-100' : 'w-0 opacity-0', 'group-hover:w-6 group-hover:opacity-100']"
          ></span>
        </router-link>
        <router-link
          to="/kontakt"
          class="font-bold text-black px-3 py-2 rounded transition-all duration-300 flex flex-col items-start group"
          active-class="active-link"
          @click="$emit('close')"
        >
          KONTAKT
          <span
            class="block h-1 rounded mt-1 bg-black transition-all duration-300"
            :class="[$route.path === '/kontakt' ? 'w-6 opacity-100' : 'w-0 opacity-0', 'group-hover:w-6 group-hover:opacity-100']"
          ></span>
        </router-link>
        <router-link
          to="/gruppen"
          class="font-bold text-black px-3 py-2 rounded transition-all duration-300 flex flex-col items-start group"
          active-class="active-link"
          @click="$emit('close')"
        >
          UNSERE GRUPPEN
          <span
            class="block h-1 rounded mt-1 bg-black transition-all duration-300"
            :class="[$route.path === '/gruppen' ? 'w-6 opacity-100' : 'w-0 opacity-0', 'group-hover:w-6 group-hover:opacity-100']"
          ></span>
        </router-link>
        <router-link
          to="/termine"
          class="font-bold text-black px-3 py-2 rounded transition-all duration-300 flex flex-col items-start group"
          active-class="active-link"
          @click="$emit('close')"
        >
          TERMINE
          <span
            class="block h-1 rounded mt-1 bg-black transition-all duration-300"
            :class="[$route.path === '/termine' ? 'w-6 opacity-100' : 'w-0 opacity-0', 'group-hover:w-6 group-hover:opacity-100']"
          ></span>
        </router-link>
        <router-link
          to="/mitmachen"
          class="font-bold text-black px-3 py-2 rounded transition-all duration-300 flex flex-col items-start group"
          active-class="active-link"
          @click="$emit('close')"
        >
          MITMACHEN
          <span
            class="block h-1 rounded mt-1 bg-black transition-all duration-300"
            :class="[$route.path === '/mitmachen' ? 'w-6 opacity-100' : 'w-0 opacity-0', 'group-hover:w-6 group-hover:opacity-100']"
          ></span>
        </router-link>
        <router-link
          to="/packliste"
          class="font-bold text-black px-3 py-2 rounded transition-all duration-300 flex flex-col items-start group"
          active-class="active-link"
          @click="$emit('close')"
        >
          PACKLISTE
          <span
            class="block h-1 rounded mt-1 bg-black transition-all duration-300"
            :class="[$route.path === '/packliste' ? 'w-6 opacity-100' : 'w-0 opacity-0', 'group-hover:w-6 group-hover:opacity-100']"
          ></span>
        </router-link>
        <a href="https://www.fahrtenbedarf.de/" target="_blank" rel="noopener noreferrer" class="font-bold text-black px-3 py-2 rounded transition-all duration-300 flex flex-col items-start group">F&F FAHRTENBEDARF</a>
      </nav>
    </div>
    
  </aside>
</template>
