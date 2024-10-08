import prisma from "~/lib/prisma";
import { Channel } from "@prisma/client";

const channels: Channel[] = [
  {
    id: 15134536,
    title: "Коток|коготоК - канал для самых любимых котиков",
    description: "Канал про котиков, которые любят все люди",
    username: "@kotokogotok",
    image: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
    inviteLink: "https://t.me/kotok",
  },
  {
    id: 15234536,
    title: "Коток|коготоК",
    description: "Канал про котиков",
    username: "@kotokogotok",
    image: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    inviteLink: "https://t.me/kotok",
  },
  {
    id: 15334536,
    title: "Коток|коготоК",
    description: "Канал про котиков",
    username: "@kotokogotok",
    image: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    inviteLink: "https://t.me/kotok",
  },
  {
    id: 15344536,
    title: "Коток|коготоК",
    description: "Канал про котиков",
    username: "@kotokogotok",
    image: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    inviteLink: "https://t.me/kotok",
  },
  {
    id: 15345536,
    title: "Коток|коготоК",
    description: "Канал про котиков",
    username: "@kotokogotok",
    image: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    inviteLink: "https://t.me/kotok",
  },
  {
    id: 15634536,
    title: "Коток|коготоК",
    description: "Канал про котиков",
    username: "@kotokogotok",
    image: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    inviteLink: "https://t.me/kotok",
  },
  {
    id: 15374536,
    title: "Коток|коготоК",
    description: "Канал про котиков",
    username: "@kotokogotok",
    image: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
    inviteLink: "https://t.me/kotok",
  },
  {
    id: 15384536,
    title: "Коток|коготоК",
    description: "Канал про котиков",
    username: "@kotokogotok",
    image: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    inviteLink: "https://t.me/kotok",
  },
  {
    id: 15394536,
    title: "Коток|коготоК",
    description: "Канал про котиков",
    username: "@kotokogotok",
    image: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    inviteLink: "https://t.me/kotok",
  },
  {
    id: 11534536,
    title: "Коток|коготоК",
    description: "Канал про котиков",
    username: "@kotokogotok",
    image: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    inviteLink: "https://t.me/kotok",
  },
  {
    id: 21534536,
    title: "Коток|коготоК",
    description: "Канал про котиков",
    username: "@kotokogotok",
    image: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
    inviteLink: "https://t.me/kotok",
  },
  {
    id: 13534536,
    title: "Коток|коготоК",
    description: "Канал про котиков",
    username: "@kotokogotok",
    image: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    inviteLink: "https://t.me/kotok",
  },
  {
    id: 12534536,
    title: "Коток|коготоК",
    description: "Канал про котиков",
    username: "@kotokogotok",
    image: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    inviteLink: "https://t.me/kotok",
  },
  {
    id: 123534536,
    title: "Коток|коготоК",
    description: "Канал про котиков",
    username: "@kotokogotok",
    image: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    inviteLink: "https://t.me/kotok",
  },
  {
    id: 14534536,
    title: "Коток|коготоК",
    description: "Канал про котиков",
    username: "@kotokogotok",
    image: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    inviteLink: "https://t.me/kotok",
  },
  {
    id: 15534536,
    title: "Коток|коготоК",
    description: "Канал про котиков",
    username: "@kotokogotok",
    image: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    inviteLink: "https://t.me/kotok",
  },
  {
    id: 16534536,
    title: "Коток|коготоК",
    description: "Канал про котиков",
    username: "@kotokogotok",
    image: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
    inviteLink: "https://t.me/kotok",
  },
  {
    id: 17534536,
    title: "Коток|коготоК",
    description: "Канал про котиков",
    username: "@kotokogotok",
    image: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    inviteLink: "https://t.me/kotok",
  },
  {
    id: 18534536,
    title: "Коток|коготоК",
    description: "Канал про котиков",
    username: "@kotokogotok",
    image: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    inviteLink: "https://t.me/kotok",
  },
  {
    id: 19534536,
    title: "Коток|коготоК",
    description: "Канал про котиков",
    username: "@kotokogotok",
    image: "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    inviteLink: "https://t.me/kotok",
  },
];

export default defineEventHandler(async (event) => {
  return await prisma.channel.createManyAndReturn({
    data: channels,
  });
});
