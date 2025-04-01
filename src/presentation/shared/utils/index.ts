import { countries, names } from "../mocks";

/**
 * Generates a random name from a predefined list of names.
 *
 * @returns {string} A randomly selected name.
 */
const generateName = (): string => names[Math.floor(Math.random() * names.length)];

/**
 * Generates a random age between 18 and 60, inclusive.
 *
 * @returns {number} A random integer representing an age.
 */
const generateAge = (): number => Math.floor(Math.random() * (60 - 18 + 1)) + 18;

/**
 * Generates a random country name from a predefined list of countries.
 *
 * @returns {string} A randomly selected country name.
 */
const generateCountry = (): string => countries[Math.floor(Math.random() * countries.length)];

export {
  generateAge,
  generateCountry,
  generateName
};
