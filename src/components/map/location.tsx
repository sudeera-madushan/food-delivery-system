// AhTs1NKD6MM19FxIHxv3kseOeji1BrzSQfcutMcPm1xxa5delVftdkNjkOQRkZ0O
import {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {BackdropContext} from "../../context/orderRouteContext.ts";
interface Props {
    curLocation:{ latitude: number; longitude: number } | null,
    getLocation: Function,
    openDialog: Function
}
const MapLocation = (props:Props) => {
    const [selectedPoint, setSelectedPoint] = useState(null);
    const { backdropValue, updateBackdropValue } = useContext(BackdropContext);

    const logAddressAndZipcode = async (latitude: number, longitude: number): Promise<void> => {
        props.openDialog(false);
        updateBackdropValue(true)
        try {
            const apiKey = 'AhTs1NKD6MM19FxIHxv3kseOeji1BrzSQfcutMcPm1xxa5delVftdkNjkOQRkZ0O';
            const apiUrl = `http://dev.virtualearth.net/REST/v1/Locations/${latitude},${longitude}?key=${apiKey}`;
            const response = await axios.get(apiUrl);

            const resourceSet = response.data.resourceSets[0];
            if (resourceSet && resourceSet.resources.length > 0) {
                const location = resourceSet.resources[0];
                const address = location.address.formattedAddress;
                const zipcode = location.address.postalCode;
                if (location.address.addressLine){
                    console.log(latitude,longitude)
                    props.getLocation({ latitude: latitude, longitude: longitude }
                        ,address
                        ,zipcode)
                }else {
                    props.openDialog(true)
                }
            } else {

                props.getLocation(null,null,null)
            }
        } catch (error) {
            console.error('Error fetching geocode:', error);
        }
    };


    useEffect(() => {
        // Initialize Bing Maps
        const map = new window.Microsoft.Maps.Map('#myMap', {
            credentials: 'AhTs1NKD6MM19FxIHxv3kseOeji1BrzSQfcutMcPm1xxa5delVftdkNjkOQRkZ0O',
            center: new window.Microsoft.Maps.Location(props.curLocation?.latitude, props.curLocation?.longitude), // Default center (San Francisco coordinates)
            zoom: 13,
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
        </div>
    );
};

export default MapLocation;
