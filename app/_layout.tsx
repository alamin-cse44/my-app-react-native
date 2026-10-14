import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", padding: 16 }}>
      <View>
        <Text>
          Welcome to Expo Router. This is the index page. okay! got it. there
          something new especial
        </Text>

        <TextInput
          placeholder="Enter text here..."
          style={{ borderWidth: 1, borderColor: "#ccc", padding: 8, marginTop: 16 }}
        />

        <TouchableOpacity
         onPress={() => alert("Button pressed!")}
          style={{
            backgroundColor: "#007AFF",
            padding: 12,
            borderRadius: 8,
            marginTop: 16,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
