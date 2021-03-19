import { EmailValidator } from "@angular/forms";

export interface Employee {
    Name: string
    Email: string
    CountryCode: string
    CountryName: string
    PhoneNumber: number
    PhoneCode: number    
    JobTitle: string 
    Area: string
    Topics: []
    SystemId?: string
    PublicId?: string
    PhoneCodeAndNumber?: number
    LastActivityUtc?: number
    LastActivity?: number
    SubscriptionDate?: number
    SubscriptionMethod?: number
    SubscriptionState?: number
    SubscriptionStateDescription?: string
    Activity?: string
    ConnectionState?: number
    Id?: number
}