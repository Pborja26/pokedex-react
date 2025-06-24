import { SvgIconProps } from "@mui/material";

type Itab = {
    id: number;
    label: string;
    icon: React.ComponentType<SvgIconProps>;
}

export interface TabsProps {
    tabs: Itab[];
    selectedTab: (tab: number) => void;
}

export interface TabsStyleProps {
    active: boolean;
}
