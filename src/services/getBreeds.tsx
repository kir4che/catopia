const api_key = process.env.CAT_API_KEY;

const getCatBreeds = async () => {
  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/breeds?limit=20&page=0&api_key=${api_key}`
    );
    const data = await response.json()
    return data
  } catch (error) {
    console.error('發生錯誤:', error);
    throw error;
  }
}