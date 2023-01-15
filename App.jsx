import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  Alert,
  SafeAreaView,
  TextView,
  TextInput,
  SliderBase,
  TouchableHighlight,
} from "react-native";

const BudgetBalancer = () => {
  /* 
  CartItem {
    name: string,
    price: number,
    quantity: number,
  }
  */

  const [shoppingCart, setShoppingCart] = useState([]); // A list of CartItem
  const [showPopup, setShowPopup] = useState(false); // A boolean to show/hide the popup
  const [showBudgetPopup, setBudgetPopup] = useState(false);

  const [itemName, onChangeItemName] = React.useState("");
  const [itemPrice, onChangeItemPrice] = React.useState(0);
  const [itemBudget, onChangeBudget] = React.useState(0);
  const [budget, setBudget] = React.useState(0);
  const [total, setTotal] = useState(0);
  //const [tax, setTax] = useState(0);

  const mySubmitFunction = () => {
    let newCartItem = {
      name: itemName,
      price: itemPrice,
      quantity: 1,
    };
    setShoppingCart([...shoppingCart, newCartItem]);
    setShowPopup(false);
  };

  const myBudgetFunction = () => {
    console.log(budget);
    setBudget(budget);

    setBudgetPopup(false);
  };

  const myDeleteFunction = (item) => {
    shoppingCart.pop();

    setShoppingCart([...shoppingCart]);
  };

  const createTwoButtonAlert = () =>
    Alert.alert("Too Much!", "Your total is over the budget", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  useEffect(() => {
    let total = 0;
    shoppingCart.forEach((item) => {
      total += parseFloat(item.price);
      if (total > budget) {
        createTwoButtonAlert();
      }
      //tax = total * 1.095
    });
    setTotal(total);
    //setTax(tax);
  }, [shoppingCart]);

  return (
    <>
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.baseText}>Budget Balancer</Text>
        <Button
          title="Input Grocery Item"
          onPress={() => {
            setShowPopup(true);
          }}
        />

        {showPopup && (
          <SafeAreaView>
            <TextInput
              style={styles.input}
              onChangeText={onChangeItemName}
              value={itemName}
              placeholder="Enter grocery name"
              clearButtonMode="always"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeItemPrice}
              value={itemPrice}
              placeholder="Enter price"
              keyboardType="numeric"
              clearButtonMode="always"
            />
            <Button
              title="Confirm"
              onPress={() => {
                mySubmitFunction();
              }}
            ></Button>
          </SafeAreaView>
        )}
        <View>
          {shoppingCart.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  alignContent: "flex-start",
                  justifyContent: "space-between",
                  textAlign: "left",
                }}
              >
                <Text style={styles.groceryText}>{item.name}</Text>
                <Text style={styles.groceryText}> ${item.price}</Text>
              </View>
            );
          }, [])}
        </View>
        <Button
          title="Delete Recent Item"
          color="red"
          onPress={() => {
            myDeleteFunction();
          }}
        ></Button>
        <Text style={styles.totalText}>Total: ${total}</Text>
        <Text style={styles.totalText}>Budget: ${budget}</Text>
      </View>
      <Button
        title="Input Budget"
        color="green"
        onPress={() => {
          setBudgetPopup(true);
        }}
      ></Button>
      {showBudgetPopup && (
        <SafeAreaView>
          <TextInput
            style={styles.input}
            onChangeText={(budget) => setBudget(budget)}
            value={budget}
            placeholder="Enter Budget Price"
            keyboardType="numeric"
            clearButtonMode="always"
          />
          <Button
            title="Confirm"
            onPress={() => {
              myBudgetFunction();
            }}
          ></Button>
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontWeight: "bold",
    fontSize: 50,
    textAlign: "center",
    marginTop: 60,
  },
  groceryText: {
    fontSize: 30,
    justifyContent: "space-between",
    alignContent: "center",
  },
  totalText: {
    marginTop: 10,
    fontSize: 50,
    position: "relative",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  buttonText: {
    fontSize: 80,
    color: "red",
  },
});

export default BudgetBalancer;
