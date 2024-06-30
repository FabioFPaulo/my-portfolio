import { AppContext } from "@/contexts/app";
import { useContext } from "react";

export default function useApp() {
  return useContext(AppContext);
}
