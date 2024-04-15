import React from 'react';
import { Modal, StyleSheet, View, Text, Button } from 'react-native';

const RequestTableCleaningModal = ({ visible, hideModal }) => {
    return (
      <Modal
        visible={visible}
        animationType="slide"
        transparent={true}
        onRequestClose={hideModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.text}>Request Table Cleaning</Text>
            <Button onPress={hideModal} title="Sit Guests" />
          </View>
        </View>
      </Modal>
    );
  };
  
  const styles = StyleSheet.create({
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      width: '80%',
      backgroundColor: 'white',
      padding: 20,
      shadowRadius: 10,
      borderRadius: 20,
    }, text: {
        fontFamily:"Regular",
    }
  });
  
  export default RequestTableCleaningModal;
  