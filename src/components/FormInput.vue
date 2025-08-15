<script setup>
const props = defineProps({
    label: String,
    type: {
        type: String,
        default: 'text'
    },
    modelValue: String,
    placeholder: String,
    error: String,
});

const emit = defineEmits(['update:modelValue']);

const onInput = ($event) => {
    emit('update:modelValue', $event.target.value);
};
</script>

<template>
    <div class="mb-4">
        <label :for="label" class="block text-sm font-medium text-gray-700 mb-1">{{ label }}</label>
        <input :type="type" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
               :name="label" :placeholder="placeholder" :value="modelValue" @input="onInput" :class="{ 'is-invalid': error}" >
        </div v-if="error"> 
            <small class="text-red-600 text-sm">{{ error }}</small>
        </div>
    </div>
</template>