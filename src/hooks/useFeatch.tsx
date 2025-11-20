// hooks/useFetch.ts
import { useEffect, useState } from 'react';

interface FetchResult<T> {
  data: T | null;
  error: Error | null;
  loading: boolean;
}

interface FetchOptions {
  populate?: string | string[];
}

const useFetch = <T = any>(url: string, options?: FetchOptions): FetchResult<T> => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                // Build URL with query parameters
                let finalUrl = url;
                if (options?.populate) {
                    const params = new URLSearchParams();
                    if (Array.isArray(options.populate)) {
                        options.populate.forEach((field, index) => {
                            params.append(`populate[${index}]`, field);
                        });
                    } else {
                        params.append('populate', options.populate);
                    }
                    finalUrl = `${url}?${params.toString()}`;
                }

                const res = await fetch(finalUrl);
                
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                
                const json: T = await res.json();
                setData(json);
            } catch (error) {
                setError(error as Error);
            } finally {
                setLoading(false);
            }
        };
        
        fetchData();
    }, [url, JSON.stringify(options)]); // Stringify options for dependency comparison
    
    return { loading, error, data };
};

export default useFetch;