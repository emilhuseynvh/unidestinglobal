import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import PublicPageLayout from "../layouts/PublicPageLayout";
import StudyAbroad from "../pages/StudyAbroad";
import About from "../pages/About";
import Contact from "../pages/Contact";
import FAQ from "../pages/FAQ";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyCourses from "../pages/MyCourses";
import MySchedule from "../pages/MySchedule";
import Explore from "../pages/Explore";
import Tutors from "../pages/Tutors";
import TutorDetail from "../pages/TutorDetail";
import TutorCourses from "../pages/TutorCourses";
import TutorSchedule from "../pages/TutorSchedule";
import Achievements from "../pages/Achievements";
import AchievementsBadges from "../pages/AchievementsBadges";
import Dashboard from "../pages/Dashboard";
import Cart from "../pages/Cart";
import Help from "../pages/Help";
import SettingsLayout from "../layouts/SettingsLayout";
import SettingsProfile from "../pages/settings/Profile";
import SettingsPassword from "../pages/settings/Password";
import ParentsDetails from "../pages/settings/ParentsDetails";
import Notifications from "../pages/settings/Notifications";
import Billing from "../pages/settings/Billing";
import RegisterDetails from "../pages/RegisterDetails";
import RegisterVerify from "../pages/RegisterVerify";
import RegisterParent from "../pages/RegisterParent";
import RegisterComplete from "../pages/RegisterComplete";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<PublicPageLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="study-abroad" element={<StudyAbroad />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="my-courses" element={<MyCourses />} />
                <Route path="schedule" element={<MySchedule />} />
                <Route path="explore" element={<Explore />} />
                <Route path="tutors" element={<Tutors />} />
                <Route path="tutors/:id" element={<TutorDetail />} />
                <Route path="tutors/:id/courses" element={<TutorCourses />} />
                <Route path="tutors/:id/schedule" element={<TutorSchedule />} />
                <Route path="achievements" element={<Achievements />} />
                <Route path="achievements/badges" element={<AchievementsBadges />} />
                <Route path="dashboard" element={<Dashboard />} />
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
        </>
    )
)