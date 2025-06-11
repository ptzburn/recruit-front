import { useContext, useEffect, useState } from "react"; // Change to useContext
import { NavigationContext } from "@/lib/NavigationProvider";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PlusIcon } from "@radix-ui/react-icons";
import { getThreads } from "@/lib/api";
import { Thread } from "@/lib/types";
import ChatRow from "@/components/ChatRow";

const Sidebar = () => {
  const [threads, setThreads] = useState<Thread[]>([]);
  const { isMobileNavOpen, closeMobileNav } = useContext(NavigationContext);

  const fetchThreads = async () => {
    try {
      const fetchedThreads = await getThreads();
      setThreads(fetchedThreads);
    } catch (err) {
      console.error("Error fetching threads:", err);
    }
  };

  useEffect(() => {
    void fetchThreads();
  }, []);

  return (
    <>
      {isMobileNavOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={closeMobileNav}
        />
      )}

      <div
        className={cn(
          "fixed md:inset-y-0 top-14 bottom-0 left-0 z-50 w-72 bg-gray-50/80 backdrop-blur-xl border-r border-gray-200/50 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:top-0 flex flex-col",
          isMobileNavOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0", // Ensure md screens always show
          !isMobileNavOpen && "hidden md:flex", // Hide on mobile when closed
        )}
      >
        <div className="p-4 border-b border-gray-200/50">
          <Button className="w-full bg-white hover:bg-gray-50 text-gray-700 border border-gray-200/50 shadow-sm hover:shadow transition-all duration-200">
            <PlusIcon className="mr-2 h-4 w-4" /> New Chat
          </Button>
        </div>
        <div className="flex-1 overflow-y-auto space-y-2.5 p-4 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
          {/*chats?.map((chat) => <ChatRow key={chat._id} chat={chat} />)*/}
          {threads.map((thread) => (
            <ChatRow key={thread.threadId} threadId={thread.threadId} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
