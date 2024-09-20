import { DbTable } from '@/enums';
import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  [DbTable.EMAIL_ADDRESSES]: defineTable({ email: v.string() }),
});
