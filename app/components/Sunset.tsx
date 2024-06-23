"use client"
import {useGlobalContext} from '@/app/context/globalContext';
import {Skeleton} from "@/components/ui/skeleton";
import React from "react";
import {unixToTime} from "@/app/utils/misc";
import {sunRiseIcon, sunsetIcon} from "@/app/utils/icons";
import {Progress} from "@/components/ui/progress";

const Sunset = () => {
    const {forecast} = useGlobalContext();
    // check if airQuality is available
    if (!forecast || !forecast?.sys || !forecast?.sys?.sunset) {
        return <Skeleton className="h-[12rem] w-full" />;
    }
    const times = forecast?.sys?.sunset;
    const timezone = forecast?.timezone;

    const sunsetTime = unixToTime(times, timezone);
    const sunriseTime = unixToTime(forecast?.sys?.sunrise, timezone);

    return (
        <div
            className="pt-6 pb-5 h-[12rem] px-4 border rounded-lg flex flex-col gap-8 dark:bg-dark-grey shadow-sm dark:shadow-none">
            <div className="top">
                <h2 className="flex items-center gap-2 font-medium">{sunsetIcon} Sunset </h2>
                <p className=" text-2xl">{sunsetTime}</p>
            </div>
            <div className="bottom">
                <h2 className="flex items-center gap-2 font-medium ">{sunRiseIcon} Sunrise </h2>
                <p className="text-2xl">{sunriseTime}</p>
            </div>
        </div>
    );
};

export default Sunset;