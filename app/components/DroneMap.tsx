'use client';

import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface DroneMapProps {
    onRouteUpdate?: (coordinates: [number, number][]) => void;
}

export function DroneMap({ onRouteUpdate }: DroneMapProps) {
    const mapContainer = useRef<HTMLDivElement>(null);
    const map = useRef<mapboxgl.Map | null>(null);
    const [markers, setMarkers] = useState<mapboxgl.Marker[]>([]);
    const [route, setRoute] = useState<mapboxgl.GeoJSONSource | null>(null);

    const markersRef = useRef<mapboxgl.Marker[]>([]);
    const routeRef = useRef<mapboxgl.GeoJSONSource | null>(null);

    useEffect(() => {
        markersRef.current = markers;
    }, [markers]);

    useEffect(() => {
        routeRef.current = route;
    }, [route]);

    useEffect(() => {
        if (!mapContainer.current) return;

        mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN'; // You'll need to get a token from Mapbox
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/satellite-streets-v12',
            center: [139.7673068, 35.6809591], // 東京
            zoom: 13,
            pitch: 45,
        });

        const updateRoute = () => {
            if (!routeRef.current || markersRef.current.length < 2) return;

            const coordinates = markersRef.current.map((marker) => {
                const lngLat = marker.getLngLat();
                return [lngLat.lng, lngLat.lat] as [number, number];
            });

            routeRef.current.setData({
                type: 'Feature',
                properties: {},
                geometry: {
                    type: 'LineString',
                    coordinates: coordinates,
                },
            });

            onRouteUpdate?.(coordinates);
        };

        map.current.on('load', () => {
            if (!map.current) return;

            map.current.addSource('route', {
                type: 'geojson',
                data: {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'LineString',
                        coordinates: [],
                    },
                },
            });

            map.current.addLayer({
                id: 'route',
                type: 'line',
                source: 'route',
                layout: {
                    'line-join': 'round',
                    'line-cap': 'round',
                },
                paint: {
                    'line-color': '#4F46E5',
                    'line-width': 3,
                    'line-opacity': 0.8,
                },
            });

            setRoute(map.current.getSource('route') as mapboxgl.GeoJSONSource);
        });

        map.current.on('click', (e) => {
            const marker = new mapboxgl.Marker({
                color: '#4F46E5',
                draggable: true,
            })
                .setLngLat([e.lngLat.lng, e.lngLat.lat])
                .addTo(map.current!);

            setMarkers((prev) => [...prev, marker]);
            updateRoute();
        });

        return () => {
            map.current?.remove();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="relative h-full w-full">
            <div ref={mapContainer} className="h-full w-full" />
            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-lg p-4 rounded-lg">
                <button
                    className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
                    onClick={() => {
                        markers.forEach((marker) => marker.remove());
                        setMarkers([]);
                        route?.setData({
                            type: 'Feature',
                            properties: {},
                            geometry: {
                                type: 'LineString',
                                coordinates: [],
                            },
                        });
                    }}
                >
                    経路をクリア
                </button>
            </div>
        </div>
    );
}
