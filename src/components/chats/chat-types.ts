export interface ChatMessage {
  id: string
  type: 'system' | 'outgoing'
  dateLabel?: string
  text: string
  time?: string
}

export interface ChatThread {
  id: string
  initials: string
  name: string
  customerName: string
  date: string
  plan: string
  status: string
  lastMsg: string
  messages: ChatMessage[]
}
