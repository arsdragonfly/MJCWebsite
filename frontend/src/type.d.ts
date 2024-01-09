type LeaderboardType = {
    username: string;
    elo: string;
};

type Setting = {
    legacyDisplayGame: boolean;
};

type GamePlayer = {
    id: string;
    username: string;
    trueWind: string;
    score: number;
};

interface IGame {
    game_id: number;
    created_at: string;
}

interface GameProps {
    game: IGame;
}

type GameType = "RANKED" | "PLAY_OFF" | "TOURNEY";

type GameVariant = "jp" | "hk";

type GameTypeProp = {
    gameVariant: GameVariant;
};

type LoginDataType = {
    username: string;
    password: string;
};

type RegisterDataType = {
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
};

type PlayerAPIDataType = {
    player: Player;
};

type Player = {
    id: string;
    authToken: string;
    username: string;
    email: string;
    firstName?: string;
    lastName?: string;
    admin: boolean;
    japaneseQualified: boolean;
    hongKongQualified: boolean;
    createdAt: string;
    legacyDisplayGame: boolean;
};

type Season = {
    id: string;
    name: string;
    startDate: string;
    endDate: string;
};

type AuthContextType = {
    player: Player | undefined;
    login: (loginData: LoginDataType) => Promise<void>;
    register: (registerData: RegisterDataType) => Promise<void>;
    logout: () => Promise<void>;
    reloadPlayer: () => Promise<void>;
};

type Game = {
    id: string;
    gameType: GameType;
    gameVariant: GameVariant;
    status: string;
    recordedById: string;
    players: any[];
    rounds: (JapaneseRound | HongKongRound)[];
    currentRound?: PartialJapaneseRound;
};

type JapaneseRound = {
    id: string;
    roundNumber: number;
    roundWind: string;
    roundCount: number;
    bonus: number;
    endRiichiStickCount: number;
    player0Riichi: boolean;
    player1Riichi: boolean;
    player2Riichi: boolean;
    player3Riichi: boolean;
    transactions: JapaneseTransaction[];
};

type PartialJapaneseRound = Pick<JapaneseRound, "roundCount" | "roundNumber" | "roundWind" | "bonus"> & { startRiichiStickCount: number };

type JapaneseTransaction = {
    id: string;
    type: JapaneseTransactionType;
    player0ScoreChange: number;
    player1ScoreChange: number;
    player2ScoreChange: number;
    player3ScoreChange: number;
    han?: number;
    fu?: number;
    dora?: number;
    paoPlayerIndex?: number;
};

type JapaneseTransactionType = "DEAL_IN" | "SELF_DRAW" | "TENPAI" | "MISTAKE" | "PAO";

type RoundType = {
    name: string;
    value: string;
    selectors: string[];
};

type PlayerActions = {
    [key: string]: string[];
};

type RoundValue = {
    type: RoundType;
    playerActions: PlayerActions;
};

type JapaneseHandInput = {
    han: number;
    fu: number;
    dora: number;
};

type HongKongRound = {
    id: string;
    roundNumber: number;
    roundWind: string;
    roundCount: number;
    transactions: HongKongTransaction[];
};

type PartialHongKongRound = Pick<HongKongRound, "roundCount" | "roundNumber" | "roundWind">;

type HongKongTransaction = {
    id: string;
    type: HongKongTransactionType;
    player0ScoreChange: number;
    player1ScoreChange: number;
    player2ScoreChange: number;
    player3ScoreChange: number;
    points?: number;
    paoPlayerIndex?: number;
};

type HongKongHandInput = number

type HongKongTransactionType = "DEAL_IN" | "SELF_DRAW" | "MISTAKE" | "PAO";
