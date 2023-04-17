#Todo list program
def display_menu():
    print("Select an option:")
    print("1. Add a new task")
    print("2. View your task")
    print("3. Remove a task")
    print("4. Quit")

def add_todo():
    todo = input("Enter a new task: ")
    todos.append({"todo": todo, "done": False})
    print(f"{todo} has been added to your task list.")

def view_todos():
    if not todos:
        print("Your task list is empty.")
    else:
        for i, todo in enumerate(todos, start=1):
            status = "DONE" if todo["done"] else "TODO"
            print(f"{i}. {todo['todo']} ({status})")

def mark_todo():
    index = int(input("Enter the index of the task to mark as done: "))
    if index > 0 and index <= len(todos):
        todos[index - 1]["done"] = True
        print(f"Marked {todos[index - 1]['todo']} as done.")
    else:
        print("Invalid index.")

def remove_todo():
    index = int(input("Enter the index of the task to remove: "))
    if index > 0 and index <= len(todos):
        todo = todos.pop(index - 1)
        print(f"{todo['todo']} has been removed from your task list.")
    else:
        print("Invalid index.")

todos = []

while True:
    display_menu()
    choice = input("Enter your choice (1-4): ")
    if choice == "1":
        add_todo()
    elif choice == "2":
        view_todos()
    elif choice == "3":
        remove_todo()
    elif choice == "4":
        break
    else:
        print("Invalid choice. Try again.")


