const api_key = process.env.CAT_API_KEY;

const getCatBreeds = async (param: string) => {
  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/breeds?api_key=${api_key}${param}`
    );
    const data = await response.json()
    return data
  } catch (error) {
    console.error('發生錯誤:', error);
    throw error;
  }
}

export { getCatBreeds };
