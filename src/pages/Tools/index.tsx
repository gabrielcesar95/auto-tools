import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Tools: React.FC = () => {
    useEffect(() => {
        document.title = 'Ferramentas';
    }, []);

    return (
        <>
            <h1>Ferramentas</h1>

            <main>
                <Link to="/">Home</Link>
            </main>
        </>
    );
};

export default Tools;
