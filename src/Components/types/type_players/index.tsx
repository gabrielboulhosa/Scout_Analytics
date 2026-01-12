export type Player = {
  player: {
    id: number;
    name: string;
    firstname: string;
    photo: string;
    nationality: string;
    age: number;
    height: number;
  };
  statistics: Array<{
    shots: {
      total: number;
      on: number;
    };
    league: {
      name: string;
    };

    cards: {
      yellow: number;
      red: number;
    };

    tackles: {
      total: number;
      interceptions: number;
      recoveries: number;
    };
    team: {
      name: string;
    };
    games: {
      appearences: number;
      rating: number;
      distance: number;
      minutes: number;
    };
    goals: {
      total: number;
      assists: number;
    };
    passes: {
      total: number;
      key: number;
    };
    dribbles: {
      attempts: number;
    };
    duels: {
      total: number;
      won: number;
    };
  }>;
};

export type ApiResponse = {
  response: Player[];
};
