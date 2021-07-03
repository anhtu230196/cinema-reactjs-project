export const useStyles = {
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundImage: `linear-gradient(
        180deg
        , #ff55a5bf, #fb787ec7)`,
    border: "1px solid #fff",
    boxShadow: "0 0 10px 0 black",
    padding: "40px 32px 30px",
    maxWidth: "90%",
    width: 565,
    textAlign: "center",
    color: "#fff",
  },
  dangNhapBody: {
    maxWidth: "90%",
    margin: "0 auto",
    marginTop: 20,
  },
  formItem: {
    marginBottom: 20,
    "& input": {
      width: "80%",
      padding: "15px 66px 15px 19px",
      textAlign: "left",
      backgroundColor: "hsla(0, 0%, 42.7%, 0.16)",
      border: 0,
      borderLeft: "2px solid var(--light-color)",
      fontSize: 15,
      letterSpacing: 1.5,
      color: "#fff",
      outline: 0,
      caretColor: "#fff",
      boxShadow: "0 6px 12px 0 rgba(0, 0, 0, 40%)",
      "&::placeholder": {
        color: "#fff",
      },
    },
  },
};
