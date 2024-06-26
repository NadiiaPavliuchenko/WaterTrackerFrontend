import { createSlice } from '@reduxjs/toolkit';
import {
  getCurrentMonthInfoThunk,
  getCurrentDayInfoThunk,
  addWaterThunk,
  deleteDrinkThunk,
  editDrinkThunk,
  editDailyNorm,
} from './waterOperations';
import { deleteUserAccount, logOutAPI } from '../auth/authOperations';

const initialState = {
  month: null,
  dayInfo: {
    consumedTimes: 0,
    consumedWaterPercentage: 0,
    dailyWaterGoal: 0,
    waterIntakes: [],
    entryDate: null,
  },
  registerDay: null,
  monthDataLoading: false,
  dayDataLoading: false,
  monthError: null,
  dayError: false,
  isAddDrinkLoading: false,
  isDeleting: false,
  isEditingDrink: false,
  isEditingNorm: false,
};

const waterSlice = createSlice({
  name: 'water',
  initialState,

  extraReducers: (builder) => {
    builder

      .addCase(getCurrentMonthInfoThunk.pending, (state) => {
        state.monthDataLoading = true;
        state.monthError = false;
        state.month = null;
      })
      .addCase(getCurrentMonthInfoThunk.fulfilled, (state, { payload }) => {
        state.monthDataLoading = false;
        state.month = payload;
      })
      .addCase(getCurrentMonthInfoThunk.rejected, (state, { payload }) => {
        state.monthDataLoading = false;
        state.monthError = payload;
      })
      .addCase(getCurrentDayInfoThunk.pending, (state) => {
        state.dayDataLoading = true;
        state.dayError = false;
      })
      .addCase(getCurrentDayInfoThunk.fulfilled, (state, { payload }) => {
        state.dayDataLoading = false;
        state.dayInfo = { ...payload };
        state.registerDay = payload.startDay;
      })
      .addCase(getCurrentDayInfoThunk.rejected, (state, { payload }) => {
        state.dayDataLoading = false;
        state.dayInfo = { ...initialState.dayInfo };
        state.dayError = payload;
      })
      .addCase(addWaterThunk.pending, (state) => {
        state.isAddDrinkLoading = true;
      })
      .addCase(addWaterThunk.fulfilled, (state, { payload }) => {
        state.isAddDrinkLoading = false;
        state.dayInfo = payload.newDailyWater;
      })
      .addCase(addWaterThunk.rejected, (state) => {
        state.isAddDrinkLoading = false;
      })
      .addCase(deleteDrinkThunk.pending, (state) => {
        state.isDeleting = true;
      })
      .addCase(deleteDrinkThunk.fulfilled, (state, { payload }) => {
        state.isDeleting = false;
        state.dayInfo = payload.newDailyWater;
      })
      .addCase(deleteDrinkThunk.rejected, (state) => {
        state.isDeleting = false;
      })
      .addCase(editDrinkThunk.pending, (state) => {
        state.isEditingDrink = true;
      })
      .addCase(editDrinkThunk.fulfilled, (state, { payload }) => {
        state.isEditingDrink = false;
        state.dayInfo = payload.newDailyWater;
      })
      .addCase(editDrinkThunk.rejected, (state) => {
        state.isEditingDrink = false;
      })

      .addCase(editDailyNorm.fulfilled, (state, { payload }) => {
        state.dayInfo = payload.newDailyWater;
        state.isEditingNorm = false;
      })
      .addCase(editDailyNorm.pending, (state) => {
        state.isEditingNorm = true;
      })
      .addCase(editDailyNorm.rejected, (state) => {
        state.isEditingNorm = false;
      })
      .addCase(logOutAPI.fulfilled, (state) => {
        console.log('delete in water');
        state.month = null;
        state.dayInfo = { ...initialState.dayInfo };
      })
      .addCase(deleteUserAccount.fulfilled, (state) => {
        state.month = null;
        state.dayInfo = { ...initialState.dayInfo };
      });
  },
});
export default waterSlice.reducer;
