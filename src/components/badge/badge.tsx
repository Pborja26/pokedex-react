import * as styled from "./badge.style";
import { BadgeProps } from "./badge.types";

const Badge = ({ background_color, color, style, label, children }: BadgeProps) => {
    return (
        <styled.BadgeComponent
            background_color={background_color}
            color={color}
            style={style}
        >
            {label} {children}
        </styled.BadgeComponent>
    )
};

export default Badge;
