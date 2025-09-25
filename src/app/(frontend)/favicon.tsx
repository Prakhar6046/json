'use client';

import { useEffect } from 'react';
import { getClientSideURL } from '@/utilities/getURL';

interface FaviconData {
    favicon?: {
        url?: string;
    };
    WebsiteTitle?: string;
}

const Favicon = () => {
    useEffect(() => {
        const fetchFavicon = async () => {
            try {
                const res = await fetch(
                    `${getClientSideURL()}/api/globals/site-settings?depth=2&draft=false`
                );
                const data: FaviconData = await res.json();

                if (data?.favicon?.url) {
                    const faviconUrl = data.favicon.url;

                    // Remove existing favicons
                    const existingIcons = document.querySelectorAll("link[rel*='icon']");
                    existingIcons.forEach(icon => icon.remove());

                    // Add new favicon
                    const link = document.createElement('link');
                    link.rel = 'icon';
                    link.href = faviconUrl;
                    document.head.appendChild(link);
                }
                if (data?.WebsiteTitle) {
                    document.title = data?.WebsiteTitle || 'AWCWS';
                }
            } catch (error) {
                console.error('Failed to fetch favicon:', error);
            }
        };

        fetchFavicon();
    }, []);

    return null; // No need to render anything
};

export default Favicon;
