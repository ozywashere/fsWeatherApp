"use client"
import React from 'react';
import {useGlobalContext} from "@app/context/globalContext";
import {thermometer} from "@app/utils/icons";
import {kelvinToCelsius} from "@app/utils/misc";
import {Skeleton} from "@components/ui/skeleton";

const FeelsLike = () => {
    const {forecast} = useGlobalContext();
    if(!forecast || !forecast?.main || !forecast?.main?.feels_like){
    return <Skeleton   className="w-full h-[12rem]" />;
    }

    const {feels_like,temp_min,temp_max} = forecast.main;
    const feelsLike = feels_like;
    const feelsLikeText =(feelsLike:number,minTemp:number,maxTemp:number)=>{
        const avgTemp = (minTemp+maxTemp)/2;
        if(feelsLike<avgTemp-5){
            return "Feels significantly colder than actual temperature";
        } else if(feelsLike<avgTemp -2){
            return "Feels colder than actual temperature";
        }
        else if(feelsLike>avgTemp+5){
            return "Feels significantly warmer than actual temperature";
        }
        else if(feelsLike>avgTemp+2){
            return "Feels warmer than actual temperature";
        }
        else{
            return "Feels like actual temperature";
        }
    }
    const feelsLikeDescription = feelsLikeText(feelsLike,temp_min,temp_max);

    return (
        <div className="pt-6 pb-5 h-[12rem] px-4 border rounded-lg flex flex-col gap-8 dark:bg-dark-grey shadow-sm dark:shadow-none">
            <div className="top">
                <h2 className="flex items-center gap-2 font-medium">
                    {thermometer} Feels Like
                </h2>
                <p className="pt-4 text-2xl">
                    {kelvinToCelsius(feelsLike)}°C
                </p>
            </div>
            <p className="text-sm text-gray-500">
                {feelsLikeDescription}
            </p>
        </div>
    );
};

export default FeelsLike;