<script setup>
import { ref } from 'vue'
import { useKnowledgeStore } from '../stores/knowledge'

const store = useKnowledgeStore()
const inputText = ref('')

const handleSubmit = async () => {
  if (!inputText.value.trim()) return
  
  emit('start-query')
  
  try {
    await store.queryKnowledge(inputText.value)
  } finally {
    emit('query-complete')
  }
}

const emit = defineEmits(['start-query', 'query-complete'])
</script>

<template>
  <div class="input-container">
    <textarea
      v-model="inputText"
      class="knowledge-input"
      placeholder="3434"
    />
    <button 
      @click="handleSubmit"
      class="submit-btn"
    >
      开始分析
    </button>
  </div>
</template>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.knowledge-input {
  width: 100%;
  height: 120px;
  padding: 1rem;
  background: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  resize: none;
  color: #333;
}

.knowledge-input:focus {
  outline: none;
}

.submit-btn {
  align-self: flex-start;
  padding: 0.5rem 2rem;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-btn:hover {
  background: #2563eb;
}
</style> 