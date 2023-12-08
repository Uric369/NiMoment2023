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

function zeroPadToTwoDigits(num) {
  return num.toString().padStart(2, "0");
}

export function formatDateTimeHHMM(date) {
  if (typeof date === "string") {
    date = new Date(date);
  }

  const year = date.getFullYear();
  const month = zeroPadToTwoDigits(date.getMonth() + 1);
  const day = zeroPadToTwoDigits(date.getDate());

  const hour = zeroPadToTwoDigits(date.getHours());
  const minute = zeroPadToTwoDigits(date.getMinutes());

  return `${year}-${month}-${day} ${hour}:${minute}`;
}

export function formatDateTimeHHMMSS(date) {
  if (typeof date === "string") {
    date = new Date(date);
  }

  const year = date.getFullYear();
  const month = zeroPadToTwoDigits(date.getMonth() + 1);
  const day = zeroPadToTwoDigits(date.getDate());

  const hour = zeroPadToTwoDigits(date.getHours());
  const minute = zeroPadToTwoDigits(date.getMinutes());
  const second = zeroPadToTwoDigits(date.getSeconds());

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}
