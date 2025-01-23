// Use fake timers so `output` values remain accurate as time goes by:
// see https://jestjs.io/blog/2020/05/05/jest-26#new-fake-timers
// see https://jestjs.io/docs/jest-object#jestsetsystemtimenow-number--date
// see https://testing-library.com/docs/using-fake-timers/

// Add to a unit test that needs a fixed "new Date()":
/*
beforeEach(() => {
  jest.useFakeTimers("modern");
  jest.setSystemTime(new Date(mockedDate));
});

afterEach(() => {
  jest.useRealTimers();
});
*/

const mockedDate = "2023-03-27T22:30:00.000Z";

export default mockedDate;
