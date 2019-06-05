import { prisma } from "../../generated/prisma-client";

export default {
  User: {
    fullName: parent => {
      return `${parent.firstName} ${parent.lastName}`;
    },
    isFollowing: (parent, _, { request }) => {
      const { user } = request;
      const { id: parentId } = parent;
      try {
        return prisma.$exists.user({
          AND: [{ id: user.id }, { following_some: { id: parentId } }]
        });
      } catch {
        return false;
      }
    },
    isSelf: (parent, _, { request }) => {
      const { user } = request;
      const { id: parentId } = parent;
      return user.id === parentId;
    }
  },
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
    likeCount: parent => {
      const { id: parentId } = parent;
      return prisma
        .likesConnection({ where: { post: { id: parentId } } })
        .aggregate()
        .count();
    }
  }
};
