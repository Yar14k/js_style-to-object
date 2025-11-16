'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const newStyleString = sourceString.split(';');
  const clearStyleString = newStyleString.filter((clearString) => {
    return clearString.trim().length > 0;
  });
  const filtering = clearStyleString.map((a) => {
    const [key, value] = a.split(':');

    return {
      key: key.trim(),
      value: value.trim(),
    };
  });
  const result = {};

  filtering.forEach(({ key, value }) => {
    result[key] = value;
  });

  return result;
}

module.exports = convertToObject;
