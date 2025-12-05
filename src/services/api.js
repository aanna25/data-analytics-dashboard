const BASE_URL = "https://jsonplaceholder.typicode.com";

const fetchData = async (endpoint, errorMessage) => {
  const response = await fetch(`${BASE_URL}/${endpoint}`);

  if (!response.ok) {
    throw new Error(errorMessage);
  }
  return response.json();
};

export const fetchUsers = async () => {
  return fetchData("users", "Błąd pobierania użytkowników");
};

export const fetchPosts = async () => {
  return fetchData("posts", "Błąd pobierania postów");
};

export const fetchComments = async () => {
  return fetchData("comments", "Błąd pobierania komentarzy");
};
export const fetchTodos = async () => {
  return fetchData("todos", "Błąd pobierania todos");
};
