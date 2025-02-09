<script setup>
import { ref } from 'vue'
import ChatPanel from './components/ChatPanel.vue'
import ChatInput from './components/ChatInput.vue'
import KnowledgeInput from './components/KnowledgeInput.vue'
import ResultDisplay from './components/ResultDisplay.vue'
import ProgressBar from './components/ProgressBar.vue'

const currentProgress = ref(0)
const accuracy = ref(0)
const isLoading = ref(false)
</script>

<template>
  <div class="app-container">
    <!-- 左侧导航栏 -->
    <div class="nav-section">
      <div class="history-section">
        <button class="new-chat-btn">
          <i class="icon-plus"></i>
          开启新对话
        </button>
        
        <div class="time-divider">今天</div>
        
        <div class="error-message">
          curl: (7) Failed to connect
        </div>
        
        <div class="time-divider">7 天内</div>
        
        <div class="history-list">
          <div class="history-item">见于青要紫多久</div>
          <div class="history-item">你会中国古代天干地支生辰八字的</div>
          <!-- 更多历史记录 -->
        </div>
        
        <div class="time-divider">30 天内</div>
        
        <div class="history-list">
          <div class="history-item">写出十二个地支和拼音</div>
          <div class="history-item">写出中国十个天干和拼音</div>
        </div>
      </div>
      
      <div class="user-section">
        <button class="download-btn">
          <i class="icon-download"></i>
          下载 App
          <span class="new-tag">NEW</span>
        </button>
        <button class="profile-btn">
          <img src="./assets/avatar.png" alt="avatar" class="avatar" />
          个人信息
        </button>
      </div>
    </div>

    <!-- 右侧主要内容区域 -->
    <div class="main-section">
      <!-- 顶部标题 -->
      <header class="main-header">
        <h1 class="title">大数据工具应用课程知识图谱构建系统</h1>
      </header>

      <!-- 聊天内容区域 -->
      <div class="chat-content">
        <ChatPanel />
      </div>

      <!-- 底部输入框 -->
      <ChatInput />
    </div>
  </div>
</template>

<style>
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.6;
  background: #1e1e1e;
  color: #ffffff;
}
</style>

<style scoped>
.app-container {
  display: flex;
  height: 100vh;
  background: #1e1e1e;
  width: 100%;
  position: fixed; /* 固定定位 */
  left: 0;
  top: 0;
}

.nav-section {
  width: 280px;
  min-width: 280px; /* 防止收缩 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #1e1e1e;
  border-right: 1px solid #2d2d2d;
  padding: 1rem;
  position: fixed; /* 固定定位 */
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
}

.history-section {
  flex: 1;
  overflow-y: auto;
}

.new-chat-btn {
  width: 100%;
  padding: 8px 16px;
  background: #2d2d2d;
  border: none;
  border-radius: 6px;
  color: #fff;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  cursor: pointer;
}

.time-divider {
  color: #888;
  font-size: 12px;
  text-align: center;
  margin: 16px 0;
}

.error-message {
  color: #ff4d4f;
  font-size: 13px;
  padding: 8px;
  background: rgba(255, 77, 79, 0.1);
  border-radius: 4px;
  margin: 8px 0;
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.history-item {
  padding: 8px;
  color: #d4d4d4;
  font-size: 13px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.history-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.user-section {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.download-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background: transparent;
  border: 1px solid #2d2d2d;
  border-radius: 6px;
  color: #d4d4d4;
  font-size: 13px;
  cursor: pointer;
}

.new-tag {
  background: #1677ff;
  color: #fff;
  font-size: 10px;
  padding: 2px 4px;
  border-radius: 4px;
}

.profile-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  background: transparent;
  border: none;
  color: #d4d4d4;
  font-size: 13px;
  cursor: pointer;
}

.avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

.main-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-left: 280px; /* 左侧导航宽度 */
  width: calc(100% - 280px); /* 减去左侧导航宽度 */
}

.main-header {
  width: 100%;
  padding: 1.5rem;
  border-bottom: 1px solid #2d2d2d;
  background: #1e1e1e;
  position: sticky;
  top: 0;
  z-index: 5;
}

.title {
  text-align: center;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 500;
  width: 100%;
}

.chat-content {
  flex: 1;
  overflow-y: auto;
  width: 100%;
  background: #1e1e1e;
  display: flex;
  flex-direction: column;
}
</style>
