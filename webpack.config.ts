// import { container } from 'webpack';
//
// const deps = require('./package.json').dependencies;
//
// module.exports = {
//   output: {
//     publicPath: 'http://localhost:4201/',
//     uniqueName: 'angularSample',
//     scriptType: 'text/javascript',
//   },
//   optimization: {
//     runtimeChunk: false,
//   },
//   devServer: {
//     port: 4201,
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//     },
//     hot: true,
//   },
//   plugins: [
//     new container.ModuleFederationPlugin({
//       name: 'angularSample',
//       filename: 'remoteEntry.js',
//       exposes: {
//         AngularSampleModule: './src/loadApp.ts',
//       },
//       remotes: {},
//       shared: {
//         react: {
//           singleton: true,
//           requiredVersion: deps.react,
//         },
//         'react-dom/client': {
//           singleton: true,
//           requiredVersion: deps['react-dom'],
//         },
//         '@angular/core': { singleton: true, eager: true },
//         '@angular/common': { singleton: true, eager: true },
//         '@angular/router': { singleton: true, eager: true },
//         '@ngxs/store': { singleton: true, eager: true },
//       },
//     }),
//   ],
// };


const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');
const share = mf.share;

console.log('@@@@@@@@@@@@@@@@@@@@@@@@@');
const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: 'angularSample',
    publicPath: 'auto',
    scriptType: 'text/javascript',
  },
  optimization: {
    runtimeChunk: false,
  },
  devServer: {
    host: '0.0.0.0',
    port: 4201,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    hot: true,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      // library: { type: "module" },

      // For remotes (please adjust)
      name: 'angularSample',
      filename: 'remoteEntry.js',
      exposes: {
        './AngularLoadApp': './src/loadApp.ts',
      },


      shared: share({
        '@angular/core': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        '@angular/common': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        '@angular/common/http': { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        '@angular/router': { singleton: true, strictVersion: true, requiredVersion: 'auto' },

        ...sharedMappings.getDescriptors(),
      }),

    }),
    sharedMappings.getPlugin(),
  ],
};
