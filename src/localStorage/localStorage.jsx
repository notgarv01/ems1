const employees = [
  {
    "id": 1,
    "firstName": "Garv",
    "email": "e@e.com",
    "password": "123",
    "taskCounts": { "active": 2, "newTask": 1, "completed": 1, "failed": 1 },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Update UI",
        "taskDescription": "Make the login page responsive for mobile devices.",
        "taskDate": "2024-10-15",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Fix Layout",
        "taskDescription": "Failed to fix the grid layout in the dashboard.",
        "taskDate": "2024-10-16",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "API Integration",
        "taskDescription": "Connect the frontend with the user authentication API.",
        "taskDate": "2024-10-17",
        "category": "Dev"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Client Meeting",
        "taskDescription": "Discuss project requirements with the stakeholder.",
        "taskDate": "2024-10-10",
        "category": "Meeting"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix Sidebar Bug",
        "taskDescription": "The sidebar disappears on certain screen resolutions.",
        "taskDate": "2024-10-18",
        "category": "Dev"
      }
    ]
},
  {
    "id": 2,
    "firstName": "Aditya",
    "email": "employee2@example.com",
    "password": "123",
    "taskCounts": { "active": 1, "newTask": 0, "completed": 1, "failed": 1 },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Database Migration",
        "taskDescription": "Migrate data to the new AWS production server.",
        "taskDate": "2024-10-20",
        "category": "Dev"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Optimize Assets",
        "taskDescription": "Compress images and minify CSS files.",
        "taskDate": "2024-10-12",
        "category": "Performance"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Unity Integration",
        "taskDescription": "Integrate the 3D model viewer into the dashboard.",
        "taskDate": "2024-10-05",
        "category": "Dev"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Rohan",
    "email": "employee3@example.com",
    "password": "123",
    "taskCounts": { "active": 2, "newTask": 1, "completed": 1, "failed": 0 },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Draft Blog Post",
        "taskDescription": "Write an article about the new software release.",
        "taskDate": "2024-10-25",
        "category": "Content"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "SEO Audit",
        "taskDescription": "Analyze the website for search engine optimization.",
        "taskDate": "2024-10-22",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Social Media Plan",
        "taskDescription": "Plan posts for the upcoming holiday season.",
        "taskDate": "2024-10-01",
        "category": "Marketing"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Sneha",
    "email": "employee4@example.com",
    "password": "123",
    "taskCounts": { "active": 2, "newTask": 1, "completed": 0, "failed": 0 },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Security Patch",
        "taskDescription": "Apply the latest security updates to the server.",
        "taskDate": "2024-10-30",
        "category": "Security"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Code Review",
        "taskDescription": "Review the pull requests from the junior developers.",
        "taskDate": "2024-10-28",
        "category": "Dev"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Arjun",
    "email": "employee5@example.com",
    "password": "123",
    "taskCounts": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Test New Features",
        "taskDescription": "Manual testing of the recently added payment gateway.",
        "taskDate": "2024-11-01",
        "category": "QA"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Bug Report",
        "taskDescription": "Document the bugs found during the last sprint.",
        "taskDate": "2024-10-14",
        "category": "QA"
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "firstName": "Admin",
    "email": "admin@me.com",
    "password": "123"
  }
];
export const setLocalStorage = ()=>{
  localStorage.setItem("employees",JSON.stringify(employees))
  localStorage.setItem("admin",JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem("employees"))
  const admin = JSON.parse(localStorage.getItem("admin"))
// console.log(employees,admin);

  return {employees,admin}
}
// getLocalStorage()