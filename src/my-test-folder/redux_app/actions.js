//export const uid = () => Math.random().toString(34).slice(2);
export const uid = (text) => text + text.length +1;

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    payload: {
      id: uid(text),
      isDone: false,
      isBold: false,
      text: text
    }
  };
}

export const toggleTodo= (id) => {
  return {
    type: 'TOGGLE_TODO',
    payload: id
  };
}

export const boldTodo = (id) => {
  return {
    type: 'BOLD_TODO',
    payload: id
  }
}

