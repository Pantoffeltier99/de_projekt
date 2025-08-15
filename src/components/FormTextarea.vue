<script setup>
const {modelValue, label, placeholder, rows, error} = defineProps({
    modelValue: String,
    label: String,
    placeholder: String,
    rows: String,
    error: String
});

const emit = defineEmits(['update:modelValue']);

const updateValue = ($event) => {
    emit('update:modelValue', $event.target.value);
};
</script>

<template>
    <div class="mb-4">
        <label :for="label" class="block text-sm font-medium text-gray-700 mb-1">{{ label }}</label>
        <textarea :id="label" :rows="rows" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  :placeholder="placeholder" :value="modelValue" @input="updateValue" :class="{ 'is-invalid': error }"></textarea>
        
        <div v-if="error">
            <small class="text-red-600 text-sm">{{ error }}</small>
        </div>
    </div>
</template>