// import React from 'react';
// import { Provider } from 'react-redux';
// import store from './src/store';
// import MyApp from './index';

// function App() {
//   return (
//     <Provider store={store}>
//       <MyApp />
//     </Provider>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { Provider } from 'react-redux';
// import { View } from 'react-native-web';

import Navigation from './src/navigation/NavigationComponent';

import  {Store}  from './src/components/Store/Store'
import { persisted } from './src/components/Store/Store';
import { PersistGate } from 'redux-persist/integration/react';

// function Component() {
//   return <View />;
// }

function App() {
  // const [isLoadedApp, setIsLoadedApp] = useState(false);
  return (
 
  <Provider store={Store} >
    <PersistGate loading={null} persistor={persisted} >
      <Navigation />
    </PersistGate>
  </Provider>
  );
}

export default App;
