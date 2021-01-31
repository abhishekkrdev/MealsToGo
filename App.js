import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StatusBar, SafeAreaView, StyleSheet, Text, View, Platform } from "react-native";

const isAndroid = Platform.OS === "android";

export default function App() {
  return (
    <React.Fragment>
      <SafeAreaView style={{ flex: 1, marginTop: isAndroid ? StatusBar.currentHeight : 0 }}>
        <View style={{ padding: 16, backgroundColor: "green" }}>
          <Text>search</Text>
        </View>
        <View style={{ flex: 1, padding: 16, backgroundColor: "blue" }}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({});
