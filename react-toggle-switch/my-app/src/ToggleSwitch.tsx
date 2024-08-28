import './ToggleSwitch.css';

type Props = {
  switchClass: string;
  onToggle: () => void;
};

export function ToggleSwitch({ switchClass, onToggle }: Props) {
  return (
    <div id="switch-outer" className={switchClass} onClick={onToggle}>
      <div id="switch-inner" className={switchClass}></div>
    </div>
  );
}
