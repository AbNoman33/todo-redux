export const testRedux = (store) => (next) => (action) => {
  next(action);
  console.log("test middleware");
};
