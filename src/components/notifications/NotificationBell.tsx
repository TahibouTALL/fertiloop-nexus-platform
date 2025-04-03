
import React, { useState, useEffect } from "react";
import { Bell, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { 
  getNotifications, 
  getUnreadNotificationsCount, 
  markNotificationAsRead, 
  markAllNotificationsAsRead,
  syncChatMessagesToNotifications,
  type Notification
} from "@/services/localTransactions";
import { Badge } from "@/components/ui/badge";
import NotificationList from "./NotificationList";
import { useNavigate } from "react-router-dom";

const NotificationBell = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [showChatReminder, setShowChatReminder] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Chargement initial des notifications
    loadNotifications();
    
    // Rafraîchir les notifications toutes les 30 secondes
    const interval = setInterval(loadNotifications, 30000);
    
    // Afficher l'indicateur de chat après 60 secondes de présence sur le site
    const chatTimeout = setTimeout(() => setShowChatReminder(true), 60000);
    
    // Synchroniser les messages de chat avec les notifications
    syncChatMessagesToNotifications();
    const syncInterval = setInterval(syncChatMessagesToNotifications, 60000);
    
    return () => {
      clearInterval(interval);
      clearTimeout(chatTimeout);
      clearInterval(syncInterval);
    };
  }, []);
  
  const loadNotifications = () => {
    const notifs = getNotifications();
    setNotifications(notifs);
    setUnreadCount(getUnreadNotificationsCount());
  };
  
  const handleMarkAsRead = (id: string) => {
    markNotificationAsRead(id);
    loadNotifications();
  };
  
  const handleMarkAllAsRead = () => {
    markAllNotificationsAsRead();
    loadNotifications();
  };
  
  const handleChatReminderClick = () => {
    setShowChatReminder(false);
    navigate("/support?tab=chat");
  };
  
  const hasUnreadChatNotifications = notifications.some(
    n => n.category === "chat" && !n.read
  );
  
  return (
    <div className="relative">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            {unreadCount > 0 && (
              <Badge 
                className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-fertiloop-green text-white" 
                variant="default"
              >
                {unreadCount}
              </Badge>
            )}
            {hasUnreadChatNotifications && (
              <div className="absolute bottom-0 right-0 h-2 w-2 bg-blue-500 rounded-full"></div>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 max-h-96 overflow-y-auto p-0">
          <NotificationList 
            notifications={notifications} 
            onMarkAsRead={handleMarkAsRead}
            onMarkAllAsRead={handleMarkAllAsRead}
          />
        </PopoverContent>
      </Popover>
      
      {showChatReminder && (
        <div className="absolute top-0 -right-4 w-4 h-4">
          <div className="absolute -top-1 -right-1 animate-bounce">
            <button 
              onClick={handleChatReminderClick}
              className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center text-white"
              title="Besoin d'aide? Discutez avec nous!"
            >
              <MessageSquare className="h-3 w-3" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
