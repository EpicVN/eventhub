export interface LocationModel {
  title: string;
  id: string;
  language: string;
  resultType: string;
  address: Address;
  highlights: Highlights;
}

export interface Address {
  label: string;
  countryCode: string;
  countryName: string;
  stateCode: string;
  state: string;
  countyCode: string;
  county: string;
  city: string;
  district: string;
  street: string;
  postalCode: string;
}

export interface Highlights {
  title: Title[];
  address: Address2;
}

export interface Title {
  start: number;
  end: number;
}

export interface Address2 {
  label: Label[];
  city: City[];
  street: Street[];
}

export interface Label {
  start: number;
  end: number;
}

export interface City {
  start: number;
  end: number;
}

export interface Street {
  start: number;
  end: number;
}
