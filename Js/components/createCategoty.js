import { createElement } from "../helper/createElements.js";
import { declOfNum } from "../helper/declOfNum.js";

export const createCategory = (app) => {
  const category = createElement("section", {
    className: "category section-offset",
  });

  const container = createElement("div", {
    className: "container",
  });
  category.append(container);

  const ul = createElement("ul", {
    className: "category__list",
  });

  const createCategoryCard = (data) => {
    const item = createElement("li", {
      className: "category__item",
    });

    item.dataset.id = data.id;

    const cardsBtn = createElement("button", {
      className: "category__card",
    });

    const spanTitle = createElement("span", {
      className: "category__title",
      textContent: data.title,
    });

    const spanPairs = createElement("span", {
      className: "category__pairs",
      textContent: declOfNum(data.length, ["пара","пары","пар"]),
    });

    cardsBtn.append(spanTitle, spanPairs);

    const editBtn = createElement("button", {
      className: "category__btn category__edit",
      ariaLabel: "редактировать",
    });

    const deleteBtn = createElement("button", {
      className: "category__btn category__del",
      ariaLabel: "удалить",
    });

    
    item.append(cardsBtn, editBtn, deleteBtn);
    return item;
  };

  container.append(ul);

  const mount = (data) => {
    ul.textContent = "";
    app.append(category);
    const cards = data.map(createCategoryCard);
    ul.append(...cards);
  };

  const unmount = () => {
    category.remove();
  };

  return { mount, unmount, ul };
};
