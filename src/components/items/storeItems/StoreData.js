export const getData = async () => {
  try {
    const response = await fetch(
      "https://academia-database.onrender.com/market",
      {
        method: "GET",
        mode: "cors",
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Fetch error:", response.statusText);
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export const getLogin = async () => {
  try {
    const response = await fetch(
      "https://gym-login-database.onrender.com/login389212",
      {
        method: "GET",
        mode: "cors",
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Fetch error:", response.statusText);
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.log(`Error: ${error}`);
    throw error;
  }
};
