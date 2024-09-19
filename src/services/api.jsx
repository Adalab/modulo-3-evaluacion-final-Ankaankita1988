const getDataApi =() => {
  return fetch("https://hp-api.onrender.com/api/characters")
    .then(resp=> resp.json());
    };
    
  export default getDataApi;