import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const botResponses: { [key: string]: string } = {
  default: "Thank you for your message! Our team will get back to you shortly. You can also reach us at contact@primevista.in",
  hello: "Hello! Welcome to Prime Vista. How can I help you today?",
  hi: "Hi there! Welcome to Prime Vista. How can I assist you?",
  services: "We offer AI & Intelligent Systems, Automation & Workflow Systems, SaaS & Platform Development, and Government & Public Tech solutions. Would you like to know more about any specific service?",
  pricing: "Our pricing varies based on your needs. We have Starter, Growth, and Enterprise plans. Visit our Pricing page or contact us for a custom quote!",
  contact: "You can reach us at contact@primevista.in or visit our Contact page to send a message. We typically respond within 24 hours!",
  career: "We're always looking for talented individuals! Check out our Careers page for open positions in development, AI/ML, automation, and design.",
};

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! Welcome to Prime Vista. How can I help you today?", isBot: true },
  ]);
  const [input, setInput] = useState("");

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(botResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }
    return botResponses.default;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getBotResponse(input),
        isBot: true,
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary flex items-center justify-center glow-primary hover:scale-110 transition-all duration-300 ${
          isOpen ? "hidden" : ""
        }`}
      >
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 h-[500px] glass-card flex flex-col animate-scale-up">
          {/* Header */}
          <div className="p-4 border-b border-border/50 flex items-center justify-between bg-secondary/30 rounded-t-xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Prime Vista Bot</h3>
                <p className="text-xs text-muted-foreground">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-secondary/50 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${message.isBot ? "" : "flex-row-reverse"}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.isBot ? "bg-primary/20" : "bg-accent/20"
                }`}>
                  {message.isBot ? (
                    <Bot className="w-4 h-4 text-primary" />
                  ) : (
                    <User className="w-4 h-4 text-accent" />
                  )}
                </div>
                <div
                  className={`max-w-[75%] p-3 rounded-xl text-sm ${
                    message.isBot
                      ? "bg-secondary/50 rounded-tl-none"
                      : "bg-primary text-primary-foreground rounded-tr-none"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border/50">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="bg-secondary/50 border-border/50 text-sm"
              />
              <Button type="submit" size="icon" className="bg-primary hover:bg-primary/80">
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
