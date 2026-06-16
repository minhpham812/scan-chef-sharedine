import { useNavigate, useParams } from 'react-router-dom'
import { ChatConversationPane } from '@/components/chats/chat-conversation-pane'
import { chatThreads } from '@/components/chats/chat-data'

export function ChatDetailPage() {
  const navigate = useNavigate()
  const { threadId } = useParams<{ threadId: string }>()
  const thread = chatThreads.find(item => item.id === threadId) ?? chatThreads[0]

  if (!thread) {
    return null
  }

  return (
    <main className="flex h-screen flex-1 flex-col bg-background">
      <ChatConversationPane thread={thread} title="チャット" onBack={() => navigate('/chats')} />
    </main>
  )
}
