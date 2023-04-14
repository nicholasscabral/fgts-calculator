import { displayNameByEmploymentRelationship } from "./constants";

export const getEmploymentRelationshipOptions = () =>
  Object.entries(displayNameByEmploymentRelationship).map(([value, label]) => {
    return {
      value,
      label,
    };
  });
