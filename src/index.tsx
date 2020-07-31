export default {
  multiply(a: number, b: number) {
    return Promise.resolve(a * b);
  },
  add(a: number, b: number) {
    return Promise.resolve(a + b);
  },
};
