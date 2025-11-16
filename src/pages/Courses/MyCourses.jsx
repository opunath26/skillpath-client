import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthProvider.jsx";
import Swal from "sweetalert2";

const MyCourses = () => {
  const { user } = useContext(AuthContext);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;

    // Fetch enrollments
    fetch(`http://localhost:3000/enrollments?email=${user.email}`)
      .then((res) => res.json())
      .then((enrollments) => {
        const courseIds = enrollments.map((e) => e.courseId);

        Promise.all(
          courseIds.map((id) =>
            fetch(`http://localhost:3000/courses/${id}`)
              .then((res) => res.json())
              .then((data) => data.result || data)
          )
        ).then((courses) => {
          // Merge course with enrollmentId
          const merged = courses.map((course, index) => ({
            ...course,
            enrollmentId: enrollments[index]._id,
          }));

          setEnrolledCourses(merged);
        });
      })
      .catch((err) => console.error(err));
  }, [user]);

  const showToast = (icon, title) => {
    Swal.fire({
      position: "top-center",
      icon: icon,
      title: title,
      showConfirmButton: false,
      timer: 2000,
      toast: true,
      background: icon === "success" ? "#39b8ad" : "#f56565",
      color: "#fff",
    });
  };

  const handleDelete = async (enrollmentId) => {
    const confirmDelete = await Swal.fire({
      title: "Are you sure?",
      text: "You want to remove this course?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    });

    if (!confirmDelete.isConfirmed) return;

    try {
      const res = await fetch(
        `http://localhost:3000/enrollments/${enrollmentId}`,
        { method: "DELETE" }
      );

      if (res.ok) {
        setEnrolledCourses(
          enrolledCourses.filter((c) => c.enrollmentId !== enrollmentId)
        );
        showToast("success", "Enrollment removed successfully!");
      }
    } catch (error) {
      console.error(error);
      showToast("error", "Failed to remove enrollment");
    }
  };

  return (
    <div className="p-6">
      <h2 className="mb-6 font-bold text-2xl">My Enrolled Courses</h2>

      {enrolledCourses.length === 0 ? (
        <p className="text-gray-600">
          You have not enrolled in any courses yet.
        </p>
      ) : (
        <table className="border border-gray-300 rounded-lg min-w-full overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border-b">#</th>
              <th className="px-4 py-2 border-b">Course Title</th>
              <th className="px-4 py-2 border-b">Students Enrolled</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {enrolledCourses.map((course, index) => (
              <tr key={course.enrollmentId} className="text-center">
                <td className="px-4 py-2 border-b">{index + 1}</td>
                <td className="px-4 py-2 border-b">{course.title}</td>
                <td className="px-4 py-2 border-b">
                  {course.students?.length || 0}
                </td>
                <td className="flex justify-center gap-2 px-4 py-2 border-b">
                  <button
                    onClick={() => navigate(`/courseDetails/${course._id}`)}
                    className="bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded text-white"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => handleDelete(course.enrollmentId)}
                    className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyCourses;
