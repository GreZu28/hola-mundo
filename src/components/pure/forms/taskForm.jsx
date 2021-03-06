import React, { useRef } from "react";
import PropTypes from "prop-types";
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";

const TaskForm = ({ add, length }) => {
    const nameRef = useRef("");
    const descriptionRef = useRef("");
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(e) {
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        add(newTask);
        nameRef.current.value = "";
        descriptionRef.current.value = "";
    }

    return (
        <form
            onSubmit={addTask}
            className="d-flex justify-content-center align-items-center mb-4"
        >
            <div className="form-outline flex-fill">
                <input
                    type="text"
                    ref={nameRef}
                    id="inputName"
                    className="form-control form-control-lg"
                    required
                    autoFocus
                    placeholder="Task name"
                />
                <input
                    type="text"
                    ref={descriptionRef}
                    id="inputDescription"
                    className="form-control form-control-lg"
                    required
                    placeholder="Task description"
                />
                <label htmlFor="selectLevel" className="sr-only">
                    Priority
                </label>
                <select
                    name="selectLevel"
                    id="selectLevel"
                    ref={levelRef}
                    defaultValue={LEVELS.NORMAL}
                >
                    <option value={LEVELS.NORMAL}>Normal</option>
                    <option value={LEVELS.URGENT}>Urgent</option>
                    <option value={LEVELS.BLOCKING}>Blocking</option>
                </select>
                <button type="submit" className="btn btn-success btn-lg ms-2">
                    {length === 0 ? "Create task" : "Add task"}
                </button>
            </div>
        </form>
    );
};

TaskForm.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired,
};
export default TaskForm;
