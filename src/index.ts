/// 
// <reference types="@types/google.maps" />

import { Company } from "./Company";
import { User } from "./User";
import { CustomMap } from "./CustomMap";

const user = new User();
const customMap = new CustomMap('map');
const company = new Company();

// console.log(user);





customMap.addMarker(user);
customMap.addMarker(company);
