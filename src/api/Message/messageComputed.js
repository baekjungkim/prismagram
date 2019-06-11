import { prisma } from "../../../generated/prisma-client";

export default {
  Message: {
    to: parent => prisma.message({ id: parent.id }).to(),
    from: parent => prisma.message({ id: parent.id }).from()
  }
};
