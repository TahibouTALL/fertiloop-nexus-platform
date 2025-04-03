
// User-related types
export type UserRole = "farmer" | "household" | "logistics" | "admin";

export interface User {
  id: string;
  phone: string;
  name: string;
  role: UserRole;
  email?: string;
  location?: Location;
  createdAt: Date;
  updatedAt: Date;
}

export interface Location {
  id: string;
  userId: string;
  address: string;
  city: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  isPrimary: boolean;
  createdAt: Date;
}

// Transaction-related types
export type TransactionType = 
  | "waste_collection" 
  | "fertilizer_delivery" 
  | "biogas_delivery" 
  | "payment";

export type TransactionStatus = 
  | "pending" 
  | "processing" 
  | "completed" 
  | "cancelled"
  | "in-progress"
  | "delivered";

export interface Transaction {
  id: string;
  type: TransactionType;
  status: TransactionStatus;
  amount?: number;
  userId: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  details?: string;
}

// Collection-related types
export type WasteType = "food" | "agricultural" | "other";
export type CollectionStatus = "scheduled" | "collected" | "processed";

export interface Collection {
  id: string;
  transactionId: string;
  wasteType: WasteType;
  quantity: number;
  scheduledDate: Date;
  collectionDate?: Date;
  notes?: string;
  householdId: string;
  collectorId: string;
  status: CollectionStatus;
}

// Biodigester-related types
export type BiodigesterStatus = "operational" | "maintenance" | "offline";

export interface Biodigester {
  id: string;
  name: string;
  location: {
    latitude: number;
    longitude: number;
  };
  capacity: number;
  currentLevel: number;
  status: BiodigesterStatus;
  installedDate: Date;
  lastMaintenance: Date;
}

export interface BiodigesterInput {
  id: string;
  biodigesterId: string;
  collectionId: string;
  quantity: number;
  processingDate: Date;
  operatorId: string;
}

// Product-related types
export type ProductType = "fertilizer" | "biogas";

export interface Product {
  id: string;
  type: ProductType;
  name: string;
  description: string;
  unit: string;
  unitPrice: number;
  createdAt: Date;
  updatedAt: Date;
}

// Inventory-related types
export type InventoryStatus = "available" | "reserved" | "sold";

export interface Inventory {
  id: string;
  productId: string;
  biodigesterId: string;
  quantity: number;
  batchNumber: string;
  productionDate: Date;
  expiryDate?: Date;
  status: InventoryStatus;
}

// Order-related types
export type OrderStatus = "pending" | "confirmed" | "processing" | "delivered" | "cancelled";
export type PaymentStatus = "pending" | "paid" | "failed";

export interface Order {
  id: string;
  userId: string;
  status: OrderStatus;
  orderDate: Date;
  deliveryDate?: Date;
  deliveryLocationId: string;
  totalAmount: number;
  paymentStatus: PaymentStatus;
  transactionId: string;
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  unitPrice: number;
  inventoryId: string;
  status: "pending" | "allocated" | "delivered";
}

// Delivery-related types
export type DeliveryStatus = "scheduled" | "in_transit" | "delivered" | "failed";

export interface Delivery {
  id: string;
  orderId: string;
  deliveryPersonId: string;
  vehicleId: string;
  scheduledTime: Date;
  actualTime?: Date;
  status: DeliveryStatus;
  notes?: string;
  transactionId: string;
}

export interface Vehicle {
  id: string;
  type: "truck" | "motorcycle" | "bicycle";
  plateNumber: string;
  capacity: number;
  status: "available" | "in_use" | "maintenance";
}

// Payment-related types
export type PaymentMethod = "orange_money" | "wave" | "free_money" | "credit_card";

export interface Payment {
  id: string;
  transactionId: string;
  amount: number;
  method: PaymentMethod;
  status: PaymentStatus;
  paymentDate: Date;
  referenceNumber: string;
}

// Rating-related types
export type RatingTargetType = "product" | "service" | "delivery" | "collection";

export interface Rating {
  id: string;
  userId: string;
  targetType: RatingTargetType;
  targetId: string;
  rating: number;
  comment?: string;
  createdAt: Date;
}
