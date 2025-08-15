<script setup>
import { ref, reactive, computed } from 'vue';
import {sendEmail} from '@/services/emailService.js';
import FormInput from '@/components/FormInput.vue';
import FormTextarea from '@/components/FormTextarea.vue';

const title = 'Vue Contact Form';
const showForm =(true);
const successMessage = ref('');

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

const contactForm = reactive({...initialContactForm});
const touched = reactive({...initialtouched});

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
        successMassage.value = '';
        showForm.value = true;
        Object.assign(contactForm, initialContactForm);
        Object.assign(touched, initialtouched);
    }, 2000);
}

async function onSubmit() {
    if(isFormValid.value) {
        const formData = new FormData();
        formData.append('name', contactForm.name);
        formData.append('subject', contactForm.subject);
        formData.append('email', contactForm.email);
        formData.append('message', contactForm.message);
        if (contactForm.file) {
            formData.append('file', contactForm.file, contactForm.file.name);
        }

        try {
            const response = await sendEmail(formData);
            if (response.status === 200) {
                successMessage.value = response.data.message;
                showForm.value = false;
                resetForm();
            } else {
                console.error('Fehler beim Senden der E-Mail:', response);
            }
        }
        catch (error) {
            console.error('Fehler beim Senden der E-Mail:', error);
        }
    } else {  
        console.llog('Formular ist ungültig. Bitte überprüfen Sie die Eingaben.');
    }
}
</script>

<template> 
    <div class="bg-blue-50">
        <div class="container mx-auto p-5">
            <h1 class="text-2xl font-bold mb-4">{{ title }}</h1>
            <div v-if="showForm">
                <form @submit.prevent="onSubmit" class="space-y-4" enctype="multipart/form-data">
                    <FormInput
                        v-model="contactForm.name"
                        label="Name"
                        placeholder="Name eingeben"
                        :error="errors.name"
                        @input="setTouched('name')"
                    />
                    <FormInput
                        v-model="contactForm.subject"
                        label="Betreff"
                        placeholder="Betreff eingeben"
                        :error="errors.subject"
                        @input="setTouched('subject')"
                    />
                    <FormInput
                        v-model="contactForm.email"
                        label="E-Mail"
                        type="email"
                        placeholder="E-Mail-Adresse eingeben"
                        :error="errors.email"
                        @input="setTouched('email')"
                    />
                    <FormTextarea
                        v-model="contactForm.message"
                        label="Nachricht"
                        placeholder="Nachricht eingeben"
                        rows="4"
                        :error="errors.message"
                        @input="setTouched('message')"
                    />
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Datei anhängen (optional)</label>
                        <input type="file" @change="onFileSelected" class="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                    </div>
                    
                    <div>
                        <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-200" :disabled="!isFormValid">Absenden</button>
                    </div>
                </form>
            </div>
            <div v-if="showForm" class="mt-4 text-green-600">
                {{ successMessage }}
            </div>
        </div>
    </div>
</template> 
