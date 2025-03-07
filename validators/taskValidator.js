export const taskValidator = {
  validateTask: ({ title, description }) => {
    const errors = [];
    if (!title) errors.push("title is required");
    if (!description) errors.push("description is required");

    return errors;
  },
};
