import { prisma } from "../../../generated/prisma-client";

export default {
  Chat: {
    participants: parent => prisma.chat({ id: parent.id }).participants(),
    messages: parent => prisma.chat({ id: parent.id }).messages()
  }
};
