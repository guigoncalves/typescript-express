import { CustomMap } from "./CustomMap";
import { User } from "./User";
import { Company } from "./Company";

window.onload = function () {
  const map = new CustomMap("map");
  const user = new User();
  const company = new Company();
  map.addMarker(user);
  map.addMarker(company);
};
