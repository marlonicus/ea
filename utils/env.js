module.exports = key =>
  typeof window === "undefined" ? process.env[key] : window.env[key];
