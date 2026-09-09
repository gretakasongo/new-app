import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  welcomeTxt: {
    paddingTop: 50,
    color: "#1a1a1a",
    fontWeight: "bold",
    fontSize: 35,
    textAlign: "center",
  },
  headingTxt: {
    fontWeight: "bold",
  },
  inputBoxTxt: {
    borderWidth: 1,
    borderColor: "#1a1a1a",
    padding: 10,
    margin: 10,
  },
  mainImg: {
    width: "100%",
    height: 220,
    resizeMode: "cover",
    alignSelf: "center",
    marginTop: 0,

  },
  inputFlex: {
    justifyContent: "space-evenly",
    marginTop: 20,
  },

  redTxt: {
    color: "red",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },

  Blank: {
    fontSize: 0,
  },

  radioContainer: {
   justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 15,
  },

  radioButton: {
    flexDirection: "row",
    alignItems: "center",
  },

  radioLabel: {
    marginLeft: 4,
    fontSize: 13,
    fontWeight: "600",
    color: "#ffffff",
  },

  radioGroup: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#111111",
    borderRadius: 16,
    paddingVertical: 15,
    paddingHorizontal: 5,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  customButton: {
    backgroundColor: "#111111",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop:25,
    marginBottom: 30,
    alignSelf: "center",
    width: "70%",
    elevation:3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  customButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    zIndex: 1,
  },
  viewImage: {
    width: 350,
    height: 350,
    alignContent:"center"
  },
  container: {
    flex:0,
    justifyContent: 'center',
    alignItems: "center"
  },
  bannerImg: {
    height: 170,
    width: "100%",
    alignContent: "center",
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    marginHorizontal: 20,
  },
  textInput: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#7d7d7d',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  appContainer: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 15,
  },
  skillContainer: {
    flex: 5,
  },
  skillText: {
    fontSize: 15,
    marginVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#7d7d7d',
    paddingBottom: 5,
  },
  skillRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  deleteButton: {
    backgroundColor: '#111111',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  deleteButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
export default styles;