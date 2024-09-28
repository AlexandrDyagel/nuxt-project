import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  console.log("event handler is working");
  const channelId = getRouterParam(event, "id") as number | undefined;
  console.log("id = ", channelId);
  return await prisma.channel.delete({
    where: {
      id: Number(channelId),
    },
  });
});
