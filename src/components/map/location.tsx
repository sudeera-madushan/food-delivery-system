// AhTs1NKD6MM19FxIHxv3kseOeji1BrzSQfcutMcPm1xxa5delVftdkNjkOQRkZ0O
import { useState, useEffect } from 'react';
import axios from 'axios';
const MapLocation = () => {
    const [selectedPoint, setSelectedPoint] = useState(null);


    const logAddressAndZipcode = async (latitude: number, longitude: number): Promise<void> => {
        try {
            const apiKey = 'AhTs1NKD6MM19FxIHxv3kseOeji1BrzSQfcutMcPm1xxa5delVftdkNjkOQRkZ0O';
            const apiUrl = `http://dev.virtualearth.net/REST/v1/Locations/${latitude},${longitude}?key=${apiKey}`;
            const response = await axios.get(apiUrl);

            const resourceSet = response.data.resourceSets[0];
            if (resourceSet && resourceSet.resources.length > 0) {
                const location = resourceSet.resources[0];
                const address = location.address.formattedAddress;
                const zipcode = location.address.postalCode;

                console.log('Address:', address);
                console.log('ZIP Code:', zipcode);
            } else {
                console.log('Address not found');
                console.log('ZIP code not found');
            }
        } catch (error) {
            console.error('Error fetching geocode:', error);
        }
    };


    useEffect(() => {
        // Initialize Bing Maps
        const map = new window.Microsoft.Maps.Map('#myMap', {
            credentials: 'AhTs1NKD6MM19FxIHxv3kseOeji1BrzSQfcutMcPm1xxa5delVftdkNjkOQRkZ0O',
            center: new window.Microsoft.Maps.Location(37.7749, -122.4194), // Default center (San Francisco coordinates)
            zoom: 10,
        });

        // Add click event handler to the map
        window.Microsoft.Maps.Events.addHandler(map, 'click', (e) => {
            const latitude = e.location.latitude;
            const longitude = e.location.longitude;

            // Reverse geocode to get address information (use Bing Maps REST API)
            // Display the address, zip code, and latitude/longitude
            // (You'll need to implement this part)

            setSelectedPoint({ latitude, longitude });
            logAddressAndZipcode(latitude,longitude);
        });
    }, []);

    return (
        <div>
            <div id="myMap" style={{ width: '100%', height: '400px'}}></div>
            {selectedPoint && (
                <div>
                    <p>Latitude: {selectedPoint.latitude}</p>
                    <p>Longitude: {selectedPoint.longitude}</p>
                    {/* Display address and zip code */}
                </div>
            )}
        </div>
    );
};

export default MapLocation;
