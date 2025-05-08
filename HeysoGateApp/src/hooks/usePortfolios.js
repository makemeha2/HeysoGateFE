import { useEffect, useState } from "react";
import { fetchPortfolios } from "../api/portfolioApi";

function usePortfolios() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ignore = false;

        fetchPortfolios()
            .then((json) => {
                if (!ignore) {
                    setData(json);
                    setLoading(false);
                }
            })
            .catch((err) => {
                if (!ignore) {
                    setError(err);
                    setLoading(false);
                }
            });

        return () => { ignore = true; };
    }, []);

    return { data, loading, error };
}

export default usePortfolios;