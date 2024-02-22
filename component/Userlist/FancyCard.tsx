import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export const gereja = [
  {
    id: 1,
    // img: require('church1.jpg'), // Updated image path with correct file extension and relative path
    title: 'GMAHK Jemaat Mizpa',
    label: 'Girian, Kota Bitung',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat corrupti animi. Corporis, repellendus, maiores, itaque deserunt aut ipsa cupiditate modi mollitia ratione possimus rem eaque? Perspiciatis nulla sit similique.',
    footer: '12 mins away',
  },
  {
    id: 2,
    // img: require('./church2.jpg'), // Updated image path with correct file extension and relative path
    title: 'GMAHK Jemaat Mizpa',
    label: 'Girian, Kota Bitung',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat corrupti animi. Corporis, repellendus, maiores, itaque deserunt aut ipsa cupiditate modi mollitia ratione possimus rem eaque? Perspiciatis nulla sit similique.',
    footer: '12 mins away',
  },
  {
    id: 3,
    // img: require('./church1.jpg'), // Updated image path with correct file extension and relative path
    title: 'GMAHK Jemaat Mizpa',
    label: 'Girian, Kota Bitung',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit repellat corrupti animi. Corporis, repellendus, maiores, itaque deserunt aut ipsa cupiditate modi mollitia ratione possimus rem eaque? Perspiciatis nulla sit similique.',
    footer: '12 mins away',
  },
];

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Gereja Advent terdekat</Text>
      <View>
        {gereja.map(item => {
          return (
            <View style={[styles.card, styles.cardElevated]} key={item.id}>
              {/* <Image
                source={item.img}
                style={[styles.cardImage]} //
              /> */}

              <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardLabel}>{item.label}</Text>
                <Text style={styles.cardDescription}>{item.desc}</Text>
                <Text style={styles.cardFooter}>{item.footer}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  card: {
    // width: 350,
    height: 400,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 12,
    // marginRight: 15, // Added property for right side margin
  },
  cardElevated: {
    backgroundColor: 'white',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    width: '100%',
    marginBottom: 8,
    borderBottomRightRadius: 100,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardLabel: {
    color: 'black',
    fontSize: 18,
    marginBottom: 4,
  },
  cardDescription: {
    color: '#242B2E',
    marginBottom: 16,
    flexShrink: 1,
    marginTop: 6,
    fontSize: 14,
  },
  cardFooter: {
    color: 'black',
    fontSize: 12,
  },
});
