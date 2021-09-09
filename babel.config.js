module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
          alias: {
            '@assets': './public/assets',
            '@components': './src/components',
            '@config': './src/config',
            '@hooks': './src/hooks',
            '@styles': './src/styles',
            '@shared': './src/shared',
            '@services': './src/services',
            '@routes': './src/routes',
            '@types': './src/types',
            '@interfaces': './src/interfaces',
            '@screens': './src/screens',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  };
};
