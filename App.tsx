
import React from 'react';
import { View } from 'react-native';
import Register from './component/Registration';


const App: React.FC = () => {
  console.log("halo");
  return (
    <View style={{ flex: 1 }}>
      <Register />
    </View>
  );
};

export default App;

