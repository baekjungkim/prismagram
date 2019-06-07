import { prisma } from "../../../../generated/prisma-client";
import { CHAT_FRAGMENT, MESSAGE_FRAGMENT } from "../../../fragments";

export default {
  Query: {
    seeChat: async (_, args, { request, isAuthenticated }) => {
      isAuthenticated(request);
      const { chatId } = args;
      const { user } = request;
      const canSee = await prisma.$exists.chat({
        participants_some: {
          id: user.id
        }
      });
      if (canSee) {
        return prisma.chat({ id: chatId }).$fragment(CHAT_FRAGMENT);
      } else {
        throw Error("You can't see this");
      }
    }
  }
};
