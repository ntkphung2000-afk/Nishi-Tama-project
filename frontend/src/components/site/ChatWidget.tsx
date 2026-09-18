import { useEffect, useMemo, useRef, useState } from "react";
import { Bot, Loader2, MessageCircle, Send, X } from "lucide-react";

import { useLang, type Lang } from "@/lib/i18n";
import { streamChat } from "@/lib/chatApi";

type Message = {
  id: string;
  role: "assistant" | "user";
  text: string;
};

type ChatCopy = {
  button: string;
  title: string;
  subtitle: string;
  placeholder: string;
  close: string;
  send: string;
  greeting: string;
  examplesTitle: string;
  examples: string[];
  error: string;
  verify: string;
};

const copy: Record<Lang, ChatCopy> = {
  en: {
    button: "AI Guide",
    title: "Nishi-Tama AI Guide",
    subtitle: "Ask about places, access and trip ideas",
    placeholder: "Ask about Nishi-Tama...",
    close: "Close AI Guide",
    send: "Send",
    greeting:
      "Hello! I can help with stations, restaurants, cafés, sightseeing, nature, access, experiences and Google Maps information in this project.",
    examplesTitle: "Try asking",
    examples: [
      "What’s happening in August?",
      "Where is Ome Station?",
      "What restaurants are near Ome Station?",
      "Are there cafés near Sawai Station?",
      "What can I visit near Mitake Station?",
      "What nature spots are near Hatonosu Station?",
      "What is around Okutama Station?",
      "How can I get to Nishi-Tama from Shinjuku?",
      "Recommend a day trip using places in this website.",
    ],
    error:
      "I couldn't reach the AI Guide backend. Please try again after the backend is running.",
    verify:
      "For live hours, closures, train delays and weather, please verify the latest official information.",
  },
  ja: {
    button: "AIガイド",
    title: "Nishi-Tama AI Guide",
    subtitle: "スポット・アクセス・旅の相談",
    placeholder: "西多摩について質問してください…",
    close: "AIガイドを閉じる",
    send: "送信",
    greeting:
      "こんにちは！駅、レストラン、カフェ、観光、自然、アクセス、体験、Googleマップなど、このサイトの情報について案内できます。",
    examplesTitle: "質問の例",
    examples: [
      "8月のイベントを教えて",
      "青梅駅はどこですか？",
      "青梅駅の近くのレストランを全部教えて",
      "沢井駅の近くにカフェはありますか？",
      "御嶽駅の近くで観光できる場所は？",
      "鳩ノ巣駅の近くの自然スポットは？",
      "奥多摩駅の周辺には何がありますか？",
      "新宿から西多摩へはどう行きますか？",
      "このサイトの場所を使って日帰りプランをおすすめして",
    ],
    error:
      "AIガイドのバックエンドに接続できませんでした。バックエンドを起動してから、もう一度お試しください。",
    verify:
      "営業時間、休業、列車遅延、天気などの最新情報は公式情報をご確認ください。",
  },
  vi: {
    button: "Hướng dẫn AI",
    title: "Nishi-Tama AI Guide",
    subtitle: "Hỏi về địa điểm, đi lại và gợi ý chuyến đi",
    placeholder: "Hỏi về Nishi-Tama...",
    close: "Đóng hướng dẫn AI",
    send: "Gửi",
    greeting:
      "Xin chào! Tôi có thể hướng dẫn về nhà ga, nhà hàng, quán cà phê, điểm tham quan, thiên nhiên, cách đi lại, trải nghiệm và Google Maps trong dự án này.",
    examplesTitle: "Câu hỏi gợi ý",
    examples: [
      "Có sự kiện gì vào tháng 8?",
      "Ga Ome ở đâu?",
      "Có những nhà hàng nào gần ga Ome?",
      "Có quán cà phê nào gần ga Sawai không?",
      "Có thể tham quan gì gần ga Mitake?",
      "Có điểm thiên nhiên nào gần ga Hatonosu?",
      "Có gì quanh ga Okutama?",
      "Đi từ Shinjuku đến Nishi-Tama như thế nào?",
      "Hãy gợi ý một chuyến đi trong ngày bằng các địa điểm trên trang web.",
    ],
    error:
      "Không thể kết nối với máy chủ AI Guide. Vui lòng thử lại sau khi backend đang chạy.",
    verify:
      "Với giờ mở cửa, đóng cửa tạm thời, tàu trễ và thời tiết, hãy kiểm tra thông tin chính thức mới nhất.",
  },
  zh: {
    button: "AI 导游",
    title: "Nishi-Tama AI Guide",
    subtitle: "询问景点、交通和旅行建议",
    placeholder: "询问有关西多摩的问题…",
    close: "关闭 AI 导游",
    send: "发送",
    greeting:
      "你好！我可以根据本项目的信息介绍车站、餐厅、咖啡馆、景点、自然、交通、体验和 Google Maps。",
    examplesTitle: "试着问",
    examples: [
      "8 月有什么活动？",
      "青梅站在哪里？",
      "青梅站附近有哪些餐厅？",
      "泽井站附近有咖啡馆吗？",
      "御岳站附近有什么可以参观？",
      "鸠之巢站附近有哪些自然景点？",
      "奥多摩站周边有什么？",
      "从新宿怎么去西多摩？",
      "请用这个网站里的地点推荐一日游。",
    ],
    error:
      "无法连接 AI 导游后端。请在后端运行后重试。",
    verify:
      "营业时间、临时关闭、列车延误和天气等实时信息，请确认最新官方信息。",
  },
  ko: {
    button: "AI 가이드",
    title: "Nishi-Tama AI Guide",
    subtitle: "장소, 교통, 여행 아이디어 질문",
    placeholder: "니시타마에 대해 질문하세요...",
    close: "AI 가이드 닫기",
    send: "보내기",
    greeting:
      "안녕하세요! 이 프로젝트의 역, 음식점, 카페, 관광지, 자연, 교통, 체험 및 Google Maps 정보를 안내할 수 있습니다.",
    examplesTitle: "이렇게 물어보세요",
    examples: [
      "8월에는 어떤 행사가 있나요?",
      "오메역은 어디에 있나요?",
      "오메역 근처 식당을 모두 알려 주세요.",
      "사와이역 근처에 카페가 있나요?",
      "미타케역 근처에서 무엇을 볼 수 있나요?",
      "하토노스역 근처 자연 명소는 무엇인가요?",
      "오쿠타마역 주변에는 무엇이 있나요?",
      "신주쿠에서 니시타마까지 어떻게 가나요?",
      "이 웹사이트의 장소를 이용해 당일치기 코스를 추천해 주세요.",
    ],
    error:
      "AI 가이드 백엔드에 연결할 수 없습니다. 백엔드를 실행한 뒤 다시 시도해 주세요.",
    verify:
      "영업시간, 임시 휴무, 열차 지연, 날씨 등의 실시간 정보는 최신 공식 정보를 확인해 주세요.",
  },
  de: {
    button: "KI-Guide",
    title: "Nishi-Tama AI Guide",
    subtitle: "Fragen zu Orten, Anreise und Ausflugsideen",
    placeholder: "Frage etwas über Nishi-Tama...",
    close: "KI-Guide schließen",
    send: "Senden",
    greeting:
      "Hallo! Ich kann anhand dieses Projekts zu Bahnhöfen, Restaurants, Cafés, Sehenswürdigkeiten, Natur, Anreise, Erlebnissen und Google Maps helfen.",
    examplesTitle: "Beispielfragen",
    examples: [
      "Was passiert im August?",
      "Wo liegt der Bahnhof Ome?",
      "Welche Restaurants gibt es in der Nähe des Bahnhofs Ome?",
      "Gibt es Cafés beim Bahnhof Sawai?",
      "Was kann ich in der Nähe des Bahnhofs Mitake besuchen?",
      "Welche Naturziele gibt es beim Bahnhof Hatonosu?",
      "Was gibt es rund um den Bahnhof Okutama?",
      "Wie komme ich von Shinjuku nach Nishi-Tama?",
      "Empfiehl mir einen Tagesausflug mit Orten aus dieser Website.",
    ],
    error:
      "Der KI-Guide-Server ist nicht erreichbar. Bitte erneut versuchen, nachdem das Backend gestartet wurde.",
    verify:
      "Aktuelle Öffnungszeiten, Schließungen, Zugverspätungen und Wetter bitte über offizielle Quellen prüfen.",
  },
  ru: {
    button: "ИИ-гид",
    title: "Nishi-Tama AI Guide",
    subtitle: "Места, транспорт и идеи для поездки",
    placeholder: "Спросите о Ниси-Тама...",
    close: "Закрыть ИИ-гид",
    send: "Отправить",
    greeting:
      "Здравствуйте! Я могу помочь с информацией этого проекта о станциях, ресторанах, кафе, достопримечательностях, природе, транспорте, впечатлениях и Google Maps.",
    examplesTitle: "Примеры вопросов",
    examples: [
      "Какие события проходят в августе?",
      "Где находится станция Омэ?",
      "Какие рестораны есть рядом со станцией Омэ?",
      "Есть ли кафе рядом со станцией Савай?",
      "Что можно посетить рядом со станцией Митакэ?",
      "Какие природные места есть рядом со станцией Хатоносу?",
      "Что находится рядом со станцией Окутама?",
      "Как добраться из Синдзюку в Ниси-Тама?",
      "Посоветуй однодневную поездку по местам с этого сайта.",
    ],
    error:
      "Не удалось подключиться к серверу ИИ-гида. Запустите backend и попробуйте снова.",
    verify:
      "Актуальные часы работы, закрытия, задержки поездов и погоду проверяйте по официальным источникам.",
  },
};

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function renderText(text: string) {
  const parts = text.split(/(https?:\/\/[^\s]+)/g);

  return parts.map((part, index) => {
    if (/^https?:\/\//.test(part)) {
      return (
        <a
          key={`${index}-${part}`}
          href={part}
          target="_blank"
          rel="noreferrer"
          className="break-all font-medium text-forest underline decoration-forest/35 underline-offset-2 hover:decoration-forest"
        >
          {part}
        </a>
      );
    }

    return <span key={`${index}-${part}`}>{part}</span>;
  });
}

