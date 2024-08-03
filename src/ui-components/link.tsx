import styled from "@emotion/styled";

export type LinkProps = {
  defaultColor?: string;
  href: string;
  label: string;
  size?: string;
  weight?: number;
  target?: string;
  active?: boolean;
};

export const Link = ({
  defaultColor,
  href,
  label,
  size = "1rem",
  weight = 400,
  target,
  active = false,
}: LinkProps) => {
  const Link = styled.a({
    background: "#FFFFF",
    color: defaultColor ?? "#A9ADC0",
    fontSize: size,
    fontWeight: weight,
    position: "relative",
    textDecoration: "none",
    ...(active && {
      borderBottom: "2px solid white",
      color: "white",
    }),
    ...(!active && {
      [`:hover`]: {
        color: "white",
      },
      [`::before`]: {
        backgroundColor: "white",
        bottom: 0,
        content: "''",
        display: "block",
        height: "2px",
        left: 0,
        position: "absolute",
        transform: "scaleX(0)",
        transformOrigin: "top left",
        transition: "transform 0.3s ease",
        width: "100%",
      },
      [`:hover::before`]: {
        transform: "scaleX(1)",
      },
    }),
  });

  return (
    <Link target={target} href={href}>
      {label}
    </Link>
  );
};
