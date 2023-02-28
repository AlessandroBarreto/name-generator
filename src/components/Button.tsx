import "../styles/Button.css";

type ButtonColor = "primary" | "secondary";

interface ButtonProps {
  color: ButtonColor;
  text: string;
  onClick: () => void;
}

export const Button = ({ color, text, onClick }: ButtonProps) => {
  return (
    <div className="button-container">
      <button className={`button ${color}`} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};
