<script setup>
const {modelValue, label, rows, placeholder, error} = defineProps([
   'modelValue', 'label', 'rows', 'placeholder', 'error']);

const emit = defineEmits(['update:modelValue']);

const updateValue = (event) => {
    emit('update:modelValue', event.target.value);
};
</script>

<template>
    <div class="container mx-auto p-5 pt-24">
        <div class="bg-white shadow-md rounded-lg p-6">
            <label class="text-2xl font-bold mb-4">{{ label }}</label>
            <textarea
                :rows="rows"
                :placeholder="placeholder"
                :name="label"
                :value="modelValue"
                @input="updateValue($event)"
                class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                :class="{ 'is-invalid': error }"
            ></textarea>
            <div v-if="error" class="text-red-500 mt-2">
                <small class="text-danger">{{ error }}</small>
            </div>
        </div>

    </div>
</template>