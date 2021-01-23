import { useState, useEffect } from "react";
import { Cart } from "./useCart";
import { ColorData } from "./useColorList";

interface Palettes {
  [title: string]: ColorData[];
}

const getStoredPalettes = (): Palettes => {
  const storedPalettes = localStorage.getItem('storedPalettes');
  if (storedPalettes) return JSON.parse(storedPalettes);
  else return {};
}

const setStoredPalletes = (newPalletes: Palettes) => localStorage.setItem('storedPalettes', JSON.stringify(newPalletes));

const useStoredPalettes =
  (cart: Cart, input: string): [Palettes, () => void, (title: string) => void] => {

    const [palletes, setPalletes] = useState<Palettes>({});

    const colors = Object.values(cart);

    useEffect(() => {
      setPalletes(getStoredPalettes());
    }, []);

    const addPalette = () => {
      const newPalletes = { ...palletes };
      newPalletes[input] = colors;
      setStoredPalletes(newPalletes);
      setPalletes(newPalletes);
    }

    const removePalette = (title: string) => {
      const { [title]: removedPallete, ...newPalletes } = palletes;
      setStoredPalletes(newPalletes);
      setPalletes(newPalletes);
    }

    return [palletes, addPalette, removePalette];
  }

export default useStoredPalettes;
export type { Palettes };