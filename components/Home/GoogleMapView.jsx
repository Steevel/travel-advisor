import { UserLocationContext } from "@/context/UserLocationContext";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useContext } from "react";

function GoogleMapView() {
  const { userLocation, setUserLocation } = useContext(UserLocationContext);

  const mapContainerStyle = {
    width: "100%",
    height: "90vh",
  };

  return (
    <div>
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
        mapIds={["5b0ff1b055f56b31"]}
      >
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={userLocation}
          zoom={10}
          options={{ mapId: "5b0ff1b055f56b31" }}
        ></GoogleMap>
      </LoadScript>
    </div>
  );
}

export default GoogleMapView;
