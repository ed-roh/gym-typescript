import Person1 from "@/assets/person1.jpg";
import Person2 from "@/assets/person2.jpg";
import Person3 from "@/assets/person3.jpg";
import { testimonialType } from "./types";

export const testimonials: Array<testimonialType> = [
  {
    id: 1,
    name: "Maria Smantha",
    image: Person1,
    title: "Web Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.",
  },
  {
    id: 2,
    name: "Lisa Cudrow",
    image: Person2,
    title: "Graphic Designer",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.",
  },
  {
    id: 3,
    name: "John Smith",
    image: Person3,
    title: "Marketing Specialist",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
  },
];
