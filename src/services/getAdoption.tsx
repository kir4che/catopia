interface ParamType {
  city: number;
  age: string;
  sex: string;
}

const getAdoptionInfo = async (param: ParamType) => {
  try {
    let url = `https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&$top=20&animal_kind=貓`;

    if (param.city !== 0) url += `&animal_area_pkid=${param.city}`;
    if (param.age !== '') url += `&animal_age=${param.age}`;
    if (param.sex !== '') url += `&animal_sex=${param.sex}`;

    const response = await fetch(url);
    const data = await response.json()
    return data
  } catch (error) {
    console.error('發生錯誤:', error);
    throw error;
  }
}

export { getAdoptionInfo };
