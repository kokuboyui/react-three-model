module.exports = {
  '**/*.{ts,tsx}': ['yarn fix:eslint', 'git add --force'],
  '**/*.scss': ['yarn fix:stylelint', 'git add --force'],
  '**/*.{js,json,css}': ['yarn prettier', 'git add --force'],
};
