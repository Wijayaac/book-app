import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const formatPagination = (link, currentPage) => {
  return link
    .split(",")
    .map((link) => link.split(";"))
    .map((content) => {
      let page = content[0]
        .replace(/<[a-zA-Z]+:\/\/[a-zA-Z]+:3004\/[a-zA-Z]+\?_[a-zA-Z]+=/i, "")
        .replace(/&_[a-zA-Z]+=2>/, "")
        .replace(" ", "");
      return {
        page: page,
        text: content[1].replace(/ [a-zA-Z]+="/, "").replace(/"/, ""),
        disabled: parseInt(page) === parseInt(currentPage),
      };
    });
};

const getAllBooks = async (page) => {
  const limit = 2;
  const res = await axios.get(`${API_URL}/books?_page=${page}&_limit=${limit}`);
  let links = formatPagination(res.headers.link, page);
  return {
    data: res.data,
    links,
  };
};

const searchBooks = async (val) => {
  let res = await axios.get(`${API_URL}/books?name_like=${val}`);
  return {
    data: res.data,
  };
};

export { getAllBooks, formatPagination, searchBooks };
