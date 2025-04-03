
import React from "react";
import { type Notification } from "@/services/localTransactions";
import { Button } from "@/components/ui/button";
import { Check, Bell, Package, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface NotificationListProps {
  notifications: Notification[];
  onMarkAsRead: (id: string) => void;
  onMarkAllAsRead: () => void;
}

const NotificationList: React.FC<NotificationListProps> = ({
  notifications,
  onMarkAsRead,
  onMarkAllAsRead,
}) => {
  const formatDate = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInDays > 0) {
      return `il y a ${diffInDays} jour${diffInDays > 1 ? 's' : ''}`;
    } else if (diffInHours > 0) {
      return `il y a ${diffInHours} heure${diffInHours > 1 ? 's' : ''}`;
    } else if (diffInMinutes > 0) {
      return `il y a ${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''}`;
    } else {
      return "à l'instant";
    }
  };

  const getNotificationIcon = (category: Notification["category"]) => {
    switch (category) {
      case "container":
        return <Package className="h-5 w-5 text-fertiloop-yellow-dark" />;
      case "order":
        return <Package className="h-5 w-5 text-fertiloop-blue" />;
      case "reminder":
        return <Clock className="h-5 w-5 text-amber-500" />;
      case "thanks":
        return <Check className="h-5 w-5 text-green-500" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="notification-list">
      <div className="flex items-center justify-between border-b p-3">
        <div className="font-medium">Notifications</div>
        {notifications.some(n => !n.read) && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onMarkAllAsRead}
            className="h-8 text-xs"
          >
            Tout marquer comme lu
          </Button>
        )}
      </div>
      
      {notifications.length === 0 ? (
        <div className="p-6 text-center text-gray-500">
          <Bell className="h-8 w-8 mx-auto mb-2 text-gray-400" />
          <p>Aucune notification</p>
        </div>
      ) : (
        <div className="divide-y">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={cn(
                "p-3 hover:bg-gray-50 transition-colors cursor-pointer relative",
                !notification.read && "bg-blue-50/50"
              )}
              onClick={() => !notification.read && onMarkAsRead(notification.id)}
            >
              <div className="flex">
                <div className="mr-3 mt-1">
                  {getNotificationIcon(notification.category)}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-medium text-sm text-gray-900">
                      {notification.category === "container" && "Contenant"}
                      {notification.category === "order" && "Commande"}
                      {notification.category === "reminder" && "Rappel"}
                      {notification.category === "thanks" && "Remerciement"}
                    </span>
                    <span className="text-xs text-gray-500">
                      {formatDate(notification.date)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">{notification.message}</p>
                  
                  {!notification.read && (
                    <div className="absolute top-3 right-3 h-2 w-2 bg-fertiloop-green rounded-full"></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotificationList;
