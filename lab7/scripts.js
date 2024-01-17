document.addEventListener("DOMContentLoaded", function () {
    const todoList = document.getElementById("todo-list");
    const todoInput = document.getElementById("todo-input");
    const addButton = document.getElementById("add-button");
    // อาร์เรย์ส าหรับเก็บรายการ Todo
    let todos = [];
    // เพิ่มรายการ Todo
    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText !== "") {
            const todoItem = {

                text: todoText,
                completed: false,
            };
            todos.push(todoItem);
            renderTodoList();
            todoInput.value = "";
            // ฟังก์ชัน addTodo นี้ถูกออกแบบมาเพื่อทำงานกับส่วนต่าง ๆ ของเว็บแอปพลิเคชันที่เกี่ยวข้องกับการเพิ่มรายการ "to-do" ลงในรายการที่แสดงผลบนหน้าเว็บ.
        }
    }
    // ลบรายการ Todo
    function deleteTodo(index) {
        todos.splice(index, 1);
        renderTodoList();
        // ฟังก์ชัน deleteTodo นี้ถูกออกแบบมาเพื่อลบรายการ "to-do" จากอาร์เรย์ todos ที่มีดัชนี (index) ที่กำหนด และจากนั้นรีเรนเดอร์รายการ "to-do" ใหม่
    }
    // ตรวจสอบ/ยกเลิกการเสร็จสิ้นรายการ Todo
    function toggleComplete(index) {
        todos[index].completed = !todos[index].completed;
        renderTodoList();
        // ฟังก์ชัน toggleComplete นี้ถูกออกแบบมาเพื่อเปลี่ยนสถานะการเสร็จสิ้นหรือยังไม่เสร็จสิ้นของ "to-do" ที่มีดัชนี (index) ที่กำหนด และจากนั้นรีเรนเดอร์รายการ "to-do" ใหม่
    }
    // แสดงรายการ Todo บนหน้าเว็บ
    function renderTodoList() {
        console.log(todos);
        todoList.innerHTML = "";
        for (let i = 0; i < todos.length; i++) {
            const todoItem = todos[i];
            const listItem = document.createElement("li");
            listItem.textContent = todoItem.text;
            if (todoItem.completed) {
                listItem.classList.add("completed");
            }
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "ลบ";
            deleteButton.addEventListener("click", () => deleteTodo(i));
            const completeButton = document.createElement("button");
            completeButton.textContent = todoItem.completed ? "ยกเลิก" : "เสร็จ";
            completeButton.addEventListener("click", () => toggleComplete(i));
            listItem.appendChild(completeButton);
            listItem.appendChild(deleteButton);
            todoList.appendChild(listItem);
            // ฟังก์ชัน renderTodoList นี้ถูกออกแบบมาเพื่อแสดงผลรายการ "to-do" บนหน้าเว็บ
        }
    }
    // การกดปุ่ ม "เพิ่ม"
    addButton.addEventListener("click", addTodo);
    // การกด Enter ใน input
    todoInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTodo();
        }
    });

    // แสดงรายการ Todo คร้ังแรก
    renderTodoList();
});