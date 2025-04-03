
declare global {
  interface Window {
    google: {
      maps: {
        Map: typeof google.maps.Map;
        Marker: typeof google.maps.Marker;
        InfoWindow: typeof google.maps.InfoWindow;
        LatLng: typeof google.maps.LatLng;
        MapTypeId: {
          ROADMAP: string;
          SATELLITE: string;
          HYBRID: string;
          TERRAIN: string;
        };
        TravelMode: {
          BICYCLING: string;
          DRIVING: string;
          TRANSIT: string;
          WALKING: string;
        };
        UnitSystem: {
          IMPERIAL: number;
          METRIC: number;
        };
        DistanceMatrixService: typeof google.maps.DistanceMatrixService;
        Geocoder: typeof google.maps.Geocoder;
        GeocoderStatus: {
          ERROR: string;
          INVALID_REQUEST: string;
          OK: string;
          OVER_QUERY_LIMIT: string;
          REQUEST_DENIED: string;
          UNKNOWN_ERROR: string;
          ZERO_RESULTS: string;
        };
        SymbolPath: {
          BACKWARD_CLOSED_ARROW: number;
          BACKWARD_OPEN_ARROW: number;
          CIRCLE: number;
          FORWARD_CLOSED_ARROW: number;
          FORWARD_OPEN_ARROW: number;
        };
        event: {
          addListener: (
            instance: any,
            eventName: string,
            handler: Function
          ) => google.maps.MapsEventListener;
          removeListener: (listener: google.maps.MapsEventListener) => void;
          clearInstanceListeners: (instance: any) => void;
        };
      };
    };
  }
}

declare namespace google.maps {
  class Map {
    constructor(mapDiv: Element | null, opts?: MapOptions);
    setCenter(latLng: LatLng | LatLngLiteral): void;
    setZoom(zoom: number): void;
    setOptions(options: MapOptions): void;
    panTo(latLng: LatLng | LatLngLiteral): void;
    getBounds(): LatLngBounds | undefined;
    getCenter(): LatLng;
    getZoom(): number;
    addListener(eventName: string, handler: Function): MapsEventListener;
  }
  
  class LatLng {
    constructor(lat: number, lng: number, noWrap?: boolean);
    lat(): number;
    lng(): number;
    equals(other: LatLng): boolean;
    toString(): string;
  }
  
  interface LatLngLiteral {
    lat: number;
    lng: number;
  }
  
  interface LatLngBounds {
    contains(latLng: LatLng | LatLngLiteral): boolean;
    equals(other: LatLngBounds | LatLngBoundsLiteral): boolean;
    extend(point: LatLng | LatLngLiteral): LatLngBounds;
    getCenter(): LatLng;
    getNorthEast(): LatLng;
    getSouthWest(): LatLng;
    intersects(other: LatLngBounds | LatLngBoundsLiteral): boolean;
    isEmpty(): boolean;
    toJSON(): LatLngBoundsLiteral;
    toSpan(): LatLng;
    toString(): string;
    union(other: LatLngBounds | LatLngBoundsLiteral): LatLngBounds;
  }
  
  interface LatLngBoundsLiteral {
    east: number;
    north: number;
    south: number;
    west: number;
  }
  
  interface MapOptions {
    center?: LatLng | LatLngLiteral;
    clickableIcons?: boolean;
    disableDefaultUI?: boolean;
    disableDoubleClickZoom?: boolean;
    draggable?: boolean;
    draggableCursor?: string;
    fullscreenControl?: boolean;
    fullscreenControlOptions?: FullscreenControlOptions;
    gestureHandling?: string;
    keyboardShortcuts?: boolean;
    mapTypeControl?: boolean;
    mapTypeControlOptions?: MapTypeControlOptions;
    mapTypeId?: string;
    maxZoom?: number;
    minZoom?: number;
    noClear?: boolean;
    panControl?: boolean;
    panControlOptions?: PanControlOptions;
    rotateControl?: boolean;
    rotateControlOptions?: RotateControlOptions;
    scaleControl?: boolean;
    scaleControlOptions?: ScaleControlOptions;
    scrollwheel?: boolean;
    streetView?: StreetViewPanorama;
    streetViewControl?: boolean;
    streetViewControlOptions?: StreetViewControlOptions;
    styles?: MapTypeStyle[];
    tilt?: number;
    zoom?: number;
    zoomControl?: boolean;
    zoomControlOptions?: ZoomControlOptions;
  }
  
  interface FullscreenControlOptions {
    position?: number;
  }
  
