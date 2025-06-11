import ChatInterface from "@/components/ChatInterface";

interface ChatPageProps {
  params: Promise<{ threadId: string }>;
}

const ChatPage = async ({ params }: ChatPageProps) => {
  const { threadId } = await params; // Resolve the Promise

  return (
    <div className="flex-1 overflow-hidden">
      <ChatInterface threadId={threadId} />
    </div>
  );
};
export default ChatPage;
