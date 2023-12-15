const nimomentUrlBase = "http://localhost:3000/nimoment/api";
export const nimoerApi = `${nimomentUrlBase}/nimoer`;
export const departmentStatsApi = `${nimomentUrlBase}/department`;
export const personalStatsGeneralApi = `${nimomentUrlBase}/stats_general`;
export const personalStatsOfficeApi = `${nimomentUrlBase}/stats_office`;
export const personalStatsProgressApi = `${nimomentUrlBase}/stats_progress`;
export const personalStatsFieldApi = `${nimomentUrlBase}/stats_field`;
export const signinApi = `${nimomentUrlBase}/retired_dates`;
export const achievementApi = `${nimomentUrlBase}/achievements`;
export const wordcloudApi = `${nimomentUrlBase}/wordcloud`;
export const hasWordcloudApi = `${nimomentUrlBase}/has_wordcloud`;

function getDefaultHeaders() {
  return {
    "Content-Type": "application/json",
  };
}

export function getBlob(url, onSuccess, onError) {
  let opts = {
    method: "GET",
    headers: getDefaultHeaders(),
    credentials: "include",
  };

  fetch(url, opts)
    .then((response) => {
      return response.blob();
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
  console.log(res);
  return await res.json();
}
