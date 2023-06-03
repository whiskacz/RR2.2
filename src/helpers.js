export const combineAge = (arr) => arr.reduce((sum, element) => element.age + sum, 0);
export const renderAge = (element, data) => element.innerHTML = combineAge(data)