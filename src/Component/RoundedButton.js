import "../css/RoundedButton.css";

export default function RoundedButton(props) {
  const { buttonText, onClick, extraClassName } = props;
  const className = `rounded-button ${extraClassName || ""}`;
  return (
    <button className={className} onClick={onClick} type="button">
      {buttonText}
    </button>
  );
}
