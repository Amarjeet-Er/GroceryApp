import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Loader } from '@googlemaps/js-api-loader';
@Component({
  selector: 'app-location-track',
  templateUrl: './location-track.component.html',
  styleUrls: ['./location-track.component.scss'],
})
export class LocationTrackComponent implements OnInit {
  driverLocation: google.maps.LatLngLiteral | null = null;
  customerLocation: google.maps.LatLngLiteral = { lat: 28.6338879, lng: 77.3899749 };
  mapCenter: google.maps.LatLngLiteral = { lat: 28.6338879, lng: 77.3899749 };
  zoom: number = 14;
  mapOptions: google.maps.MapOptions = {
    zoomControl: true,
    streetViewControl: false,
    mapTypeControl: false,
    fullscreenControl: false,
  };
  
  private directionsService: google.maps.DirectionsService;
  private directionsRenderer: google.maps.DirectionsRenderer;
  private map: google.maps.Map | null = null;

  private loader: Loader;

  driverIcon = {
    url: '../../../assets/icon/bike.png', // Driver icon
    scaledSize: new google.maps.Size(50, 50),
  };

  userIcon = {
    url: '../../../assets/icon/user.png', // Customer icon
    scaledSize: new google.maps.Size(50, 50),
  };

  constructor() {
    this.loader = new Loader({
      apiKey: 'AIzaSyAUxZyhKCPg4XNUXwaILTsy3fztg6Xzodc', // Replace with your Google Maps API key
      version: 'weekly',
      libraries: ['places', 'geometry', 'drawing'] // Directions API is part of core API
    });

    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer();
  }

  async ngOnInit() {
    await this.loader.load();
    this.getCurrentLocation();
  }

  async getCurrentLocation() {
    try {
      const position = await Geolocation.getCurrentPosition();
      this.driverLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      this.mapCenter = this.driverLocation;
      this.calculateRoute();
    } catch (error) {
      console.error('Error getting location', error);
      this.driverLocation = { lat: 0, lng: 0 }; // Fallback location
    }
  }

  private calculateRoute() {
    if (!this.driverLocation || !this.map) return;

    const request: google.maps.DirectionsRequest = {
      origin: this.driverLocation,
      destination: this.customerLocation,
      travelMode: google.maps.TravelMode.DRIVING
    };

    this.directionsService.route(request, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.directionsRenderer.setDirections(result);

        // Apply the green polyline after route calculation
        this.directionsRenderer.setOptions({
          polylineOptions: {
            strokeColor: 'green', // Green route line
            strokeOpacity: 1.0,
            strokeWeight: 6,
          }
        });
      } else {
        console.error('Error fetching directions', status);
      }
    });
  }

  onMapLoad(map: any) {
    this.map = map;
    this.directionsRenderer.setMap(map); // Bind the DirectionsRenderer to the map
  }
}
