"use client";
import React from "react";
import { eye } from "@app/utils/icons";
import { useGlobalContext } from "@app/context/globalContext";
import { Skeleton } from "@components/ui/skeleton";

const Visibility = () => {
  const { forecast } = useGlobalContext();

  if (!forecast || !forecast?.visibility) {
    return <Skeleton className="h-[12rem] w-full" />;
  }

  const { visibility } = forecast;

  const getVisibilityDescription = (visibility: number) => {
    const visibilityInKm = Math.round(visibility / 1000);
    if (visibilityInKm > 10) {
      return "Excellent: Clear and vast view";
    }
    if (visibilityInKm > 5) {
      return "Good: Enough to see distant objects";
    }
    if (visibilityInKm > 2) {
      return "Moderate: Can see nearby objects";
    }
    if (visibilityInKm <= 2) {
      return "Poor: Can see only nearby objects";
    }
    return "Unavailable: No visibility data available";
  };
  return (
    <div className="pt-6 pb-5 h-[12rem] px-4 border rounded-lg flex flex-col gap-3 dark:bg-dark-grey shadow-sm dark:shadow-none">
      <div className="top">
        <h2 className="flex items-center gap-2 font-medium">
          {eye} Visibility
        </h2>
        <p className="pt-4 text-2xl">{Math.round(visibility) / 1000} km</p>
      </div>
      <p className="text-sm">
        Visibility: {getVisibilityDescription(visibility)} km
      </p>
    </div>
  );
};

export default Visibility;
