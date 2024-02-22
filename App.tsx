
import React from 'react';
import { View } from 'react-native';
import Register from './component/Registration';
import UserList from './component/Userlist/UserListScreen';


const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <Register /> */}
      <UserList/>
    </View>
  );
};

export default App;

