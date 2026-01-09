<script setup>
import { ref } from "vue";
import Form from "./RegForm.vue";

const formConfig = ref([
  { id: "username", label: "User Name", type: "text", value: "" },
  { id: "age", label: "Age", type: "number", value: "" },
  {
    id: "gender",
    label: "Gender",
    type: "radio",
    name: "gender",
    value: "",
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
    ],
  },
  {
    id: "country",
    label: "Country",
    type: "select",
    value: "",
    options: [
      { label: "India", value: "india" },
      { label: "USA", value: "usa" },
      { label: "Nepal", value: "nepal" },
    ],
  },
]);

function updateField({ fieldId, value }) {
  const field = formConfig.value.find((f) => f.id === fieldId);
  if (field) field.value = value;
}
</script>

<template>
  <h1>Registration Form</h1>

  <Form :formConfig="formConfig" @update-field="updateField" />

  <pre>{{ formConfig }}</pre>
</template>
