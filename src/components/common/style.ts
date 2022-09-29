import * as Material from "@material-ui/core";

export const useLayoutStyles = Material.makeStyles((theme) => ({
  wrapper: { padding: 10 },
  header: { padding: 15, background: "black" },
  headerText: { color: "white", margin: 0, padding: 0, fontSize: 20 },
}));

export const useSearchStyles = Material.makeStyles((theme) => ({
  yellowPageMainBlock: { padding: "20px 0 20px 20px" },
  searchInput: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: { textAlign: "center" },
  formInput: {
    "& .MuiOutlinedInput-input": {
      textAlign: "left",
      padding: "10px 6px",
    },
    "&.MuiFormControl-root": {
      width: "100%",
      marginRight: "10px",
    },
  },
  submitBtn: {
    "&.MuiButton-text": {
      border: "1px solid",
      marginRight: 20,
    },
  },
  dataBlock: { marginTop: 30, display: "flex", flexWrap: "wrap" },
  dataSub: {
    display: "flex",
    flexDirection: "column",
    border: "1px solid",
    padding: 10,
    alignItems: "center",
    width: "232px",
    margin: "10px 20px 10px 0",
  },
  name: { padding: "0" },
  email: { fontSize: 12 },
  phone: { fontSize: 12 },
}));

export const usePagesStyles = Material.makeStyles((theme) => ({
  mainBlock: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    padding: "30px 0 20px",
    flexWrap: "wrap",
  },
  leftBlock: {
    width: "60%",
    border: "1px solid",
    marginRight: "50px",
    borderRadius: "4px",
  },
  rightBlock: {
    width: "30%",
    borderRadius: "4px",
    border: "1px solid",
    padding: 20,
    height: "30%",
  },
}));

export const useAddMemberStyles = Material.makeStyles((theme) => ({
  addMember: {},
  fromInputBlock: { marginBottom: 10 },
  label: { marginBottom: 5 },
  formInput: {
    "& .MuiOutlinedInput-input": {
      textAlign: "left",
      padding: "10px 6px",
    },
    "&.MuiFormControl-root": {
      width: "100%",
      marginTop: "5px",
    },
  },
  submitBtn: {
    "&.MuiButton-text": {
      border: "1px solid",
      marginLeft: 10,
    },
  },
  btnBlock: {
    display: "flex",
    justifyContent: "end",
    marginTop: 15,
  },
  required: {
    color: "red",
  },
}));
