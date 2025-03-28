import { useMovies } from '../hooks/useMovies';
import { MoveItem } from '../components/MovieItem';
import styles from './Movies.module.css';

export function Movies() {
	const movies = useMovies();
	return (
		<section className={styles.movies}>
			<h1>Filmes populares</h1>
			<div className={styles.moviesList}>
				{movies.map((movie) => (
					<MoveItem key={movie.id} movie={movie} />
				))}
			</div>
		</section>
	);
}
