export function useTypeColor(type?: string, variant?: "main" | "bright") {
    const colors: Record<string, { main: string; bright: string }> = {
        normal: { main: "#A8A77A", bright: "#D0CFA2" },
        fire: { main: "#EE8130", bright: "#FFA864" },
        water: { main: "#6390F0", bright: "#8BA8FF" },
        grass: { main: "#7AC74C", bright: "#9FE874" },
        electric: { main: "#F7D02C", bright: "#FFEB5A" },
        ice: { main: "#96D9D6", bright: "#C1F2F0" },
        fighting: { main: "#C22E28", bright: "#E0514C" },
        poison: { main: "#A33EA1", bright: "#CE5ECF" },
        ground: { main: "#E2BF65", bright: "#F6DB8E" },
        flying: { main: "#A98FF3", bright: "#C8B4FF" },
        psychic: { main: "#F95587", bright: "#FF86A9" },
        bug: { main: "#A6B91A", bright: "#C8DB40" },
        rock: { main: "#B6A136", bright: "#D8C460" },
        ghost: { main: "#735797", bright: "#9678BF" },
        dragon: { main: "#6F35FC", bright: "#9E75FF" },
        dark: { main: "#705746", bright: "#967463" },
        steel: { main: "#B7B7CE", bright: "#D9D9FF" },
        fairy: { main: "#D685AD", bright: "#FFA6D2" }
    };
    if (type && variant) {
        return colors[type] ? colors[type][variant] : "#000000";
    }
}
