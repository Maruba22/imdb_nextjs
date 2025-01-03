"use client";
import React, { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return <>{ mounted && currentTheme === "dark" ?( <CiLight className="text-xl cursor-pointer hover:text-amber-500" onClick={()=> setTheme("light")} />) : <FiMoon className="text-xl cursor-pointer hover:text-amber-500"  onClick={()=> setTheme("dark")} />}</>;
}
