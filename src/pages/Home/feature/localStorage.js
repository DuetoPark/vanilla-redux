const LOCALSTORAGE_TODO = "toDos";

export const getLocalTodos = () => {
  return localStorage.getItem(LOCALSTORAGE_TODO);
};

export const updateLocalStorage = (toDos) => {
  localStorage.setItem(LOCALSTORAGE_TODO, JSON.stringify(toDos));
};
