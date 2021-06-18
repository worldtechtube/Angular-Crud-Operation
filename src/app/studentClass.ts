import { AddressClass } from "./addressClass";

export class StudentClass {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public phone: number,
        public gender: string,
        public course: string,
        public sendUpdates: boolean,
        public bloodGroup: string,
        public address: AddressClass
    ){}
}