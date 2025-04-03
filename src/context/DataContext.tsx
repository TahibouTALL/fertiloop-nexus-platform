
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  userApi, transactionApi, collectionApi, biodigesterApi, 
  productApi, orderApi, ratingApi 
} from '../services/api';
import {
  User, Transaction, Collection, Biodigester, 
  Product, Inventory, Order, Rating
} from '../models/types';

interface DataContextType {
  // Users
  users: User[];
  loadingUsers: boolean;
  errorUsers: Error | null;
  refreshUsers: () => Promise<void>;
  
  // Transactions
  transactions: Transaction[];
  loadingTransactions: boolean;
  errorTransactions: Error | null;
  refreshTransactions: () => Promise<void>;
  getUserTransactions: (userId: string) => Promise<Transaction[]>;
  createTransaction: (data: Omit<Transaction, 'id' | 'createdAt' | 'updatedAt'>) => Promise<Transaction>;
  updateTransactionStatus: (id: string, status: Transaction['status']) => Promise<void>;
  
  // Biodigesters
  biodigesters: Biodigester[];
  loadingBiodigesters: boolean;
  errorBiodigesters: Error | null;
  refreshBiodigesters: () => Promise<void>;
  
  // Products & Inventory
  products: Product[];
  inventory: Inventory[];
  loadingProducts: boolean;
  errorProducts: Error | null;
  refreshProducts: () => Promise<void>;
  refreshInventory: () => Promise<void>;
  
  // Orders
  orders: Order[];
  loadingOrders: boolean;
  errorOrders: Error | null;
  refreshOrders: () => Promise<void>;
  getUserOrders: (userId: string) => Promise<Order[]>;
  createOrder: (data: Omit<Order, 'id'>) => Promise<Order>;
  
  // Ratings
  ratings: Rating[];
  loadingRatings: boolean;
  errorRatings: Error | null;
  createRating: (data: Omit<Rating, 'id' | 'createdAt'>) => Promise<Rating>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Users state
  const [users, setUsers] = useState<User[]>([]);
  const [loadingUsers, setLoadingUsers] = useState<boolean>(true);
  const [errorUsers, setErrorUsers] = useState<Error | null>(null);
  
