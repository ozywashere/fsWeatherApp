"use client";
import moment from "moment";
import React, {useEffect, useState} from 'react';
import {useGlobalContext} from "@/app/context/globalContext";
import {kelvinToCelsius} from "@/app/utils/misc";
import {clearSky, cloudyIcon, drizzleIcon, navigation, rainIcon, snowIcon} from "@/app/utils/icons";

const Temperature = () => {
    //state
    const [localTime, setLocalTime] = useState<string>("");
    const [currentDay, setCurrentDay] = useState<string>("");
    useEffect(() => {
        const interval = setInterval(() => {
            const localMoment = moment().utcOffset(timezone / 60);
            // custom format: 24 hours
            const formattedTime = localMoment.format("HH:mm:ss");
            //day of the week
            const day = localMoment.format("dddd");
            setLocalTime(formattedTime);
            setCurrentDay(day);
        }, 1000);
        return () => clearInterval(interval);
    }, [])

    const {forecast} = useGlobalContext();
    const {main, weather, name, timezone} = forecast;
    if (!forecast || !weather) {
        return <div>Loading ...</div>
    }
    const temp = kelvinToCelsius(main.temp);
    const minTemp = kelvinToCelsius(main.temp_min);
    const maxTemp = kelvinToCelsius(main.temp_max);




    const {main: weatherMain, description} = weather[0];
    const getIcon = () => {
        if (weatherMain === "Drizzle") {
            return drizzleIcon;
        }
        if (weatherMain === "Rain") {
            return rainIcon;
        }
        if (weatherMain === "Snow") {
            return snowIcon;
        }
        if (weatherMain === "Clear") {
            return clearSky;
        }
        if (weatherMain === "Clouds") {
            return cloudyIcon;
        }
        return clearSky;
    }

    //live time update

    return (
        <div
            className="pt-6 pb-5 border rounded-lg flex flex-col justify-between dark:bg-dark-grey shadow-sm dark:shadow-none px-4">
            <p className="flex justify-between items-center">
                <span className="font-medium">{currentDay}</span>
                <span className="font-medium">{localTime}</span>
            </p>
            <p className="flex items-center font-bold gap-x-2 pt-2">
                <span>{name}</span>
                <span>{navigation}</span>
            </p>
            <p className="py-10 text-9xl font-bold self-center">
                {temp}°
            </p>
            <div>
                <div>
                    <span>{getIcon()}</span>
                    <p className="pt-2 capitalize text-lg font-medium">{description}</p>
                </div>
                <p className="flex gap-x-2">
                    <span>Low: {minTemp}°</span>
                    <span>High: {maxTemp}°</span>
                </p>
            </div>
        </div>
    );
};

export default Temperature;