import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/flatCards';
import ElevatedCards from './components/elevatedCards';
import FancyCard from './components/fancyCard';
import ActionCard from './components/actionCard';
import ContactList from './components/contactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ActionCard />
        <ContactList />
        <ElevatedCards />
        <FancyCard />
        <FancyCard />
        <FancyCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
