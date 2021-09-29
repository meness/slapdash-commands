export function processArgs(): Record<string, string> {
  return process.argv.slice(2).reduce((agg, arg) => {
    const match = arg.match(/^--(?<key>\w+)=(?<value>.+)$/);
    return match ? { ...agg, [match.groups!.key]: match.groups!.value } : agg;
  }, {});
}
