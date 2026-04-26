import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactEntry {
    id: bigint;
    name: string;
    message: string;
    timestamp: bigint;
    phone: string;
}
export interface backendInterface {
    getContacts(): Promise<Array<ContactEntry>>;
    submitContact(name: string, phone: string, message: string): Promise<boolean>;
}
