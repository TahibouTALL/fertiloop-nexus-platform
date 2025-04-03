
import React, { useState, useEffect } from "react";
import { Star, Filter, ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

// Type pour les avis clients
interface Feedback {
  id: string;
  name: string;
  rating: number;
  comment: string;
  createdAt: Date;
  category: string;
  urgency: "low" | "medium" | "high";
}

// Schéma de validation pour le formulaire
const feedbackSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  rating: z.number().min(1, { message: "Veuillez donner une note" }).max(5),
  comment: z.string().min(3, { message: "Votre commentaire doit comporter au moins 3 caractères" }),
  category: z.string().optional(),
});

const categoryOptions = [
  { value: "service", label: "Service client" },
  { value: "product", label: "Qualité du produit" },
  { value: "delivery", label: "Livraison" },
  { value: "app", label: "Application" }
];

const FeedbackSystem = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [filterCategory, setFilterCategory] = useState<string>("");
  
  const form = useForm<z.infer<typeof feedbackSchema>>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      name: "",
      rating: 0,
      comment: "",
      category: "service",
    },
  });
  
  // Charger les avis du localStorage au démarrage
  useEffect(() => {
    const storedFeedbacks = localStorage.getItem('fertiloop-feedbacks');
    if (storedFeedbacks) {
      try {
        const parsedFeedbacks = JSON.parse(storedFeedbacks);
        // Convertir les timestamps de string à Date
        const formattedFeedbacks = parsedFeedbacks.map((fb: any) => ({
          ...fb,
          createdAt: new Date(fb.createdAt)
        }));
        setFeedbacks(formattedFeedbacks);
      } catch (e) {
        console.error("Erreur lors du chargement des avis:", e);
      }
    } else {
      // Ajouter quelques avis de démonstration
      const demoFeedbacks: Feedback[] = [
        {
          id: "1",
          name: "Amadou Diop",
          rating: 5,
          comment: "Excellent service, je suis très satisfait du système de collecte régulier.",
          createdAt: new Date(2025, 2, 15),
          category: "service",
          urgency: "low"
        },
        {
          id: "2",
          name: "Fatou Sow",
          rating: 4,
          comment: "La qualité de l'engrais est remarquable, mes cultures sont en pleine forme!",
          createdAt: new Date(2025, 3, 1),
          category: "product",
          urgency: "low"
        },
        {
          id: "3",
          name: "Ibrahim Fall",
          rating: 2,
          comment: "J'attends toujours ma bonbonne de biogaz! Cela fait 3 jours maintenant.",
          createdAt: new Date(2025, 3, 2),
          category: "delivery",
          urgency: "high"
        }
      ];
      
      setFeedbacks(demoFeedbacks);
      localStorage.setItem('fertiloop-feedbacks', JSON.stringify(demoFeedbacks));
    }
  }, []);
  
  const detectUrgency = (comment: string, rating: number): "low" | "medium" | "high" => {
    const urgentWords = ["urgent", "immédiatement", "problème", "attente", "besoin"];
    const lowerComment = comment.toLowerCase();
    
    if (rating < 3 || urgentWords.some(word => lowerComment.includes(word))) {
      return "high";
    } else if (rating === 3) {
      return "medium";
    }
    
    return "low";
  };
  
  const onSubmit = (data: z.infer<typeof feedbackSchema>) => {
    const newFeedback: Feedback = {
      id: Date.now().toString(),
      name: data.name,
      rating: data.rating,
      comment: data.comment,
      createdAt: new Date(),
      category: data.category || "service",
      urgency: detectUrgency(data.comment, data.rating)
    };
    
    const updatedFeedbacks = [newFeedback, ...feedbacks];
    setFeedbacks(updatedFeedbacks);
    localStorage.setItem('fertiloop-feedbacks', JSON.stringify(updatedFeedbacks));
    
    form.reset({
      name: "",
      rating: 0,
      comment: "",
      category: "service",
    });
    
    toast.success("Merci pour votre avis! Votre retour est important pour nous.");
  };
  
  const getFilteredAndSortedFeedbacks = () => {
    let filtered = [...feedbacks];
    
    // Filtrer par catégorie si un filtre est sélectionné
    if (filterCategory) {
      filtered = filtered.filter(fb => fb.category === filterCategory);
    }
    
    // Trier par date
    return filtered.sort((a, b) => {
      if (sortOrder === "desc") {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      } else {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      }
    });
  };
  
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };
  
  const getUrgencyClass = (urgency: "low" | "medium" | "high") => {
    switch(urgency) {
      case "high": return "border-l-red-500";
      case "medium": return "border-l-amber-500";
      case "low": return "border-l-fertiloop-green";
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-md shadow-sm border p-4">
        <h3 className="text-lg font-medium mb-4">Donnez votre avis</h3>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        className="input-field"
                        placeholder="Votre nom"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Catégorie</FormLabel>
                    <FormControl>
                      <select
                        {...field}
                        className="input-field"
                      >
                        {categoryOptions.map(option => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Note</FormLabel>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className="p-1 focus:outline-none"
                        onClick={() => form.setValue("rating", star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                      >
                        <Star
                          className={`h-8 w-8 transition-colors ${
                            (hoveredRating || field.value) >= star
                              ? "text-fertiloop-yellow fill-fertiloop-yellow"
                              : "text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Commentaire</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="min-h-[100px]"
                      placeholder="Partagez votre expérience..."
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit"
              className="bg-fertiloop-green hover:bg-fertiloop-green/90"
            >
              Envoyer mon avis
            </Button>
          </form>
        </Form>
      </div>
      
      <div className="bg-white rounded-md shadow-sm border p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Avis clients ({feedbacks.length})</h3>
          
          <div className="flex gap-2">
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="text-sm border rounded p-1"
            >
              <option value="">Toutes catégories</option>
              {categoryOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSortOrder(sortOrder === "desc" ? "asc" : "desc")}
              title={sortOrder === "desc" ? "Plus récent d'abord" : "Plus ancien d'abord"}
            >
              {sortOrder === "desc" ? (
                <ArrowDown className="h-4 w-4" />
              ) : (
                <ArrowUp className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
        
        <div className="space-y-4 max-h-[400px] overflow-y-auto">
          {getFilteredAndSortedFeedbacks().length > 0 ? (
            getFilteredAndSortedFeedbacks().map(feedback => (
              <div 
                key={feedback.id} 
                className={cn(
                  "p-4 border-l-4 rounded bg-gray-50",
                  getUrgencyClass(feedback.urgency)
                )}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{feedback.name}</h4>
                    <div className="flex items-center mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${
                            star <= feedback.rating
                              ? "text-fertiloop-yellow fill-fertiloop-yellow"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-gray-500 ml-2">
                        {formatDate(feedback.createdAt)}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-medium py-1 px-2 rounded-full bg-gray-200">
                    {categoryOptions.find(c => c.value === feedback.category)?.label || feedback.category}
                  </span>
                </div>
                <p className="mt-2 text-gray-700">{feedback.comment}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-4">
              Aucun avis correspondant aux critères sélectionnés.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackSystem;
