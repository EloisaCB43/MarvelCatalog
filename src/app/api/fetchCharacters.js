const axios = require("axios");

const fetchCharacters = async (offset) => {
  const res = await axios.get(
    "https://gateway.marvel.com:443/v1/public/characters?apikey=737b6c5f105f85210d2e95298a3b5c8f&hash=92403d10d3b9af4a9125291834b8cf66&ts=90&limit=10&offset=" +
      offset * 10
  );
  return res.data;
};

export default fetchCharacters;
