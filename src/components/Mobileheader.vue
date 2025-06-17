<template>
    <header class="bg-blue-800">
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
                <button @click="$emit('open-sidebar')" aria-label="Menü öffnen" class="focus:outline-none">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
            </div>
        </div>
    </header>
</template>