export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // light mode palette settings
        }
      : {
          // dark mode palette settings
        }),
  },
});
