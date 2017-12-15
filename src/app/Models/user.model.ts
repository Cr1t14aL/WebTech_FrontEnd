export enum STATUS {
    normal,
    ban
}

export enum TYPES {
    member,
    admin,
    superadmin
}

export class User {
    STATUS : STATUS;
    TYPE : TYPES;

    _id : string;
    email : string;
    password : string;
    fname : string;
    lname : string;
    status : STATUS;
    types : TYPES;

    updatedAt : number;
    createdAt : number;
}

export class userCal {
    todayCal : number;
    date : number;
}