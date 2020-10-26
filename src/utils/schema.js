export const isDarkSchema = () => {
  if (!window.matchMedia)
    return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};
