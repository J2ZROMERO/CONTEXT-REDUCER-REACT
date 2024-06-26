const TaskReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TASK":
      console.log("añadiendod");
      return {
        ...state,
        tasks: [...state.tasks, payload],
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((e) => e.id !== payload),
      };
    case "UPDATE_TASK":
      console.log("actualizado");
      return {
        ...state,
        tasks: state.tasks.map((e) =>
          e.id == payload.id
            ? { ...e, title: payload.title, description: payload.description }
            : e
        ),
      };

    case "DONE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((e) =>
          e.id == payload ? { ...e, done: !e.done } : e
        ),
      };

    default:
      return state;
  }
};

export { TaskReducer };
