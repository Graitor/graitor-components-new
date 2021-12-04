const getElementsWidth = (id: string): number => {
  const element = document.getElementById(id)
  if (!element) return 0
  return element.getBoundingClientRect().width
}



export {
  getElementsWidth,
}