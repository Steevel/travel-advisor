"use client";
import Navbar from "@/components/Navbar";
import Provider from "./Provider";
import "./globals.css";
import { Raleway } from "next/font/google";
import { useEffect, useState } from "react";
import { UserLocationContext } from "@/context/UserLocationContext";
import { SelectedBusinessContext } from "@/context/SelectedBusinessContext";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Travel Advisor",
  description: "",
};

export default function RootLayout({ children }) {
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
    <html lang="en">
      <body
        className={`${raleway.className} md:overflow-x-hidden md:overflow-y-hidden`}
      >
        <Provider>
          <UserLocationContext.Provider
            value={{ userLocation, setUserLocation }}
          >
            <SelectedBusinessContext.Provider
              value={{ selectedBusiness, setSelectedBusiness }}
            >
              <Navbar />
              {children}
            </SelectedBusinessContext.Provider>
          </UserLocationContext.Provider>
        </Provider>
      </body>
    </html>
  );
}
