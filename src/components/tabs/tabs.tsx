import * as styled from "./tabs.style";
import { useState } from "react";
import { TabsProps } from "./tabs.types";

const Tabs = ({
    selectedTab,
    tabs
}: TabsProps) => {
		const [activeTab, setActiveTab] = useState<number>(0);
    return (
        <styled.TabsContainer>
            {tabs.map((tab) => (
                <styled.TabComponent
                    key={tab.id}
                    active={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                >
                    <tab.icon />
                </styled.TabComponent>
            ))}
        </styled.TabsContainer>
    )
};

export default Tabs;
