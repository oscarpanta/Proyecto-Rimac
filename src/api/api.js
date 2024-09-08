export const fetchUser = async () => {
    const response = await fetch("https://rimac-front-end-challenge.netlify.app/api/user.json");
    return response.json();
  };
  
  export const fetchPlans = async () => {
    const response = await fetch("https://rimac-front-end-challenge.netlify.app/api/plans.json");

    return response.json();
  };