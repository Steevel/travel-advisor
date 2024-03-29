import { UserLocationContext } from "@/context/UserLocationContext";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
import { useContext } from "react";
import Markers from "./Markers";

function GoogleMapView({ businessList }) {
  const { userLocation, setUserLocation } = useContext(UserLocationContext);

  const mapContainerStyle = {
    width: "100%",
    height: "70vh",
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
          zoom={15}
          options={{ mapId: "5b0ff1b055f56b31" }}
        >
          <MarkerF
            position={userLocation}
            icon={{
              url: "/user-location.png",
              scaledSize: {
                width: 50,
                height: 50,
              },
            }}
          />
          {businessList.map((item, index) => (
            <Markers key={index} business={item} />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default GoogleMapView;
