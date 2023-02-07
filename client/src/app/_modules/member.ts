import { Photo } from "./photo";

export interface Member {
    id: number;
    photoUrl: string;
    userName: string;
    age: number;
    knownAs: string;
    created: Date;
    gender?: any;
    lastActive: Date;
    introduction: string;
    lookingFor: string;
    interests: string;
    city: string;
    country: string;
    photos: Photo[];
}