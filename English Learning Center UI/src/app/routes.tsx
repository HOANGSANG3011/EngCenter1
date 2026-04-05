import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import CourseSearch from "./pages/CourseSearch";
import CourseList from "./pages/CourseList";
import CourseFilter from "./pages/CourseFilter";
import CourseDetails from "./pages/CourseDetails";
import ClassSelection from "./pages/ClassSelection";
import StudentInfo from "./pages/StudentInfo";
import Payment from "./pages/Payment";
import EnrollmentConfirmation from "./pages/EnrollmentConfirmation";
import MyCourses from "./pages/MyCourses";
import EnrolledCourseDetail from "./pages/EnrolledCourseDetail";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Notifications from "./pages/Notifications";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CourseManagement from "./pages/admin/CourseManagement";
import UserManagement from "./pages/admin/UserManagement";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/forgot-password",
    Component: ForgotPassword,
  },
  {
    path: "/course-search",
    Component: CourseSearch,
  },
  {
    path: "/courses",
    Component: CourseList,
  },
  {
    path: "/courses/filter",
    Component: CourseFilter,
  },
  {
    path: "/courses/:id",
    Component: CourseDetails,
  },
  {
    path: "/courses/:id/select-class",
    Component: ClassSelection,
  },
  {
    path: "/enrollment/student-info",
    Component: StudentInfo,
  },
  {
    path: "/enrollment/payment",
    Component: Payment,
  },
  {
    path: "/enrollment/confirmation",
    Component: EnrollmentConfirmation,
  },
  {
    path: "/my-courses",
    Component: MyCourses,
  },
  {
    path: "/my-courses/:id",
    Component: EnrolledCourseDetail,
  },
  {
    path: "/profile",
    Component: Profile,
  },
  {
    path: "/profile/edit",
    Component: EditProfile,
  },
  {
    path: "/notifications",
    Component: Notifications,
  },
  {
    path: "/admin",
    Component: AdminDashboard,
  },
  {
    path: "/admin/courses",
    Component: CourseManagement,
  },
  {
    path: "/admin/users",
    Component: UserManagement,
  },
]);
