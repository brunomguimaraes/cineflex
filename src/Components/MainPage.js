import './MainPage.css';
import { Link } from 'react-router-dom';

export default function MainPage({moviesList}) {
    return (
        <>
        <main className="wrapper">
            <div className="header">Selecione o filme</div>
            <ul className="movies-list">
                {moviesList.map(({posterURL, id}) => (
                    <Link to={`/sessoes/${id}`} key={id}>
                        <li className="movie-banner">
                            <img src={posterURL} alt="Pôster do filme"/>
                        </li>
                    </Link>
                ))}
            </ul>
        </main>
        </>
    )
}