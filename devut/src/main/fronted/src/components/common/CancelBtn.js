import { Button } from "react-bootstrap";

const CancelBtn = ({ text, btnFunc, btnStyle }) => {
  return (
    <Button
      style={{
        backgroundColor: "red",
        color: "white",
        border: "none",
        borderRadius: "5px",
        width: "60px",
        height: "30px",
        fontSize: "12px",
        fontWeight: "bold",
        textAlign: "center",
        cursor: "pointer",
        ...btnStyle,
      }}
      onClick={() => btnFunc()}
    >
      {text}
    </Button>
  );
};

export default CancelBtn;
