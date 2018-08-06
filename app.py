import json

from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__, static_folder="./templates/dist")


class Task(object):

    def __init__(self, text):
        self.text = text

    def to_dict(self):
        return {"text": self.text}


class TaskList(object):

    def __init__(self, name, tasks):
        self.name = name
        self.tasks = tasks

    def to_dict(self):
        return {
            "name": self.name,
            "tasks": [task.to_dict() for task in self.tasks]
        }


class Board(object):

    def __init__(self, lists):
        self.lists = lists

    def to_dict(self):
        return {
            "lists": [list.to_dict() for list in self.lists]
        }


DB = Board([
    # TaskList(name="Todo",
    #          tasks=[
    #              Task("Write example React app"),
    #              Task("Write documentation")
    #          ])
])


@app.route("/api/board/")
def get_board():
    """Return the state of the board."""
    return json.dumps(DB.to_dict())


@app.route("/api/<int:list_id>/task", methods=["PUT"])
def add_task(list_id):
    try:
        DB.lists[list_id].tasks.append(Task(text=request.form.get("text")))
    except IndexError:
        return json.dumps({"status": "FAIL"})
    return json.dumps({"status": "OK"})


@app.route("/api/<int:list_id>/task/<int:task_id>", methods=["DELETE"])
def delete_task(list_id, task_id):
    try:
        del DB.lists[list_id].tasks[task_id]
    except IndexError:
        return json.dumps({"status": "FAIL"})
    return json.dumps({"status": "OK"})


@app.route('/')
def index():
    return render_template("index.html")


if __name__ == '__main__':
    app.run(debug=True)
