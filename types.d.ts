type MenuItem = {
  id: number;
  text: string;
};

type FooterSection = {
  id: number;
  title: string;
  lists: MenuItem[];
};

interface GamesSliderProps {
  title: string;
  icon: ReactNode;
  data: Array<string | number>; 
  cardType: "1" | "2";
}

interface DropDownProps {
  data?: any;
  icon: ReactNode;
  placeholder: string;
  name?: string | any;
  setAllValues?: (fn: (prev: Record<string, string>) => Record<string, string>) => void;
}

interface SearchBarProps {
  firstValue?: string;
  placeholder: string;
  name?: string | any;
  setAllValues?: (fn: (prev: Record<string, string>) => Record<string, string>) => void;
}