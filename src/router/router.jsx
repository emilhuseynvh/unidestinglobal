import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import PublicPageLayout from "../layouts/PublicPageLayout";
import StudyAbroad from "../pages/StudyAbroad";
import About from "../pages/About";
import Contact from "../pages/Contact";
import FAQ from "../pages/FAQ";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<PublicPageLayout />}>
                <Route index element={<StudyAbroad />} />
                <Route path="study-abroad" element={<StudyAbroad />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="faq" element={<FAQ />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
        </>
    )
)