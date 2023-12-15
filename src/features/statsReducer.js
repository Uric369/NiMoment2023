import { createSlice } from "@reduxjs/toolkit";

export const statsSlice = createSlice({
  name: "stats",
  initialState: {
    hasWordCloud: false,
    departmentStats: {
      numRequests: 0,
      numAuditions: 0,
      consumables: {
        numKeystonJacks: 0,
        numConnectors: 0,
        numPlates: 0,
      },
    },
    personalStats: {
      general: {
        office: 0,
        field: 0,
        numNewProgresses: 0,
        numApDebugs: 0,
      },
      office: {
        numIncomingCalls: 0,
        numIpAllocs: 0,
        numMacUpdates: 0,
        numVisitors: 0,
      },
      consumables: {
        numKeystonJacks: 0,
        numConnectors: 0,
        numPlates: 0,
      },
      progressUpdates: {
        earliest: "--:--",
        latest: "--:--",
      },
      hiFrequencies: {
        building: "",
        colleague: "",
      },
    },
  },
  reducers: {
    setHasWordCloud: (state, action) => {
      state.hasWordCloud = action.payload;
    },
    setDepartmentStats: (state, action) => {
      state.departmentStats = action.payload;
    },
    setPersonalStatsGeneral: (state, action) => {
      state.personalStats.general = action.payload;
    },
    setPersonalStatsOffice: (state, action) => {
      state.personalStats.office = action.payload;
    },
    setPersonalStatsConsumables: (state, action) => {
      state.personalStats.consumables = action.payload;
    },
    setPersonalStatsProgressUpdates: (state, action) => {
      state.personalStats.progressUpdates = action.payload;
    },
    setPersonalStatsHiFrequencies: (state, action) => {
      state.personalStats.hiFrequencies = action.payload;
    },
  },
});

export const {
  setHasWordCloud,
  setDepartmentStats,
  setPersonalStatsGeneral,
  setPersonalStatsOffice,
  setPersonalStatsConsumables,
  setPersonalStatsProgressUpdates,
  setPersonalStatsHiFrequencies,
} = statsSlice.actions;

export default statsSlice.reducer;
