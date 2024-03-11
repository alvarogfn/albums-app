import { Album } from "../src/model/Album";

const albums: { [key: string]: Album } = {
  rock: {
    title: "Rock 2010s",
    albums: [
      {
        id: 1,
        poster:
          "https://i.discogs.com/VOx-3iq1DyCQzGwYkZeJbn1MAeotitdo23MjuBytBmA/rs:fit/g:sm/q:90/h:600/w:597/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUyNzk0/OTEtMTM4OTQ1MjYz/My0yMTg3LmpwZWc.jpeg",
        name: "Something",
        author: "Someone",
      },
      {
        id: 2,
        poster: "https://upload.wikimedia.org/wikipedia/pt/5/59/Fallen.jpg",
        name: "Something",
        author: "Someone",
      },
      {
        id: 3,
        poster:
          "https://upload.wikimedia.org/wikipedia/pt/5/51/Slipknotdebutcapa.jpg",
        name: "Something",
        author: "Someone",
      },
      {
        id: 4,
        poster:
          "https://ibighit.com/bts/images/bts/discography/love_yourself-answer/album-cover.jpg",
        name: "Something",
        author: "Someone",
      },
    ],
  },
  pop: {
    title: "Pop 2020s",
    albums: [
      {
        author: "The Vamps",
        name: "Wake Up",
        id: 5,
        poster:
          "https://akamai.sscdn.co/uploadfile/letras/albuns/c/8/b/3/643191530117585-tb_180.jpg",
      },
    ],
  },
  get all() {
    return {
      title: "Everything Everywhere",
      albums: [...this.rock.albums, ...this.pop.albums],
    };
  },
};

export default albums;
