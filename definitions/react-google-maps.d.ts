///<reference path='../react/react.d.ts' />

declare module 'react-google-maps' {
  import React = __React;

  interface GoogleMapLoaderProps extends React.Props<GoogleMapLoader> {
    containerElement?: React.ReactNode;
    googleMapElement?: React.ReactElement<any>;
  }
  export class GoogleMapLoader extends React.Component<GoogleMapLoaderProps, {}>{}

  interface MarkerProps extends React.Props<Marker> {}
  export class Marker extends React.Component<MarkerProps, {}>{}

  interface latitude {
    lat: number;
    lng: number;
  }
  interface GoogleMapProps extends React.Props<GoogleMap> {
    defaultZoom?: number;
    defaultCenter: latitude;
  }
  export class GoogleMap extends React.Component<GoogleMapProps, {}>{}

  interface ScriptjsLoaderProps extends React.Props<ScriptjsLoader> {
    hostname?: any;
    pathname?: any;
    query?: any;
    containerElement?: React.ReactNode;
    googleMapElement?: React.ReactElement<any>;
  }
  export class ScriptjsLoader extends React.Component<ScriptjsLoaderProps, {}>{}

}
