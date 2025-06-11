export type MessageRole = "user" | "assistant";

export interface Message {
  role: MessageRole;
  content: string;
}

export interface ChatRequestBody {
  messages: Message[];
  newMessage: string;
  threadId: string;
}

export interface ChatResponse {
  threadId: string;
  response: string;
}

export interface Thread {
  threadId: string;
}
