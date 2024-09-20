import { zQuery } from '../../helper';
import { DbTable } from '@/enums';
import { zid } from 'convex-helpers/server/zod';

export const getEmailAddressById = zQuery({
  args: { id: zid(DbTable.EMAIL_ADDRESSES) },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});
