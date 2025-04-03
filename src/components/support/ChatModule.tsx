
import React, { useState, useRef, useEffect } from "react";
import { Send, ThumbsUp, ThumbsDown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

// Types pour les messages du chat
type MessageType = "user" | "agent" | "system";
type UrgencyLevel = "low" | "medium" | "high";

interface ChatMessage {
  id: string;
  content: string;
  type: MessageType;
  timestamp: Date;
  rating?: number;
  urgency?: UrgencyLevel;
}

const getUrgencyFromContent = (content: string): UrgencyLevel => {
  const urgentWords = ["urgent", "immédiatement", "problème", "grave", "rapidement"];
  const mediumWords = ["bientôt", "attends", "question", "besoin"];
  
  const lowerContent = content.toLowerCase();
  
  if (urgentWords.some(word => lowerContent.includes(word))) {
    return "high";
  } else if (mediumWords.some(word => lowerContent.includes(word))) {
    return "medium";
  }
  
  return "low";
};

const ChatModule = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      content: "Bienvenue dans le chat de support Fertiloop! Comment puis-je vous aider aujourd'hui?",
      type: "agent",
      timestamp: new Date(),
      urgency: "low"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll vers le bas quand de nouveaux messages sont ajoutés
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  // Fonction pour stocker les messages dans le localStorage
  const storeMessages = (updatedMessages: ChatMessage[]) => {
    localStorage.setItem('fertiloop-chat-messages', JSON.stringify(updatedMessages));
  };
  
  // Charger les messages du localStorage au démarrage
  useEffect(() => {
    const storedMessages = localStorage.getItem('fertiloop-chat-messages');
    if (storedMessages) {
      try {
        const parsedMessages = JSON.parse(storedMessages);
        // Convertir les timestamps de string à Date
        const formattedMessages = parsedMessages.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));
        setMessages(formattedMessages);
      } catch (e) {
        console.error("Erreur lors du chargement des messages:", e);
      }
    }
  }, []);
  
  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;
    
    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      content: inputValue,
      type: "user",
      timestamp: new Date(),
      urgency: getUrgencyFromContent(inputValue)
    };
    
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    storeMessages(updatedMessages);
    setInputValue("");
    setIsProcessing(true);
    
    // Simuler une réponse automatique avec délai
    setTimeout(() => {
      const botResponses = [
        "Je comprends votre demande. Notre équipe va examiner cela rapidement.",
        "Merci pour votre message. Un agent va vous répondre dans les plus brefs délais.",
        "Votre demande a été enregistrée. Nous traitons généralement les requêtes sous 24h.",
        "Nous avons bien noté votre question. Un spécialiste Fertiloop vous contactera bientôt."
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const agentMessage: ChatMessage = {
        id: `agent-${Date.now()}`,
        content: randomResponse,
        type: "agent",
        timestamp: new Date(),
        urgency: "low"
      };
      
      const newMessages = [...updatedMessages, agentMessage];
      setMessages(newMessages);
      storeMessages(newMessages);
      setIsProcessing(false);
    }, 1500);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const handleRateMessage = (messageId: string, rating: number) => {
    const updatedMessages = messages.map(msg => 
      msg.id === messageId ? { ...msg, rating } : msg
    );
    
    setMessages(updatedMessages);
    storeMessages(updatedMessages);
    toast.success(`Merci pour votre évaluation de ${rating} étoiles!`);
  };
  
  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString('fr-FR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };
  
  const getUrgencyClass = (urgency: UrgencyLevel) => {
    switch(urgency) {
      case "high": return "border-l-red-500";
      case "medium": return "border-l-amber-500";
      case "low": return "border-l-fertiloop-green";
      default: return "border-l-gray-300";
    }
  };
  
  return (
    <div className="flex flex-col h-[500px] border rounded-md bg-white shadow-sm">
      <div className="p-3 border-b bg-fertiloop-green/10 flex items-center">
        <div className="h-8 w-8 rounded-full bg-fertiloop-green/20 flex items-center justify-center mr-3">
          <Send className="h-4 w-4 text-fertiloop-green" />
        </div>
        <h3 className="font-medium">Chat avec le support</h3>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((message) => (
          <div 
            key={message.id}
            className={cn(
              "p-3 rounded-lg max-w-[80%] border-l-4",
              getUrgencyClass(message.urgency || "low"),
              message.type === "user" 
                ? "ml-auto bg-fertiloop-green/10 text-gray-800" 
                : "mr-auto bg-gray-100"
            )}
          >
            <div className="text-sm">{message.content}</div>
            <div className="flex justify-between items-center mt-1">
              <span className="text-xs text-gray-500">
                {formatTime(message.timestamp)}
              </span>
              
              {message.type === "agent" && (
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className="p-0.5 focus:outline-none"
                      onClick={() => handleRateMessage(message.id, star)}
                    >
                      <Star
                        className={`h-3 w-3 transition-colors ${
                          (message.rating || 0) >= star
                            ? "text-fertiloop-yellow fill-fertiloop-yellow"
                            : "text-gray-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="p-3 border-t">
        <div className="flex gap-2">
          <Textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Tapez votre message ici..."
            className="flex-1 min-h-[60px] resize-none"
          />
          <Button
            onClick={handleSendMessage}
            disabled={isProcessing || inputValue.trim() === ""}
            className="self-end bg-fertiloop-green hover:bg-fertiloop-green/90"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <ThumbsUp className="h-3 w-3" />
            <span>Satisfaction: 94%</span>
          </div>
          <div className="flex items-center gap-1">
            <ThumbsDown className="h-3 w-3" />
            <span>Temps de réponse moyen: 3h</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatModule;
