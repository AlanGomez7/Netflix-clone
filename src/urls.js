import {API_KEY, apiBaseUrl} from './constants'
export const trending = `${apiBaseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`
export const originals = `/discover/tv?api_key=${API_KEY}&with_networks=213`
export const action = `/discover/movie?api_key=${API_KEY}&with_genres=28`