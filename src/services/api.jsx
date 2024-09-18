const getDataApi =() => {
  return fetch("https://hp-api.onrender.com/api/characters/house/gryffindor")
    .then(resp=> resp.json());
    };
    
  export default getDataApi;