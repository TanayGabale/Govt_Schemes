import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const PolicyContext = createContext();

const PolicyProvider = ({ children }) => {
    const [policies, setPolicies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPolicies = async () => {
            try {
                const response = await axios.get('/api/policies');
                setPolicies(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPolicies();
    }, []);

    return (
        <PolicyContext.Provider value={{ policies, loading, error }}>
            {children}
        </PolicyContext.Provider>
    );
};

export { PolicyContext, PolicyProvider };