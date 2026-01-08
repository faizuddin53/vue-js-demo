<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps(["formConfig"]);

const emit = defineEmits(["update-field"]);

function updateValue(fieldId, value) {
  emit("update-field", { fieldId, value });
}
</script>

<template>
  <form>
    <template v-for="field in formConfig" :key="field.id">
      <br />

      <!-- TEXT / NUMBER -->
      <template v-if="field.type === 'text' || field.type === 'number'">
        <label>{{ field.label }}</label>
        <input
          :type="field.type"
          :placeholder="field.placeholder"
          :value="field.value"
          @input="updateValue(field.id, $event.target.value)"
        />
      </template>

      <!-- RADIO -->
      <template v-else-if="field.type === 'radio'">
        <label>{{ field.label }}</label>
        <template v-for="rd in field.options" :key="rd.id">
          <input
            type="radio"
            :name="field.name"
            :value="rd.value"
            :checked="field.value === rd.value"
            @change="updateValue(field.id, rd.value)"
          />
          <label>{{ rd.label }}</label>
        </template>
      </template>

      <!-- SELECT -->
      <template v-else-if="field.type === 'select'">
        <label>{{ field.label }}</label>
        <select
          :value="field.value"
          @change="updateValue(field.id, $event.target.value)"
        >
          <option disabled value="">Select {{ field.label }}</option>
          <option
            v-for="opt in field.options"
            :key="opt.value"
            :value="opt.value"
          >
            {{ opt.label }}
          </option>
        </select>
      </template>
    </template>
  </form>
</template>
