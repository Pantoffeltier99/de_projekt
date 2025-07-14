<template>
  <aside id="default-sidebar" class="fixed top-0 right-0 z-50 w-64 h-screen transition-transform translate-x-0 bg-white" aria-label="Sidebar">
    <div>
      <div>
        <p class="text-gray-500 dark:text-gray-400">Menu</p>
      </div>
        <nav class="space-y-2">
          <router-link
              to="/home"
              class="font-bold text-black px-3 py-2 rounded transition-all duration-300 flex flex-col items-start group hover:bg-blue-100"
              active-class="active-link"
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
          >
              UNSERE GRUPPEN
              <span
                  class="block h-1 rounded mt-1 bg-black transition-all duration-300"
                  :class="[$route.path === '/gruppen' ? 'w-6 opacity-100' : 'w-0 opacity-0', 'group-hover:w-6 group-hover:opacity-100']"
              ></span>
          </router-link>    
        </nav>
    </div>
  </aside>
</template>

<script setup>

</script>
