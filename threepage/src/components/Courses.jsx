export default function Courses() {
  const courses = [
    "Data Structures and Algorithms",
    "Computer Networks",
    "Database Management Systems",
    "Operating Systems",
    "Software Engineering",
    "Artificial Intelligence"
  ];

  return (
    <div className="courses-page">
      <h2>Courses Enrolled by B Tech Students</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
}
