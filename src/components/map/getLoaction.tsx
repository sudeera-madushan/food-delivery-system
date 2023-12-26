import React, { useState } from 'react';
import axios from 'axios';

const GeocodingComponent: React.FC = () => {
  const [latitude, setLatitude] = useState<string>('');
  const [longitude, setLongitude] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [zipcode, setZipcode] = useState<string>('');

  const handleGeocode = async () => {
    try {
      const apiKey = 'AhTs1NKD6MM19FxIHxv3kseOeji1BrzSQfcutMcPm1xxa5delVftdkNjkOQRkZ0O';
      const apiUrl = `http://dev.virtualearth.net/REST/v1/Locations/${latitude},${longitude}?key=${apiKey}`;
      const response = await axios.get(apiUrl);

      const resourceSet = response.data.resourceSets[0];
      if (resourceSet && resourceSet.resources.length > 0) {
        const location = resourceSet.resources[0];
        setAddress(location.address.formattedAddress);
        setZipcode(location.address.postalCode);
      } else {
        setAddress('Address not found');
        setZipcode('ZIP code not found');
      }
    } catch (error) {
      console.error('Error fetching geocode:', error);
    }
  };

  return (
    <div>
      <label>
        Latitude:
        <input type="text" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
      </label>
      <br />
      <label>
        Longitude:
        <input type="text" value={longitude} onChange={(e) => setLongitude(e.target.value)} />
      </label>
      <br />
      <button onClick={handleGeocode}>Get Address and ZIP Code</button>
      <br />
      <div>
        <strong>Address:</strong> {address}
      </div>
      <div>
        <strong>ZIP Code:</strong> {zipcode}
      </div>
    </div>
  );
};

export default GeocodingComponent;
