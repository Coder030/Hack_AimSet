"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

const LocationComponent = () => {
  async function getLocation(lat, lon) {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
      );

      if (response.data.display_name) {
        return response.data.display_name;
      } else {
        return "Location not found";
      }
    } catch (error) {
      console.error("Error fetching location:", error);
      return null;
    }
  }
  const [location, setLocation] = useState(null);
  const [total, setTotal] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check for Geolocation support
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    // Request user's location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        setError(`Error getting location: ${error.message}`);
      }
    );
  }, []);
  useEffect(() => {
    if (location) {
      setTotal(getLocation(location.latitude, location.longitude));
    }
  }, [location]);

  return (
    <div>
      {error && <p>{error}</p>}
      {location && (
        <>
          <p>
            Latitude: {location.latitude}, Longitude: {location.longitude}
          </p>
          <p>total: {total}</p>
        </>
      )}
    </div>
  );
};

export default LocationComponent;
