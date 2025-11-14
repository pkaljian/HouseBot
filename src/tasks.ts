export interface Task {
  id: string;
  title: string;
  assignee: "Peter" | "Elena" | "Both";
  createdAt: string;
  dueDate?: string;
  notes?: string;
}

const tasks: Task[] = [];

export function addTask(task: Task) {
  tasks.push(task);
  console.log("Added task:", task);
}

export function listTasks() {
  return tasks;
}
