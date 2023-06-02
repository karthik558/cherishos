const delay = (time, callback) => {
  setTimeout(function () {
    callback;
  }, time);
};

export default delay;