  interface MapTypeControlOptions {
    mapTypeIds?: string[];
    position?: number;
    style?: number;
  }
  
  interface PanControlOptions {
    position?: number;
  }
  
  interface RotateControlOptions {
    position?: number;
  }
  
  interface ScaleControlOptions {
    style?: number;
  }
  
  interface StreetViewControlOptions {
    position?: number;
  }
  
  interface ZoomControlOptions {
    position?: number;
  }
  
  interface MapTypeStyle {
    elementType?: string;
    featureType?: string;
    stylers: MapTypeStyler[];
  }
  
  interface MapTypeStyler {
    color?: string;
    gamma?: number;
    hue?: string;
    invert_lightness?: boolean;
    lightness?: number;
    saturation?: number;
    visibility?: string;
    weight?: number;
  }
  
  class StreetViewPanorama {
    constructor(container: Element, opts?: StreetViewPanoramaOptions);
  }
  
  interface StreetViewPanoramaOptions {
    addressControl?: boolean;
    addressControlOptions?: AddressControlOptions;
    clickToGo?: boolean;
    disableDefaultUI?: boolean;
    disableDoubleClickZoom?: boolean;
    enableCloseButton?: boolean;
    fullscreenControl?: boolean;
    fullscreenControlOptions?: FullscreenControlOptions;
    imageDateControl?: boolean;
    linksControl?: boolean;
    panControl?: boolean;
    panControlOptions?: PanControlOptions;
    position?: LatLng | LatLngLiteral;
    pov?: StreetViewPov;
    scrollwheel?: boolean;
    showRoadLabels?: boolean;
    visible?: boolean;
    zoom?: number;
    zoomControl?: boolean;
    zoomControlOptions?: ZoomControlOptions;
  }
  
  interface AddressControlOptions {
    position?: number;
  }
  
  interface StreetViewPov {
    heading?: number;
    pitch?: number;
  }
  
  class Marker {
    constructor(opts?: MarkerOptions);
    getAnimation(): Animation;
    getClickable(): boolean;
    getCursor(): string | null;
    getDraggable(): boolean;
    getIcon(): string | Icon | Symbol;
    getLabel(): MarkerLabel | null;
    getMap(): Map | StreetViewPanorama | null;
    getOpacity(): number | null;
    getPosition(): LatLng | null;
    getShape(): MarkerShape | null;
    getTitle(): string | null;
    getVisible(): boolean;
    getZIndex(): number | null;
    setAnimation(animation: Animation | null): void;
    setClickable(flag: boolean): void;
    setCursor(cursor: string | null): void;
    setDraggable(flag: boolean): void;
    setIcon(icon: string | Icon | Symbol): void;
    setLabel(label: string | MarkerLabel): void;
    setMap(map: Map | StreetViewPanorama | null): void;
    setOpacity(opacity: number): void;
    setOptions(options: MarkerOptions): void;
    setPosition(latlng: LatLng | LatLngLiteral): void;
    setShape(shape: MarkerShape): void;
    setTitle(title: string): void;
    setVisible(visible: boolean): void;
    setZIndex(zIndex: number): void;
    addListener(eventName: string, handler: Function): MapsEventListener;
  }
  
  type Animation = number;
  
  interface Icon {
    anchor?: Point;
    labelOrigin?: Point;
    origin?: Point;
    scaledSize?: Size;
    size?: Size;
    url?: string;
  }
  
  interface MarkerLabel {
    color?: string;
    fontFamily?: string;
    fontSize?: string;
    fontWeight?: string;
    text: string;
  }
  
  interface MarkerOptions {
    anchorPoint?: Point;
    animation?: Animation;
    clickable?: boolean;
    cursor?: string;
    draggable?: boolean;
    icon?: string | Icon | Symbol;
    label?: string | MarkerLabel;
    map?: Map | StreetViewPanorama;
    opacity?: number;
    optimized?: boolean;
    position?: LatLng | LatLngLiteral;
    shape?: MarkerShape;
    title?: string;
    visible?: boolean;
    zIndex?: number;
  }
  
  interface MarkerShape {
    coords?: number[];
    type?: string;
  }
  
  interface Point {
    x: number;
    y: number;
    equals(other: Point): boolean;
    toString(): string;
  }
  
  interface Size {
    height: number;
    width: number;
    equals(other: Size): boolean;
    toString(): string;
  }
  
