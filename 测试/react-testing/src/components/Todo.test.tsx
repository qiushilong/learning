import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo, { ITodo } from "./Todo";
import { act } from "react-dom/test-utils";

describe("Todo Component", () => {
  test("should render new item", () => {
    const todo: ITodo = {
      id: 1,
      text: "Hello World",
      done: false,
    };

    render(
      <Todo
        todoList={[todo]}
        addItem={jest.fn()}
        deleteItem={jest.fn()}
        checkItem={jest.fn()}
      ></Todo>
    );

    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });

  test.todo("should check item");

  test("should render delete item", () => {
    const todo: ITodo = {
      id: 1,
      text: "Hello World",
      done: false,
    };
    const deleteItem = jest.fn();

    render(
      <Todo
        todoList={[todo]}
        addItem={jest.fn()}
        deleteItem={deleteItem}
        checkItem={jest.fn()}
      ></Todo>
    );
    userEvent.click(screen.getByText("删除"));

    expect(deleteItem).toHaveBeenCalledTimes(1);
  });

  test("should render add item", () => {
    const addItem = jest.fn();

    render(
      <Todo
        todoList={[]}
        addItem={addItem}
        deleteItem={jest.fn()}
        checkItem={jest.fn()}
      ></Todo>
    );
    userEvent.type(
      screen.getByPlaceholderText("what is your plan"),
      "学测试{enter}"
    );

    expect(addItem).toHaveBeenCalledTimes(1);
    // expect(screen.getByTestId('todo-list')).toHaveLength(1);
  });
});
