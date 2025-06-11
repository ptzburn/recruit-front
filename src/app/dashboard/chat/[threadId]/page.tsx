import ChatInterface from "@/components/ChatInterface";

interface ChatPageProps {
  params: { threadId: string };
}

const ChatPage = ({ params }: ChatPageProps) => {
  const { threadId } = params;

  return (
    <div className="flex-1 overflow-hidden">
      <ChatInterface threadId={threadId} />
    </div>
  );
};
export default ChatPage;
