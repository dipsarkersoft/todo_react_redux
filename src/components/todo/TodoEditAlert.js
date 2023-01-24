import store from "../../redux/store/Store";
import {EditTodo} from "../../redux/state/todo/todoSlice";
import Swal from "sweetalert2";

export function TodoEditAlert(i, item) {
    Swal.fire({
        title: 'Update Task Name',
        input: 'text',
        inputValue: item,
        inputValidator: (value) => {
            if (value) {
                store.dispatch(EditTodo({index: i, task: value}))

                Swal.fire(
                    'Edited!',
                    'Your task has been edited.',
                    'success'
                )
            }
        }
    })
}