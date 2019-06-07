import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeChats: (_, __, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { user } = request;
      return prisma.chats({
        where: {
          prticipants_some: {
            id: user.id
          }
        }
      });
    }
  }
};
