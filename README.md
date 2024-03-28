Mentor-Student API 
Welcome to the Mentor-Student API  This API provides endpoints for managing mentors and students, facilitating mentorship relationships and student assignments. Below, you'll find detailed information on each endpoint along with examples of requests and responses.

Base URL:
https://mentorstudentapi-its5.onrender.com
Introduction:
The Mentor-Student API is designed to streamline the process of mentorship and student management within educational institutions or similar organizations. It allows administrators, mentors, and students to efficiently create, update, and retrieve information related to mentorship programs.

Key Features:
Mentor Management: Create new mentors, assign mentees (students) to mentors, and retrieve mentorship statistics.
Student Management: Create new students, assign mentors to students, and retrieve information about students' previous mentors.
Data Integrity: Ensure data consistency and integrity by enforcing relationships between mentors and students.
Scalability: Easily scale mentorship programs by adding new mentors and students as needed.

Error Handling:
The API follows standard HTTP status codes to indicate the success or failure of requests. Additionally, detailed error messages are provided in the response body to assist developers in troubleshooting issues.

Mentor Routes

Get Mentees of a Mentor
URL: https://mentorstudentapi-its5.onrender.com/mentor/getmentor/:mentor
Method: GET
Description: Retrieve the mentees assigned to a specific mentor.
Parameters:
mentor: The name of the mentor to retrieve mentees for.
Response:
Status: 200 OK
Body: Array of mentee objects

Get Mentor and Student Statistics
URL: https://mentorstudentapi-its5.onrender.com/mentor/getstats
Method: GET
Description: Retrieve statistics about mentors and students, including mentors' names and students with no assigned mentor.
Response:
Status: 200 OK
Body: Object containing arrays of mentors and students

Create Mentor
URL: https://mentorstudentapi-its5.onrender.com/mentor/createMentor
Method: POST
Description: Create a new mentor.
Request Body: Mentor object
Response:
Status: 200 OK
Body: Success message

Assign Students to Mentor
URL: https://mentorstudentapi-its5.onrender.com/mentor/:mentor/assign
Method: POST
Description: Assign students to a mentor.
Parameters:
mentor: The name of the mentor to assign students to.
Request Body: Array of student objects
Response:
Status: 200 OK
Body: Success message

Student Routes

Get Previous Mentor of a Student
URL: https://mentorstudentapi-its5.onrender.com/student/previous/:student
Method: GET
Description: Retrieve the previous mentor of a specific student.
Parameters:
student: The name of the student to retrieve the previous mentor for.
Response:
Status: 200 OK
Body: Name of the previous mentor

Create Student
URL: https://mentorstudentapi-its5.onrender.com/student/createStudent
Method: POST
Description: Create a new student.
Request Body: Student object
Response:
Status: 200 OK
Body: Success message

Assign Mentor to Student
URL: https://mentorstudentapi-its5.onrender.com/student/assignmentor
Method: PUT
Description: Assign a mentor to a student.
Request Body: Object containing student and mentor names
Response:
Status: 200 OK
Body: Success message


Getting Started:
To begin using the Mentor-Student API, explore the available endpoints listed above. Each endpoint is accompanied by its URL, supported HTTP methods, descriptions, and examples of request and response formats.

Note: Replace placeholders such as :mentor and :student with actual names when making requests.
