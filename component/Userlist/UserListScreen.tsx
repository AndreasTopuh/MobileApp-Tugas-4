// UserListScreen.tsx

import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const renderUserItem = ({item}: {item: any}) => (
    <View style={styles.Container}>
      <View style={styles.ContainerData}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.email}>{item.email}</Text>
        <Text
          style={
            styles.address
          }>{`Address: ${item.address.street}, ${item.address.suite}, ${item.address.city}, ${item.address.zipcode}`}</Text>
        <Text style={styles.phone}>{`Phone: ${item.phone}`}</Text>
      </View>
    </View>
  );

  return (
    <>
      <Text style={styles.header}>Registration</Text>

      <FlatList 
        data={users}
        renderItem={renderUserItem}
        keyExtractor={item => item.id.toString()}
      />
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    // paddingHorizontal: 20,
    // paddingTop: 10,
    borderRadius: 15,
    backgroundColor: 'blue',
    margin: 20,
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  name: {
    fontSize: 16,
    color: '#666',
  },
  username: {
    fontSize: 16,
    color: '#666',
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  address: {
    fontSize: 16,
    color: '#666',
  },
  phone: {
    fontSize: 16,
    color: '#666',
  },
});

export default UserList;
