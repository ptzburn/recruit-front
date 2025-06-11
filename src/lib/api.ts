import axios from "axios";
import { ChatResponse, Thread } from "./types";

const API_BASE_URL = process.env.API_BASE_URL as string; // Adjust to your backend URL

export async function startNewChat(message: string): Promise<ChatResponse> {
  const response = await axios.post(API_BASE_URL, { message });
  return response.data;
}

export async function continueChat(
  message: string,
  threadId: string,
): Promise<ChatResponse> {
  const response = await axios.post(`${API_BASE_URL}/${threadId}`, { message });
  console.log(response);
  return response.data;
}

export async function getThreads(): Promise<Thread[]> {
  const response = await axios.get(API_BASE_URL);
  console.log("response", response);
  return response.data;
}
