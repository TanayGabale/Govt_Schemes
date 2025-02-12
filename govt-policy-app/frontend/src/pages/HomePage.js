import React, { useContext, useEffect } from 'react';
import PolicyCard from '../components/PolicyCard';
import { PolicyContext } from '../context/PolicyContext';

const HomePage = () => {
    const { policies, fetchPolicies } = useContext(PolicyContext);

    useEffect(() => {
        fetchPolicies();
    }, [fetchPolicies]);

    return (
        <div className="homepage">
            <h1>Government Policies</h1>
            <div className="policy-list">
                {policies.length > 0 ? (
                    policies.map(policy => (
                        <PolicyCard key={policy._id} policy={policy} />
                    ))
                ) : (
                    <p>No policies available at the moment.</p>
                )}
            </div>
        </div>
    );
};

export default HomePage;