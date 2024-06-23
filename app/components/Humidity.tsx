"use client"
import React from 'react';
import {droplets} from "@app/utils/icons";
import {kelvinToCelsius} from "@app/utils/misc";
import {useGlobalContext} from "@app/context/globalContext";
import {Skeleton} from "@components/ui/skeleton";

const Humidity = () => {

    const {forecast} = useGlobalContext();
    if (!forecast || !forecast?.main || !forecast?.main?.humidity) {
        return <Skeleton className="w-full h-[12rem]"/>;
    }

    const {humidity} = forecast.main;


    const getHumidityText = (humidity: number) => {
        if (humidity < 30) return "Dry: May cause skin irritation";
        if (humidity >= 30 && humidity < 50)
            return "Comfortable: Ideal for health and comfort";
        if (humidity >= 50 && humidity < 70)
            return "Moderate: Sticky, may increase allergens";
        if (humidity >= 70) return "High: Uncomfortable, mold growth risk";
        return "Unavailable: Humidity data not available";
    };

    return (
        <div
            className="pt-6 pb-5 h-[12rem] px-4 border rounded-lg flex flex-col gap-8 dark:bg-dark-grey shadow-sm dark:shadow-none">
            <div className="top">
                <h2 className="flex items-center gap-2 font-medium">
                    {droplets} Humidity
                </h2>
                <p className="pt-4 text-2xl">
                    {kelvinToCelsius(Number(humidity))}%
                </p>
            </div>
            <p className="text-sm text-gray-500">
                {getHumidityText(humidity)}
            </p>
        </div>
    );
};

export default Humidity;