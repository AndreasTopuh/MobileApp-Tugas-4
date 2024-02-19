// App.js

import React from 'react';
import {View} from 'react-native';
import UserList from './component/Userlist/UserListScreen';
// import FancyCard from './component/Userlist/FancyCard';

const App = () => {
  return (
    <View>
      {/* <FancyCard /> */}
      <UserList />
    </View>
  );
};

export default App;
