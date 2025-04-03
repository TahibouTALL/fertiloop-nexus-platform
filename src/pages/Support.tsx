
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Star, Mail, Phone, MessageSquare } from "lucide-react";
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
            <ChevronLeft className="h-5 w-5 text-gray-500" />
          </Link>
          <h1 className="text-xl font-bold text-gray-900">
            Support client & évaluations
          </h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Formulaire de contact
          </h2>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
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
                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Envoyer
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
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
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setSubmitted(false)}
                >
                  Nouveau message
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Noter le service
          </h2>
          
          <div className="mb-6">
            <p className="text-gray-600 mb-4">
              Comment évaluez-vous nos services de collecte et de livraison?
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
                    className={`h-8 w-8 ${
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
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Autres moyens de contact
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-fertiloop-green/10 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-fertiloop-green" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Téléphone</h3>
                <p className="text-gray-600">(+221) 77 123 45 67</p>
                <p className="text-sm text-gray-500 mt-1">Lun-Ven, 8h-18h</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-fertiloop-green/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-fertiloop-green" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Email</h3>
                <p className="text-gray-600">support@fertiloop.com</p>
                <p className="text-sm text-gray-500 mt-1">Réponse sous 24h</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-fertiloop-green/10 flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-fertiloop-green" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Chat en ligne</h3>
                <p className="text-gray-600">Disponible sur notre site web</p>
                <p className="text-sm text-gray-500 mt-1">Tous les jours, 9h-20h</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Questions fréquentes
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-base font-medium text-gray-900">Quand aura lieu ma prochaine collecte?</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Consultez le calendrier de collectes dans votre tableau de bord pour les dates prévues.
                </p>
              </div>
              
              <div>
                <h4 className="text-base font-medium text-gray-900">Comment fonctionne le paiement?</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Nous acceptons les paiements via Orange Money, Wave, Free Money et carte bancaire.
                </p>
              </div>
              
              <div>
                <h4 className="text-base font-medium text-gray-900">Puis-je changer la quantité de ma commande?</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Oui, vous pouvez modifier votre commande jusqu'à 24h avant la livraison prévue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Support;
