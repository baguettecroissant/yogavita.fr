"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type CityData = {
    name: string;
    count: number;
    lat: number;
    lng: number;
    slug: string;
};

// Leaflet types
type LeafletMap = {
    setView: (latlng: [number, number], zoom: number) => void;
    remove: () => void;
};

export function FranceMap({ cities }: { cities: CityData[] }) {
    const [activeCity, setActiveCity] = useState<CityData | null>(null);
    const [mapReady, setMapReady] = useState(false);

    useEffect(() => {
        // Dynamic import to avoid SSR issues
        const initMap = async () => {
            const L = (await import("leaflet")).default;

            // Inject Leaflet CSS via link tag
            if (!document.getElementById("leaflet-css")) {
                const link = document.createElement("link");
                link.id = "leaflet-css";
                link.rel = "stylesheet";
                link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
                document.head.appendChild(link);
                // Wait briefly for CSS to load
                await new Promise((r) => setTimeout(r, 100));
            }
            const container = document.getElementById("france-map");
            if (!container || (container as HTMLElement & { _leaflet_id?: number })._leaflet_id) return;

            const map = L.map("france-map", {
                zoomControl: true,
                scrollWheelZoom: false,
            }).setView([46.603354, 2.3], 5.5);

            // Stylish dark tile layer
            L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
                maxZoom: 19,
            }).addTo(map);

            // Custom marker icon
            const studioIcon = L.divIcon({
                className: "studio-marker",
                html: `<div class="studio-marker-inner"></div>`,
                iconSize: [24, 24],
                iconAnchor: [12, 12],
                popupAnchor: [0, -12],
            });

            // Add markers
            cities.forEach((city) => {
                const marker = L.marker([city.lat, city.lng], { icon: studioIcon })
                    .addTo(map);

                marker.bindPopup(`
                    <div style="text-align:center; font-family: inherit; padding: 4px 0;">
                        <strong style="font-size: 16px; display: block; margin-bottom: 4px;">${city.name}</strong>
                        <span style="color: #78716c; font-size: 13px;">${city.count} studio${city.count > 1 ? "s" : ""}</span>
                        <br/>
                        <a href="/studios/${city.slug}" style="color: #c2410c; font-weight: 600; text-decoration: none; font-size: 13px; margin-top: 6px; display: inline-block;">
                            Explorer →
                        </a>
                    </div>
                `);

                marker.on("mouseover", () => marker.openPopup());
            });

            setMapReady(true);
        };

        initMap();
    }, [cities]);

    return (
        <div className="relative">
            {/* Map Container */}
            <div
                id="france-map"
                className="w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden border border-stone-200 shadow-lg z-0"
            />

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-md border border-stone-100 z-[1000]">
                <div className="flex items-center gap-2 text-sm text-stone-600">
                    <div className="w-3 h-3 rounded-full bg-terracotta-500" />
                    <span className="font-medium">{cities.length} villes</span>
                    <span className="text-stone-400">·</span>
                    <span>{cities.reduce((s, c) => s + c.count, 0)} studios</span>
                </div>
            </div>

            {/* Map Styles */}
            <style jsx global>{`
                .studio-marker {
                    background: transparent !important;
                    border: none !important;
                }
                .studio-marker-inner {
                    width: 20px;
                    height: 20px;
                    background: #c2410c;
                    border: 3px solid white;
                    border-radius: 50%;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
                    transition: transform 0.2s ease;
                    cursor: pointer;
                }
                .studio-marker-inner:hover {
                    transform: scale(1.3);
                }
                .leaflet-popup-content-wrapper {
                    border-radius: 12px !important;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.12) !important;
                    border: 1px solid #e7e5e4 !important;
                }
                .leaflet-popup-tip {
                    box-shadow: none !important;
                }
                #france-map {
                    background: #faf8f5;
                }
            `}</style>
        </div>
    );
}
