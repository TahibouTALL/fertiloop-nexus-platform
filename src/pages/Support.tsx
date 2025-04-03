
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Star, Mail, Phone, MessageSquare, HelpCircle, CheckCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Votre message a été envoyé avec succès!");
  };

  const handleRatingClick = (value: number) => {
    setRating(value);
    toast.success(`Merci pour votre évaluation de ${value} étoiles!`);
  };

  return (
    <div className="min-h-screen bg-fertiloop-gray">
      <header className="bg-white shadow">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
          <Link to="/dashboard" className="mr-4">
            <ArrowLeft className="h-5 w-5 text-gray-500 hover:text-fertiloop-green transition-colors" />
          </Link>
          <h1 className="text-xl font-bold text-gray-900">
            Support client & évaluations
          </h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="md:col-span-2">
            <CardHeader className="border-b border-gray-100">
              <div className="flex items-center">
                <div className="h-10 w-10 bg-fertiloop-green/20 rounded-full flex items-center justify-center mr-3">
                  <MessageSquare className="h-5 w-5 text-fertiloop-green" />
                </div>
                <div>
                  <CardTitle>Nous contacter</CardTitle>
                  <p className="text-sm text-gray-500 mt-1">
                    Envoyez-nous un message, nous vous répondrons dans les plus brefs délais
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nom
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        E-mail
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="Votre adresse e-mail"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="input-field resize-none"
                      placeholder="Comment pouvons-nous vous aider?"
                      required
                    />
                  </div>
                  
                  <div>
                    <Button
                      type="submit"
                      className="bg-fertiloop-green hover:bg-fertiloop-green/90"
                    >
                      Envoyer
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Message envoyé!
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Merci de nous avoir contacté. Notre équipe vous répondra dans les plus brefs délais.
                    </p>
                  </div>
                  <div className="mt-6">
                    <Button
                      variant="outline"
                      onClick={() => setSubmitted(false)}
                    >
                      Nouveau message
                    </Button>
                  </div>
                </div>
              )}
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center">
                  <img 
                    src="https://placehold.co/300x200/e2f2d5/1f7532?text=Support" 
                    alt="Support client" 
                    className="w-20 h-20 object-cover rounded-lg mr-4 shadow-sm"
                  />
                  <div>
                    <h3 className="text-base font-medium text-gray-900">
                      Notre équipe de support
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Disponible du lundi au vendredi, de 8h à 18h, pour répondre à toutes vos questions.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center">
                <Star className="h-5 w-5 text-fertiloop-yellow mr-2" />
                <CardTitle>Noter le service</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-gray-600 mb-4">
                Comment évaluez-vous nos services?
              </p>
              
              <div className="flex justify-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className="p-1 focus:outline-none"
                    onClick={() => handleRatingClick(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                  >
                    <Star
                      className={`h-8 w-8 transition-colors ${
                        (hoveredRating || rating) >= star
                          ? "text-fertiloop-yellow fill-fertiloop-yellow"
                          : "text-gray-300"
                      }`}
                    />
                  </button>
                ))}
              </div>
              
              <p className="text-center text-sm text-gray-500">
                {rating ? `Vous avez attribué ${rating} étoiles` : "Cliquez pour noter"}
              </p>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center">
                  <img 
                    src="https://placehold.co/300x200/fef7cd/e9b949?text=Satisfaction" 
                    alt="Satisfaction client" 
                    className="w-16 h-16 object-cover rounded-full mr-3"
                  />
                  <p className="text-sm text-gray-600">
                    Votre avis est important pour nous aider à améliorer continuellement nos services.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-fertiloop-green mr-2" />
                <CardTitle>Autres contacts</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-4 space-y-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-fertiloop-green/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-fertiloop-green" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-base font-medium text-gray-900">Téléphone</h3>
                  <p className="text-sm text-gray-600">(+221) 77 123 45 67</p>
                  <p className="text-xs text-gray-500 mt-1">Lun-Ven, 8h-18h</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-fertiloop-green/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-fertiloop-green" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-base font-medium text-gray-900">Email</h3>
                  <p className="text-sm text-gray-600">support@fertiloop.com</p>
                  <p className="text-xs text-gray-500 mt-1">Réponse sous 24h</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-fertiloop-green/10 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-fertiloop-green" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-base font-medium text-gray-900">Chat en ligne</h3>
                  <p className="text-sm text-gray-600">Disponible sur notre site web</p>
                  <p className="text-xs text-gray-500 mt-1">Tous les jours, 9h-20h</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center">
              <HelpCircle className="h-5 w-5 text-fertiloop-green mr-2" />
              <CardTitle>Questions fréquentes</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-5">
              <div className="border-l-4 border-fertiloop-green pl-4 py-2">
                <h4 className="text-base font-medium text-gray-900">Quand aura lieu ma prochaine collecte?</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Consultez le calendrier de collectes dans votre tableau de bord pour les dates prévues.
                </p>
              </div>
              
              <Separator />
              
              <div className="border-l-4 border-fertiloop-blue pl-4 py-2">
                <h4 className="text-base font-medium text-gray-900">Comment fonctionne le paiement?</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Nous acceptons les paiements via Orange Money, Wave, Free Money et carte bancaire.
                </p>
              </div>
              
              <Separator />
              
              <div className="border-l-4 border-fertiloop-yellow pl-4 py-2">
                <h4 className="text-base font-medium text-gray-900">Puis-je changer la quantité de ma commande?</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Oui, vous pouvez modifier votre commande jusqu'à 24h avant la livraison prévue.
                </p>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center">
              <Button variant="outline" className="flex items-center">
                <HelpCircle className="mr-2 h-4 w-4" />
                Voir plus de questions
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Support;
