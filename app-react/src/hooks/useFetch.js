import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);

                if (response.ok) {
                    const responseData = await response.json();
                    setData(responseData);
                } else {
                    throw new Error("no se pudieron obtener los datos");
                }
            } catch(error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        setLoading(true);
        fetchData();
    }, [])

    return { data, loading, error};
};