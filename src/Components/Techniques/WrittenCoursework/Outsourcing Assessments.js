import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../TechniquesStyles.css";

function OutsourcingAssessments() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div className="app-container">
      <h1>OutSourcing Assessments</h1>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          onClick={toggleDropdown}
        >
          Sub-techniques (3)
        </button>
        {isOpen && (
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Link to="/essay-mills" className="dropdown-item">
                    T1001.001
                  </Link>
                </td>
                <td>
                  <Link to="/essay-mills" className="dropdown-item">
                    Essay Mills
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/friends-families" className="dropdown-item">
                  T1001.002
                  </Link>
                </td>
                <td>
                  <Link to="/friends-families" className="dropdown-item">
                    Friends and famaily
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    to="/previously-submitted-assignments"
                    className="dropdown-item"
                  >
                    T1001.003
                  </Link>
                </td>
                <td>
                  <Link
                    to="/previously-submitted-assignments"
                    className="dropdown-item"
                  >
                    Previously Submitted Assignments
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      <div className="description">
        <p>
          Outsourcing assessments is a form of academic dishonesty where
          students delegate their assignments or examinations to third parties,
          including paid services or even family and friends, to complete on
          their behalf. This technique can be facilitated through online
          platforms and personal networks, where students obtain work to submit
          as their own, bypassing the educational objectives of the coursework.
          Whether for a fee or freely done by acquaintances, this practice
          compromises the integrity of academic qualifications and robs students
          of valuable learning experiences. It includes a wide range of
          activities, from hiring freelancers for essays to enlisting friends
          for help with entire courses, presenting significant challenges to
          educational institutions in ensuring fairness and maintaining academic
          standards
          <sup>
            <Link to="https://www.linkedin.com/pulse/ethics-students-outsourcing-university-assessment-prof-lee-di-milia/">
              [6]
            </Link>
          </sup>
          .
        </p>
      </div>

      <div className="mitigation">
        <h2> Mitigation </h2>
        <table className="mitig-detec-table">
          <thead>
            <td>ID</td>
            <td>Mitigation</td>
            <td>Description</td>
          </thead>
          <tbody>
            <tr>
              <td>M1009</td>
              <td>Improved Assessment Design</td>
              <td>
                Create assessments that require unique, personalized responses
                or analyses of recent events, which are more resistant to being
                outsourced from essay mills.
              </td>
            </tr>
            <tr>
              <td>M1010</td>
              <td>Increased Support and Resources</td>
              <td>
                Provide ample academic support through consultations, writing
                centers, and tutoring services to help students meet academic
                demands without resorting to cheating{" "}
                <sup>
                  <Link to="https://ro.uow.edu.au/cgi/viewcontent.cgi?article=1441&context=gsbpapers&httpsredir=1&referer=">
                    [1]
                  </Link>
                </sup>
                .
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="detection">
        <h2> Detection </h2>
        <table className="mitig-detec-table">
          <thead>
            <td>ID</td>
            <td>Detection</td>
            <td>Description</td>
          </thead>
          <tbody>
            <tr>
              <td>D1007</td>
              <td>Authorship Analysis</td>
              <td>
                Utilize sophisticated text analysis tools that employ natural
                language processing (NLP) to analyze the writing style of
                coursework submissions. These tools can detect deviations from a
                student’s usual writing pattern, suggesting the involvement of a
                third-party writer. By comparing submissions against a student's
                previous works, these tools can identify inconsistencies in
                vocabulary, syntax, and writing style.
              </td>
            </tr>
            <tr>
              <td>D1008</td>
              <td>Language Inconsistency</td>
              <td>
                Monitor assignments for inconsistent language use, which may
                indicate that different sections were written by different
                authors, often a sign that parts were outsourced.
                <sup>
                  <Link to="https://ro.uow.edu.au/cgi/viewcontent.cgi?article=1441&context=gsbpapers&httpsredir=1&referer=">
                    [1]
                  </Link>
                </sup>
              </td>
            </tr>
            <tr>
              <td>D1009</td>
              <td>Misuse of Assignment Directions</td>
              <td>
                Identify submissions that fail to specifically address the
                assignment questions, indicating content that may have been
                repurposed or not originally intended for the assignment.
                <sup>
                  <Link to="https://ro.uow.edu.au/cgi/viewcontent.cgi?article=1441&context=gsbpapers&httpsredir=1&referer=">
                    [1]
                  </Link>
                </sup>
              </td>
            </tr>
            <tr>
              <td>D1010</td>
              <td>Reference Misrepresentation and Bibliographic 'Mashups'</td>
              <td>
                Scrutinize bibliographies for inaccuracies and fabrication, such
                as mismatched details, completely fabricated citations, or
                references that improperly combine elements from different
                sources into a single fictitious citation. These manipulations
                are tactics to evade detection by plagiarism software and
                deceive academic integrity checks. By detecting these 'mashups'
                and misrepresentations, it becomes possible to identify
                submissions that attempt to cover their tracks or falsely
                represent sourced material
                <sup>
                  <Link to="https://ro.uow.edu.au/cgi/viewcontent.cgi?article=1441&context=gsbpapers&httpsredir=1&referer=">
                    [1]
                  </Link>
                </sup>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="references">
        <div className="container-fluid">
          <div className="row">
            <h2> References</h2>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <p>
                [1] <Link to="https://ro.uow.edu.au/cgi/viewcontent.cgi?article=1441&context=gsbpapers&httpsredir=1&referer=">
                  A. Rogerson, “Detecting the work of essay mills and file
                  swapping sites: some clues they Detecting the work of essay
                  mills and file swapping sites: some clues they leave behind
                  leave behind,” 2014. Available:
                  https://ro.uow.edu.au/cgi/viewcontent.cgi?article=1441&context=gsbpapers&httpsredir=1&referer=
                </Link>
              </p>
              <p>
                [2] <Link to="https://www.studypool.com/">
                  {" "}
                  “Homework Answers & Help - Premium Tutors - Studypool.,”
                  www.studypool.com. https://www.studypool.com/ ‌
                </Link>
              </p>
              <p>
                [3]
                <Link to="https://mypaperhelp.com/?tap_s=tFxvvKbjKZZX5QXFm5bG9B&gad_source=1&gclid=CjwKCAjwi_exBhA8EiwA_kU1MikV6D8nbtKApxG8isUQo-9FJBUeg29_S0m1BiYpcMRHFk20Fz1inRoCmf8QAvD_BwE">
                  “Mypaperhelp | Get Paper Help From Skilled Experts,”
                  mypaperhelp.com.
                </Link>
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <p>
                [4]{" "}
                <Link to="https://www.chegg.com/">
                  Chegg, “Chegg.com,” Chegg.com, 2019.
                </Link>
              </p>
              <p>
                [5]{" "}
                <Link to="https://www.sweetstudy.com/">
                  “SweetStudy (Homework Market) | Your Homework Helper,”
                  www.sweetstudy.com.
                </Link>
              </p>
              <p>
                [6]{" "}
                <Link to="https://www.linkedin.com/pulse/ethics-students-outsourcing-university-assessment-prof-lee-di-milia/">
                  L. Di, “After two weeks of extensive travel I am waiting to
                  board my flight home. Perhaps I am weary from changing time
                  zones and sleepless nights but I find myself reflecting on the
                  ethics of commercialism in education.,” Linkedin.com, Oct. 02,
                  2015. ‌
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OutsourcingAssessments;
