import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

import { Sorter } from "./Sorter";

const numberCollection = new CharactersCollection("xxaACcbB");
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log("here");
console.log(sorter.collection);
