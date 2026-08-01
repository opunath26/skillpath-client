import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthProvider.jsx";
import Swal from "sweetalert2";
import { 
  FaGraduationCap, 
  FaEye, 
  FaTrashAlt, 
  FaSearch, 
  FaClock, 
  FaUserGraduate 
} from "react-icons/fa";

const MyCourses = () => {
  const { user } = useContext(AuthContext);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;

    // Fetch enrollments
    fetch(`https://skill-path-server-five.vercel.app/enrollments?email=${user.email}`)
      .then((res) => res.json())
      .then((enrollments) => {
        if (!Array.isArray(enrollments) || enrollments.length === 0) {
          setEnrolledCourses([]);
          setLoading(false);
          return;
        }

        const courseIds = enrollments.map((e) => e.courseId);

        Promise.all(
          courseIds.map((id) =>
            fetch(`https://skill-path-server-five.vercel.app/courses/${id}`)
              .then((res) => res.json())
              .then((data) => data.result || data)
          )
        ).then((courses) => {
          // Merge course with enrollmentId
          const merged = courses.map((course, index) => ({
            ...course,
            enrollmentId: enrollments[index]?._id,
          }));

          setEnrolledCourses(merged.filter((c) => c._id));
          setLoading(false);
        });
      })
      .catch((err) => {
        console.error("Error fetching enrollments:", err);
        setLoading(false);
      });
  }, [user]);

  const showToast = (icon, title) => {
    Swal.fire({
      position: "top-center",
      icon: icon,
      title: title,
      showConfirmButton: false,
      timer: 2000,
      toast: true,
      background: icon === "success" ? "#0D9488" : "#E11D48",
      color: "#fff",
    });
  };

  const handleDelete = async (enrollmentId) => {
    const confirmDelete = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to drop/remove this enrolled course?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#E11D48",
      cancelButtonColor: "#64748B",
      confirmButtonText: "Yes, remove it!",
      customClass: {
        popup: "rounded-3xl font-sans",
        confirmButton: "rounded-xl font-bold px-5 py-2.5",
        cancelButton: "rounded-xl font-bold px-5 py-2.5",
      },
    });

    if (!confirmDelete.isConfirmed) return;

    try {
      const res = await fetch(
        `https://skill-path-server-five.vercel.app/enrollments/${enrollmentId}`,
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

  // Filtered list by search
  const filteredCourses = enrolledCourses.filter((course) =>
    course.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white/90 shadow-slate-200/50 shadow-sm backdrop-blur-md p-6 border border-slate-200/80 rounded-3xl">
      {/* Header & Search */}
      <div className="flex md:flex-row flex-col justify-between md:items-center gap-4 mb-6 pb-5 border-slate-100 border-b">
        <div className="flex items-center gap-3">
          <div className="bg-teal-50 p-3 rounded-2xl text-[#0D9488]">
            <FaGraduationCap size={22} />
          </div>
          <div>
            <h3 className="font-extrabold text-slate-800 text-xl">
              My Enrolled Courses
            </h3>
            <p className="text-slate-400 text-xs">
              Courses you are currently learning and attending
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <FaSearch className="top-1/2 left-3.5 absolute text-slate-400 -translate-y-1/2" size={14} />
            <input
              type="text"
              placeholder="Search enrolled..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-slate-50 py-2 pr-4 pl-9 border border-slate-200 focus:border-[#0D9488] rounded-xl focus:outline-none w-full text-slate-700 text-xs transition-all"
            />
          </div>

          <span className="bg-teal-500/10 px-4 py-2 border border-teal-500/20 rounded-xl font-bold text-[#0D9488] text-xs shrink-0">
            Total: {enrolledCourses.length}
          </span>
        </div>
      </div>

      {/* Course List Table */}
      {loading ? (
        <div className="py-16 text-center">
          <div className="inline-block border-[#0D9488] border-4 border-t-transparent rounded-full w-8 h-8 animate-spin" />
          <p className="mt-3 font-semibold text-slate-400 text-xs">
            Fetching your enrolled courses...
          </p>
        </div>
      ) : filteredCourses.length === 0 ? (
        <div className="bg-slate-50/50 my-2 py-14 border border-slate-200/60 border-dashed rounded-2xl text-center">
          <p className="font-semibold text-slate-400 text-sm italic">
            {searchTerm
              ? "No matching enrolled courses found."
              : "You have not enrolled in any courses yet."}
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-slate-100 border-b text-left">
                <th className="p-4 rounded-l-xl font-bold text-slate-500 text-xs uppercase tracking-wider">
                  #
                </th>
                <th className="p-4 font-bold text-slate-500 text-xs uppercase tracking-wider">
                  Thumbnail
                </th>
                <th className="p-4 font-bold text-slate-500 text-xs uppercase tracking-wider">
                  Course Info
                </th>
                <th className="p-4 font-bold text-slate-500 text-xs uppercase tracking-wider">
                  Duration
                </th>
                <th className="p-4 rounded-r-xl font-bold text-slate-500 text-xs text-center uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredCourses.map((course, index) => (
                <tr
                  key={course.enrollmentId || course._id}
                  className="group hover:bg-teal-50/30 transition-colors duration-200"
                >
                  <td className="p-4 font-bold text-slate-400 text-xs">
                    {index + 1}
                  </td>
                  <td className="p-4">
                    <img
                      src={
                        course.thumbnail ||
                        course.image ||
                        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800"
                      }
                      alt={course.title}
                      className="shadow-sm border border-slate-200/80 rounded-xl w-14 h-14 object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src =
                          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800";
                      }}
                    />
                  </td>
                  <td className="p-4">
                    <h4 className="font-bold text-slate-800 text-sm md:text-base">
                      {course.title}
                    </h4>
                    <p className="flex items-center gap-1.5 mt-0.5 text-slate-400 text-xs">
                      <FaUserGraduate className="text-teal-600" /> Instructor:{" "}
                      <span className="font-medium text-slate-600">
                        {course.instructorName || "SkillPath Expert"}
                      </span>
                    </p>
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-1.5 bg-slate-100 px-3 py-1 rounded-lg font-semibold text-slate-600 text-xs">
                      <FaClock className="text-teal-600" />
                      {course.duration || "N/A"}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex justify-center items-center gap-2">
                      <button
                        onClick={() =>
                          navigate(`/courseDetails/${course._id}`)
                        }
                        className="hover:bg-blue-100/70 p-2.5 rounded-xl text-blue-600 transition-colors cursor-pointer"
                        title="View Course Details"
                      >
                        <FaEye size={16} />
                      </button>

                      <button
                        onClick={() => handleDelete(course.enrollmentId)}
                        className="hover:bg-rose-100/70 p-2.5 rounded-xl text-rose-600 transition-colors cursor-pointer"
                        title="Remove Enrollment"
                      >
                        <FaTrashAlt size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyCourses;