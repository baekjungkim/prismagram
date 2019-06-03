import { adjectives, nouns } from "./words";

export const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * nouns.length);
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
};
