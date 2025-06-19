type MenuItem = {
  id: number;
  text: string;
};
type Provider = {
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
  data: Game[]; 
  cardType: "1" | "2";
}

interface DropDownProps {
  data?: any;
  icon: ReactNode;
  placeholder: string;
  name?: string | any;
  provider?: string,
  setProvider?: any,
}

interface SearchBarProps {
  firstValue?: string;
  placeholder: string;
  name?: string | any;
  setSearch?: any;
}

interface Game {
  id: number;
  name: string;
  provider: string;
  identifier: string;
  type: number;
  demo: number;
  image: string;
  categories: string[];
}