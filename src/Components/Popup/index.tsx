import {
  PopupOverlay,
  PopupContainer,
  PopupContent,
  PopupButton,
} from "./style";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

export const Popup = ({ isOpen, onClose, message }: PopupProps) => {
  if (!isOpen) return null;

  return (
    <PopupOverlay onClick={onClose}>
      <PopupContainer onClick={(e) => e.stopPropagation()}>
        <PopupContent>{message}</PopupContent>
        <PopupButton onClick={onClose}>OK</PopupButton>
      </PopupContainer>
    </PopupOverlay>
  );
};
