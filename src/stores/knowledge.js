import { defineStore } from 'pinia'

export const useKnowledgeStore = defineStore('knowledge', {
  state: () => ({
    results: [],
    currentQuery: null,
    isLoading: false,
    chatHistory: []
  }),

  actions: {
    async queryKnowledge(text) {
      this.isLoading = true
      this.currentQuery = text
      
      try {
        // 这里是与Deepseek API交互的逻辑
        // 示例数据
        const mockResults = [
          {
            title: '数据分析基础',
            reliability: 95,
            description: '这个知识点与数据分析的基本概念和方法论相关...',
            relations: [
              '数据收集方法',
              '数据清洗技术',
              '统计分析基础'
            ]
          }
          // 可以添加更多模拟数据
        ]
        
        this.results = mockResults
      } finally {
        this.isLoading = false
      }
    },

    async queryChatbot(message) {
      // 这里实现与DeepSeek API的交互
      // 临时返回模拟数据
      return new Promise(resolve => {
        setTimeout(() => {
          resolve('这是AI的回复消息...')
        }, 1000)
      })
    }
  }
}) 