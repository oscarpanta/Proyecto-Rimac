import { useEffect, useState } from "react";
import { Plans } from "../components/Plans/Plans";
import { fetchPlans, fetchUser } from "../api/api";
export const Planes = () => {
  const [plans, setPlans] = useState([]);
  const [user, setUser] = useState([]);

  const getPlans = async () => {
    const data = await fetchPlans();
    setPlans(data);
    console.log(data)
  };

  const getUser = async () => {
    const data = await fetchUser();
    setUser(data);
    console.log(data)
  };
  useEffect(() => {
   
    getPlans();
    getUser();
  }, []);

  return (
    <div className="mx-auto">
      <Plans plans={plans} user={user}/>
    </div>
  )
}

