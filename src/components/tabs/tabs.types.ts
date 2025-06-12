import { SvgIconProps } from "@mui/material";

type Itab = {
    id: number;
    label: string;
    icon: React.ComponentType<SvgIconProps>;
}

export interface TabsProps {
    tabs: Itab[];
    selectedTab: number;
    setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
}

export interface TabsStyleProps {
    active: boolean;
}
