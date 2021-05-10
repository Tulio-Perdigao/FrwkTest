export class User {
    id: number;
    username: string;
    name: string;
    email: string;
    address: Address;
    geo: Geo;
    phone: string;
    website: string;
    company: Company;

    constructor(p_id: number, p_name: string, p_username: string, p_email: string, p_address: Address, p_geo: Geo, p_phone: string, p_website: string, p_company: Company) {
        this.id = p_id;
        this.name = p_name;
        this.username = p_username;
        this.email = p_email;
        this.address = p_address;
        this.geo = p_geo;
        this.phone = p_phone;
        this.website = p_website;
        this.company = p_company;
    }

}

export class Address {
    street: string;
    suite: string;
    zipcode: string;
}

export class Geo {
    lat: number;
    lng: number;

    constructor(p_lat: number, p_lng: number) {
        this.lat = p_lat;
        this.lng = p_lng;
    }
}

export class Company {
    name: string;
    catchPhrase: string;
    bs: string;

    constructor(p_name: string, p_catchPhrase: string, p_bs: string) {
        this.name = p_name;
        this.catchPhrase = p_catchPhrase;
        this.bs = p_bs;
    }
}