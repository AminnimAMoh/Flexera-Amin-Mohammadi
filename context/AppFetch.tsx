import { manageData } from "../utilities/manageData";

export const defaultEndPoint =
  "https://api.github.com/search/repositories?sort=stars&q=javascript&per_page=10&";

export async function request(pageNumber: number) {
  try {
    const responce = await fetch(
      defaultEndPoint + `per_page=10&page=${pageNumber}`
    );
    const data=await responce.json()
    const simplifiedItem=await manageData(data);
    return simplifiedItem;
  } catch (err) {
    alert("Sorry!!! Something went wrong. \nPlease try again in a couple of minutes.")
      return {items: "error"}
  }
}