  class InfoWindow {
    constructor(opts?: InfoWindowOptions);
    close(): void;
    getContent(): string | Element;
    getPosition(): LatLng | null;
    getZIndex(): number;
    open(map?: Map | StreetViewPanorama, anchor?: MVCObject): void;
    setContent(content: string | Element | null): void;
    setOptions(options: InfoWindowOptions): void;
    setPosition(position: LatLng | LatLngLiteral | null): void;
    setZIndex(zIndex: number): void;
    addListener(eventName: string, handler: Function): MapsEventListener;
  }
  
  interface InfoWindowOptions {
    ariaLabel?: string;
    content?: string | Element | HTMLCollection;
    disableAutoPan?: boolean;
    maxWidth?: number;
    minWidth?: number;
    pixelOffset?: Size;
    position?: LatLng | LatLngLiteral;
    zIndex?: number;
  }
  
  interface MapsEventListener {
    remove(): void;
  }
  
  class MVCObject {
    addListener(eventName: string, handler: Function): MapsEventListener;
    bindTo(key: string, target: MVCObject, targetKey?: string, noNotify?: boolean): void;
    get(key: string): any;
    notify(key: string): void;
    set(key: string, value: any): void;
    setValues(values: any): void;
    unbind(key: string): void;
    unbindAll(): void;
  }
  
  class Symbol {
    constructor(opts: SymbolOptions);
  }
  
  interface SymbolOptions {
    anchor?: Point;
    fillColor?: string;
    fillOpacity?: number;
    labelOrigin?: Point;
    path?: string | number;
    rotation?: number;
    scale?: number;
    strokeColor?: string;
    strokeOpacity?: number;
    strokeWeight?: number;
  }
  
  class DistanceMatrixService {
    getDistanceMatrix(
      request: DistanceMatrixRequest,
      callback: (
        response: DistanceMatrixResponse,
        status: DistanceMatrixStatus
      ) => void
    ): void;
  }
  
  interface DistanceMatrixRequest {
    avoidFerries?: boolean;
    avoidHighways?: boolean;
    avoidTolls?: boolean;
    destinations?: LatLng[] | LatLngLiteral[] | string[];
    drivingOptions?: DrivingOptions;
    origins?: LatLng[] | LatLngLiteral[] | string[];
    region?: string;
    transitOptions?: TransitOptions;
    travelMode?: string;
    unitSystem?: number;
  }
  
  interface DrivingOptions {
    departureTime?: Date;
    trafficModel?: string;
  }
  
  interface TransitOptions {
    arrivalTime?: Date;
    departureTime?: Date;
    modes?: string[];
    routingPreference?: string;
  }
  
  interface DistanceMatrixResponse {
    destinationAddresses: string[];
    originAddresses: string[];
    rows: DistanceMatrixResponseRow[];
  }
  
  interface DistanceMatrixResponseRow {
    elements: DistanceMatrixResponseElement[];
  }
  
  interface DistanceMatrixResponseElement {
    distance: Distance;
    duration: Duration;
    duration_in_traffic?: Duration;
    fare?: {
      currency: string;
      value: number;
      text: string;
    };
    status: string;
  }
  
  interface Distance {
    text: string;
    value: number;
  }
  
  interface Duration {
    text: string;
    value: number;
  }
  
  type DistanceMatrixStatus = string;
  
  class Geocoder {
    geocode(
      request: GeocoderRequest,
      callback: (
        results: GeocoderResult[],
        status: GeocoderStatus
      ) => void
    ): void;
  }
  
  interface GeocoderRequest {
    address?: string;
    bounds?: LatLngBounds | LatLngBoundsLiteral;
    componentRestrictions?: GeocoderComponentRestrictions;
    location?: LatLng | LatLngLiteral;
    placeId?: string;
    region?: string;
  }
  
  interface GeocoderComponentRestrictions {
    administrativeArea?: string;
    country?: string | string[];
    locality?: string;
    postalCode?: string;
    route?: string;
  }
  
  interface GeocoderResult {
    address_components: GeocoderAddressComponent[];
    formatted_address: string;
    geometry: GeocoderGeometry;
    place_id: string;
    types: string[];
    partial_match: boolean;
    postcode_localities?: string[];
    plus_code?: {
      compound_code: string;
      global_code: string;
    };
  }
  
  interface GeocoderAddressComponent {
    long_name: string;
    short_name: string;
    types: string[];
  }
  
  interface GeocoderGeometry {
    location: LatLng;
    location_type: string;
    viewport: LatLngBounds;
    bounds?: LatLngBounds;
  }
  
  type GeocoderStatus = string;
  
  interface MapMouseEvent {
    latLng?: LatLng;
    stop(): void;
  }
}

export {};
