
import { 
  User, UserRole, Transaction, TransactionType, TransactionStatus, 
  Collection, Biodigester, Product, Inventory, Order, Rating
} from '../models/types';
import { v4 as uuidv4 } from 'uuid';

// Helper function to generate random dates within a range
const randomDate = (start: Date, end: Date) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

// Mock Users
export const mockUsers: User[] = [
  {
    id: uuidv4(),
    name: "Amadou Bamba",
    phone: "221770000001",
    role: "admin" as UserRole,
    email: "amadou@fertiloop.com",
    createdAt: new Date(2024, 0, 1),
    updatedAt: new Date(2024, 0, 1),
    location: {
      id: uuidv4(),
      userId: "1",
      address: "123 Admin Street",
      city: "Dakar",
      coordinates: { latitude: 14.7167, longitude: -17.4677 },
      isPrimary: true,
      createdAt: new Date(2024, 0, 1),
    }
  },
  {
    id: uuidv4(),
    name: "Fatou Diallo",
    phone: "221770000002",
    role: "farmer" as UserRole,
    email: "fatou@example.com",
    createdAt: new Date(2024, 0, 15),
    updatedAt: new Date(2024, 0, 15),
    location: {
      id: uuidv4(),
      userId: "2",
      address: "456 Farm Road",
      city: "Thiès",
      coordinates: { latitude: 14.7894, longitude: -16.9256 },
      isPrimary: true,
      createdAt: new Date(2024, 0, 15),
    }
  },
  {
    id: uuidv4(),
    name: "Moussa Sow",
    phone: "221770000003",
    role: "household" as UserRole,
    createdAt: new Date(2024, 1, 1),
    updatedAt: new Date(2024, 1, 1),
    location: {
      id: uuidv4(),
      userId: "3",
      address: "789 Residential Ave",
      city: "Dakar",
      coordinates: { latitude: 14.7245, longitude: -17.4384 },
      isPrimary: true,
      createdAt: new Date(2024, 1, 1),
    }
  },
  {
    id: uuidv4(),
    name: "Aïcha Ndiaye",
    phone: "221770000004",
    role: "logistics" as UserRole,
    email: "aicha@fertiloop.com",
    createdAt: new Date(2024, 1, 15),
    updatedAt: new Date(2024, 1, 15),
    location: {
      id: uuidv4(),
      userId: "4",
      address: "101 Transport Street",
      city: "Saint-Louis",
      coordinates: { latitude: 16.0179, longitude: -16.4896 },
      isPrimary: true,
      createdAt: new Date(2024, 1, 15),
    }
  }
];

// Mock Biodigesters
export const mockBiodigesters: Biodigester[] = [
  {
    id: uuidv4(),
    name: "Biodigester Alpha",
    location: { latitude: 14.7167, longitude: -17.4677 },
    capacity: 1000,
    currentLevel: 65,
    status: "operational",
    installedDate: new Date(2023, 1, 1),
    lastMaintenance: new Date(2024, 2, 15)
  },
  {
    id: uuidv4(),
    name: "Biodigester Beta",
    location: { latitude: 14.7894, longitude: -16.9256 },
    capacity: 800,
    currentLevel: 42,
    status: "maintenance",
    installedDate: new Date(2023, 3, 15),
    lastMaintenance: new Date(2024, 3, 1)
  },
  {
    id: uuidv4(),
    name: "Biodigester Gamma",
    location: { latitude: 16.0179, longitude: -16.4896 },
    capacity: 1200,
    currentLevel: 78,
    status: "operational",
    installedDate: new Date(2022, 11, 10),
    lastMaintenance: new Date(2024, 2, 28)
  }
];

// Mock Products
export const mockProducts: Product[] = [
  {
    id: uuidv4(),
    type: "fertilizer",
    name: "SuperGrow Organic",
    description: "High-quality organic fertilizer for all crops",
    unit: "kg",
    unitPrice: 1200,
    createdAt: new Date(2024, 0, 1),
    updatedAt: new Date(2024, 0, 1)
  },
  {
    id: uuidv4(),
    type: "fertilizer",
    name: "RootBoost Plus",
    description: "Specially formulated for root vegetables",
    unit: "kg",
    unitPrice: 1500,
    createdAt: new Date(2024, 0, 15),
    updatedAt: new Date(2024, 0, 15)
  },
  {
    id: uuidv4(),
    type: "biogas",
    name: "CookClean Biogas",
    description: "Clean cooking gas produced from organic waste",
    unit: "cubic meter",
    unitPrice: 800,
    createdAt: new Date(2024, 1, 1),
    updatedAt: new Date(2024, 1, 1)
  }
];

