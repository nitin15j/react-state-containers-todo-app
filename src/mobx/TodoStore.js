import { types } from "mobx-state-tree"
import * as React from "react"
import components from "../components"
import { Todo } from "./Todo"

export const TodoStore = types
    .model("TodoStore", {
        todos: types.array(Todo)
    })
    .views(self => ({
        get unfinishedTodoCount() {
            return self.todos.filter(todo => !todo.finished).length
        }
    }))
    .volatile(self => ({
        newTodoTitle: ""
    }))
    .actions(self => ({
        addTodo(title) {
            self.todos.push({ title })
        },
        handleChange(e) {
            self.newTodoTitle = e.target.value
        },
        handleNewTodoClick(e) {
            self.addTodo(self.newTodoTitle)
            self.newTodoTitle = ""
        }
    }))
    .views(self =>
        components({
            view() {
                return (
                    <div>
                        <input
                            value={self.newTodoTitle}
                            onChange={self.handleChange}
                        />
                        <button onClick={self.handleNewTodoClick}>Add</button>
                        <ul>
                            {self.todos.map(todo => (
                                <todo.view key={todo.id} />
                            ))}
                        </ul>
                        Tasks left: {self.unfinishedTodoCount}
                    </div>
                )
            },
            remainingTasks() {
                return (
                    <ul>
                        {self.todos
                            .filter(todo => !todo.finished)
                            .map(todo => <li key={todo.id}>{todo.title}</li>)}
                    </ul>
                )
            }
        })
    )
