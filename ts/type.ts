type Test = ["dasd", "dasdsa", "dasdsa"];
type TypeTestArray = Test[number];
const a: TypeTestArray = "dasd";

///// range number
type Color = ["red", "blue", "green"];

type RangeNumber<
  MaxNumber extends number,
  Result extends Array<any> = []
> = Result["length"] extends MaxNumber
  ? Result
  : RangeNumber<MaxNumber, [...Result, Result["length"]]>;
type TypeRangeNumber = RangeNumber<350>[number];
const rangenumber: TypeRangeNumber = 0;

type RGB = {
  [Key in Color[number]]: TypeRangeNumber;
};

const color: RGB = {
  blue: 101,
  green: 103,
  red: 12,
};
//// enum to type
enum Address {
  nhibinh,
  chauthanh,
  tiengiang,
}
type AddressT = keyof typeof Address;

enum Class {
  lop1 = "dsadas",
  lop3 = "231231",
  lop4 = "dasdsaasds",
}
type ClassT = keyof typeof Class;

/// record

type RecordType = "dasd" | "Dasdsa" | "das";
type ParserRecord = Record<RecordType, number>;
// fake record
type RecordFake<TypeKey extends string, TypeValue> = {
  [Key in TypeKey]: TypeValue;
};
type ClassRecordFake = RecordFake<ClassT, number>;

///

type Partials<T> = {
  [P in keyof T]?: T[P];
};
type Requireds<T> = {
  [P in keyof T]-?: T[P];
};

type Readonlys<T> = {
  readonly [P in keyof T]: T[P];
};

type Data = {
  name?: string
  address?: string
}


// const data = { name: "dasdsa" }
const datsa: Readonlys<Data> = { name: "dasdsa", address: "" }
// datsa.address = "dasdsa"
// const datas: Partials<Data> = { address: "dasdsa" }