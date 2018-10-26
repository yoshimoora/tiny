module.exports = function tiny(string) {
    if (typeof string !== "string") throw new TypeError("is not string");
    return string.replace(/\s/g, "");
};