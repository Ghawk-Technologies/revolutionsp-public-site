import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your RSP AI assistant. How can I help you today? Ask me about our training programs, pricing, or book a free evaluation!",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing')) {
      return "Our training sessions start at $75, pitching sessions at $85, and combo programs at $140. We also offer package discounts! Would you like to book a free evaluation to discuss a personalized plan?";
    }

    if (lowerMessage.includes('program') || lowerMessage.includes('training')) {
      return "We offer personalized training programs focused on strength, speed, movement quality, and mental development. Each program is tailored to your sport, position, and goals. Our approach is 'Person First, Athlete Second.'";
    }

    if (lowerMessage.includes('book') || lowerMessage.includes('schedule') || lowerMessage.includes('appointment')) {
      return "Great! You can book your free evaluation by calling us at (555) 123-4567 or emailing info@revolutionsp.com. We'll assess your current abilities and create a custom training plan just for you!";
    }

    if (lowerMessage.includes('facility') || lowerMessage.includes('location')) {
      return "Our world-class 4,000+ sq ft facility features professional turf, a full weight room, and pitching mounds. We're located at 123 Performance Drive, Athletic City. Want to schedule a tour?";
    }

    if (lowerMessage.includes('hour') || lowerMessage.includes('when') || lowerMessage.includes('time')) {
      return "We're open Monday-Friday 6AM-8PM and Saturday 8AM-2PM. Contact us to find a time that works best for your schedule!";
    }

    if (lowerMessage.includes('hi') || lowerMessage.includes('hello') || lowerMessage.includes('hey')) {
      return "Hello! Welcome to Revolution Sports Performance. I'm here to help you find the perfect training program. What would you like to know?";
    }

    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return "You're welcome! Feel free to ask me anything else, or reach out to our team at (555) 123-4567. Let's build better athletes together!";
    }

    return "That's a great question! For detailed information, I recommend booking a free evaluation or calling us at (555) 123-4567. Our team can provide personalized answers based on your specific needs and goals.";
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue('');

    // Simulate bot typing and response
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 bg-[#0066FF] text-white p-4 rounded-full shadow-lg hover:bg-[#0052CC] transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        animate={isOpen ? {} : { y: [0, -10, 0] }}
        transition={isOpen ? {} : { duration: 2, repeat: Infinity }}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[black] to-[#1a2942] p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-[#0066FF] rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <div className="font-bold text-white">RSP AI Assistant</div>
                <div className="text-xs text-gray-300 flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  Online
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-[#0066FF] text-white rounded-br-none'
                        : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-white/70' : 'text-gray-400'
                      }`}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent"
                />
                <motion.button
                  onClick={handleSend}
                  className="bg-[#0066FF] text-white p-2 rounded-lg hover:bg-[#0052CC] transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center">
                Powered by AI • Available 24/7
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
