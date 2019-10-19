import { Employee } from './employee';

export class Shop {
    id: number;
    name: string;
    address: string;
    phone: string;
    employees: Employee[];
    territory: number
}