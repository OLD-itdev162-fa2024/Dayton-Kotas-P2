import axios from "axios";

const BASE_URL = "http://localhost:3001";

export const fetchFlips = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/flips`);
    return response.data || []; 
  } catch (error) {
    console.error("Error fetching flips:", error);
    return []; 
  }
};

export const createFlip = async (outcome) => {
  try {
    const response = await axios.post(`${BASE_URL}/flips`, { outcome });
    return response.data;
  } catch (error) {
    console.error("Error creating a flip:", error);
  }
};

export const deleteFlip = async (flipId) => {
  try {
    await axios.delete(`${BASE_URL}/flips/${flipId}`);
  } catch (error) {
    console.error("Error deleting flip:", error);
  }
};
