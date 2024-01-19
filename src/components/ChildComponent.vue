<template>
  <div class="child-component">
    <h2>Child:</h2>
    <p><strong>Bool:</strong> {{ state.bool }}</p>
    <p><strong>Text:</strong> {{ state.text }}</p>
    <button @click="emitUpdateBool" class="btn">Change Bool</button>
    <input type="text" :value="state.text" @input="emitUpdateText($event.target.value)" class="text-input">
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'

defineProps({
  state: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['updateBool', 'updateText']);

function emitUpdateBool() {
  emit('updateBool')
}

function emitUpdateText(newValue) {
  emit('updateText', newValue)
}
</script>

<style scoped>
.child-component {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

h2 {
  color: #333;
  margin-bottom: 15px;
}

p {
  margin: 5px 0;
  font-size: 16px;
  color: #666;
}

strong {
  font-weight: bold;
  color: #444;
}

.btn {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
}

.btn:hover {
  background-color: #45a049;
}

.text-input {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
