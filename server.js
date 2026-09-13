const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/chat", (req, res) => {

    const msg = req.body.message.toLowerCase();

    let reply = "Sorry, mujhe aapka question samajh nahi aaya. Kripya college se related question puchiye.";

    // Greeting
    if (
        msg.includes("hello") ||
        msg.includes("hi") ||
        msg.includes("hey")
    ) {
        reply = "Hello! Welcome to College Helpdesk Chatbot. How can I help you today?";
    }

    // Admission
    else if (
        msg.includes("admission") ||
        msg.includes("apply") ||
        msg.includes("registration")
    ) {
        reply = "Admission process: Fill the online admission form, upload required documents, verify your details, and pay the admission fee. Required documents include 10th & 12th marksheets, Aadhaar Card, passport-size photographs, migration certificate (if applicable), and category certificate (if applicable).";
    }

    // Courses
    else if (
        msg.includes("course") ||
        msg.includes("courses") ||
        msg.includes("branch")
    ) {
        reply = "Available courses are: B.Tech, MBA, BCA, MCA, BBA and Polytechnic Diploma.";
    }

    // BTech
    else if (msg.includes("btech") || msg.includes("b.tech")) {
        reply = "B.Tech branches available are Computer Science Engineering (CSE), Artificial Intelligence & Machine Learning (AI & ML), Electronics & Communication Engineering (ECE), Electrical Engineering (EE), Mechanical Engineering (ME) and Civil Engineering (CE). Annual B.Tech fee is ₹1,10,000.";
    }

    // MBA
    else if (msg.includes("mba")) {
        reply = "MBA is a 2-year postgraduate program. Annual fee is approximately ₹90,000.";
    }

    // BCA
    else if (msg.includes("bca")) {
        reply = "BCA is a 3-year undergraduate course. Annual fee is approximately ₹60,000.";
    }

    // MCA
    else if (msg.includes("mca")) {
        reply = "MCA is a 2-year postgraduate course. Annual fee is approximately ₹75,000.";
    }

    // BBA
    else if (msg.includes("bba")) {
        reply = "BBA is a 3-year undergraduate course. Annual fee is approximately ₹55,000.";
    }

    // Polytechnic
    else if (
        msg.includes("polytechnic") ||
        msg.includes("diploma")
    ) {
        reply = "Polytechnic Diploma courses are available in Mechanical, Civil, Electrical and Computer Engineering. Annual fee is approximately ₹45,000.";
    }

    // Fee Structure
    else if (
        msg.includes("fees") ||
        msg.includes("fee")
    ) {
        reply = "Fee Structure:\n\nB.Tech - ₹1,10,000 per year\nMBA - ₹90,000 per year\nBCA - ₹60,000 per year\nMCA - ₹75,000 per year\nBBA - ₹55,000 per year\nPolytechnic - ₹45,000 per year.";
    }

    // Campus
    else if (
        msg.includes("campus")
    ) {
        reply = "Our college campus is spread over approximately 17 acres with smart classrooms, advanced laboratories, digital library, seminar halls, sports ground, cafeteria, Wi-Fi campus and green environment.";
    }

    // Placement
    else if (
        msg.includes("placement") ||
        msg.includes("job")
    ) {
        reply = "The college has a dedicated Training and Placement Cell. Students receive internship opportunities, aptitude training, mock interviews and placement support. Many reputed companies participate in campus recruitment every year.";
    }

    // Hostel
    else if (
        msg.includes("hostel")
    ) {
        reply = "Separate hostel facilities are available for boys and girls with Wi-Fi, mess, RO drinking water, security and medical support.";
    }

    // Library
    else if (
        msg.includes("library")
    ) {
        reply = "The college library contains thousands of books, journals, e-books and digital learning resources for students.";
    }

    // Labs
    else if (
        msg.includes("lab") ||
        msg.includes("laboratory")
    ) {
        reply = "The college has modern Computer Labs, Physics Lab, Chemistry Lab, Mechanical Workshop, Electronics Lab, Electrical Lab and Project Labs.";
    }

    // Scholarship
    else if (
        msg.includes("scholarship")
    ) {
        reply = "Scholarships are available based on merit, government schemes and reserved category eligibility.";
    }

    // Faculty
    else if (
        msg.includes("faculty") ||
        msg.includes("teacher")
    ) {
        reply = "The college has experienced and qualified faculty members with industry and research experience.";
    }

    // Transport
    else if (
        msg.includes("transport") ||
        msg.includes("bus")
    ) {
        reply = "College bus transportation is available from nearby cities and surrounding areas.";
    }

    // Canteen
    else if (
        msg.includes("canteen")
    ) {
        reply = "A hygienic canteen is available inside the campus serving breakfast, lunch, snacks and beverages.";
    }

    // Sports
    else if (
        msg.includes("sports")
    ) {
        reply = "Sports facilities include Cricket, Football, Volleyball, Basketball, Badminton, Table Tennis, Gym and Indoor Games.";
    }

    // Timing
    else if (
        msg.includes("timing") ||
        msg.includes("college time")
    ) {
        reply = "College timing is 9:00 AM to 4:00 PM from Monday to Saturday.";
    }

    // Contact
    else if (
        msg.includes("contact")
    ) {
        reply = "For admission and other information, please contact the College Admission Office during working hours.";
    }

    // Address
    else if (
        msg.includes("address") ||
        msg.includes("location")
    ) {
        reply = "The college is located in Faridabad, Haryana.";
    }

    // Exam
    else if (
        msg.includes("exam")
    ) {
        reply = "Semester examinations are generally conducted twice every academic year along with internal assessments.";
    }

    res.json({ reply });

});

app.listen(3000, () => {
    console.log("College Helpdesk Chatbot Server Running on Port 3000");
});