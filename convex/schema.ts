import { DbTable } from '@/enums';
import { defineSchema } from 'convex/server';
import { v } from 'convex/values';
import { emailAddressesTable } from './tables';

export default defineSchema({
  [DbTable.EMAIL_ADDRESSES]: emailAddressesTable,
});
