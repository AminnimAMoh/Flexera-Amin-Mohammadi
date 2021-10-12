import React, { ReactElement } from "react";
import { Item } from "../../Types/generalTypes";
import UserCards from "./UserCards";

interface Props {
  items: Item[];
}

function UserList({ items }: Props): ReactElement {
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
