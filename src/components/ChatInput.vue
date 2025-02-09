<script setup>
import { ref } from 'vue'
import { useKnowledgeStore } from '../stores/knowledge'

const store = useKnowledgeStore()
const inputMessage = ref('')

const handleSend = async () => {
  if (!inputMessage.value.trim()) return
  
  try {
    await store.queryChatbot(inputMessage.value)
    inputMessage.value = ''
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="chat-input-container">
    <div class="input-wrapper">
      <textarea
        v-model="inputMessage"
        class="message-input"
        placeholder="给 DeepSeek 发送消息"
        @keyup.enter="handleSend"
      />
      <div class="action-buttons">
        <button class="action-btn">
          <i class="icon-clip"></i>
        </button>
        <button class="action-btn">
          <i class="icon-link"></i>
        </button>
      </div>
    </div>
    <div class="footer-text">
      内容由 AI 生成，请谨慎甄别
    </div>
  </div>
</template>

<style scoped>
.chat-input-container {
  padding: 16px;
  border-top: 1px solid #2d2d2d;
}

.input-wrapper {
  background: #2d2d2d;
  border-radius: 8px;
  padding: 12px;
}

.message-input {
  width: 100%;
  min-height: 44px;
  max-height: 200px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 14px;
  resize: none;
  outline: none;
  padding: 8px;
  line-height: 1.5;
}

.message-input::placeholder {
  color: #888;
}

.action-buttons {
  display: flex;
  gap: 8px;
  padding: 8px;
  border-top: 1px solid #3d3d3d;
}

.action-btn {
  background: transparent;
  border: none;
  color: #888;
  cursor: pointer;
  padding: 4px;
}

.footer-text {
  text-align: center;
  color: #888;
  font-size: 12px;
  margin-top: 8px;
}
</style> 