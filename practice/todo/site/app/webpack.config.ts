import 'webpack-dev-server'

export const mode = 'development'

export const entry = ['./src/index']

export const output = {
  path: `${__dirname}/dist`,
  filename: 'bundle.js',
}

export const module = {
  rules: [
    {
      test: /\.(ts|js)x?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-typescript', '@babel/preset-react'],
        },
      },
    },
  ],
}

export const resolve = {
  extensions: ['.ts', '.tsx', '.js', '.json'],
}
