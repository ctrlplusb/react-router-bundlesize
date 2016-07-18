__Issue:__ https://github.com/reactjs/react-router/issues/3642

## Steps to reproduce

Run the following commands
```console
git clone https://github.com/ctrlplusb/react-router-bundlesize
cd react-router-bundlesize
npm install
npm run analyse
```

Then... 
- Browse to http://webpack.github.io/analyse/
- Select the `build/stats.json` file.
- Go to the "modules" section and look for `react-router` imports.  You will see imports for code that is not being used. e.g. createHashHistory.

## Expected Behavior

Don't include unnecessary modules from `react-router` and `history` in bundle output when following the guidelines from the [Minimizing Bundle Size](https://github.com/reactjs/react-router/blob/master/docs/guides/MinimizingBundleSize.md) docs.

## Actual Behavior

There are imports that I am not using/importing.  The below screenshot isn't the exhaustive list, but you can see references to `createHashHistory` for example whilst in my source I explicitly import `react-router/lib/browserHistory`.  A few others too.

<img width="640" alt="screenshot 2016-07-18 09 39 45" src="https://cloud.githubusercontent.com/assets/12164768/16909733/5d7ad786-4ccc-11e6-9133-67cc05e05c76.png">


