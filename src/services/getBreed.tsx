const api_key = process.env.CAT_API_KEY;

const getBreedImg = async (catBreed: string) => {
  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?breed_ids=${catBreed}&api_key=${api_key}`
    );
    const data = await response.json()
    return data
  } catch (error) {
    console.error('發生錯誤:', error);
    throw error;
  }
}

const getBreedInfo = async (catBreedId: string) => {
  try {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/${catBreedId}?api_key=${api_key}`
    );
    const data = await response.json()
    return data
  } catch (error) {
    console.error('發生錯誤:', error);
    throw error;
  }
}

export { getBreedImg, getBreedInfo };
