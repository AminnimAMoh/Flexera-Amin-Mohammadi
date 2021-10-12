export function manageData(res: any) {
  const managed=res.items.map((item: any, index: number) => {
    const simplifiedItem = {
      full_name: item.full_name,
      avatar_url: item.owner?.avatar_url,
      description: item.description,
      index: index,
    };
    return simplifiedItem;
  });
  return managed;
};
