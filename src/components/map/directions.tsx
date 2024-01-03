import {useContext, useEffect} from 'react';
import ParentContext from "../../context/orderRouteContext.ts";
const BingMapComponent = () => {
    const { parentValue, updateParentValue } = useContext(ParentContext);

    const handleButtonClick = (time:number) => {
        // Call the function from the context to update the parent's value
        updateParentValue(time);
    };



    useEffect(() => {
        let map;
        let directionsManager;
        //
        // const updateTime = (time:number) => {
        //     // Call the function from the context to update the parent's value
        //     updateParentValue(time);
        // };
        const  getMap = async () => {
            map = new window.Microsoft.Maps.Map('#myMapDirection', {});

            window.Microsoft.Maps.loadModule('Microsoft.Maps.Directions', () => {
                directionsManager = new window.Microsoft.Maps.Directions.DirectionsManager(map);

                const seattleWaypoint = new window.Microsoft.Maps.Directions.Waypoint({ address: 'Reswehera, Sri Lanka' });
                directionsManager.addWaypoint(seattleWaypoint);

                const workWaypoint = new window.Microsoft.Maps.Directions.Waypoint({ address: 'Colombo, Sri Lanka' });
                directionsManager.addWaypoint(workWaypoint);
                const workWaypoint1 = new window.Microsoft.Maps.Directions.Waypoint({ address: 'Panadura, Sri Lanka' });
                directionsManager.addWaypoint(workWaypoint1);

                window.Microsoft.Maps.Events.addHandler(directionsManager, 'directionsError', directionsError);
                window.Microsoft.Maps.Events.addHandler(directionsManager, 'directionsUpdated', directionsUpdated);

                directionsManager.calculateDirections();
            });
        };

        const directionsUpdated = (e) => {
            const routeIdx = directionsManager.getRequestOptions().routeIndex;
            const distance = Math.round(e.routeSummary[routeIdx].distance * 100) / 100;
            const units = directionsManager.getRequestOptions().distanceUnit;
            const distanceUnits = units === window.Microsoft.Maps.Directions.DistanceUnit.km ? 'km' : 'miles';
            const time = Math.round(e.routeSummary[routeIdx].timeWithTraffic / 60);
            handleButtonClick(time)
            document.getElementById('routeInfoPanel').innerHTML = `Distance: ${distance} ${distanceUnits}<br/>Time with Traffic: ${time} minutes`;
        };

        const directionsError = (e) => {
            alert(`Error: ${e.message}\r\nResponse Code: ${e.responseCode}`);
        };

        if (!window.Microsoft || !window.Microsoft.Maps) {
            // Bing Maps API script not loaded yet, handle accordingly
        } else {
            // Bing Maps API script already loaded
             getMap();
        }
    }, []); // Empty dependency array to run the effect only once when the component mounts

    return (
        <div>
            <div id="myMapDirection" style={{ position: 'relative', width: '800px', height: '600px' }}></div>
            <div id='routeInfoPanel'></div>
        </div>
    );
};

export default BingMapComponent;
