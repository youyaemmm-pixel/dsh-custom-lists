/** Public, non-secret bootstrap only. No provider configuration is rewritten. */
export const name = 'custom-lists';
export function apply(ctx) {
  ctx.on('webserver/index-inject', table => {
    const profile = ctx.get('profileContext');
    table.push({kind:'global',name:'__DSH_CUSTOM_LISTS__',value:{
      profile: profile?.name ?? null,
      ofm: (profile?.startedBundles ?? []).includes('dsh-our-free-model')
    }});
  });
}
