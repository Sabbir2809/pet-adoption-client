// set token in local storage
export const setToLocalStorage = (key: string, token: string) => {
  return localStorage.setItem(key, token);
};

// get token from local storage
export const getFromLocalStorage = (key: string) => {
  return localStorage.getItem(key);
};

// remove user from localStorage
export const removeFromLocalStorage = (key: string) => {
  return localStorage.removeItem(key);
};