// Mock Inventory
export const mockInventory: Inventory[] = [
  {
    id: uuidv4(),
    productId: mockProducts[0].id,
    biodigesterId: mockBiodigesters[0].id,
    quantity: 500,
    batchNumber: "F2024-001",
    productionDate: new Date(2024, 2, 1),
    expiryDate: new Date(2025, 2, 1),
    status: "available"
  },
  {
    id: uuidv4(),
    productId: mockProducts[1].id,
    biodigesterId: mockBiodigesters[1].id,
    quantity: 350,
    batchNumber: "F2024-002",
    productionDate: new Date(2024, 2, 15),
    expiryDate: new Date(2025, 2, 15),
    status: "available"
  },
  {
    id: uuidv4(),
    productId: mockProducts[2].id,
    biodigesterId: mockBiodigesters[2].id,
    quantity: 1000,
    batchNumber: "B2024-001",
    productionDate: new Date(2024, 3, 1),
    status: "available"
  }
];

// Mock Transactions
export const mockTransactions: Transaction[] = [
  {
    id: uuidv4(),
    type: "waste_collection" as TransactionType,
    status: "completed" as TransactionStatus,
    userId: mockUsers[2].id,
    createdBy: mockUsers[3].id,
    createdAt: new Date(2024, 2, 10),
    updatedAt: new Date(2024, 2, 10),
    details: "Collection de déchets organiques à domicile"
  },
  {
    id: uuidv4(),
    type: "fertilizer_delivery" as TransactionType,
    status: "in-progress" as TransactionStatus,
    amount: 3000,
    userId: mockUsers[1].id,
    createdBy: mockUsers[0].id,
    createdAt: new Date(2024, 3, 1),
    updatedAt: new Date(2024, 3, 2),
    details: "Livraison d'engrais SuperGrow"
  },
  {
    id: uuidv4(),
    type: "payment" as TransactionType,
    status: "completed" as TransactionStatus,
    amount: 3000,
    userId: mockUsers[1].id,
    createdBy: mockUsers[1].id,
    createdAt: new Date(2024, 3, 2),
    updatedAt: new Date(2024, 3, 2),
    details: "Paiement pour livraison d'engrais"
  }
];

// Mock Collections
export const mockCollections: Collection[] = [
  {
    id: uuidv4(),
    transactionId: mockTransactions[0].id,
    wasteType: "food",
    quantity: 25,
    scheduledDate: new Date(2024, 2, 10, 9, 0),
    collectionDate: new Date(2024, 2, 10, 9, 45),
    notes: "Client satisfait du service",
    householdId: mockUsers[2].id,
    collectorId: mockUsers[3].id,
    status: "processed"
  }
];

// Mock Orders
export const mockOrders: Order[] = [
  {
    id: uuidv4(),
    userId: mockUsers[1].id,
    status: "processing",
    orderDate: new Date(2024, 3, 1),
    deliveryLocationId: mockUsers[1].location!.id,
    totalAmount: 3000,
    paymentStatus: "paid",
    transactionId: mockTransactions[1].id
  }
];

// Mock Ratings
export const mockRatings: Rating[] = [
  {
    id: uuidv4(),
    userId: mockUsers[2].id,
    targetType: "collection",
    targetId: mockCollections[0].id,
    rating: 5,
    comment: "Service rapide et professionnel",
    createdAt: new Date(2024, 2, 10, 10, 30)
  },
  {
    id: uuidv4(),
    userId: mockUsers[1].id,
    targetType: "product",
    targetId: mockProducts[0].id,
    rating: 4,
    comment: "Bon produit, résultats visibles rapidement",
    createdAt: new Date(2024, 2, 20)
  }
];
