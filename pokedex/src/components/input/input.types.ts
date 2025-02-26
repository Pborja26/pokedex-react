import React from "react";

export interface InputProps {
  value: string | number;
  setValue: React.Dispatch<React.SetStateAction<string | number>>;
  type: "text" | "button";
  onClick?: () => void;
  children?: React.ReactNode
  style?: React.CSSProperties;
}
