import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    
    return (
        <>
            <h1>Página Inicial</h1>

            <main>
                <section>
                    <ul>
                        <li>
                            <Link to="/tools">
                                Ferramentas
                            </Link>
                        </li>
                    </ul>
                </section>
            </main>
        </>
    );
    
}

export default Home;