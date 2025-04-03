
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Leaf, Calendar, Plant, CloudRain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FertilizerGuides = () => {
  return (
    <div className="min-h-screen bg-fertiloop-gray">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
          <Link to="/fertilizer-orders" className="mr-4">
            <ArrowLeft className="h-5 w-5 text-gray-500 hover:text-fertiloop-green transition-colors" />
          </Link>
          <h1 className="text-xl font-bold text-gray-900">
            Guides d'utilisation des engrais
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-fertiloop-green mb-2">Optimisez l'usage de vos engrais organiques</h2>
          <p className="text-gray-600">
            Découvrez comment utiliser nos différents types d'engrais pour maximiser la santé et la productivité de vos cultures.
          </p>
        </div>

        <Tabs defaultValue="general" className="mb-10">
          <TabsList className="mb-6">
            <TabsTrigger value="general">Conseils généraux</TabsTrigger>
            <TabsTrigger value="nitrogen">Engrais azoté</TabsTrigger>
            <TabsTrigger value="phosphorus">Engrais phosphoré</TabsTrigger>
            <TabsTrigger value="potassium">Engrais potassique</TabsTrigger>
            <TabsTrigger value="compost">Compost complet</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>Principes fondamentaux d'utilisation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <Calendar className="h-6 w-6 text-fertiloop-green mr-2" />
                    <h3 className="text-lg font-medium text-gray-900">Calendrier d'application</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Pour la plupart des cultures, l'application d'engrais est recommandée au début de la saison de croissance, 
                    avec des applications supplémentaires à des moments clés du développement des plantes.
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Cultures annuelles: 2-3 semaines avant la plantation</li>
                    <li>Arbres fruitiers: début du printemps et fin de l'automne</li>
                    <li>Légumes: au moment de la plantation et à la formation des fruits</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <CloudRain className="h-6 w-6 text-fertiloop-green mr-2" />
                    <h3 className="text-lg font-medium text-gray-900">Méthode d'application</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    L'engrais organique peut être incorporé dans le sol ou appliqué en surface, selon le type de culture et le moment de l'année.
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Incorporation: Mélanger l'engrais aux 10-15 premiers centimètres du sol</li>
                    <li>Application de surface: Épandre uniformément autour des plantes et arroser légèrement</li>
                    <li>Éviter le contact direct avec les tiges et les feuilles</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <Plant className="h-6 w-6 text-fertiloop-green mr-2" />
                    <h3 className="text-lg font-medium text-gray-900">Dosage recommandé</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Le dosage varie selon le type de sol, la culture et la formulation spécifique de l'engrais.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type de culture</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantité (kg/100m²)</th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fréquence</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Légumes feuilles</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2-3</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Tous les 2 mois</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Légumes racines</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3-4</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 fois par saison</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Arbres fruitiers</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">4-5</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 fois par an</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="nitrogen">
            <Card>
              <CardHeader>
                <CardTitle>Engrais riche en azote (N)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Notre engrais azoté favorise la croissance végétative, le développement des feuilles et la production de chlorophylle. 
                  Idéal pour les plantes à feuillage abondant comme les salades, épinards et choux.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-fertiloop-green/5 p-4 rounded-lg">
                    <h4 className="font-medium text-fertiloop-green mb-2">Cultures recommandées</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      <li>Légumes feuillus (laitue, épinard, chou)</li>
                      <li>Maïs et céréales</li>
                      <li>Gazon et plantes ornementales</li>
                    </ul>
                  </div>
                  <div className="bg-fertiloop-green/5 p-4 rounded-lg">
                    <h4 className="font-medium text-fertiloop-green mb-2">Période d'application</h4>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      <li>Au début de la période de croissance</li>
                      <li>Lors des phases de développement végétatif</li>
                      <li>Éviter en fin de cycle pour les plantes à fruits</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-amber-50 border-l-4 border-amber-300 p-4 rounded-lg">
                  <div className="flex">
                    <svg className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-amber-800">Attention</h3>
                      <p className="mt-1 text-sm text-amber-700">
                        Un excès d'azote peut entraîner une croissance excessive des feuilles au détriment des fleurs et des fruits. 
                        Respectez les dosages recommandés.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="phosphorus">
            {/* Contenu similaire pour l'engrais phosphoré */}
            <Card>
              <CardHeader>
                <CardTitle>Engrais riche en phosphore (P)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  L'engrais phosphoré favorise le développement racinaire et joue un rôle essentiel dans la floraison et 
                  la production de fruits. Particulièrement recommandé pour les cultures à fleurs et à fruits.
                </p>
                
                {/* Contenu similaire au précédent... */}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="potassium">
            {/* Contenu similaire pour l'engrais potassique */}
            <Card>
              <CardHeader>
                <CardTitle>Engrais riche en potassium (K)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Le potassium renforce la résistance des plantes aux maladies et au stress hydrique. 
                  Il améliore également la qualité des fruits et la conservation des récoltes.
                </p>
                
                {/* Contenu similaire au précédent... */}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="compost">
            {/* Contenu similaire pour le compost complet */}
            <Card>
              <CardHeader>
                <CardTitle>Compost complet</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Notre compost complet est un engrais équilibré qui fournit tous les nutriments essentiels 
                  dans des proportions optimales. Idéal pour l'amélioration générale du sol.
                </p>
                
                {/* Contenu similaire au précédent... */}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-center mt-12">
          <Link to="/fertilizer-orders" className="bg-fertiloop-green hover:bg-fertiloop-green-dark text-white py-2 px-6 rounded-md font-medium flex items-center">
            <Leaf className="mr-2 h-5 w-5" />
            Commander des engrais
          </Link>
        </div>
      </main>
    </div>
  );
};

export default FertilizerGuides;
