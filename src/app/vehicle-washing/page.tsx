import type { Metadata } from "next";

import { VehicleWashingPage } from "@/components/vehicle-washing/vehicle-washing-page";
import { getVehicleWashingPage } from "@/lib/strapi";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getVehicleWashingPage();

  return {
    title: data.seo?.title || "Vehicle Washing | BlueVerse",
    description:
      data.seo?.description ||
      "BlueVerse automated vehicle washing systems for petrol stations, malls, fleet depots, dealerships, and government facilities.",
  };
}

export default async function VehicleWashing() {
  const data = await getVehicleWashingPage();

  return <VehicleWashingPage data={data} />;
}
