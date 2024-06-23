"use client";
import React from 'react';
import {useGlobalContext} from '@/app/context/globalContext';
import {Skeleton} from "@/components/ui/skeleton";
import {thermo} from "@/app/utils/icons";
import {Progress} from "@/components/ui/progress";
import {airQualityIndexText} from "@/app/utils/misc";

const AirPollution = () => {
    const {airQuality} = useGlobalContext();
    // check if airQuality is available
    if (!airQuality || !airQuality.list || !airQuality.list[0] || !airQuality.list[0].main) {
        return <Skeleton className="h-[12rem] w-full col-span-2 md:col-span-full"/>
    }

    const airQualityIndex = airQuality.list[0].main.aqi;

    const filteredIndex = airQualityIndexText.find((item, index) => {
        return index === airQualityIndex
    })


    return (
        <div
            className="air-pollution col-span-full sm-2:col-span-2 md:col-span-2 xl:col-span-2 pt-6 h-[12rem] px-4 border rounded-lg flex flex-col gap-8 dark:bg-dark-grey shadow-sm pb-5 dark:shadow-none">
            <h2 className="flex items-center gap-2 font-medium">{thermo} Air Pollution </h2>
            <Progress value={airQualityIndex} max={100} className="progress"/>
            <p>
                Air Quality is <span className="font-semibold">
                {
                    filteredIndex?.description
                }.
                </span>
            </p>
        </div>
    );
};

export default AirPollution;