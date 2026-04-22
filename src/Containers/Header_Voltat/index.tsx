import { Header_Voltat_Container } from "./style";

type Props = {
  onVoltar: () => void;
};

export const Header_Voltat = ({ onVoltar }: Props) => {
  return (
    <>
      <Header_Voltat_Container>
        <button type="button" onClick={onVoltar} aria-label="Voltar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 64 64"
            aria-hidden="true"
          >
            <circle
              cx="32"
              cy="32"
              r="30"
              fill="#16a34a"
              stroke="#15803d"
              strokeWidth="2"
            />
            <path
              d="M36 20L24 32L36 44"
              fill="none"
              stroke="#ffffff"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </Header_Voltat_Container>
    </>
  );
};
