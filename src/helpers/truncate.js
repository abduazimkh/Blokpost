const truncate = (string, max, suffix) => string.length > max ?
string.split("").slice(0, max).join("") + suffix : string

export {truncate}