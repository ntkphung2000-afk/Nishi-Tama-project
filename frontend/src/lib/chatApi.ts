export type ChatLocale = "en" | "ja" | "vi" | "zh" | "ko" | "de" | "ru";

const rawApiUrl =
  import.meta.env.VITE_CHATBOT_API_URL || "http://127.0.0.1:7860";

export const CHATBOT_API_URL = rawApiUrl.replace(/\/+$/, "");

export async function streamChat(
  message: string,
  locale: ChatLocale,
  sessionId: string,
  onChunk: (chunk: string) => void,
  signal?: AbortSignal,
): Promise<void> {
  const response = await fetch(`${CHATBOT_API_URL}/chat/stream`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Locale": locale,
      "X-Session-Id": sessionId,
    },
    body: JSON.stringify({
      message,
      locale,
      session_id: sessionId,
    }),
    signal,
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(
      detail || `Chatbot request failed with status ${response.status}`,
    );
  }

  if (!response.body) {
    throw new Error("The chatbot server returned an empty response.");
  }

  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  while (true) {
    const { value, done } = await reader.read();

    if (done) {
      const tail = decoder.decode();
      if (tail) onChunk(tail);
      break;
    }

    const chunk = decoder.decode(value, { stream: true });
    if (chunk) onChunk(chunk);
  }
}
