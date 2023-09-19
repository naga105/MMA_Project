module.exports = {
   root: true,
   extends: '@react-native',
   rules: {
      'prettier/prettier': [
         'error',
         {
            endOfLine: 'off',
            singleQuote: true,
            parser: 'flow',
         },
      ],
   },
};
