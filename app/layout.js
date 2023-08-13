"use client";
import Navbar from "@/components/Navbar";
import Provider from "./Provider";
import "./globals.css";
import { Raleway } from "next/font/google";
import { useEffect, useState } from "react";
import { UserLocationContext } from "@/context/UserLocationContext";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Travel Advisor",
  description: "",
};

export default function RootLayout({ children }) {
  const [userLocation, setUserLocation] = useState();

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log(pos);
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
      <body className={raleway.className}>
        <Provider>
          <UserLocationContext.Provider
            value={{ userLocation, setUserLocation }}
          >
            <Navbar />
            {children}
          </UserLocationContext.Provider>
        </Provider>
      </body>
    </html>
  );
}
