<template>
  <div class="parent-component">
    <h2>Parent:</h2>
    <p><strong>Bool:</strong> {{ state.bool }}</p>
    <p><strong>Text:</strong> {{ state.text }}</p>
    <ChildComponent :state="state" @updateBool="toggleBool" @updateText="updateText" />
  </div>
</template>

<script>
import { ref } from 'vue';
import ChildComponent from './ChildComponent.vue';

export default {
  components: { ChildComponent },
  setup() {
    const state = ref({ bool: true, text: 'Initial text' });

    function toggleBool() {
      state.value.bool = !state.value.bool;
    }

    function updateText(newText) {
      state.value.text = newText;
    }

    return { state, toggleBool, updateText };
  }
};
</script>

<style scoped>
.parent-component {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: auto;
  margin-top: 20px;
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
</style>
