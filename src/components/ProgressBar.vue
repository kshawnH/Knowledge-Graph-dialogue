<script setup>
defineProps({
  progress: {
    type: Number,
    required: true
  },
  accuracy: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div class="progress-container">
    <div class="progress-info">
      <span>分析进度: {{ progress }}%</span>
      <span>准确度: {{ accuracy }}%</span>
    </div>
    <div class="progress-bar">
      <div 
        class="progress-fill"
        :style="{ width: `${progress}%` }"
      />
    </div>
  </div>
</template>

<style scoped>
.progress-container {
  margin: 2rem 0;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.progress-bar {
  height: 20px;
  background: #f0f2f5;
  border-radius: 10px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #409eff, #67c23a);
  transition: width 0.3s ease;
}
</style> 