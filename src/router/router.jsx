import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import PublicPageLayout from "../layouts/PublicPageLayout";
import StudentLayout from "../layouts/StudentLayout";
import StudyAbroad from "../pages/StudyAbroad";
import About from "../pages/About";
import Contact from "../pages/Contact";
import FAQ from "../pages/FAQ";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RegisterDetails from "../pages/RegisterDetails";
import RegisterVerify from "../pages/RegisterVerify";
import RegisterParent from "../pages/RegisterParent";
import RegisterComplete from "../pages/RegisterComplete";
import GuestTutors from "../pages/GuestTutors";
import GuestTutorDetail from "../pages/GuestTutorDetail";
import Community from "../pages/Community";
import Courses from "../pages/Courses";
import CourseDetail from "../pages/CourseDetail";
import TutorRegister from "../pages/tutor/TutorRegister";
import TutorRegisterEducation from "../pages/tutor/TutorRegisterEducation";
import TutorRegisterTraining from "../pages/tutor/TutorRegisterTraining";
import TutorRegisterTraining2 from "../pages/tutor/TutorRegisterTraining2";
import TutorLayout from "../layouts/TutorLayout";
import TutorDashboard from "../pages/tutor/TutorDashboard";
import EditProfileBasic from "../pages/tutor/EditProfileBasic";
import EditProfileBio from "../pages/tutor/EditProfileBio";
import EditProfileVideo from "../pages/tutor/EditProfileVideo";
import EditProfileAvailability from "../pages/tutor/EditProfileAvailability";
import EditProfileCertificates from "../pages/tutor/EditProfileCertificates"
import TutorCoursesPage from "../pages/tutor/TutorCourses"
import SelfPacedCourseDetail from "../pages/tutor/SelfPacedCourseDetail";
import LiveCourseDetail from "../pages/tutor/LiveCourseDetail";
import CreateSelfPacedCourse from "../pages/tutor/CreateSelfPacedCourse";
import CreateLiveClass from "../pages/tutor/CreateLiveClass";
import CoursePublished from "../pages/tutor/CoursePublished";
import TutorClasses from "../pages/tutor/TutorClasses";
import TutorStudents from "../pages/tutor/TutorStudents";
import TutorExams from "../pages/tutor/TutorExams";
import CreateExam from "../pages/tutor/CreateExam";
import News from "../pages/News";
import NewsDetail from "../pages/NewsDetail";
import Partners from "../pages/Partners";
import OnlineLibrary from "../pages/OnlineLibrary";
import ProgramsPage from "../pages/Programs";
import ProgramDetail from "../pages/ProgramDetail";
import LiveTutoring from "../pages/LiveTutoring";
import Terms from "../pages/Terms";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Home from "../pages/Home";

import Dashboard from "../pages/student/Dashboard";
import MyCourses from "../pages/student/MyCourses";
import MySchedule from "../pages/student/MySchedule";
import Explore from "../pages/student/Explore";
import Tutors from "../pages/student/Tutors";
import TutorDetail from "../pages/student/TutorDetail";
import TutorCourses from "../pages/student/TutorCourses";
import TutorSchedule from "../pages/student/TutorSchedule";
import Achievements from "../pages/student/Achievements";
import AchievementsBadges from "../pages/student/AchievementsBadges";
import Cart from "../pages/student/Cart";
import Help from "../pages/student/Help";

import SettingsLayout from "../layouts/SettingsLayout";
import SettingsProfile from "../pages/settings/Profile";
import SettingsPassword from "../pages/settings/Password";
import Billing from "../pages/settings/Billing";
import ParentsDetails from "../pages/settings/ParentsDetails";
import Notifications from "../pages/settings/Notifications";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<PublicPageLayout />}>
                <Route index element={<Home />} />
            </Route>
            <Route path="/" element={<PublicPageLayout />}>
                <Route path="study-abroad" element={<StudyAbroad />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="find-a-tutor" element={<GuestTutors />} />
                <Route path="find-a-tutor/:id" element={<GuestTutorDetail />} />
                <Route path="news" element={<News />} />
                <Route path="news/:id" element={<NewsDetail />} />
                <Route path="partners" element={<Partners />} />
                <Route path="online-library" element={<OnlineLibrary />} />
                <Route path="programs" element={<ProgramsPage />} />
                <Route path="programs/:id" element={<ProgramDetail />} />
                <Route path="live-tutoring" element={<LiveTutoring />} />
                <Route path="community" element={<Community />} />
                <Route path="courses" element={<Courses />} />
                <Route path="courses/:id" element={<CourseDetail />} />
                <Route path="terms" element={<Terms />} />
                <Route path="privacy-policy" element={<PrivacyPolicy />} />
            </Route>
            <Route path="/student" element={<StudentLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="my-courses" element={<MyCourses />} />
                <Route path="schedule" element={<MySchedule />} />
                <Route path="explore" element={<Explore />} />
                <Route path="tutors" element={<Tutors />} />
                <Route path="tutors/:id" element={<TutorDetail />} />
                <Route path="tutors/:id/courses" element={<TutorCourses />} />
                <Route path="tutors/:id/schedule" element={<TutorSchedule />} />
                <Route path="achievements" element={<Achievements />} />
                <Route path="achievements/badges" element={<AchievementsBadges />} />
                <Route path="cart" element={<Cart />} />
                <Route path="help" element={<Help />} />
                <Route path="settings" element={<SettingsLayout />}>
                    <Route index element={<SettingsProfile />} />
                    <Route path="profile" element={<SettingsProfile />} />
                    <Route path="password" element={<SettingsPassword />} />
                    <Route path="billing" element={<Billing />} />
                    <Route path="parents" element={<ParentsDetails />} />
                    <Route path="notifications" element={<Notifications />} />
                </Route>
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="register/details" element={<RegisterDetails />} />
            <Route path="register/verify" element={<RegisterVerify />} />
            <Route path="register/parent" element={<RegisterParent />} />
            <Route path="register/complete" element={<RegisterComplete />} />
            <Route path="tutor/register" element={<TutorRegister />} />
            <Route path="tutor/register/education" element={<TutorRegisterEducation />} />
            <Route path="tutor/register/training" element={<TutorRegisterTraining />} />
            <Route path="tutor/register/training/step2" element={<TutorRegisterTraining2 />} />
            <Route path="/tutor" element={<TutorLayout />}>
                <Route index element={<TutorDashboard />} />
                <Route path="dashboard" element={<TutorDashboard />} />
                <Route path="edit-profile" element={<EditProfileBasic />} />
                <Route path="edit-profile/bio" element={<EditProfileBio />} />
                <Route path="edit-profile/video" element={<EditProfileVideo />} />
                <Route path="edit-profile/availability" element={<EditProfileAvailability />} />
                <Route path="edit-profile/certificates" element={<EditProfileCertificates />} />
                <Route path="courses" element={<TutorCoursesPage />} />
                <Route path="classes" element={<TutorClasses />} />
                <Route path="students" element={<TutorStudents />} />
                <Route path="exams" element={<TutorExams />} />
                <Route path="exams/create" element={<CreateExam />} />
                <Route path="courses/:id" element={<SelfPacedCourseDetail />} />
                <Route path="courses/live/:id" element={<LiveCourseDetail />} />
                <Route path="courses/create-self-paced" element={<CreateSelfPacedCourse />} />
                <Route path="courses/create-live-class" element={<CreateLiveClass />} />
                <Route path="courses/published" element={<CoursePublished />} />
            </Route>
        </>
    )
)
