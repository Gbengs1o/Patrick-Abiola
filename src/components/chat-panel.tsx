'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { MessageSquare, Send, X, Bot, User } from 'lucide-react';
import { chat, ChatInput } from '@/ai/flows/chat-flow';
import ReactMarkdown from 'react-markdown';

type Message = {
  role: 'user' | 'model';
  content: string;
};

export function ChatPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Make the button visible after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Scroll to the bottom when new messages are added
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
        const chatHistory = messages.map(msg => ({
            role: msg.role,
            content: [{text: msg.content}]
        }))

        const aiResponse = await chat({
            history: chatHistory,
            message: input,
        });

      const modelMessage: Message = { role: 'model', content: aiResponse };
      setMessages((prev) => [...prev, modelMessage]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      const errorMessage: Message = {
        role: 'model',
        content: 'Sorry, I encountered an error. Please try again.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="rounded-full h-16 w-16 shadow-lg flex items-center justify-center"
        >
          <MessageSquare className="h-8 w-8" />
          <span className="sr-only">Open AI Chat</span>
        </Button>
      </div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent className="w-full sm:w-[540px] flex flex-col p-0">
            <SheetHeader className="p-4 border-b">
                <SheetTitle className="flex items-center gap-2">
                    <Bot /> Ask AI
                </SheetTitle>
                 <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="absolute right-3 top-3"
                >
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close</span>
                </Button>
            </SheetHeader>

          <div ref={scrollAreaRef} className="flex-grow overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex items-start gap-3 ${message.role === 'user' ? 'justify-end' : ''}`}>
                 {message.role === 'model' && (
                    <div className="bg-primary rounded-full p-2 text-primary-foreground">
                        <Bot size={20} />
                    </div>
                )}
                <div className={`rounded-lg p-3 max-w-sm ${
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-secondary-foreground'
                  }`}
                >
                  <ReactMarkdown className="prose dark:prose-invert prose-sm">
                    {message.content}
                  </ReactMarkdown>
                </div>
                 {message.role === 'user' && (
                     <div className="bg-secondary rounded-full p-2 text-secondary-foreground">
                        <User size={20} />
                    </div>
                )}
              </div>
            ))}
             {isLoading && (
                <div className="flex items-start gap-3">
                    <div className="bg-primary rounded-full p-2 text-primary-foreground">
                        <Bot size={20} />
                    </div>
                    <div className="rounded-lg p-3 max-w-sm bg-secondary text-secondary-foreground">
                       <div className="flex items-center gap-2">
                           <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-0"></div>
                           <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-150"></div>
                           <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-300"></div>
                       </div>
                    </div>
                </div>
             )}
          </div>

          <div className="p-4 border-t">
            <form onSubmit={handleSendMessage} className="flex items-center gap-2">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something about Patrick..."
                className="flex-grow resize-none"
                rows={1}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    handleSendMessage(e);
                  }
                }}
              />
              <Button type="submit" size="icon" disabled={isLoading}>
                <Send className="h-5 w-5" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
