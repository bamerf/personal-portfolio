module.exports = {
  extends: [
    'next/core-web-vitals',
    require.resolve('@bamerf/linter/eslint'),
    require.resolve('@bamerf/linter/eslint-typescript'),
    require.resolve('@bamerf/linter/eslint-react'),
    require.resolve('@bamerf/linter/eslint-next'),
  ],
};