export function ChatWidget() {
  const { lang } = useLang();
  const text = copy[lang];

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const sessionIdRef = useRef<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    // Start a fresh conversation when the website language changes.
    abortRef.current?.abort();
    abortRef.current = null;
    setLoading(false);
    setInput("");
    setMessages([]);
    sessionIdRef.current = null;
  }, [lang]);

  const visibleMessages = useMemo(() => {
    if (messages.length > 0) return messages;

    return [
      {
        id: `greeting-${lang}`,
        role: "assistant" as const,
        text: text.greeting,
      },
    ];
  }, [lang, messages, text.greeting]);

  async function submit(question?: string) {
    const message = (question ?? input).trim();

    if (!message || loading) return;

    setInput("");
    setLoading(true);

    const userMessage: Message = {
      id: createId(),
      role: "user",
      text: message,
    };

    const assistantId = createId();

    setMessages((current) => [
      ...current,
      userMessage,
      { id: assistantId, role: "assistant", text: "" },
    ]);

    if (!sessionIdRef.current) {
      sessionIdRef.current = createId();
    }

    const controller = new AbortController();
    abortRef.current = controller;

    let receivedAnything = false;

    try {
      await streamChat(
        message,
        lang,
        sessionIdRef.current,
        (chunk) => {
          receivedAnything = true;
          setMessages((current) =>
            current.map((item) =>
              item.id === assistantId
                ? { ...item, text: item.text + chunk }
                : item,
            ),
          );
        },
        controller.signal,
      );

      if (!receivedAnything) {
        setMessages((current) =>
          current.map((item) =>
            item.id === assistantId
              ? { ...item, text: text.error }
              : item,
          ),
        );
      }
    } catch (error) {
      if ((error as Error).name === "AbortError") {
        setMessages((current) =>
          current.filter(
            (item) => !(item.id === assistantId && item.text.length === 0),
          ),
        );
      } else {
        setMessages((current) =>
          current.map((item) =>
            item.id === assistantId
              ? { ...item, text: text.error }
              : item,
          ),
        );
      }
    } finally {
      setLoading(false);
      abortRef.current = null;
    }
  }

  function closeChat() {
    abortRef.current?.abort();
    setLoading(false);
    setMessages((current) =>
      current.filter(
        (item) => !(item.role === "assistant" && item.text.length === 0),
      ),
    );
    setOpen(false);
  }

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 z-[70] inline-flex items-center gap-2 rounded-full bg-forest-deep px-4 py-3 text-sm font-medium tracking-wide text-cream shadow-[0_14px_40px_rgba(22,52,38,0.28)] transition hover:-translate-y-0.5 hover:bg-forest sm:bottom-7 sm:right-7"
          aria-label={text.button}
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          <span>{text.button}</span>
        </button>
      )}

      {open && (
        <section
          className="fixed inset-x-3 bottom-3 z-[80] flex max-h-[min(760px,calc(100dvh-1.5rem))] flex-col overflow-hidden rounded-2xl border border-forest/15 bg-background shadow-[0_24px_80px_rgba(20,45,33,0.25)] sm:inset-x-auto sm:bottom-6 sm:right-6 sm:h-[min(720px,calc(100dvh-3rem))] sm:w-[420px]"
          aria-label={text.title}
        >
          <header className="flex items-center justify-between gap-3 border-b border-forest/10 bg-forest-deep px-4 py-3 text-cream">
            <div className="flex min-w-0 items-center gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cream/10">
                <Bot className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="truncate font-medium">{text.title}</p>
                <p className="truncate text-xs text-cream/65">{text.subtitle}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={closeChat}
              aria-label={text.close}
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-cream/80 transition hover:bg-cream/10 hover:text-cream"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </header>

          <div
            className="flex-1 space-y-3 overflow-y-auto bg-[color:var(--background)] px-4 py-4"
            aria-live="polite"
          >
            {visibleMessages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[88%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 text-sm leading-6 ${
                    message.role === "user"
                      ? "rounded-br-md bg-forest-deep text-cream"
                      : "rounded-bl-md border border-forest/10 bg-forest/[0.055] text-charcoal"
                  }`}
                >
                  {message.text
                    ? renderText(message.text)
                    : (
                      <span className="inline-flex items-center gap-2 text-charcoal/60">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        ...
                      </span>
                    )}
                </div>
              </div>
            ))}

            {messages.length === 0 && (
              <div className="pt-2">
                <p className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-charcoal/45">
                  {text.examplesTitle}
                </p>
                <div className="flex flex-wrap gap-2">
                  {text.examples.map((example) => (
                    <button
                      type="button"
                      key={example}
                      onClick={() => submit(example)}
                      className="rounded-full border border-forest/15 bg-background px-3 py-1.5 text-left text-xs leading-5 text-charcoal/75 transition hover:border-forest/35 hover:bg-forest/[0.05] hover:text-forest-deep"
                    >
                      {example}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-forest/10 bg-background px-3 pb-3 pt-2">
            <p className="mb-2 px-1 text-[11px] leading-4 text-charcoal/45">
              {text.verify}
            </p>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                void submit();
              }}
              className="flex items-end gap-2"
            >
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (
                    event.key === "Enter"
                    && !event.shiftKey
                    && !event.nativeEvent.isComposing
                  ) {
                    event.preventDefault();
                    void submit();
                  }
                }}
                rows={1}
                placeholder={text.placeholder}
                className="max-h-28 min-h-11 flex-1 resize-none rounded-xl border border-forest/15 bg-background px-3 py-2.5 text-sm text-charcoal outline-none transition placeholder:text-charcoal/35 focus:border-forest/40"
              />

              <button
                type="submit"
                disabled={!input.trim() || loading}
                aria-label={text.send}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest-deep text-cream transition hover:bg-forest disabled:cursor-not-allowed disabled:opacity-40"
              >
                {loading
                  ? <Loader2 className="h-4 w-4 animate-spin" />
                  : <Send className="h-4 w-4" />}
              </button>
            </form>
          </div>
        </section>
      )}
    </>
  );
}
