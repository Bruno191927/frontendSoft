export interface UserInformation{
    personal?:PersonalInformation;
    contact?:ContactInformation;
    plan?:PlanInformation
}

export interface ContactInformation{
    documentType:string;
    document:string;
    cellphone:string;
    acceptPrivacityPolicy:boolean;
    acceptComercialPolicy:boolean;
}

export interface PersonalInformation {
    name:     string;
    lastName: string;
    birthDay: string;
}

export interface PlanInformation{
    name:string;
    price:number;
    forMe:boolean;
}
