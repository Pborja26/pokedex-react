import * as styled from "./tabs.style";
import { TabsProps } from "./tabs.types";

const Tabs = ({
    selectedTab,
    tabs,
    setSelectedTab
}: TabsProps) => {
    return (
        <styled.TabsContainer>
            {tabs.map((tab) => (
                <styled.TabComponent
                    key={tab.id}
                    active={selectedTab === tab.id}
                    onClick={() => setSelectedTab(tab.id)}
                >
                    <tab.icon />
                </styled.TabComponent>
            ))}
        </styled.TabsContainer>
    )
};

export default Tabs;
