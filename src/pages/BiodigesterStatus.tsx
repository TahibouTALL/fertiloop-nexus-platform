
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, BarChart3, Thermometer, Gauge, AlertCircle, Check, Leaf } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const BiodigesterStatus = () => {
  return (
    <div className="min-h-screen bg-fertiloop-gray">
      <header className="bg-white shadow">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
          <Link to="/dashboard" className="mr-4">
            <ArrowLeft className="h-5 w-5 text-gray-500 hover:text-fertiloop-green transition-colors" />
          </Link>
          <h1 className="text-xl font-bold text-gray-900">
            État du Biodigesteur
          </h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Card className="border-fertiloop-green/20 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-gray-900">Statut actuel</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <Check className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900">Opérationnel</h2>
                    <p className="text-gray-600">Fonctionnement normal</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Dernière vérification</p>
                  <p className="font-medium">05/04/2025 08:30</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <div className="flex items-center mb-2">
                    <Thermometer className="h-5 w-5 text-fertiloop-green mr-2" />
                    <h3 className="font-medium text-gray-900">Température</h3>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="text-3xl font-bold text-gray-900">36.5°C</div>
                    <div className="text-green-600 text-sm font-medium">Optimale</div>
                  </div>
                  <Progress value={70} className="h-2 mt-2" />
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-gray-100">
                  <div className="flex items-center mb-2">
                    <Gauge className="h-5 w-5 text-fertiloop-green mr-2" />
                    <h3 className="font-medium text-gray-900">Pression</h3>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="text-3xl font-bold text-gray-900">1.2 bar</div>
                    <div className="text-green-600 text-sm font-medium">Normale</div>
                  </div>
                  <Progress value={60} className="h-2 mt-2" />
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-100 mb-6">
                <div className="flex items-center mb-2">
                  <Leaf className="h-5 w-5 text-fertiloop-green mr-2" />
                  <h3 className="font-medium text-gray-900">Production de biogaz</h3>
                </div>
                <div className="flex items-end justify-between mb-2">
                  <div className="text-3xl font-bold text-gray-900">85%</div>
                  <div className="text-green-600 text-sm font-medium">Efficacité élevée</div>
                </div>
                <Progress value={85} className="h-2" />
                
                <div className="mt-4 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Production hebdomadaire</span>
                    <span className="font-medium">11.3 m³</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span>Tendance</span>
                    <span className="text-green-600">+5% vs semaine précédente</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                <div className="flex">
                  <AlertCircle className="h-6 w-6 text-amber-500 flex-shrink-0" />
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-amber-800">Action recommandée</h3>
                    <div className="mt-2 text-sm text-amber-700">
                      <p>
                        La quantité de déchets organiques dans le biodigesteur est à 75% de sa capacité. 
                        Nous vous recommandons d'ajouter plus de matière organique dans les prochains jours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <BarChart3 className="h-5 w-5 mr-2 text-fertiloop-green" />
            Performance du biodigesteur
          </h2>
          
          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Production sur 30 jours</h3>
                  <p className="text-gray-600 text-sm">Évolution de la production de biogaz</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-fertiloop-green rounded-full mr-2"></div>
                    <span className="text-sm text-gray-600">Biogaz</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-fertiloop-blue rounded-full mr-2"></div>
                    <span className="text-sm text-gray-600">Engrais</span>
                  </div>
                </div>
              </div>
              
              <div className="h-64 flex items-end space-x-2">
                {[65, 59, 80, 81, 56, 55, 40, 70, 63, 68, 58, 70, 75, 80, 85, 70, 65, 75, 82, 88, 90, 85, 80, 70, 75, 70, 65, 60, 70, 75].map((value, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-fertiloop-green rounded-t"
                      style={{ height: `${value * 0.6}%` }}
                    ></div>
                    {index % 5 === 0 && (
                      <div className="text-xs text-gray-500 mt-1">{index + 1}</div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Conseils d'utilisation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium text-gray-900 mb-2">Matières recommandées</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-fertiloop-green mr-2" />
                    <span className="text-gray-600">Restes alimentaires</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-fertiloop-green mr-2" />
                    <span className="text-gray-600">Déchets de fruits et légumes</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-fertiloop-green mr-2" />
                    <span className="text-gray-600">Marc de café et sachets de thé</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-fertiloop-green mr-2" />
                    <span className="text-gray-600">Petits déchets verts du jardin</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <h3 className="font-medium text-gray-900 mb-2">Matières à éviter</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <AlertCircle className="h-4 w-4 text-red-500 mr-2" />
                    <span className="text-gray-600">Produits laitiers</span>
                  </li>
                  <li className="flex items-center">
                    <AlertCircle className="h-4 w-4 text-red-500 mr-2" />
                    <span className="text-gray-600">Viandes et poissons</span>
                  </li>
                  <li className="flex items-center">
                    <AlertCircle className="h-4 w-4 text-red-500 mr-2" />
                    <span className="text-gray-600">Huiles et graisses</span>
                  </li>
                  <li className="flex items-center">
                    <AlertCircle className="h-4 w-4 text-red-500 mr-2" />
                    <span className="text-gray-600">Matières non organiques</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BiodigesterStatus;
