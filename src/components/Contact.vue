<!-- Kontaktseite -->
<script setup>
import ContactForm from '@/components/ContactForm.vue';
</script>
<template>
  <div class="bg-blue-50">
    <div class="container mx-auto p-5">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 pt-24">

            <!-- Karte -->
            <div class="container mx-auto bg-white shadow-md p-5 rounded-xl h-[400px]">
                <iframe
                class="w-full h-full rounded-xl"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2305.975994664491!2d9.600819912621537!3d54.69245007304597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b36b38210982d3%3A0xe8c9f94c71c69740!2sFlensburger%20Str.%201%2C%2024986%20Mittelangeln!5e0!3m2!1sde!2sde!4v1753565992020!5m2!1sde!2sde"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <!-- Kontaktinformationen -->
            <div class="container mx-auto p-5 md:ml-15 h-[400px]">

                <div>
                    <h4 class="text-2xl font-bold">Kontakt</h4>
                    <hr class="w-23 h-1 mx-auto rounded-sm dark:bg-blue-800 ml-0"> 
                </div>

                <div>

                    <p class="mt-4 mb-2 font-semibold">
                        VCP Stamm Nimrod
                    </p>

                    <p>
                        Flensburger Str. 1<br>
                        24986 Mittelangeln, Satrup
                    </p>

                    <div class="flex items-center space-x-2 mt-4">

                        <a
                            href="mailto:kontakt.nimrod@vcp.sh"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="E-Mail"
                            class="flex items-center space-x-2 hover:text-white transition-colors duration-200">
                            <img
                                class="w-7 h-7 hover:bg-blue-100 rounded transition-all duration-300"
                                src="@/assets/mail-5888.png"
                                alt="Mail"
                            >
                            <span class="text-blue-800 hover:text-blue-600 transition">kontakt.nimrod@vcp.sh</span>
                        </a>
                    </div>

                    <div class="flex items-center space-x-2 mt-1">
                        <a
                            href="mailto:kontakt.nimrod@vcp.sh"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="E-Mail"
                            class="flex items-center space-x-2 hover:text-white transition-colors duration-200">
                            <img
                            class="w-7 h-7 hover:bg-blue-100 rounded transition-all duration-300"
                            src="@/assets/instagram-53.png"
                            alt="Insta">
                            <span class="text-blue-800 hover:text-blue-600 transition">@vcp_stamm_nimrod</span>
                        </a>
                    </div>

                    <hr class="w-48 h-1 mx-auto rounded-sm dark:bg-blue-800 ml-0 mt-2 mb-2">
                    <div>

                        <h4 class="mt-4 mb-2 font-semibold">Stammesleitung</h4>

                        <p class="mb-2">
                            Timo Clasen
                        </p>

                        <p>
                            Nick Heymann <br> +49 176 45002531
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container mx-auto xl:p-5 p-0 pt-24">
        <h1 class="md:text-6xl text-4xl text-center font-bold xl:mt-10 mt-0 text-blue-950">Oder schreib uns einfach direkt</h1>
    </div>
    <div>
        <ContactForm />
    </div>
  </div>
</template>


