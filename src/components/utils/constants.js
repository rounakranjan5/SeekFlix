export const API_OPTIONS= {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + (import.meta.env.VITE_TMDB_KEY )
  }
};

export const CDN_POSTER_PATH="https://image.tmdb.org/t/p/w400/"

export const USER_AVATAR="https://i.pinimg.com/564x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg"

export const GEMINI_KEY = import.meta.env.VITE_GEMINI_KEY 