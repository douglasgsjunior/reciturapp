import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const App = () => {
  const [activeButton, setActiveButton] = useState('page1');

  const handleButtonPress = (page) => {
    setActiveButton(page);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.navbarButton,
          activeButton === 'page1' && styles.activeButton,
        ]}
        onPress={() => handleButtonPress('page1')}
      >
        <Image
          source={require('./home.png')}
          style={[styles.icon, activeButton === 'page1' && styles.activeIcon]}
        />
        <Text>Início</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.navbarButton,
          activeButton === 'page2' && styles.activeButton,
        ]}
        onPress={() => handleButtonPress('page2')}
      >
        <Image
          source={require('./list.png')}
          style={[styles.icon, activeButton === 'page2' && styles.activeIcon]}
        />
        <Text>Lista</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.navbarButton,
          activeButton === 'page3' && styles.activeButton,
        ]}
        onPress={() => handleButtonPress('page3')}
      >
        <Image
          source={require('./tour-guide.png')}
          style={[styles.icon, activeButton === 'page3' && styles.activeIcon]}
        />
        <Text>Guia</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.navbarButton,
          activeButton === 'page4' && styles.activeButton,
        ]}
        onPress={() => handleButtonPress('page4')}
      >
        <Image
          source={require('./gear.png')}
          style={[styles.icon, activeButton === 'page4' && styles.activeIcon]}
        />
        <Text>Opções</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: '5.5%',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    zIndex: 1,
  },
  navbarButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeButton: {
    backgroundColor: '#DFDFDF',
    borderRadius: 24,
  },
  icon: {
    width: '40%',
    height: '40%',
    tintColor: '#5F5F5F',
  },
  activeIcon: {
    tintColor: '#000000',
  },
});

export default App;
