'use strict';

export const filters = {
  all: new RegExp(''),
  listeners: /^on.+/,
};

export const getInObject =(obj, ...keys) =>
  keys.reduce((agg, key): T => {
    if (obj.hasOwnProperty(key)) {
      agg[key] = obj[key];
    }
    return agg;
  }, {});

export const id =(x) => x;

export const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

export const dashify = (str) =>
  str.replace(/[\/\s\.\_\-]+/g, '-').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

export const camelCase = (str) =>
  dashify(str).replace(/-(\w)/g, (match, letter) => letter.toUpperCase());
