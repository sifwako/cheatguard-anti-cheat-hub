import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";
import HomePage from "./Components/Common/HomePage";
import CreativeDesignTask from "./Components/Assessments/CreativeDesignTask";
import LaboratoryPractical from "./Components/Assessments/LaboratoryPractical";
import Patchwork from "./Components/Assessments/Patchwork";
import Teamwork from "./Components/Assessments/Teamwork";
import TimedOpenBook from "./Components/Assessments/TimedOpenBook";
import TraditionalTimedUnseenExam from "./Components/Assessments/TraditionalTimedUnseenExam";
import Viva from "./Components/Assessments/Viva";
import WrittenCoursework from "./Components/Assessments/WrittenCoursework";
import WrittenCourseworkPlagiarism from "./Components/Techniques/WrittenCoursework/WrittenCourseworkPlagiarism";
import OutsourcingAssessments from "./Components/Techniques/WrittenCoursework/Outsourcing Assessments";
import Impersonation from "./Components/Techniques/Viva/Impersonation";
import PreExamInformationSharing from "./Components/Techniques/Viva/Pre-exam info sharing";
import CreativeIntegrityBreach from "./Components/Techniques/Creative Design/Creative integrity breach";
import InLabCollusion from "./Components/Techniques/Laboratory Practical/Inlab collusion";
import PatchworkPlagiarism from "./Components/Techniques/Patchwork/Patchwork Plagiarism";
import UnethicalCollaboration from "./Components/Techniques/Teamwork/Unethical Collaboration";
import PreemptiveSolutionCompilation from "./Components/Techniques/Timed open book/PreemptiveSolution Compilation";
import Collaboration from "./Components/Techniques/TradTimedUnseen/Collaboration";
import UseofTechnology from "./Components/Techniques/TradTimedUnseen/Use of technology";
import AccessingQuestionsBeforeExam from "./Components/Techniques/TradTimedUnseen/AccessingQuestionsBeforeExam";
import CompletePlagiarism from "./Components/Techniques/WrittenCoursework/SubTechniques/CompletePlagiarism";
import DirectPlagiarism from "./Components/Techniques/WrittenCoursework/SubTechniques/DirectPlagiarism";
import ParaphrasingPlagiarism from "./Components/Techniques/WrittenCoursework/SubTechniques/ParaphrasingPlagiarism";
import SelfPlagiarism from "./Components/Techniques/WrittenCoursework/SubTechniques/SelfPlagiarism";
import InPerson from "./Components/Techniques/Viva/SubTechniques/In-Person";
import Online from "./Components/Techniques/Viva/SubTechniques/Online";
import IdeaTheft from "./Components/Techniques/Creative Design/SubTechniques/IdeaTheft";
import BluetoothEarphones from "./Components/Techniques/TradTimedUnseen/SubTechniques/BluetoothEarphones";
import HDMI from "./Components/Techniques/TradTimedUnseen/SubTechniques/HDMI";
import Phones from "./Components/Techniques/TradTimedUnseen/SubTechniques/Phones";
import ProgrammableCalculator from "./Components/Techniques/TradTimedUnseen/SubTechniques/ProgrammableCalculator";
import ScreenSharing from "./Components/Techniques/TradTimedUnseen/SubTechniques/ScreenSharing";
import VirtualMachines from "./Components/Techniques/TradTimedUnseen/SubTechniques/VirtualMachines";
import WearableDevices from "./Components/Techniques/TradTimedUnseen/SubTechniques/WearableDevices";
import EssayMills from "./Components/Techniques/WrittenCoursework/SubTechniques/EssayMills";
import FriendsAndFamilies from "./Components/Techniques/WrittenCoursework/SubTechniques/FriendsAndFamilies";
import Submittedworks from "./Components/Techniques/WrittenCoursework/SubTechniques/SubmittedWorks";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes >
        <Route exact path="/" element={<HomePage />} />
        <Route path="/research-essay-report" element={<WrittenCoursework />} />
        <Route path="/laboratory-practical" element={<LaboratoryPractical />} />
        <Route path="/creative-design-task" element={<CreativeDesignTask />} />
        <Route
          path="/traditional-timed-unseen"
          element={<TraditionalTimedUnseenExam />}
        />
        <Route path="/open-book" element={<TimedOpenBook />} />
        <Route path="/patch-work" element={<Patchwork />} />
        <Route path="/team-work" element={<Teamwork />} />
        <Route path="/viva" element={<Viva />} />
        <Route
          path="/plagiarism-written-coursework"
          element={<WrittenCourseworkPlagiarism />}
        />
        <Route
          path="/outsourcing-assessments"
          element={<OutsourcingAssessments />}
        />
        <Route path="/impersonation" element={<Impersonation />}></Route>
        <Route
          path="/pre-exam-info-sharing"
          element={<PreExamInformationSharing />}
        />
        <Route path="/in-lab-collusion" element={<InLabCollusion />}></Route>
        <Route
          path="/creative-integrity-breach"
          element={<CreativeIntegrityBreach />}
        />
        <Route path="/collaboration" element={<Collaboration />} />
        <Route path="/use-of-technology" element={<UseofTechnology />} />
        <Route
          path="/preemptive-solution-compilation"
          element={<PreemptiveSolutionCompilation />}
        />
        <Route path="/patchwork-plagiarism" element={<PatchworkPlagiarism />} />
        <Route
          path="/unethical-collaboration"
          element={<UnethicalCollaboration />}
        />
        <Route
          path="/accessing-questions-before-exams"
          element={<AccessingQuestionsBeforeExam />}
        />
        <Route path="/complete-plagiarism" element={<CompletePlagiarism />} />
        <Route path="/direct-plagiarism" element={<DirectPlagiarism />} />
        <Route
          path="/paraphrasing-plagiarism"
          element={<ParaphrasingPlagiarism />}
        />
        <Route path="/self-plagiarism" element={<SelfPlagiarism />} />
        <Route path="/in-person" element={<InPerson />} />
        <Route path="/online" element={<Online />}></Route>
        <Route path="/idea-theft" element={<IdeaTheft />} />
        <Route
          path="/screen-sharing-and-remote-control"
          element={<ScreenSharing />}
        />
        <Route path="/virtual-machines" element={<VirtualMachines />} />
        <Route path="/wearable-devices" element={<WearableDevices />} />
        <Route
          path="/programmable-calculator"
          element={<ProgrammableCalculator />}
        />
        <Route path="/bluetooth-earphones" element={<BluetoothEarphones />} />
        <Route path="/hdmi-cable-screen-sharing" element={<HDMI />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/essay-mills" element={<EssayMills />} />
        <Route path="/friends-families" element={<FriendsAndFamilies />} />
        <Route
          path="/previously-submitted-assignments"
          element={<Submittedworks />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
