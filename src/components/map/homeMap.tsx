import { useEffect } from 'react';

const HomeMap = () => {
    useEffect(() => {
        let map;

        const GetMap = () => {
            map = new window.Microsoft.Maps.Map('#myMap', {
                center: new window.Microsoft.Maps.Location(6.913786563322844,79.94003557202149),
                zoom: 12,
            });

            // Load the Spatial Data Services module.
            window.Microsoft.Maps.loadModule('Microsoft.Maps.SpatialDataService', function () {
                // Create an array of state boundaries to retrieve.
                const states = ['Colombo'];

                // Create geoData request options to retrieve state boundaries.
                const stateRequestOptions = {
                    entityType: 'PopulatedPlace',
                    getAllPolygons: false,
                };

                // Use the GeoData API manager to get the State.
                window.Microsoft.Maps.SpatialDataService.GeoDataAPIManager.getBoundary(states, stateRequestOptions, map, function (data) {
                    if (data.results && data.results.length > 0) {
                        map.entities.push(data.results[0].Polygons);
                    }
                });

                // Create an array of country boundaries to retrieve.
                const countries = [''];

                // Create geoData request options to retrieve country boundaries.
                const countryRequestOptions = {
                    entityType: 'AdminDivision1',
                    getAllPolygons: false,
                };

                // Use the GeoData API manager to get the country boundaries.
                window.Microsoft.Maps.SpatialDataService.GeoDataAPIManager.getBoundary(countries, countryRequestOptions, map, function (data) {
                    if (data.results && data.results.length > 0) {
                        map.entities.push(data.results[0].Polygons);
                    }
                });
            });
        };

        GetMap();
    }, []);

    return (
        <>
            <h1 className={'mb-3 font-concert-one text-[var(--secondary-color)] font-bold text-4xl'}>Discover Our Zones</h1>
            <div id="myMap"></div>
        </>
    );
};

export default HomeMap;