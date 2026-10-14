import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css"


const properties = [
  { id: 1, name: "Property 1", description: "Description for Property 1" },
  { id: 2, name: "Property 2", description: "Description for Property 2" },
  { id: 3, name: "Property 3", description: "Description for Property 3" },
];

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", padding: 16 }}>
      <View>
        <Text>
          Welcome to Expo Router. This is the index page. okay! got it. There
          are something new especial
        </Text>

        <TextInput
          placeholder="Enter text here..."
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 8,
            marginTop: 16,
          }}
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
          <Text
            style={{ color: "#fff", textAlign: "center", fontWeight: "bold" }}
          >
            Submit
          </Text>
        </TouchableOpacity>

        <FlatList
          data={properties}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                padding: 16,
                borderBottomWidth: 1,
                borderBottomColor: "#ccc",
              }}
            >
              <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
              <Text>{item.description} </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
