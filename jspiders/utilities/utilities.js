import { useEffect, useState } from "react";
import { AxiousInstance } from "../src/Routes/axiousInstance";


export const useApi = (endpoint) => {
  const [data, setData] = useState(null);
  async function getData() {
    let response = await AxiousInstance.get(endpoint);
    setData(response.data)
    
    }
  useEffect(()=>{
    getData();  
  },[endpoint])
  return data
};