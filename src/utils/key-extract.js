// Key extraction for converting regular objects to null objects for Vue to wrap getters/setters on.
// Useful during development.

module.exports = (obj) => {
  const keys = Object.keys(obj);
  const ks = [];
  keys.map(k => ks.push(`${k}: null`));
  return ks.join(',\n');
};
