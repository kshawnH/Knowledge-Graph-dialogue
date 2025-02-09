<script setup>
import { ref } from 'vue'
import { useKnowledgeStore } from '../stores/knowledge'

const store = useKnowledgeStore()
const inputMessage = ref('')

const messages = ref([
  {
    type: 'system',
    content: '今天'
  },
  {
    type: 'error',
    content: 'curl: (7) Failed to connect'
  },
  {
    type: 'text',
    content: '7 天内'
  },
  {
    type: 'history',
    content: '见于青要紫多久'
  },
  {
    type: 'history',
    content: '你会中国古代天干地支生辰八字的'
  },
  {
    type: 'history',
    content: '你会中国古代天干地支生辰八字的'
  },
  {
    type: 'history',
    content: '你会中国古代天干地支生辰八字的'
  },
  {
    type: 'history',
    content: '你会中国古代天干地支生辰八字的'
  },
  {
    type: 'history',
    content: '你会中国古代天干地支生辰八字的'
  },
  {
    type: 'history',
    content: '你现在能联网吗，联哪个地区的网'
  },
  {
    type: 'history',
    content: '写出中国天干地支中天干是在金'
  },
  {
    type: 'text',
    content: '30 天内'
  },
  {
    type: 'history',
    content: '写出十二个地支和拼音'
  },
  {
    type: 'history',
    content: '写出十二个地支和拼音'
  },
  {
    type: 'history',
    content: '写出中国十个天干和拼音'
  }
])

const handleSend = async () => {
  if (!inputMessage.value.trim()) return
  
  messages.value.push({
    type: 'user',
    content: inputMessage.value
  })
  
  try {
    const response = await store.queryChatbot(inputMessage.value)
    messages.value.push({
      type: 'ai',
      content: response
    })
  } catch (error) {
    messages.value.push({
      type: 'error',
      content: error.message
    })
  }
  
  inputMessage.value = ''
}
</script>

<template>
  <div class="chat-container">
    <div class="message-list">
      <div 
        v-for="(msg, index) in messages"
        :key="index"
        :class="['message', msg.type]"
      >
        {{ msg.content }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.chat-container {
  flex: 1;
  overflow-y: auto;
  width: 100%;
  background: #1e1e1e;
  display: flex;
  flex-direction: column;
}

.message-list {
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.message {
  margin-bottom: 0.5rem;
  font-size: 13px;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 4px;
  width: 100%;
}

.message.system,
.message.text {
  color: #888;
  text-align: center;
  font-size: 12px;
  padding: 0.5rem 0;
  background: transparent;
}

.message.error {
  color: #ff4d4f;
  background: rgba(255, 77, 79, 0.1);
}

.message.history {
  background: rgba(255, 255, 255, 0.05);
  cursor: pointer;
  transition: background-color 0.2s;
  width: 100%;
}

.message.history:hover {
  background: rgba(255, 255, 255, 0.1);
}

.message.user {
  background: #2d2d2d;
  align-self: flex-end;
  margin-left: auto;
  max-width: 80%;
}

.message.ai {
  background: rgba(255, 255, 255, 0.05);
  align-self: flex-start;
  margin-right: auto;
  max-width: 80%;
}
</style>