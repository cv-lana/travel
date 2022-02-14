const getData = () => {
  return fetch('https://travel-d0bd7-default-rtdb.firebaseio.com/db.json')
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log(error);
    })
};
export default getData;