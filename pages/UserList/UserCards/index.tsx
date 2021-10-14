import React, { ReactElement, useState, useEffect } from "react";
import { Item } from "../../../Types/generalTypes";
import styles from "../../../styles/Cards.module.scss";
import Image from "next/image";
import { useAppContext } from "../../../context/AppContext";

function UserCards({ full_name, avatar_url, description }: Item): ReactElement {
  const {
    state: { touched },
    dispatch,
  } = useAppContext();
  const [visibleFlag, setVisibleFlag] = useState<string>("untouched");

  //Following functions is my logic to set the visible flag for the cards when the user
  //clicks on the check box.
  //handleBoxClick receives full_name property of the clicked card as a key to access it
  //inside the store.
  const handleBoxClick = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    full_name: string
  ) => {
    //First we have to check if any object with similar full_name property exists in the
    //touched array of the store.
    //I fined array.find() a good and simple solution as it receives a very simple condition and
    //in case  of passing the condition returns the full object fined.
    //So we have access to all needed properties and we always we can add to them.
    const objectIsTouched = touched.find(({ name }) => name === full_name);

    //Only push to the touched array if the name does not exist.
    //So indexes will be always pointing to the exact object in the touched array.
    if (!objectIsTouched) {
      dispatch({
        type: "interaction_addNewTouchedElement",
        value: { name: full_name, state: "visible" },
      });
      setVisibleFlag("visible")
    } else {
      //If an object with exact full_name value exists change its state between visible/hidden.
      //I am using the index of the object in the store to access it and mutate its state directly.
      if (objectIsTouched.state === "visible") {
        dispatch({
          type: "interaction_changeFocusedState",
          value: { index: objectIsTouched.index, state: "hidden" },
        });
        setVisibleFlag("hidden")
      } else {
        dispatch({
          type: "interaction_changeFocusedState",
          value: { index: objectIsTouched.index, state: "visible" },
        });
        setVisibleFlag("visible")
      }
    }
    console.log(visibleFlag,objectIsTouched);
    
  };

  useEffect(()=>{
    const objectIsTouched = touched.find(({ name }) => name === full_name);
    if(objectIsTouched) setVisibleFlag(objectIsTouched.state)
  }, [visibleFlag])
  return (
    <ul className={styles.container}>
      <Image src={avatar_url} alt="Image_Content" className={styles.container_Image} width="100%" height="100%" />
      <li className={styles.container_infoCards}>
        <h4 className={styles.container_Typography__header}>{full_name}</h4>
        <p className={styles.container_Typography__discription}>
          {description}
        </p>
      </li>
      <li
        className={styles.container_box}
        onClick={(e) => handleBoxClick(e, full_name)}
      >
        <div
          className={`${styles.container_visibleFlag} ${
            visibleFlag === "visible"
              ? `${styles.container__visible}`
              : visibleFlag === "hidden"
              ? `${styles.container__hidden}`
              : ``
          }`}
        />
      </li>
    </ul>
  );
}

export default UserCards;
