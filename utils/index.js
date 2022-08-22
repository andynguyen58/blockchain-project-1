const Utils = {
  getTimestamp: () => {
    return new Date().getTime().toString().slice(0, -3);
  },
};

export default Utils;
