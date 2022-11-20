import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const getBook = async (id) => {
  const { data } = await axios.get(`${API_URL}/books/${id}`);

  return data;
};

export { getBook };
