import { ContainerComponent } from "./container.style";
import { ContainerProps } from "./container.types";

const Container = ({
    align_items,
    justify_content,
    direction,
    gap,
    padding,
    children,
    background_color,
    width,
    height,
    radius,
    cursor,
    style,
    click = false,
    onClick
}: ContainerProps) => {
    return (
        <ContainerComponent
            direction={direction}
            align_items={align_items}
            justify_content={justify_content}
            gap={gap}
            padding={padding}
            background_color={background_color}
            width={width}
            height={height}
            radius={radius}
            cursor={cursor}
            style={style}
            click={click}
            onClick={onClick}
        >
            {children}
        </ContainerComponent>
    )
}

export default Container;
