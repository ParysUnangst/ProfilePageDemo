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
        source={require('./assets/images/Profile.png')} 
        style={styles.profileImage}
      />
      
 
      {/* Information Section */}
      <ScrollView style={styles.infoSection}>
        <Text style={styles.infoText}>Welcome to My application! Here, you will find a simple Profile Page using React and Expo.</Text>
        <Text style={styles.infoText}>I am currently a Junior at North Seattle College in the Application Development Program.</Text>
        <Text style={styles.infoText}>I am still very new to Expo but enjoying it thus far.</Text>
        <Text style={styles.infoText}>Please enjoy this simple web app and let me know if you have any questions or feedback.</Text>
        <Text style={styles.infoText}>Thank you</Text>
      </ScrollView>
      
      {/* Input Form */}
      <View style={styles.formSection}>
        <TextInput 
          style={styles.input} 
          placeholder="Parys Unangst" 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Welcome to my first Expo Page" 
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
