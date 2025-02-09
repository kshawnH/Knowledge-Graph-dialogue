<script setup>
import { computed } from 'vue'
import { useKnowledgeStore } from '../stores/knowledge'

const store = useKnowledgeStore()
const results = computed(() => store.results)
</script>

<template>
  <div class="results-container">
    <div class="result-card">
      <!-- 进度条区域 -->
      <div class="progress-section">
        <div class="progress-bar">
          <div class="progress-fill" style="width: 50%"></div>
        </div>
      </div>
      
      <!-- 结果展示区域 -->
      <div class="result-content">
        <div v-if="results.length" class="results-grid">
          <div 
            v-for="(result, index) in results" 
            :key="index"
            class="result-item"
          >
            <h3>{{ result.title }}</h3>
            <p>{{ result.description }}</p>
          </div>
        </div>
        <div v-else class="empty-state">
          分析结果将在这里显示
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.results-container {
  margin-top: 2rem;
}

.result-card {
  background: #ffffff;
  border-radius: 4px;
  overflow: hidden;
}

.progress-section {
  padding: 1rem;
}

.progress-bar {
  height: 4px;
  background: #e5e7eb;
  border-radius: 2px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: #4ade80;
  transition: width 0.3s ease;
}

.result-content {
  min-height: 300px;
  padding: 1rem;
}

.results-grid {
  display: grid;
  gap: 1rem;
}

.result-item {
  padding: 1rem;
  background: #f3f4f6;
  border-radius: 4px;
}

.result-item h3 {
  margin-bottom: 0.5rem;
  color: #1f2937;
  font-size: 16px;
}

.result-item p {
  color: #4b5563;
  font-size: 14px;
  line-height: 1.5;
}

.empty-state {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  font-size: 14px;
}
</style> 