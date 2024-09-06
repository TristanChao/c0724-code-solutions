import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: ReactNode;
  isOpen: boolean;
  buttonRef?: React.RefObject<HTMLButtonElement> | null;
  onShadeClick: () => void;
};
export function Popup({ children, isOpen, buttonRef, onShadeClick }: Props) {
  const buttonRectangle = buttonRef?.current?.getBoundingClientRect();

  const top = buttonRectangle
    ? buttonRectangle.top + buttonRectangle.height
    : '50%';
  const left = buttonRectangle ? buttonRectangle.left : '50%';

  if (isOpen) {
    return createPortal(
      <>
        <div className="shade" onClick={onShadeClick}></div>
        <div className="menu-wrapper" style={{ top, left }}>
          {children}
        </div>
      </>,
      document.body
    );
  }
}
