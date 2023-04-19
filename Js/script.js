import { createCategory } from "./components/createCategoty.js";
import { createHeader } from "./components/createHeader.js";
import { createElement } from "./helper/createElements.js";
import { fetchCategories } from "./service/api.service.js";

const initApp = async () => {
  const headerElem = document.querySelector(".header");
  const app = document.querySelector("#app");
  const headerObj = createHeader(headerElem);
  const categoryObj = createCategory(app);
  console.log("categoryObj: ",categoryObj);
  



  const returnIndex = async e => {
    e?.preventDefault();
    const categories = await fetchCategories();

    if (categories.error) {
      const errorText = createElement("p", {
        className: "server-error",
        textContent: "Ошибка серевера",
      });
      app.append(errorText);
      return;
    }
    categoryObj.mount(categories);
  };

  returnIndex();

  headerObj.headerLogoLink.addEventListener("click", returnIndex);
  headerObj.headerBtn.addEventListener("click", () => {
    categoryObj.unmount();
    headerObj.updateHeaderTitle("Новая категория");
  });
};

initApp();
