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
            // ฟังก์ชั่น addTodo นี้ใช้สำหรับเพิ่มรายการ Todo ลงในรายการ todos โดยใช้ข้อมูลจาก input element ที่มี id เป็น todoInput ซึ่งเป็นอาจจะเป็น input element ประเภท text ที่ให้ผู้ใช้ป้อนข้อความ Todo ลงไป.
        }
    }
    // ลบรายการ Todo
    function deleteTodo(index) {
        todos.splice(index, 1);
        renderTodoList();
            // ฟังก์ชัน deleteTodo นี้ถูกใช้เพื่อลบ Todo จากรายการ todos โดยให้ index เป็นพารามิเตอร์ที่ระบุถึงตำแหน่งของ Todo ที่ต้องการลบออกจาก array todos.
    }
    // ตรวจสอบ/ยกเลิกการเสร็จสิ้นรายการ Todo
    function toggleComplete(index) {
        todos[index].completed = !todos[index].completed;
        renderTodoList();
        // ฟังก์ชัน toggleComplete นี้ถูกใช้เพื่อสลับสถานะการเสร็จสิ้น (completed) ของ Todo ที่อยู่ใน array todos ที่ตำแหน่ง index.

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
            // ฟังก์ชัน renderTodoList นี้ถูกใช้เพื่อแสดงผลรายการ Todo บนหน้าเว็บ. ได้ทำการสร้าง HTML elements ในรูปแบบของรายการ Todo จากข้อมูลที่อยู่ใน array todos.
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