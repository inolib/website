type HubSpotField<Schema> = {
  objectTypeId: ObjectTypeID;
  name: keyof Schema;
  value: Schema[keyof Schema];
};

type ObjectTypeID =
  | "0-1"
  | "0-2"
  | "0-3"
  | "0-5"
  | "0-7"
  | "0-8"
  | "0-14"
  | "0-18"
  | "0-19"
  | "0-27"
  | "0-46"
  | "0-47"
  | "0-48"
  | "0-49"
  | "0-52"
  | "0-54"
  | "0-69"
  | "0-101"
  | "0-115"
  | "0-116"
  | "0-136"
  | "0-162"
  | "0-410"
  | "0-420"
  | "0-421"
  | `2-${string}`;

type Schema = Record<string, Value | Value[]>;

type Value = boolean | number | string;

export const formatHubspotFields = (data: Schema, objectTypeId: ObjectTypeID) => {
  const fields: HubSpotField<Schema>[] = [];

  for (const [name, value] of Object.entries(data)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        fields.push({ objectTypeId, name, value: item });
      }
    } else {
      fields.push({ objectTypeId, name, value });
    }
  }
};