  // Transactions state
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loadingTransactions, setLoadingTransactions] = useState<boolean>(true);
  const [errorTransactions, setErrorTransactions] = useState<Error | null>(null);
  
  // Biodigesters state
  const [biodigesters, setBiodigesters] = useState<Biodigester[]>([]);
  const [loadingBiodigesters, setLoadingBiodigesters] = useState<boolean>(true);
  const [errorBiodigesters, setErrorBiodigesters] = useState<Error | null>(null);
  
  // Products & Inventory state
  const [products, setProducts] = useState<Product[]>([]);
  const [inventory, setInventory] = useState<Inventory[]>([]);
  const [loadingProducts, setLoadingProducts] = useState<boolean>(true);
  const [errorProducts, setErrorProducts] = useState<Error | null>(null);
  
  // Orders state
  const [orders, setOrders] = useState<Order[]>([]);
  const [loadingOrders, setLoadingOrders] = useState<boolean>(true);
  const [errorOrders, setErrorOrders] = useState<Error | null>(null);
  
  // Ratings state
  const [ratings, setRatings] = useState<Rating[]>([]);
  const [loadingRatings, setLoadingRatings] = useState<boolean>(true);
  const [errorRatings, setErrorRatings] = useState<Error | null>(null);
  
  // Load initial data
  useEffect(() => {
    refreshUsers();
    refreshTransactions();
    refreshBiodigesters();
    refreshProducts();
    refreshInventory();
    refreshOrders();
    refreshRatings();
  }, []);
  
  // Users methods
  const refreshUsers = async () => {
    setLoadingUsers(true);
    setErrorUsers(null);
    try {
      const data = await userApi.getUsers();
      setUsers(data);
    } catch (error) {
      setErrorUsers(error as Error);
      console.error('Error fetching users:', error);
    } finally {
      setLoadingUsers(false);
    }
  };
  
  // Transactions methods
  const refreshTransactions = async () => {
    setLoadingTransactions(true);
    setErrorTransactions(null);
    try {
      const data = await transactionApi.getTransactions();
      setTransactions(data);
    } catch (error) {
      setErrorTransactions(error as Error);
      console.error('Error fetching transactions:', error);
    } finally {
      setLoadingTransactions(false);
    }
  };
  
  const getUserTransactions = async (userId: string): Promise<Transaction[]> => {
    try {
      return await transactionApi.getTransactionsByUserId(userId);
    } catch (error) {
      console.error('Error fetching user transactions:', error);
      return [];
    }
  };
  
  const createTransaction = async (data: Omit<Transaction, 'id' | 'createdAt' | 'updatedAt'>): Promise<Transaction> => {
    const newTransaction = await transactionApi.createTransaction(data);
    await refreshTransactions();
    return newTransaction;
  };
  
  const updateTransactionStatus = async (id: string, status: Transaction['status']): Promise<void> => {
    await transactionApi.updateTransactionStatus(id, status);
    await refreshTransactions();
  };
  
  // Biodigesters methods
  const refreshBiodigesters = async () => {
    setLoadingBiodigesters(true);
    setErrorBiodigesters(null);
    try {
      const data = await biodigesterApi.getBiodigesters();
      setBiodigesters(data);
    } catch (error) {
      setErrorBiodigesters(error as Error);
      console.error('Error fetching biodigesters:', error);
    } finally {
      setLoadingBiodigesters(false);
    }
  };
  
  // Products & Inventory methods
  const refreshProducts = async () => {
    setLoadingProducts(true);
    setErrorProducts(null);
    try {
      const data = await productApi.getProducts();
      setProducts(data);
    } catch (error) {
      setErrorProducts(error as Error);
      console.error('Error fetching products:', error);
    } finally {
      setLoadingProducts(false);
    }
  };
  
  const refreshInventory = async () => {
    try {
      const data = await productApi.getInventory();
      setInventory(data);
    } catch (error) {
      console.error('Error fetching inventory:', error);
    }
  };
  
  // Orders methods
  const refreshOrders = async () => {
    setLoadingOrders(true);
    setErrorOrders(null);
    try {
      const data = await orderApi.getOrders();
      setOrders(data);
    } catch (error) {
      setErrorOrders(error as Error);
      console.error('Error fetching orders:', error);
    } finally {
      setLoadingOrders(false);
    }
  };
  
  const getUserOrders = async (userId: string): Promise<Order[]> => {
    try {
      return await orderApi.getOrdersByUserId(userId);
    } catch (error) {
      console.error('Error fetching user orders:', error);
      return [];
    }
  };
  
  const createOrder = async (data: Omit<Order, 'id'>): Promise<Order> => {
    const newOrder = await orderApi.createOrder(data);
    await refreshOrders();
    return newOrder;
  };
  
  // Ratings methods
  const refreshRatings = async () => {
    setLoadingRatings(true);
    setErrorRatings(null);
    try {
      const data = await ratingApi.getRatings();
      setRatings(data);
    } catch (error) {
      setErrorRatings(error as Error);
      console.error('Error fetching ratings:', error);
    } finally {
      setLoadingRatings(false);
    }
  };
  
  const createRating = async (data: Omit<Rating, 'id' | 'createdAt'>): Promise<Rating> => {
    const newRating = await ratingApi.createRating(data);
    await refreshRatings();
    return newRating;
  };
  
  const contextValue: DataContextType = {
    users,
    loadingUsers,
    errorUsers,
    refreshUsers,
    
    transactions,
    loadingTransactions,
    errorTransactions,
    refreshTransactions,
    getUserTransactions,
    createTransaction,
    updateTransactionStatus,
    
    biodigesters,
    loadingBiodigesters,
    errorBiodigesters,
    refreshBiodigesters,
    
    products,
    inventory,
    loadingProducts,
    errorProducts,
    refreshProducts,
    refreshInventory,
    
    orders,
    loadingOrders,
    errorOrders,
    refreshOrders,
    getUserOrders,
    createOrder,
    
    ratings,
    loadingRatings,
    errorRatings,
    createRating
  };
  
  return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
