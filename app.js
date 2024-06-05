import React from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My Profile Page</Text>
      </View>
      
      {/* Image Display */}
      <Image 
        source={require('./assets/profile.png')} 
        style={styles.profileImage}
      />
      
      {/* Information Section */}
      <ScrollView style={styles.infoSection}>
        <Text style={styles.infoText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <Text style={styles.infoText}>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        <Text style={styles.infoText}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</Text>
        <Text style={styles.infoText}>Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</Text>
        <Text style={styles.infoText}>In voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
      </ScrollView>
      
      {/* Input Form */}
      <View style={styles.formSection}>
        <TextInput 
          style={styles.input} 
          placeholder="Enter your name" 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Enter your comment" 
        />
        <Text style={styles.submitButton}>Submit</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#6200EE',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileImage: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  infoSection: {
    flex: 1,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
  formSection: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  submitButton: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#6200EE',
    color: '#fff',
    borderRadius: 5,
    fontWeight: 'bold',
  },
});
