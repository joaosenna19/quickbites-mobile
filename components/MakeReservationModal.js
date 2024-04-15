import React from 'react';
import { Modal, StyleSheet, View, Text, Button } from 'react-native';

const MakeReservationModal = ({ visible, hideModal }) => {
    return (
      <Modal
        visible={visible}
        animationType="slide"
        transparent={true}
        onRequestClose={hideModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.text}>Make Reservation Modal!</Text>
            <Button onPress={hideModal} title="Make reservation" />
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
      height:"80%",
      width: '90%',
      justifyContent:"center",
      backgroundColor: 'white',
      padding: 20,
      shadowRadius: 10,
      borderRadius: 20,
    }, text: {
        fontFamily:"Regular",
    }
  });
  
  export default MakeReservationModal;
  