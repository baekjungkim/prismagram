import { prisma } from "../../../generated/prisma-client";

export default {
  Post: {
    isLiked: (parent, _, { request }) => {
      const { user } = request;
      const { id: parentId } = parent;
      try {
        return prisma.$exists.like({
          AND: [{ post: { id: parentId } }, { user: { id: user.id } }]
        });
      } catch {
        return false;
      }
    },
    likeCount: parent =>
      prisma
        .likesConnection({ where: { post: { id: parentId } } })
        .aggregate()
        .count(),
    likes: parent => prisma.post({ id: parent.id }).likes(),
    files: parent => prisma.post({ id: parent.id }).files(),
    comments: parent => prisma.post({ id: parent.id }).comments(),
    user: parent => prisma.post({ id: parent.id }).user()
  }
};
