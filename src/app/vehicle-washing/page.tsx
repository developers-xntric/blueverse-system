import type { Metadata } from "next";

import { VehicleWashingPage } from "@/components/vehicle-washing/vehicle-washing-page";

export const metadata: Metadata = {
  title: "Vehicle Washing | BlueVerse",
  description:
    "BlueVerse automated vehicle washing systems for petrol stations, malls, fleet depots, dealerships, and government facilities.",
};

export default function VehicleWashing() {
  return <VehicleWashingPage />;
}
