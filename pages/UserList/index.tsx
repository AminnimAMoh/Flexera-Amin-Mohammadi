import React, { ReactElement, useEffect } from "react";
import { Item } from "../../Types/generalTypes";
import UserCards from "./UserCards";
import { useAppContext } from "../../context/AppContext";

interface Props {
  items: Item[];
}

function UserList({ items }: Props): ReactElement {
  const { dispatch } = useAppContext();
  useEffect(() => {
    console.log(items);
    dispatch({ type: "reserve_new-data", value: {...items} });
  }, [items, dispatch]);
  return (
    <div>
      {items.length &&
        items.map((item: Item) => {
          return <UserCards key={item.full_name} {...item} />;
        })}
    </div>
  );
}

export default UserList;
