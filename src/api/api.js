const BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const fetchUser = async () => {
    const response = await fetch(`${BASE_URL}/user.json`);
    return response.json();
  };
  
  export const fetchPlans = async () => {
    const response = await fetch(`${BASE_URL}/plans.json`);

    return response.json();
  };