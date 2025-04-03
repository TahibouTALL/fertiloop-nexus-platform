
import { Transaction } from "../components/payments/PaymentForm";
import { toast } from "@/hooks/use-toast";

const LOCAL_STORAGE_KEY = "fertiloop_transactions";
const NOTIFICATIONS_KEY = "fertiloop_notifications";

export interface Notification {
  id: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  read: boolean;
  date: Date;
  category: "container" | "order" | "reminder" | "thanks";
  relatedId?: string;
}

// Récupérer les transactions depuis le localStorage
export const getStoredTransactions = (): Transaction[] => {
  try {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!storedData) return [];
    
    const transactions = JSON.parse(storedData);
    
    // Convertir les chaînes de date en objets Date
    return transactions.map((transaction: any) => ({
      ...transaction,
      date: new Date(transaction.date)
    }));
  } catch (error) {
    console.error("Error retrieving transactions:", error);
    return [];
  }
};

// Enregistrer une nouvelle transaction
export const saveTransaction = (transaction: Transaction): void => {
  try {
    // Récupérer les transactions existantes
    const existingTransactions = getStoredTransactions();
    
    // Ajouter la nouvelle transaction
    const updatedTransactions = [transaction, ...existingTransactions];
    
    // Sauvegarder dans le localStorage
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTransactions));
    
    // Créer une notification pour la transaction
    createNotification({
      message: `Paiement de ${transaction.amount} FCFA effectué via ${transaction.method}`,
      type: "success",
      category: "order",
      relatedId: transaction.reference
    });
  } catch (error) {
    console.error("Error saving transaction:", error);
  }
};

// Effacer toutes les transactions
export const clearTransactions = (): void => {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
};

// Système de notifications
export const getNotifications = (): Notification[] => {
  try {
    const notificationsData = localStorage.getItem(NOTIFICATIONS_KEY);
    if (!notificationsData) return [];
    
    const notifications = JSON.parse(notificationsData);
    
    // Convertir les chaînes de date en objets Date
    return notifications.map((notification: any) => ({
      ...notification,
      date: new Date(notification.date)
    }));
  } catch (error) {
    console.error("Error retrieving notifications:", error);
    return [];
  }
};

export const createNotification = (notificationData: Omit<Notification, 'id' | 'date' | 'read'>): Notification => {
  try {
    const notifications = getNotifications();
    
    const newNotification: Notification = {
      id: `notif-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      date: new Date(),
      read: false,
      ...notificationData
    };
    
    const updatedNotifications = [newNotification, ...notifications];
    localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(updatedNotifications));
    
    // Afficher la notification comme toast
    toast({
      title: getNotificationTitle(newNotification.category),
      description: newNotification.message,
      variant: newNotification.type === "error" ? "destructive" : "default",
    });
    
    return newNotification;
  } catch (error) {
    console.error("Error creating notification:", error);
    throw error;
  }
};

export const markNotificationAsRead = (id: string): void => {
  try {
    const notifications = getNotifications();
    const updatedNotifications = notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    );
    
    localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(updatedNotifications));
  } catch (error) {
    console.error("Error marking notification as read:", error);
  }
};

export const markAllNotificationsAsRead = (): void => {
  try {
    const notifications = getNotifications();
    const updatedNotifications = notifications.map(notification => ({ ...notification, read: true }));
    
    localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(updatedNotifications));
  } catch (error) {
    console.error("Error marking all notifications as read:", error);
  }
};

export const clearNotifications = (): void => {
  localStorage.removeItem(NOTIFICATIONS_KEY);
};

export const getUnreadNotificationsCount = (): number => {
  const notifications = getNotifications();
  return notifications.filter(notification => !notification.read).length;
};

const getNotificationTitle = (category: Notification["category"]): string => {
  switch (category) {
    case "container":
      return "Signalement de contenant";
    case "order":
      return "Commande";
    case "reminder":
      return "Rappel";
    case "thanks":
      return "Remerciement";
    default:
      return "Notification";
  }
};

// Fonctions de démonstration pour simuler des notifications
export const simulateContainerNotification = (containerType: "bocal" | "bonbonne", status: string): void => {
  const message = containerType === "bocal" 
    ? `Votre bocal a été signalé comme ${status}`
    : `Votre bonbonne de biogaz est ${status}`;
  
  createNotification({
    message,
    type: "info",
    category: "container"
  });
};

export const simulateOrderStatusChange = (orderNumber: string, status: "validée" | "en cours" | "livrée"): void => {
  const message = `Votre commande #${orderNumber} est maintenant ${status}`;
  const type = status === "livrée" ? "success" : "info";
  
  createNotification({
    message,
    type,
    category: "order",
    relatedId: orderNumber
  });
  
  if (status === "livrée") {
    // Envoyer un remerciement automatique après la livraison
    setTimeout(() => {
      createNotification({
        message: `Merci pour votre confiance ! N'hésitez pas à évaluer la livraison de votre commande #${orderNumber}.`,
        type: "success",
        category: "thanks",
        relatedId: orderNumber
      });
    }, 3000); // Simuler un délai de 3 secondes
  }
};

export const scheduleReminderNotification = (message: string, delayInSeconds: number): void => {
  setTimeout(() => {
    createNotification({
      message,
      type: "warning",
      category: "reminder"
    });
  }, delayInSeconds * 1000);
};

