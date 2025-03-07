export interface ButtonProp {
  isLink: boolean;
  text?: string;
  children?: React.ReactNode;
  link?: string;
  onClick?: () => void;
  className: string;
  id?: string;
}

export default function Button({
  isLink,
  text,
  children,
  link,
  onClick,
  className,
  id,
}: ButtonProp) {
  if (isLink) {
    return (
      <a
        href={link ?? "/"}
        target="_blank"
        className={`button-link button ${className}`}
        id={id}
      >
        {text}
      </a>
    );
  } else {
    return (
      <button
        className={`button ${className}`}
        type="button"
        id={id ?? ""}
        onClick={onClick}
      >
        {children || text}
      </button>
    );
  }
}
