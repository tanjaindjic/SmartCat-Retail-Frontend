import { Shop } from './shop';

export class Territory {
    id: number;
    city: string;
    postal: string;
    country: string;
    shops: Shop[]
}