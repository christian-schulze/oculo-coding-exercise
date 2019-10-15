import { groupByModality } from "./examinations";
import expectExport from "expect";

describe("groupByModality", () => {
  const examinations = [
    {
      date: "2019-04-01",
      images: [
        {
          eye: "L",
          modality: "OCT",
          note: "Left eye thickness is 2um which is normal",
          thumbnail: "/images/20190401_oct_left.jpg"
        }
      ]
    },
    {
      date: "2019-04-13",
      images: [
        {
          eye: "L",
          modality: "OP",
          note: "Left eye looks normal",
          thumbnail: "/images/20190413_oct_left.jpg"
        }
      ]
    }
  ];

  const imagesByModality = [
    {
      modality: "OCT",
      images: [
        {
          eye: "L",
          modality: "OCT",
          note: "Left eye thickness is 2um which is normal",
          thumbnail: "/images/20190401_oct_left.jpg",
          date: "2019-04-01"
        }
      ]
    },
    {
      modality: "OP",
      images: [
        {
          eye: "L",
          modality: "OP",
          note: "Left eye looks normal",
          thumbnail: "/images/20190413_oct_left.jpg",
          date: "2019-04-13"
        }
      ]
    }
  ];

  it("groups examination images by modality", () => {
    expectExport(groupByModality(examinations)).toEqual(imagesByModality);
  });
});
