import { JSX } from "react";

export interface CardLanguageProps {
  title: string;
  percent?: number;
  svg?: JSX.Element;
  description?: string;
  iconName?: "brain" | "server" | "layout" | "smartphone" | "database" | "terminal";
  skills?: string[];
}
