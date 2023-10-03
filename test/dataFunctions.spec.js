import { computeStat, filterData, sortData } from "../src/dataFunctions.js";
import { data as fakeData } from "./data.js";

describe("filterData", () => {
  const filterBy = "release_date";
  const value = "1988";
  it("debería filtrar las fechas de lanzamiento y traer el objeto que la contiene ", () => {
    expect(filterData(fakeData, filterBy, value)).toEqual([
      {
        id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49",
        title: "My Neighbor Totoro",
        description:
          "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki",
        poster:
          "https://static.wikia.nocookie.net/studio-ghibli/images/d/db/My_Neighbor_Totoro.jpg",
        release_date: "1988",
        rt_score: "93",
        people: [
          {
            id: "986faac6-67e3-4fb8-a9ee-bad077c2e7fe",
            name: "Satsuki Kusakabe",
            img: "https://static.wikia.nocookie.net/studio-ghibli/images/f/f2/Satsuki_Kusakabe.jpg",
            gender: "Female",
            age: "11",
            eye_color: "Dark Brown/Black",
            hair_color: "Dark Brown",
            specie: "Human",
          },
          {
            id: "d5df3c04-f355-4038-833c-83bd3502b6b9",
            name: "Mei Kusakabe",
            img: "https://static.wikia.nocookie.net/studio-ghibli/images/b/b5/God_Jul_Mei_%C3%B6nskar_fr%C3%A5n_Tomten.jpg",
            gender: "Female",
            age: "4",
            eye_color: "Brown",
            hair_color: "Light Brown",
            specie: "Human",
          },
          {
            id: "3031caa8-eb1a-41c6-ab93-dd091b541e11",
            name: "Tatsuo Kusakabe",
            img: "https://static.wikia.nocookie.net/studio-ghibli/images/d/d6/Tatsuo_Kusakabe.jpg",
            gender: "Male",
            age: "37",
            eye_color: "Brown",
            hair_color: "Dark Brown",
            specie: "Human",
          },
          {
            id: "87b68b97-3774-495b-bf80-495a5f3e672d",
            name: "Yasuko Kusakabe",
            img: "https://static.wikia.nocookie.net/studio-ghibli/images/7/7b/Yasuko_Kusakabe.png",
            gender: "Female",
            age: "36",
            eye_color: "Brown",
            hair_color: "Dark Brown",
            specie: "Human",
          },
          {
            id: "08ffbce4-7f94-476a-95bc-76d3c3969c19",
            name: "Granny",
            img: "https://static.wikia.nocookie.net/studio-ghibli/images/d/d9/Granny.png",
            gender: "Female",
            age: "Elder",
            eye_color: "Black",
            hair_color: "Grey",
            specie: "Human",
          },
          {
            id: "0f8ef701-b4c7-4f15-bd15-368c7fe38d0a",
            name: "Kanta Ogaki",
            img: "https://static.wikia.nocookie.net/studio-ghibli/images/c/c3/Kanta.jpg",
            gender: "Male",
            age: "11",
            eye_color: "Brown",
            hair_color: "Brown",
            specie: "Human",
          },
          {
            id: "d39deecb-2bd0-4770-8b45-485f26e1381f",
            name: "Totoro",
            img: "https://static.wikia.nocookie.net/studio-ghibli/images/d/df/Totoro_in_the_rain.png",
            gender: "Male",
            age: "1300",
            eye_color: "Grey",
            hair_color: "Grey",
            specie: "Totoro",
          },
          {
            id: "591524bc-04fe-4e60-8d61-2425e42ffb2a",
            name: "Chu Totoro",
            img: "https://www.ghibli.jp/gallery/thumb-totoro019.png",
            gender: "NA",
            age: "",
            eye_color: "Black",
            hair_color: "Blue",
            specie: "Totoro",
          },
          {
            id: "c491755a-407d-4d6e-b58a-240ec78b5061",
            name: "Chibi Totoro",
            img: "https://static.wikia.nocookie.net/studio-ghibli/images/c/c5/Little_Totoro_spirit_moving.gif",
            gender: "NA",
            age: "",
            eye_color: "Black",
            hair_color: "White",
            specie: "Totoro",
          },
          {
            id: "f467e18e-3694-409f-bdb3-be891ade1106",
            name: "Catbus",
            img: "https://static.wikia.nocookie.net/studio-ghibli/images/3/30/Catbus.jpg",
            gender: "Male",
            age: "NA",
            eye_color: "Yellow",
            hair_color: "Brown",
            specie: "Cat",
          },
        ],
        locations: [
          {
            id: "660c8c91-bd92-43db-b475-b2df6ca96fec",
            name: "Kusakabe's House",
            img: "https://static.wikia.nocookie.net/studio-ghibli/images/f/f3/Kusakabe_Family_House.jpg",
            climate: "Mild",
            terrain: "River",
            surface_water: "40",
            residents: ["TODO"],
          },
          {
            id: "6fc21b76-78fb-4451-98f7-857e32a23e85",
            name: "Matsugo",
            img: "https://static.wikia.nocookie.net/studio-ghibli/images/0/08/Min_Granne_Totoro_v%C3%A4rlden.jpg",
            climate: "Continental",
            terrain: "River",
            surface_water: "60",
            residents: ["TODO"],
          },
          {
            id: "ee897b2a-405e-42b9-bff4-8b51b0f03cab",
            name: "Satsuki's School House",
            img: "https://static.wikia.nocookie.net/studio-ghibli/images/d/dd/Satsuki%27s_School_House.jpg",
            climate: "Mild",
            terrain: "River",
            surface_water: "60",
            residents: ["TODO"],
          },
        ],
        vehicles: [],
      },
    ]);
  });
});

describe("sortData", () => {
  const sortBy = "title";
  const sortOrder = "asc";

  it("debe acomodar los objetos en orden ascendente, por título", () => {
    const sortedTitles = sortData(fakeData, sortBy, sortOrder)
      .map((item) => item.title)
      .join(", ");
    expect(sortedTitles).toBe(
      "Castle in the Sky, Kiki's Delivery Service, My Neighbor Totoro"
    );
  });
});

describe("sortData", () => {
  const sortBy = "title";
  const sortOrder = "desc";

  it("debe acomodar los objetos en orden descendente, por título", () => {
    const sortedTitles = sortData(fakeData, sortBy, sortOrder)
      .map((item) => item.title)
      .join(", ");
    expect(sortedTitles).toBe(
      "My Neighbor Totoro, Kiki's Delivery Service, Castle in the Sky"
    );
  });
});

describe("computeStat", () => {
  const data = fakeData;
  it("debe sumar el index de los objetos y agregar 1, para dar el total de películas mostradas", () => {
    expect(computeStat(data)).toBe(3);
  });
});
