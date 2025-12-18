export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  senderName: string;
  text: string;
  timestamp: string;
  read: boolean;
}

export interface Conversation {
  id: string;
  participantId: string;
  participantName: string;
  participantPhoto: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
}

export const conversations: Conversation[] = [
  {
    id: 'c1',
    participantId: '2',
    participantName: 'David',
    participantPhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800',
    lastMessage: 'That sounds great! See you there',
    lastMessageTime: '2024-02-18T14:30:00Z',
    unreadCount: 0,
  },
  {
    id: 'c2',
    participantId: '3',
    participantName: 'Maya',
    participantPhoto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800',
    lastMessage: 'Have you been to the new gallery in Jaffa?',
    lastMessageTime: '2024-02-18T12:15:00Z',
    unreadCount: 2,
  },
  {
    id: 'c3',
    participantId: '4',
    participantName: 'Alex',
    participantPhoto: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800',
    lastMessage: 'Thanks for the startup event recommendation!',
    lastMessageTime: '2024-02-17T18:45:00Z',
    unreadCount: 0,
  },
];

export const messages: Record<string, Message[]> = {
  c1: [
    {
      id: 'm1',
      conversationId: 'c1',
      senderId: '2',
      senderName: 'David',
      text: 'Hey! I saw you\'re also into hiking. Have you checked out the trails in the north?',
      timestamp: '2024-02-18T10:00:00Z',
      read: true,
    },
    {
      id: 'm2',
      conversationId: 'c1',
      senderId: 'me',
      senderName: 'Me',
      text: 'Not yet, but I\'ve been wanting to! Any specific recommendations?',
      timestamp: '2024-02-18T10:15:00Z',
      read: true,
    },
    {
      id: 'm3',
      conversationId: 'c1',
      senderId: '2',
      senderName: 'David',
      text: 'Definitely check out Nahal Amud. The waterfall is amazing this time of year. Want to go together sometime?',
      timestamp: '2024-02-18T10:20:00Z',
      read: true,
    },
    {
      id: 'm4',
      conversationId: 'c1',
      senderId: 'me',
      senderName: 'Me',
      text: 'That sounds great! See you there',
      timestamp: '2024-02-18T14:30:00Z',
      read: true,
    },
  ],
  c2: [
    {
      id: 'm5',
      conversationId: 'c2',
      senderId: '3',
      senderName: 'Maya',
      text: 'Hi! I noticed you\'re into photography too. Have you been to the new gallery in Jaffa?',
      timestamp: '2024-02-18T12:00:00Z',
      read: false,
    },
    {
      id: 'm6',
      conversationId: 'c2',
      senderId: '3',
      senderName: 'Maya',
      text: 'They have an amazing exhibit on Israeli street art right now',
      timestamp: '2024-02-18T12:15:00Z',
      read: false,
    },
  ],
  c3: [
    {
      id: 'm7',
      conversationId: 'c3',
      senderId: 'me',
      senderName: 'Me',
      text: 'Hey Alex! I saw you work in the startup scene. Any networking events you\'d recommend?',
      timestamp: '2024-02-17T16:00:00Z',
      read: true,
    },
    {
      id: 'm8',
      conversationId: 'c3',
      senderId: '4',
      senderName: 'Alex',
      text: 'Thanks for the startup event recommendation!',
      timestamp: '2024-02-17T18:45:00Z',
      read: true,
    },
  ],
};

export function getConversations(): Conversation[] {
  return conversations;
}

export function getMessagesByConversation(conversationId: string): Message[] {
  return messages[conversationId] || [];
}


