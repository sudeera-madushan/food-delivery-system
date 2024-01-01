export const loadBingApi = (apiKey: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        script.src = `https://www.bing.com/api/maps/mapcontrol?key=${apiKey}&callback=bingMapsCallback`;
        script.onerror = reject;
        window['bingMapsCallback'] = () => {
            resolve();
        };
        document.body.appendChild(script);
    });
};
