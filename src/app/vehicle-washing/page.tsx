import type { Metadata } from "next";

import { VehicleWashingPage } from "@/components/vehicle-washing/vehicle-washing-page";
import { getVehicleWashingContent } from "@/services/content-service";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

export const metadata: Metadata = {
  title: "Vehicle Washing | BlueVerse",
  description:
    "BlueVerse automated vehicle washing systems for petrol stations, malls, fleet depots, dealerships, and government facilities.",
};

export default async function VehicleWashing() {
  const content = await getVehicleWashingContent();

  return <VehicleWashingPage content={content} />;
}
