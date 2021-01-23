import { useState, useEffect } from "react";
import { Cart, Palettes } from "./dataTypes";

interface usePalettesReturnProps {
  palettes: Palettes;
  addPalette: (cart: Cart, input: string) => void;
  removePalette: (title: string) => void;
}

const usePalettes = (): usePalettesReturnProps => {
  const [palettes, setPalettes] = useState<Palettes>({});

  useEffect(() => {
    setPalettes(getStoredPalettes());
  }, []);

  const addPalette = (cart: Cart, input: string) => {
    const colors = Object.values(cart);
    const newPalettes = { ...palettes };

    newPalettes[input] = colors;

    setStoredPalettes(newPalettes);
    setPalettes(newPalettes);
  }

  const removePalette = (title: string) => {
    const { [title]: _, ...newPalettes } = palettes;
    setStoredPalettes(newPalettes);
    setPalettes(newPalettes);
  }

  return { palettes, addPalette, removePalette };
}

export default usePalettes;

// get/set palettes from/to localStorage

const getStoredPalettes = (): Palettes => {
  const storedPalettes = localStorage.getItem('palettes');
  if (storedPalettes) return JSON.parse(storedPalettes);
  else return {};
}

const setStoredPalettes = (newPalettes: Palettes) => localStorage.setItem('palettes', JSON.stringify(newPalettes));