import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import PublicPageLayout from "../layouts/PublicPageLayout";
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
import TutorRegisterVerify from "../pages/tutor/TutorRegisterVerify";
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
import ExamPublished from "../pages/tutor/ExamPublished";
import TutorSchedulePage from "../pages/tutor/TutorSchedule";
import TutorEarnings from "../pages/tutor/TutorEarnings";
import TutorPerformance from "../pages/tutor/TutorPerformance";
import TutorSettings from "../pages/tutor/TutorSettings";
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

import StudentPanelLayout from "../layouts/StudentPanelLayout";
import PanelDashboard from "../pages/student/PanelDashboard";
import StudentMyCourses from "../pages/student/StudentMyCourses";
import StudentCourseDetail from "../pages/student/StudentCourseDetail";
import StudentLiveCourseDetail from "../pages/student/StudentLiveCourseDetail";
import StudentSchedule from "../pages/student/StudentSchedule";
import StudentTransactions from "../pages/student/StudentTransactions";
import StudentPerformance from "../pages/student/StudentPerformance";
import StudentAchievements from "../pages/student/StudentAchievements";
import StudentExams from "../pages/student/StudentExams";
import TakeExam from "../pages/student/TakeExam";
import ExamQuestions from "../pages/student/ExamQuestions";
import StudentEditProfile from "../pages/student/StudentEditProfile";
import StudentEditBio from "../pages/student/StudentEditBio";
import StudentEditPersonalization from "../pages/student/StudentEditPersonalization";
import StudentEditParent from "../pages/student/StudentEditParent";
import StudentEditCertificates from "../pages/student/StudentEditCertificates";
import StudentSettings from "../pages/student/StudentSettings";
import StudentSettingsPassword from "../pages/student/StudentSettingsPassword";
import StudentSettingsBilling from "../pages/student/StudentSettingsBilling";
import StudentSettingsNotifications from "../pages/student/StudentSettingsNotifications";
import Payment from "../pages/student/Payment";
import StudentSettingsLayout from "../layouts/StudentSettingsLayout";
import EditProfileLayout from "../layouts/EditProfileLayout";

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
            <Route path="/student" element={<StudentPanelLayout />}>
                <Route index element={<PanelDashboard />} />
                <Route path="panel/courses" element={<StudentMyCourses />} />
                <Route path="panel/courses/:id" element={<StudentCourseDetail />} />
                <Route path="panel/courses/live/:id" element={<StudentLiveCourseDetail />} />
                <Route path="panel/exams" element={<StudentExams />} />
                <Route path="panel/schedule" element={<StudentSchedule />} />
                <Route path="panel/transactions" element={<StudentTransactions />} />
                <Route path="panel/performance" element={<StudentPerformance />} />
                <Route path="panel/achievements" element={<StudentAchievements />} />
                <Route path="panel/edit-profile" element={<EditProfileLayout />}>
                    <Route index element={<StudentEditProfile />} />
                    <Route path="bio" element={<StudentEditBio />} />
                    <Route path="personalization" element={<StudentEditPersonalization />} />
                    <Route path="parent" element={<StudentEditParent />} />
                    <Route path="certificates" element={<StudentEditCertificates />} />
                </Route>
                <Route path="panel/settings" element={<StudentSettingsLayout />}>
                    <Route index element={<StudentSettings />} />
                    <Route path="password" element={<StudentSettingsPassword />} />
                    <Route path="billing" element={<StudentSettingsBilling />} />
                    <Route path="notifications" element={<StudentSettingsNotifications />} />
                </Route>
            </Route>
            <Route path="/student/panel/exams/take/:id" element={<TakeExam />} />
            <Route path="/student/panel/exams/questions/:id" element={<ExamQuestions />} />
            <Route path="/student/payment" element={<Payment />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="register/details" element={<RegisterDetails />} />
            <Route path="register/verify" element={<RegisterVerify />} />
            <Route path="register/parent" element={<RegisterParent />} />
            <Route path="register/complete" element={<RegisterComplete />} />
            <Route path="tutor/register" element={<TutorRegister />} />
            <Route path="tutor/register/verify" element={<TutorRegisterVerify />} />
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
                <Route path="exams/published" element={<ExamPublished />} />
                <Route path="schedule" element={<TutorSchedulePage />} />
                <Route path="earnings" element={<TutorEarnings />} />
                <Route path="performance" element={<TutorPerformance />} />
                <Route path="settings" element={<TutorSettings />} />
                <Route path="courses/:id" element={<SelfPacedCourseDetail />} />
                <Route path="courses/live/:id" element={<LiveCourseDetail />} />
                <Route path="courses/create-self-paced" element={<CreateSelfPacedCourse />} />
                <Route path="courses/create-live-class" element={<CreateLiveClass />} />
                <Route path="courses/published" element={<CoursePublished />} />
            </Route>
        </>
    )
)
