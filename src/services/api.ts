
import { 
  User, Transaction, Collection, Biodigester, Product, 
  Inventory, Order, Rating
} from '../models/types';
import { 
  mockUsers, mockTransactions, mockCollections, mockBiodigesters,
  mockProducts, mockInventory, mockOrders, mockRatings
} from '../data/mockData';
import { v4 as uuidv4 } from 'uuid';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// User API
export const userApi = {
  getUsers: async (): Promise<User[]> => {
    await delay(300);
    return [...mockUsers];
  },
  
  getUserById: async (id: string): Promise<User | undefined> => {
    await delay(200);
    return mockUsers.find(user => user.id === id);
  },
  
  getUserByPhone: async (phone: string): Promise<User | undefined> => {
    await delay(200);
    return mockUsers.find(user => user.phone === phone);
  },
  
  createUser: async (userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User> => {
    await delay(400);
    const newUser: User = {
      id: uuidv4(),
      ...userData,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    mockUsers.push(newUser);
    return newUser;
  },
  
  updateUser: async (id: string, userData: Partial<User>): Promise<User | undefined> => {
    await delay(300);
    const index = mockUsers.findIndex(user => user.id === id);
    if (index === -1) return undefined;
    
    mockUsers[index] = {
      ...mockUsers[index],
      ...userData,
      updatedAt: new Date()
    };
    
    return mockUsers[index];
  }
};

// Transaction API
export const transactionApi = {
  getTransactions: async (): Promise<Transaction[]> => {
    await delay(300);
    return [...mockTransactions];
  },
  
  getTransactionsByUserId: async (userId: string): Promise<Transaction[]> => {
    await delay(300);
    return mockTransactions.filter(transaction => 
      transaction.userId === userId || transaction.createdBy === userId
    );
  },
  
  getTransactionById: async (id: string): Promise<Transaction | undefined> => {
    await delay(200);
    return mockTransactions.find(transaction => transaction.id === id);
  },
  
  createTransaction: async (data: Omit<Transaction, 'id' | 'createdAt' | 'updatedAt'>): Promise<Transaction> => {
    await delay(400);
    const newTransaction: Transaction = {
      id: uuidv4(),
      ...data,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    mockTransactions.push(newTransaction);
    return newTransaction;
  },
  
  updateTransactionStatus: async (id: string, status: Transaction['status']): Promise<Transaction | undefined> => {
    await delay(300);
    const index = mockTransactions.findIndex(t => t.id === id);
    if (index === -1) return undefined;
    
    mockTransactions[index] = {
      ...mockTransactions[index],
      status,
      updatedAt: new Date()
    };
    
    return mockTransactions[index];
  }
};

// Collection API
export const collectionApi = {
  getCollections: async (): Promise<Collection[]> => {
    await delay(300);
    return [...mockCollections];
  },
  
  getCollectionById: async (id: string): Promise<Collection | undefined> => {
    await delay(200);
    return mockCollections.find(collection => collection.id === id);
  },
  
  getCollectionsByHouseholdId: async (householdId: string): Promise<Collection[]> => {
    await delay(300);
    return mockCollections.filter(collection => collection.householdId === householdId);
  },
  
  getCollectionsByCollectorId: async (collectorId: string): Promise<Collection[]> => {
    await delay(300);
    return mockCollections.filter(collection => collection.collectorId === collectorId);
  },
  
  createCollection: async (data: Omit<Collection, 'id'>): Promise<Collection> => {
    await delay(400);
    const newCollection: Collection = {
      id: uuidv4(),
      ...data
    };
    mockCollections.push(newCollection);
    return newCollection;
  },
  
  updateCollectionStatus: async (id: string, status: Collection['status'], collectionDate?: Date): Promise<Collection | undefined> => {
    await delay(300);
    const index = mockCollections.findIndex(c => c.id === id);
    if (index === -1) return undefined;
    
    mockCollections[index] = {
      ...mockCollections[index],
      status,
      collectionDate: collectionDate || mockCollections[index].collectionDate
    };
    
    return mockCollections[index];
  }
};

// Biodigester API
export const biodigesterApi = {
  getBiodigesters: async (): Promise<Biodigester[]> => {
    await delay(300);
    return [...mockBiodigesters];
  },
  
  getBiodigesterById: async (id: string): Promise<Biodigester | undefined> => {
    await delay(200);
    return mockBiodigesters.find(biodigester => biodigester.id === id);
  },
  
  updateBiodigesterLevel: async (id: string, level: number): Promise<Biodigester | undefined> => {
    await delay(300);
    const index = mockBiodigesters.findIndex(b => b.id === id);
    if (index === -1) return undefined;
    
    mockBiodigesters[index] = {
      ...mockBiodigesters[index],
      currentLevel: level
    };
    
    return mockBiodigesters[index];
  },
  
  updateBiodigesterStatus: async (id: string, status: Biodigester['status']): Promise<Biodigester | undefined> => {
    await delay(300);
    const index = mockBiodigesters.findIndex(b => b.id === id);
    if (index === -1) return undefined;
    
    mockBiodigesters[index] = {
      ...mockBiodigesters[index],
      status,
      lastMaintenance: status === 'maintenance' ? new Date() : mockBiodigesters[index].lastMaintenance
    };
    
    return mockBiodigesters[index];
  }
};

// Product & Inventory API
export const productApi = {
  getProducts: async (): Promise<Product[]> => {
    await delay(300);
    return [...mockProducts];
  },
  
  getProductById: async (id: string): Promise<Product | undefined> => {
    await delay(200);
    return mockProducts.find(product => product.id === id);
  },
  
  getInventory: async (): Promise<Inventory[]> => {
    await delay(300);
    return [...mockInventory];
  },
  
  getInventoryByProductId: async (productId: string): Promise<Inventory[]> => {
    await delay(300);
    return mockInventory.filter(inv => inv.productId === productId);
  },
  
  updateInventoryQuantity: async (id: string, quantity: number): Promise<Inventory | undefined> => {
    await delay(300);
    const index = mockInventory.findIndex(inv => inv.id === id);
    if (index === -1) return undefined;
    
    mockInventory[index] = {
      ...mockInventory[index],
      quantity
    };
    
    return mockInventory[index];
  },
  
  createProduct: async (data: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product> => {
    await delay(400);
    const newProduct: Product = {
      id: uuidv4(),
      ...data,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    mockProducts.push(newProduct);
    return newProduct;
  }
};

// Order API
export const orderApi = {
  getOrders: async (): Promise<Order[]> => {
    await delay(300);
    return [...mockOrders];
  },
  
  getOrderById: async (id: string): Promise<Order | undefined> => {
    await delay(200);
    return mockOrders.find(order => order.id === id);
  },
  
  getOrdersByUserId: async (userId: string): Promise<Order[]> => {
    await delay(300);
    return mockOrders.filter(order => order.userId === userId);
  },
  
  createOrder: async (data: Omit<Order, 'id'>): Promise<Order> => {
    await delay(400);
    const newOrder: Order = {
      id: uuidv4(),
      ...data
    };
    mockOrders.push(newOrder);
    return newOrder;
  },
  
  updateOrderStatus: async (id: string, status: Order['status']): Promise<Order | undefined> => {
    await delay(300);
    const index = mockOrders.findIndex(o => o.id === id);
    if (index === -1) return undefined;
    
    mockOrders[index] = {
      ...mockOrders[index],
      status
    };
    
    return mockOrders[index];
  }
};

// Rating API
export const ratingApi = {
  getRatings: async (): Promise<Rating[]> => {
    await delay(300);
    return [...mockRatings];
  },
  
  getRatingsByTargetId: async (targetId: string): Promise<Rating[]> => {
    await delay(300);
    return mockRatings.filter(rating => rating.targetId === targetId);
  },
  
  createRating: async (data: Omit<Rating, 'id' | 'createdAt'>): Promise<Rating> => {
    await delay(400);
    const newRating: Rating = {
      id: uuidv4(),
      ...data,
      createdAt: new Date()
    };
    mockRatings.push(newRating);
    return newRating;
  }
};
