"use client";
import CategoryList from "@/components/Home/CategoryList";
import GoogleMapView from "@/components/Home/GoogleMapView";
import RangeSelect from "@/components/Home/RangeSelect";
import SelectRating from "@/components/Home/SelectRating";
import { UserLocationContext } from "@/context/UserLocationContext";
import GlobalApi from "@/shared/GlobalApi";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const { data: session } = useSession();
  const [category, setCategory] = useState();
  const [radius, setRadius] = useState(2500);
  const [businessList, setBuissnessList] = useState([]);
  const { userLocation, setUserLocation } = useContext(UserLocationContext);

  const router = useRouter();

  useEffect(() => {
    if (!session?.user) {
      router.push("/login");
    }
  }, [session]);

  const getGooglePlaces = () => {
    GlobalApi.getGooglePlace(
      category,
      radius,
      userLocation?.lat,
      userLocation?.lng
    ).then((res) => {
      console.log(res.data.product.results);
      setBuissnessList(res.data.product.results);
    });
  };

  useEffect(() => {
    getGooglePlaces();
  }, [category, radius]);

  return (
    <div className="grid h-screen grid-cols-1 md:grid-cols-4">
      <div className="p-1 md:p-3">
        <CategoryList onCategoryChange={(value) => setCategory(value)} />
        <RangeSelect onRadiusChange={(value) => setRadius(value)} />
        <SelectRating />
      </div>
      <div className="col-span-3">
        <GoogleMapView />
      </div>
    </div>
  );
}
