
import React from 'react';
import { Marker } from '@/pages/Logistics';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface LogisticsSidebarProps {
  markers: Marker[];
  setMarkers: React.Dispatch<React.SetStateAction<Marker[]>>;
  request: any | null;
  response: any | null;
}

const LogisticsSidebar: React.FC<LogisticsSidebarProps> = ({ 
  markers, 
  setMarkers,
  request, 
  response 
}) => {
  const originsCount = markers.filter(marker => marker.type === 'origin').length;
  const destinationsCount = markers.filter(marker => marker.type === 'destination').length;
  
  const removeMarker = (id: string) => {
    setMarkers(prev => prev.filter(marker => marker.id !== id));
  };
  
  return (
    <Card className="h-full overflow-y-auto">
      <CardHeader className="sticky top-0 z-10 bg-card pb-2">
        <CardTitle className="flex items-center justify-between">
          <span>Planification logistique</span>
          <div className="flex gap-2">
            <Badge variant="outline" className="bg-primary/10">
              {originsCount} origine{originsCount > 1 ? 's' : ''}
            </Badge>
            <Badge variant="outline" className="bg-accent/10">
              {destinationsCount} destination{destinationsCount > 1 ? 's' : ''}
            </Badge>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs defaultValue="markers">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="markers">Points</TabsTrigger>
            <TabsTrigger value="request">Requête</TabsTrigger>
            <TabsTrigger value="response">Réponse</TabsTrigger>
          </TabsList>
          
          <TabsContent value="markers" className="pt-4">
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-primary">Points de collecte</h3>
              {markers
                .filter((marker) => marker.type === 'origin')
                .map((marker) => (
                  <div 
                    key={marker.id} 
                    className="bg-primary/5 p-3 rounded-md flex justify-between items-start"
                  >
                    <div>
                      <p className="text-sm font-medium">{marker.title}</p>
                      <p className="text-xs text-muted-foreground">{marker.address || 'Adresse non disponible'}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Lat: {marker.position.lat.toFixed(6)}, Lng: {marker.position.lng.toFixed(6)}
                      </p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-destructive h-8 px-2" 
                      onClick={() => removeMarker(marker.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              
              {markers.filter(marker => marker.type === 'origin').length === 0 && (
                <p className="text-sm text-muted-foreground italic">
                  Aucun point de collecte. Cliquez sur la carte pour en ajouter.
                </p>
              )}
              
              <h3 className="text-lg font-medium text-accent mt-6">Points de livraison</h3>
              {markers
                .filter((marker) => marker.type === 'destination')
                .map((marker) => (
                  <div 
                    key={marker.id} 
                    className="bg-accent/5 p-3 rounded-md flex justify-between items-start"
                  >
                    <div>
                      <p className="text-sm font-medium">{marker.title}</p>
                      <p className="text-xs text-muted-foreground">{marker.address || 'Adresse non disponible'}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Lat: {marker.position.lat.toFixed(6)}, Lng: {marker.position.lng.toFixed(6)}
                      </p>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-destructive h-8 px-2" 
                      onClick={() => removeMarker(marker.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              
              {markers.filter(marker => marker.type === 'destination').length === 0 && (
                <p className="text-sm text-muted-foreground italic">
                  Aucun point de livraison. Cliquez sur la carte pour en ajouter.
                </p>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="request" className="pt-4">
            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Requête Distance Matrix</h3>
              {request ? (
                <pre className="text-xs overflow-auto p-4 bg-muted rounded-md max-h-80">
                  {JSON.stringify(request, null, 2)}
                </pre>
              ) : (
                <p className="text-sm text-muted-foreground italic">
                  Aucune requête envoyée. Cliquez sur "Calculer les distances" pour générer une requête.
                </p>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="response" className="pt-4">
            <div className="bg-muted/50 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-2">Réponse Distance Matrix</h3>
              {response ? (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Statut: {response.status}</h4>
                    <h4 className="text-sm font-medium">Origines:</h4>
                    <ul className="list-disc list-inside">
                      {response.originAddresses.map((address, i) => (
                        <li key={`origin-${i}`} className="text-xs ml-2">{address}</li>
                      ))}
                    </ul>
                    
                    <h4 className="text-sm font-medium mt-2">Destinations:</h4>
                    <ul className="list-disc list-inside">
                      {response.destinationAddresses.map((address, i) => (
                        <li key={`dest-${i}`} className="text-xs ml-2">{address}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium">Résultats:</h4>
                    <div className="mt-2 border rounded-md overflow-hidden">
                      <table className="min-w-full divide-y divide-muted">
                        <thead className="bg-muted">
                          <tr>
                            <th className="p-2 text-xs font-medium text-left">Origine</th>
                            <th className="p-2 text-xs font-medium text-left">Destination</th>
                            <th className="p-2 text-xs font-medium text-left">Distance</th>
                            <th className="p-2 text-xs font-medium text-left">Durée</th>
                          </tr>
                        </thead>
                        <tbody className="bg-card divide-y divide-muted">
                          {response.rows.map((row, originIndex) => (
                            row.elements.map((element, destIndex) => (
                              <tr key={`${originIndex}-${destIndex}`}>
                                <td className="p-2 text-xs">{response.originAddresses[originIndex]}</td>
                                <td className="p-2 text-xs">{response.destinationAddresses[destIndex]}</td>
                                <td className="p-2 text-xs">{element.status === 'OK' ? element.distance.text : 'N/A'}</td>
                                <td className="p-2 text-xs">{element.status === 'OK' ? element.duration.text : 'N/A'}</td>
                              </tr>
                            ))
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <details>
                    <summary className="text-sm cursor-pointer hover:text-accent">Afficher JSON brut</summary>
                    <pre className="text-xs overflow-auto p-4 bg-muted rounded-md mt-2 max-h-60">
                      {JSON.stringify(response, null, 2)}
                    </pre>
                  </details>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground italic">
                  Aucune réponse reçue. Cliquez sur "Calculer les distances" pour obtenir une réponse.
                </p>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default LogisticsSidebar;
