<template>
    <header class="bg-red-800">
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
            <!-- Search Bar -->
            <div class="relative flex items-center bg-white rounded-full shadow-md">
                <input 
                    type="text" 
                    placeholder="Suchen..." 
                    class="p-3 pl-5 w-64 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button 
                    class="absolute right-2 px-4 py-2 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition flex items-center justify-center"
                >
                    <img 
                        src="@/assets/Search.png" 
                        alt="Search" 
                        class="h-5 w-5 object-contain"
                    />
                </button>
            </div>
        </div>
    </header>
</template>