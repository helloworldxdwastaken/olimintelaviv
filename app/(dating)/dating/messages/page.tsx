'use client';

import { useState } from 'react';
import Link from 'next/link';
import GlassCard from '@/components/ui/GlassCard';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';
import { getConversations, getMessagesByConversation } from '@/data/messages';

export default function MessagesPage() {
  const conversations = getConversations();
  const [selectedConversationId, setSelectedConversationId] = useState(conversations[0]?.id);
  const [newMessage, setNewMessage] = useState('');

  const selectedConversation = conversations.find(c => c.id === selectedConversationId);
  const messages = selectedConversationId ? getMessagesByConversation(selectedConversationId) : [];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    console.log('Sending message:', newMessage);
    // In a real app, this would send the message to the backend
    setNewMessage('');
  };

  return (
    <div>
      <SectionHeader
        title="Messages"
        subtitle="Stay connected with your matches"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" style={{ height: 'calc(100vh - 350px)' }}>
        {/* Conversations List */}
        <div className="lg:col-span-1">
          <GlassCard className="h-full overflow-y-auto">
            <h3 className="text-lg font-bold text-navy mb-4">Conversations</h3>
            <div className="space-y-2">
              {conversations.map((conversation) => (
                <button
                  key={conversation.id}
                  onClick={() => setSelectedConversationId(conversation.id)}
                  className={`w-full text-left p-4 rounded-2xl transition-all ${
                    selectedConversationId === conversation.id
                      ? 'bg-primary/20 border border-primary/30'
                      : 'glass hover:bg-white/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <img
                        src={conversation.participantPhoto}
                        alt={conversation.participantName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-navy truncate">
                          {conversation.participantName}
                        </span>
                        {conversation.unreadCount > 0 && (
                          <Badge variant="primary">{conversation.unreadCount}</Badge>
                        )}
                      </div>
                      <p className="text-sm text-slate truncate">
                        {conversation.lastMessage}
                      </p>
                      <p className="text-xs text-muted mt-1">
                        {new Date(conversation.lastMessageTime).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Chat Window */}
        <div className="lg:col-span-2">
          {selectedConversation ? (
            <GlassCard className="h-full flex flex-col">
              {/* Chat Header */}
              <div className="pb-4 border-b border-white/20 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={selectedConversation.participantPhoto}
                        alt={selectedConversation.participantName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy">
                        {selectedConversation.participantName}
                      </h3>
                      <Link
                        href={`/dating/profile/${selectedConversation.participantId}`}
                        className="text-sm text-primary hover:underline"
                      >
                        View Profile
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.senderId === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] p-3 rounded-2xl ${
                        message.senderId === 'me'
                          ? 'bg-primary text-white'
                          : 'glass text-navy'
                      }`}
                    >
                      <p>{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.senderId === 'me' ? 'text-white/70' : 'text-muted'
                      }`}>
                        {new Date(message.timestamp).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-3 rounded-full glass border-2 border-white/30 focus:outline-none focus:border-primary/50"
                />
                <Button type="submit" variant="primary" className="px-6">
                  Send
                </Button>
              </form>

              <p className="text-xs text-muted text-center mt-3">
                This is a mock interface. Messages are not actually sent.
              </p>
            </GlassCard>
          ) : (
            <GlassCard className="h-full flex items-center justify-center">
              <p className="text-slate">Select a conversation to start messaging</p>
            </GlassCard>
          )}
        </div>
      </div>
    </div>
  );
}


