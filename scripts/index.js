import 'es6-promise/auto';

let dynamicallyLoadApp = import('./App/App.jsx');
dynamicallyLoadApp.then((App) => {
  App.renderTo(
    document.getElementById('root-content')
  );
  console.log('The app has started!');
});