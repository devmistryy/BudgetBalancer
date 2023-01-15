import React, {useState, useEffect} from 'react';
import {  View, Text, StyleSheet, Button} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';


export default function Homepage() {
  const {hasPermission, setHasPermission}=useState(null);
  const {scanned, setScanned}=useState(false);
  const {text, setText}=useState('Not yet Scanned')
  
  const askForCameraPermission=()=>{
    (async () =>{
      const {status} = await BarCodeScanner.requestPermissionAsync();
      setHasPermission(status=='granted')
    })()
  }

  useEffect(()=>{
    askForCameraPermission();
  }, []);

// Camera

const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  //Permission
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text >No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>)
  }

  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }} />
      </View>
      <Text style={styles.maintext}>{text}</Text>

      {scanned && <Button title={'Scan again?'} onPress={() => setScanned(false)} color='tomato' />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  maintext: {
    fontSize: 20,
    margin: 15,
  },
  barcodebox: {
    alignItems: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'
  }
});



