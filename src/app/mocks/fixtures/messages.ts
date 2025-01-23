import { PUBLIC_IMAGES } from "~/env/constants";
import { Messages } from "~/lib/types";

export const messages: Messages = [
  {
    id: 1,
    merchantId: 1,
    avatar: {
      src: `${PUBLIC_IMAGES}/photo-01.jpg`,
      alt: "John Jardine",
    },
    name: "John J.",
    message: "My dearly beloved, we are gathered here today to get through this thing called life.",
  },
  {
    id: 2,
    merchantId: 1,
    avatar: {
      src: `${PUBLIC_IMAGES}/photo-02.jpg`,
      alt: "Lila Middle Last",
    },
    name: "Lila L.",
    message: "My latest message may not have communicated all that I intended.",
  },
  {
    id: 3,
    merchantId: 1,
    avatar: {
      src: `${PUBLIC_IMAGES}/photo-03.jpg`,
      alt: "Alessandra",
    },
    name: "Alessandra",
    message: "Great digs!",
  },
  {
    id: 4,
    merchantId: 1,
    avatar: {
      src: `${PUBLIC_IMAGES}/photo-04.jpg`,
      alt: "Mister Square",
    },
    name: "Mr. Square",
    message: "I'm a square",
  },
];
