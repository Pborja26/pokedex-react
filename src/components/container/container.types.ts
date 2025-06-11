export interface ContainerProps {
    direction: "row" | "column";
    background_color?: string;
    children?: React.ReactNode;
    gap?: string;
    align_items?: "center" | "flex-start" | "flex-end";
    justify_content?: "center" | "flex-start" | "flex-end" | "space-between" | "space-around";
    padding?: string;
    width?: string;
    height?: string;
    style?: React.CSSProperties;
    radius?: string;
    cursor?: "pointer" | "not-allowed" | "default";
    click?: boolean;
    onClick?: () => void;
}