export interface UserInformation{
    personal:PersonalInformation;
    contact:ContactInformation;
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
