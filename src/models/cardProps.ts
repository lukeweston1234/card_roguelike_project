export interface CardProps {
        cardName: string,
        cardDescription: string,
        image: string,
        isFacingUp: boolean,
        isActive: boolean,
        cardStats: CardStats
}

export interface CardStats {
    damage: number,
    health: number,
    cost: number,
    energy: number,
    class: "Specialist" | "Hacker" | "Grunt" 
}