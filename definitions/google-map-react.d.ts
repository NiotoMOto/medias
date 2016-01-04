
declare module 'google-map-react' {
  import React = __React;

  interface GoogleMapProps extends React.Props<GoogleMap> {
    apiKey?: string;
    center?: Array<number>;
    zoom?: number;
    bootstrapURLKeys?: any
    minZoom?: number;
    defaultZoom?: number;
    onBoundsChange?: () => void;
    onChange?: () => void;
    onClick?: () => void;
    onChildClick?: () => void;
    onChildMouseDown?: () => void;
    onChildMouseUp?: () => void;
    onChildMouseMove?: () => void;
    onChildMouseEnter?: () => void;
    onChildMouseLeave?: () => void;
    onZoomAnimationStart?: () => void;
    onZoomAnimationEnd?: () => void;
    onDrag?: () => void;
    options?: any;
    distanceToMouse?: () => void;
    hoverDistance?: number;
    debounced?: boolean;
    margin?: Array<any>;
    googleMapLoader?: any;
    onGoogleApiLoaded?: () => void;
    yesIWantToUseGoogleMapApiInternals?: boolean;
    draggable?: boolean;
    style?: any;
  }

  class GoogleMap extends React.Component<GoogleMapProps, {}>{}

   export = GoogleMap;
}
