import "googlemaps";

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  color: string;
  markerContent(): string;
}

export class CustomMap {
  private googleMaps: google.maps.Map;

  constructor(divId: string) {
    this.googleMaps = new google.maps.Map(document.getElementById(divId), {
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 3,
    });
  }

  addMarker(mappable: Mappable) {
    const marker = new google.maps.Marker({
      map: this.googleMaps,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener("click", () => {
      const windowInfo = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      windowInfo.open(this.googleMaps, marker);
    });
  }
}
