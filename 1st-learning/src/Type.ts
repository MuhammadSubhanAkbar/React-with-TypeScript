type Info = {
    id: number;
    name: string;
    email: string;
}

type adminInfoType = Info &{

    role: string;
    lastLogin: Date;
}

export {type Info, type  adminInfoType};

export class AdminInfoType {
}