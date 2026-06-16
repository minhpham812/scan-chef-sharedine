import { useState } from "react";
import { ChatConversationPane } from "@/components/chats/chat-conversation-pane";
import { chatThreads } from "@/components/chats/chat-data";
import { ChatThreadList } from "@/components/chats/chat-thread-list";

export function ChatsPage() {
  const [selectedThreadId, setSelectedThreadId] = useState(
    chatThreads[0]?.id ?? "",
  );
  const selectedThread =
    chatThreads.find((thread) => thread.id === selectedThreadId) ??
    chatThreads[0];

  return (
    <>
      <main className="flex-1 pb-8 lg:hidden">
        <header className="px-5 pb-2 pt-4">
          <h1 className="text-[18px] font-semibold text-foreground">
            チャット
          </h1>
        </header>

        <ChatThreadList
          threads={chatThreads}
          getThreadHref={(thread) => `/chat/${thread.id}`}
        />
      </main>

      <div className="hidden lg:flex lg:h-screen lg:flex-1 lg:overflow-hidden">
        <ChatThreadList
          threads={chatThreads}
          title="メッセージ"
          className="w-[320px] shrink-0 overflow-y-auto border-r border-border bg-white"
          selectedThreadId={selectedThreadId}
          onSelectThread={setSelectedThreadId}
        />

        <main className="flex min-w-0 flex-1 flex-col bg-background">
          {selectedThread ? (
            <ChatConversationPane thread={selectedThread} />
          ) : null}
        </main>
      </div>
    </>
  );
}
