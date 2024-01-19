<template>
    <div>
        <textarea v-model="htmlValue" placeholder="Enter HTML code here"></textarea>
        <textarea v-model="lessValue" placeholder="Enter LESS code here"></textarea>
        <div v-if="compileError" class="error-message">
            Error compiling LESS: {{ compileError }}
        </div>
        <div v-html="compiledHtml"></div>
    </div>
</template>
  
<script setup>
import { ref, watch, computed, onMounted } from 'vue';
import less from 'less';
import { debounce } from 'lodash';

const htmlValue = ref('');
const lessValue = ref('');
const compileError = ref('');

const compileLess = async () => {
    try {
        const result = await less.render(lessValue.value);
        updateStyleTag(result.css);
        compileError.value = '';
    } catch (error) {
        console.error('Failed to compile LESS:', error);
        compileError.value = error.message;
    }
};

const updateStyleTag = (css) => {
    let styleTag = document.getElementById('dynamic-styles');
    if (!styleTag) {
        styleTag = document.createElement('style');
        styleTag.id = 'dynamic-styles';
        document.head.appendChild(styleTag);
    }
    styleTag.innerHTML = css;
};

watch(lessValue, debounce(compileLess, 500));

const compiledHtml = computed(() => {
    return htmlValue.value;
});

onMounted(() => {
    compileLess();
});
</script>
<style>
textarea {
    width: 100%;
    height: 150px;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    font-size: 16px;
    font-family: 'Courier New', monospace;
    resize: vertical;
}

textarea:focus {
    border-color: #4a90e2;
    outline: none;
}

.error-message {
    color: red;
    margin-top: 10px;
}

@media screen and (max-width: 600px) {
    textarea {
        width: 100%;
        height: 100px;
    }
}
</style>
  