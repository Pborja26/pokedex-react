interface Itab {
  id: number;
  name: string;
}

export interface TabsProps {
  tabs: Itab[];
  selectedTab: Itab;
  onClick: () => void;
}