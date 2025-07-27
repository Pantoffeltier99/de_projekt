<script setup>
import { error } from "console";


const props = defineProps({
    label: String,
    type: {
        type: String,
        default: 'text'
    },
    modelValue: String,
    placeholder: String,
    error: String
});

const emit = defineEmits(['update:modelValue']);

const onInput = ($event) => {
    emit('update:modelValue', $event.target.value);
};
</script>
<template>
    <div class="container mx-auto p-5 pt-24">
        <label :for="label">{{ label }}</label>
        <input
            :type="type"
            class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            :class="{ 'is-invalid': error }" 
            :name="label" 
            :placeholder="placeholder"
            :value="modelValue"
            @input="onInput"
        >

        <div v-if="error" class="text-red-500 mt-2">
            <small class="text-danger">{{ error }}</small>

        </div>
    </div>
</template>