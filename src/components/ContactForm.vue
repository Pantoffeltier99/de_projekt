<script setup>
import { ref, reactive, computed } from 'vue';
import { sendEmail } from '@/services/emailService';
import FormInput from '@/components/FormInput.vue';
import FormTextarea from '@/components/FormTextarea.vue';

const title = 'Kontaktformular';
const showForm = ref(true); // <-- als ref deklarieren
const successMessage = ref('');
const fileInputRef = ref(null);


const initialContactForm = {
    name: '',
    email: '',
    subject: '',
    message: '',
    file: null
};

const initialtouched = {
    name: false,
    email: false,
    subject: false,
    message: false
};

const contactForm = reactive({ ...initialContactForm });
const touched = reactive({ ...initialtouched });

function setTouched(field) {
    touched[field] = true;
};

const errors = reactive({
    name: computed(() => (!contactForm.name && touched.name) ? 'Name ist erforderlich.' : ''),
    subject: computed(() => (!contactForm.subject && touched.subject) ? 'Betreff ist erforderlich.' : ''),
    email: computed(() => {
        if (touched.email) {
            if (!contactForm.email) {
                return 'E-Mail ist erforderlich.';
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)) {
                return 'E-Mail ist ungültig.';
            }
            return '';
        }
        return '';
    }),
    message: computed(() => (!contactForm.message && touched.message) ? 'Nachricht ist erforderlich.' : '')
});

const isFormValid = computed(() => {
    const allFieldsTouched = Object.values(touched).every(t => t);
    const noErrors = !Object.values(errors).some(e => e);
    return allFieldsTouched && noErrors;
});

function onFileSelected(event) {
    contactForm.file = event.target.files[0];
}

function resetForm() {
    setTimeout(() => {
        successMessage.value = '';
        showForm.value = true;
        Object.assign(contactForm, initialContactForm);
        Object.assign(touched, initialtouched);
    }, 2000);
}

function removeFile() {
    contactForm.file = null;
    if (fileInputRef.value) {
        fileInputRef.value.value = null;
    }
}

async function onSubmit() {
    if (isFormValid.value) {
        const formData = new FormData();
        formData.append('name', contactForm.name);
        formData.append('subject', contactForm.subject);
        formData.append('email', contactForm.email);
        formData.append('message', contactForm.message);

        try {
            await sendEmail(formData);
            successMessage.value = 'E-Mail erfolgreich gesendet!';
            showForm.value = false;
            resetForm();
        }
        catch (error) {
            console.error('Fehler beim Senden der E-Mail:', error);
            alert('Fehler beim Senden der E-Mail. Bitte versuchen Sie es später erneut.');
        }
    }
}
</script>

<template>
    <div class="bg-blue-50">
        <div class="container mx-auto p-10 pt-24">
            <div class="container mx-auto p-5 bg-white rounded-lg shadow-md">
                <h1 class="text-2xl font-bold">{{ title }}</h1>
                <hr class="w-48 h-1 mx-auto rounded-sm dark:bg-blue-800 mb-4 ml-0">
                <div v-if="showForm">
                    <form @submit.prevent="onSubmit" class="space-y-4" enctype="multipart/form-data">
                        <FormInput v-model="contactForm.name" label="Name" placeholder="Name eingeben"
                            :error="errors.name" @input="setTouched('name')" />
                        <FormInput v-model="contactForm.subject" label="Betreff" placeholder="Betreff eingeben"
                            :error="errors.subject" @input="setTouched('subject')" />
                        <FormInput v-model="contactForm.email" label="E-Mail" type="email"
                            placeholder="E-Mail-Adresse eingeben" :error="errors.email" @input="setTouched('email')" />
                        <FormTextarea v-model="contactForm.message" label="Nachricht" placeholder="Nachricht eingeben"
                            rows="4" :error="errors.message" @input="setTouched('message')" />
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Datei anhängen
                                (optional)</label>
                            <input
                                type="file"
                                @change="onFileSelected"
                                ref="fileInputRef"
                                class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            />
                            <button
                                v-if="contactForm.file"
                                type="button"
                                @click="removeFile"
                                class="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200"
                            >
                                Datei entfernen
                            </button>
                        </div>

                        <div>
                            <button type="submit"
                                class="w-full bg-blue-800 text-white py-2 rounded-md hover:bg-blue-900 transition-colors duration-200"
                                :disabled="!isFormValid">Absenden</button>
                        </div>
                    </form>
                </div>
                <div v-if="successMessage" class="mt-4 text-xl font-bold text-green-600 text-center">
                    {{ successMessage }}
                </div>
            </div>
        </div>
        
    </div>

</template>
