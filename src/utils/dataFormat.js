export function padNimoerId(id) {
  return id.toString().padStart(3, "0");
}

export function dataFormatter(jsonData, dataField, fields, extras) {
  let dataArray = [];
  for (let i = 0; i < fields.length; ++i) {
    let data = jsonData[fields[i]];
    let dataObject = {
      ...extras[i],
      [dataField]: data,
    };
    dataArray.push(dataObject);
  }
  return dataArray;
}
