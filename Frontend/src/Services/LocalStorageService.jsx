

const getItem = (key) => JSON.parse(localStorage.getItem(key));
const setItem = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const removeItem = (key) => localStorage.removeItem(key);

export { getItem, setItem, removeItem };
