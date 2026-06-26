const API_URL = import.meta.env.VITE_API_URL;

export const getCars = async () => {
  const url = `${API_URL}/cars`;

  console.log("API_URL:", API_URL);
  console.log("FETCH URL:", url);

  const response = await fetch(url);

  const text = await response.text();
  console.log("RAW RESPONSE:", text.slice(0, 200));

  if (!response.ok) {
    throw new Error(`Error fetching cars: ${response.status}`);
  }

  return JSON.parse(text);
};