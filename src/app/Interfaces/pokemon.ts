export interface Pokemon {
    id:           number;
    nombre:       string;
    urlSprite:    string;
    hp:           number;
    atk:          number;
    def:          number;
    spa:          number;
    spd:          number;
    spe:          number;
    tipo1:        string;
    tipo2:        string;
    formas:       Pokemon[] | null;
    habilidades?: Habilidad[];
    bloqueo?:     Stats;
    ataque?:      Stats;
    movimiento?:  number;
}

export interface Stats {
    categoriaFisico:   number;
    categoriaEspecial: number;
}

export interface Habilidad {
    nombre:      string;
    descripcion: string;
    iconUrl:     string;
}