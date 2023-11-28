const nimomentUrlBase = "https://nimo.sjtu.edu.cn/nimoment/api";
export const nimoerApi = `${nimomentUrlBase}/nimoer`;
export const departmentStatsApi = `${nimomentUrlBase}/department`;
export const personalStatsGeneralApi = `${nimomentUrlBase}/stats_general`;
export const personalStatsOfficeApi = `${nimomentUrlBase}/stats_office`;
export const personalStatsProgressApi = `${nimomentUrlBase}/stats_progress`;
export const personalStatsFieldApi = `${nimomentUrlBase}/stats_field`;

function getDefaultHeaders() {
  return {
    "Content-Type": "application/json",
  };
}

export function getRequest(url, onSuccess, onError) {
  let opts = {
    method: "GET",
    headers: getDefaultHeaders(),
    credentials: "include",
  };

  fetch(url, opts)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch((error) => {
      if (onError) {
        onError(error);
      }
    });
}

export async function getCurrentUser() {
  const res = await fetch("/kaleid/api/curuser");
  return await res.json();
}
