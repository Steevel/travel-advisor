"use client";
import BusinessList from "@/components/Home/BusinessList";
import CategoryList from "@/components/Home/CategoryList";
import GoogleMapView from "@/components/Home/GoogleMapView";
import RangeSelect from "@/components/Home/RangeSelect";
import SelectRating from "@/components/Home/SelectRating";
import SkeltonLoading from "@/components/SkeltonLoading";
import { UserLocationContext } from "@/context/UserLocationContext";
import GlobalApi from "@/shared/GlobalApi";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const { data: session } = useSession();
  const [category, setCategory] = useState();
  const [radius, setRadius] = useState(2500);
  const [businessList, setBuissnessList] = useState([]);
  const [businessListOrg, setBusinessListOrg] = useState([]);
  const [loading, setLoading] = useState(false);
  const { userLocation, setUserLocation } = useContext(UserLocationContext);

  const router = useRouter();

  useEffect(() => {
    if (!session?.user) {
      router.push("/login");
    }
  }, [session]);

  useEffect(() => {
    getGooglePlaces();
  }, [category, radius]);

  const getGooglePlaces = () => {
    if (category) {
      setLoading(true);
      GlobalApi.getGooglePlace(
        category,
        radius,
        userLocation?.lat,
        userLocation?.lng
      ).then((res) => {
        // console.log(res.data.product.results);
        setBuissnessList(res.data.product.results);
        setBusinessListOrg(res.data.product.results);
        setLoading(false);
      });
    }
  };

  const onRatingChange = (rating) => {
    // console.log("rading ", rating);
    if (rating.length == 0) {
      setBuissnessList(businessListOrg);
    }
    const result = businessList.filter((item) => {
      for (let i = 0; i < rating.length; i++) {
        if (item.rating >= rating[i]) {
          return true;
        }
        return false;
      }
    });

    // console.log(result);
  };

  return (
    <div className="grid h-screen grid-cols-1 md:grid-cols-4">
      <div className="p-1 md:p-3 ">
        <CategoryList onCategoryChange={(value) => setCategory(value)} />
        <RangeSelect onRadiusChange={(value) => setRadius(value)} />
        <SelectRating onRatingChange={(value) => onRatingChange(value)} />
      </div>
      <div className="col-span-3">
        <GoogleMapView businessList={businessList} />
        <div className="relative md:absolute w-[100%] md:w-[75%] bottom-36 md:bottom-3 mx-2">
          {!loading ? (
            <BusinessList businessList={businessList} />
          ) : (
            <div className="flex gap-3">
              {[1, 2, 3, 4, 5, 7].map((item, index) => (
                <SkeltonLoading key={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
