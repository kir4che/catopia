interface ParamType {
  sex: string;
  location: string
}

const getLostInfo = async (param: ParamType) => {
  try {
    let url = `https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=IFJomqVzyB0i&$top=20&寵物別=貓`;

    if (param.sex !== '') url += `&性別=${param.sex}`;
    if (param.location !== '') url += `&遺失地點=${param.location}`;


    const response = await fetch(url);
    const data = await response.json()
    return data
  } catch (error) {
    console.error('發生錯誤:', error);
    throw error;
  }
}

export { getLostInfo };
