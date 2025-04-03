
import { Transaction } from "../components/payments/PaymentForm";

const LOCAL_STORAGE_KEY = "fertiloop_transactions";

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
  } catch (error) {
    console.error("Error saving transaction:", error);
  }
};

// Effacer toutes les transactions
export const clearTransactions = (): void => {
  localStorage.removeItem(LOCAL_STORAGE_KEY);
};
