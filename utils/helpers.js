module.exports = {
  normalizeDate: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}`;
  },
};
