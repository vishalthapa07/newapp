import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'Ram',
      status: 'Just an extra ordinary teacher',
      imageUrl:
        'https://skillprompt-website.s3.ap-south-1.amazonaws.com/assets/company_logo/logo.png',
    },
    {
      uid: 2,
      name: 'Hari',
      status: 'Just an extra ordinary carpenter',
      imageUrl:
        'https://skillprompt-website.s3.ap-south-1.amazonaws.com/assets/company_logo/logo.png',
    },
    {
      uid: 3,
      name: 'Sita',
      status: 'Just an extra ordinary doctor',
      imageUrl:
        'https://skillprompt-website.s3.ap-south-1.amazonaws.com/assets/company_logo/logo.png',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>contactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => {
          return (
            <View key={uid} style={styles.userCard}>
              <Image
                source={{
                  uri: imageUrl,
                }}
                style={styles.userImage}
              />
              <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8D3DAF',
    marginBottom: 3,
    borderRadius: 20,
    padding: 8,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  userStatus: {
    fontSize: 12,
    color: '#ffffff',
  },
});
