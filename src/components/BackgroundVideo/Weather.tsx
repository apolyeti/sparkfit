import React from 'react';

const Sunny = () => {
  return (
    <div className="video-container">
      <video 
        autoPlay
        muted 
        loop 
        className="video">
            <source src="/sunny.mp4" type="video/mp4" />
            Your browser does not support the video tag.
      </video>
    </div>
  );
};

const Rainy = () => {
  return (
    <div className="video-container">
      <video 
        autoPlay
        muted 
        loop 
        className="video">
            <source src="/rainy.mp4" type="video/mp4" />
            Your browser does not support the video tag.
      </video>
    </div>
  );
};

interface WeatherProps {
    weather: string;
}

export default function Weather({ weather }: WeatherProps) {

    return (
        <div>
            {weather.toLowerCase().includes("sun") && <Sunny />}
            {weather.toLowerCase().includes("rain") && <Rainy />}
        </div>
    );
}

