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
      <View>
        <Text>
          <Text style={styles.textInside}>
            <Text style={styles.tag}>Name: </Text>
            {item.name}
          </Text>
        </Text>
        <Text style={styles.textInside}>
          <Text style={styles.tag}>Username: </Text>
          {item.username}
        </Text>
        <Text style={styles.textInside}>
          <Text style={styles.tag}>Email: </Text>
          {item.email}
        </Text>
        <Text style={styles.textInside}>
          <Text style={styles.tag}>Address: </Text>
          {`Address: ${item.address.street}, ${item.address.suite}, ${item.address.city}, ${item.address.zipcode}`}
        </Text>
        <Text style={styles.textInside}>
          <Text style={styles.tag}>Phone: </Text>

          {`Phone: ${item.phone}`}
        </Text>
      </View>
    </View>
  );

  return (
    <>
      <Text style={styles.header}>Users List</Text>

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
    borderRadius: 15,
    backgroundColor: 'transparent',
    padding: 20,
    margin: 20,
    
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: -7,
  },
  header: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  tag: {
    fontWeight: 'bold',
    color: 'black',
  },
  textInside: {
    color: 'black',
  },
});

export default UserList;
