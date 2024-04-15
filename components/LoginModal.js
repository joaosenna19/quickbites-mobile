import React, { useState } from 'react';
import { Modal, StyleSheet, View, Text, Button } from 'react-native';
import { router } from 'expo-router';

const LoginModal = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Modal
        visible={visible}
        animationType="slide"
        transparent={true}
        onRequestClose={hideModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text>Log in to start your shift!</Text>
            <Button title="Login Bypass Button" onPress={() => {
              hideModal();
            }} />
          </View>
        </View>
      </Modal>
      <Button title="Start your shift!" onPress={() => router.push("home")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    shadowRadius: 10,
    width: '80%',
    alignItems: 'center', // Centers the content horizontally
  },
});

export default LoginModal;


