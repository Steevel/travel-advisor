"use client";
import { SelectedBusinessContext } from "@/context/SelectedBusinessContext";
import { UserLocationContext } from "@/context/UserLocationContext";
import { SessionProvider } from "next-auth/react";
import { useEffect, useState } from "react";

function Provider({ children }) {
  const [userLocation, setUserLocation] = useState([]);
  const [selectedBusiness, setSelectedBusiness] = useState([]);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      // console.log(pos);
      setUserLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <SessionProvider>
      <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
        <SelectedBusinessContext.Provider
          value={{ selectedBusiness, setSelectedBusiness }}
        >
          {children}
        </SelectedBusinessContext.Provider>
      </UserLocationContext.Provider>
    </SessionProvider>
  );
}

export default Provider;
