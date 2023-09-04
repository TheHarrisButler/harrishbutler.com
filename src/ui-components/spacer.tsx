export type SpacerProps = {
  spacerType: "horizontal" | "vertical";
  size: number;
  textContent?: string;
};

export const Spacer = ({ size, spacerType, textContent }: SpacerProps) => {
  return (
    <div
      style={{
        display: "flex",
        fontSize: "1.25rem",
        ...(spacerType === "horizontal"
          ? { width: `${size}rem` }
          : { height: `${size}rem` }),
      }}
    >
      {textContent}
    </div>
  );
};
