export const manageData = (res) => {
  res.items.map((item, index) => {
    const simplifiedItem = {
      full_name: item.full_name,
      avatar_url: item.owner?.avatar_url,
      description: item.description,
      index: index,
    };
    return simplifiedItem;
  });
};
