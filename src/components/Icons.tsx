interface IconPropsType {
  onClick?: () => void;
  rotate?: number;
  color?: string;
}

export const ChevronIcon = ({ onClick, rotate = 0, color }: IconPropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={onClick}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 9l6 6l6 -6" />
    </svg>
  );
};
