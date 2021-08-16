import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    useEffect(() => {
        document.title = "Página não encontrada"
     }, []);

    return (
        <>
            <h1>Página não encontrada</h1>

            <main>
                <Link to="/">
                    Home
                </Link>
            </main>
        </>
    );
    
}

export default NotFound;