import { api } from "./client";

const RAW_BASE = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api');
const BACKEND_ORIGIN = RAW_BASE.replace(/\/?api\/?$/, '');
export const withBackend = (path) => path?.startsWith('/uploads') ? `${BACKEND_ORIGIN}${path}` : path;



export const getPokemonByName = async (name) => {
  const response = await api.get(`/pokemons/by-name/${encodeURIComponent(name)}`);
  return response.data;
};


