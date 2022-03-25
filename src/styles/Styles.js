import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
  },
  textInput: {
    backgroundColor: "white",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
  avatarUrl: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  username: {
    fontWeight: "bold",
    fontSize: 20,
  },
  bio: {
    textAlign: "center",
    margin: 10,
  },
  userType: {
    fontWeight: "bold",
  },
  videoContainer: {
    borderWidth: 2,
    padding: 20,
    margin: 10,
  },
  videoOptionContainer: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
export default styles;
