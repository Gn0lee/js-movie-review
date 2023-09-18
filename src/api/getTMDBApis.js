import { tmdbApiWrapper } from './apiClient';
import { convertTMDBMovieDetailResponse, convertTMDBMovieListResponse } from './responseConverter';

export async function getMoviePopular(page) {
	const response = await tmdbApiWrapper.get('/3/movie/popular', { page, language: 'ko-KR' });

	return convertTMDBMovieListResponse(response);
}

export async function getSearchMovie(page, query) {
	const response = await tmdbApiWrapper.get('/3/search/movie', { page, language: 'ko-KR', query });

	return convertTMDBMovieListResponse(response);
}

export async function getMovieDetails(id) {
	const response = await tmdbApiWrapper.get(`/3/movie/${id}`, { language: 'ko-KR' });

	return convertTMDBMovieDetailResponse(response);
}
