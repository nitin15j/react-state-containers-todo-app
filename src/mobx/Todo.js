import { types } from "mobx-state-tree";
import * as React from "react";
import components from "../components";

export const Todo = types
  .model("Todo", {
    id: types.optional(types.number, () => Math.random()),
    value: types.string,
    completed: false
  })
  .actions(self => ({
    toggle() {
      self.completed = !self.completed;
    }
  }))
  .views(self =>
    components({
      view() {
        return (
          <li>
            <input
              type="checkbox"
              checked={self.completed}
              onChange={self.toggle}
            />
            {self.value}
          </li>
        );
      }
    })
  );
