import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javascript 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://skillprompt-website.s3.ap-south-1.amazonaws.com/assets/company_logo/logo.png',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            accusantium quibusdam voluptate, est repellendus laboriosam culpa
            cum nesciunt quod. Illum enim tempora nihil perspiciatis eveniet
            nostrum voluptate inventore provident labore?
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.youtube.com')}>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.facebook.com')}>
            <Text style={styles.socialLinks}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    height: 260,
    borderRadius: 12,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#E07C24',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    height: 100,
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialLinks: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
  },
});
