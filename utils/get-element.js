function getELement(selectedElement) {
  const element = document.querySelector(selectedElement);
  if (element) {
    return element;
  } else {
    throw new Error(
      `The element '${selectedElement}' that yo selected doe not exist`
    );
  }
}

export default getELement;
