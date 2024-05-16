import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function UseofTechnology() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div className="app-container">
      <h1>Use of Technology</h1>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          onClick={toggleDropdown}
        >
          Sub-techniques (7)
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
                  <Link
                    to="/screen-sharing-and-remote-control"
                    className="dropdown-item"
                  >
                    T1006.100
                  </Link>
                </td>
                <td>
                  <Link
                    to="/screen-sharing-and-remote-control"
                    className="dropdown-item"
                  >
                    Screen sharing and remote control
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/virtual-machines" className="dropdown-item">
                  T1006.101
                  </Link>
                </td>
                <td>
                  <Link to="/virtual-machines" className="dropdown-item">
                    Virtual machines
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/wearable-devices" className="dropdown-item">
                  T1006.102
                  </Link>
                </td>
                <td>
                  <Link to="/wearable-devices" className="dropdown-item">
                    Wearbale devices
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/programmable-calculator" className="dropdown-item">
                  T1006.103
                  </Link>
                </td>
                <td>
                  <Link to="/programmable-calculator" className="dropdown-item">
                    Programmable Calculator
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/bluetooth-earphones" className="dropdown-item">
                  T1006.104
                  </Link>
                </td>
                <td>
                  <Link to="/bluetooth-earphones" className="dropdown-item">
                    Bluetooth earphones
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    to="/hdmi-cable-screen-sharing"
                    className="dropdown-item"
                  >
                    T1006.105
                  </Link>
                </td>
                <td>
                  <Link
                    to="/hdmi-cable-screen-sharing"
                    className="dropdown-item"
                  >
                    HDMI Cable Screen Sharing
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/phones" className="dropdown-item">
                  T1006.106
                  </Link>
                </td>
                <td>
                  <Link to="/phones" className="dropdown-item">
                    Phones
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      <div className="description">
        <p>
          The use of technology to cheat in unseen examinations represents a
          sophisticated form of academic dishonesty that leverages the advanced
          capabilities of modern electronic devices, such as smartphones,
          smartwatches, and computers
          <sup>
            <Link to="https://files.eric.ed.gov/fulltext/EJ1137336.pdf">
              [1]
            </Link>
          </sup>
          <sup>
            <Link to="https://proctortrack.com/blog/article/students-using-technology-for-classroom-exam-cheating-how-to-prevent">
              [2]
            </Link>
          </sup>
          . This type of cheating exploits the functionality of these devices to
          illicitly gain access to information, store answers, or facilitate
          communication with others during tests. The discrete nature and
          ubiquitous presence of these technologies in students’ lives make them
          particularly challenging to detect and manage within an examination
          setting. <br />
          <br />
          Furthermore, unseen examinations, where the questions are not
          disclosed to students in advance, create an environment ripe for such
          forms of cheating. Students, feeling the pressure of uncertainty
          regarding the exam content and potentially underprepared, might resort
          to technology as a means to secure their performance.
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
              <td>M1031</td>
              <td>Prohibition of Electronic Devices </td>
              <td>
                Educational institutions should strictly prohibit the use of
                personal electronic devices, such as smartphones, smartwatches,
                and digital pens, in the examination hall{" "}
                <sup>
                  <Link to="https://medium.com/@makulobesi/exam-cheating-in-the-digital-age-the-role-of-gadgets-ef525d1efef5">
                    [3]
                  </Link>
                </sup>
                . Clear communication, thorough enforcement measures, and
                regular inspections are crucial for the successful
                implementation of this policy.
              </td>
            </tr>
            <tr>
              <td>M1032</td>
              <td>Vigilant Monitoring </td>
              <td>
                Increase physical monitoring by employing trained examiners who
                are adept at identifying the use of unauthorized devices. Random
                checks conducted by teachers and administrators before and
                during exams further assist in detecting and deterring the use
                of cheating devices
                <sup>
                  <Link to="https://medium.com/@makulobesi/exam-cheating-in-the-digital-age-the-role-of-gadgets-ef525d1efef5">
                    [3]
                  </Link>
                </sup>
                . By combining these measures, institutions can create a robust
                system that upholds academic integrity and maintains a fair
                testing environment.
              </td>
            </tr>
            <tr>
              <td>M1033</td>
              <td>Secure Testing Environments </td>
              <td>
                Educational institutions can implement testing environments that
                utilize software to restrict the capabilities of permitted
                electronic devices, limiting them to essential functionalities
                necessary for the exam. This measure involves employing
                detection software that identifies any irregular or suspicious
                activity during exams.
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
              <td>D1033</td>
              <td>Surveillance Cameras </td>
              <td>
                Utilizing CCTV cameras to visually monitor the exam environment,
                to detect any attempts to use hidden devices or unauthorized
                technology
                <sup>
                  <Link to="https://videoloft.com/cctv-for-schools/">[4]</Link>
                </sup>
                . By strategically placing cameras in the examination hall,
                institutions can maintain a comprehensive view of the
                test-taking area, enabling examiners to identify any suspicious
                behavior or unauthorized activities.{" "}
              </td>
            </tr>
            <tr>
              <td>D1034</td>
              <td>Device Scanning </td>
              <td>
                Conduct random inspections of any allowed electronic devices to
                ensure they are not pre-loaded with unauthorized information or
                being used to access external data.{" "}
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
                [1]
                <Link to="https://files.eric.ed.gov/fulltext/EJ1137336.pdf">
                  L. Bain, “How Students Use Technology to Cheat and What
                  Faculty Can Do About It,” 2015. Available:
                  https://files.eric.ed.gov/fulltext/EJ1137336.pdf ‌
                </Link>
              </p>
              <p>
                [2]
                <Link to="https://proctortrack.com/blog/article/students-using-technology-for-classroom-exam-cheating-how-to-prevent">
                  Michelle, “Students Using Technology for Classroom Exam
                  Cheating: How to Prevent,” Proctortrack, Oct. 03, 2022.
                  https://proctortrack.com/blog/article/students-using-technology-for-classroom-exam-cheating-how-to-prevent
                  (accessed May 10, 2024).‌
                </Link>
              </p>
              <p>
                [3]
                <Link to="https://medium.com/@makulobesi/exam-cheating-in-the-digital-age-the-role-of-gadgets-ef525d1efef5">
                  Magomila, “Exam Cheating in the Digital Age: The Role of
                  Gadgets,” Medium, May 03, 2023.
                  https://medium.com/@makulobesi/exam-cheating-in-the-digital-age-the-role-of-gadgets-ef525d1efef5
                  (accessed May 11, 2024). ‌
                </Link>
              </p>
              <p>
                [4]{" "}
                <Link to="https://videoloft.com/cctv-for-schools/">
                  A. Pearson, “Educational facilities security - How to keep
                  your campus secure,” Videoloft, Dec. 09, 2020.
                  https://videoloft.com/cctv-for-schools/ ‌
                </Link>
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <p>
                [4]
                <Link to="https://www.techrxiv.org/users/706619/articles/691866-automatic-cheating-detection-in-exam-hall">
                  “Automatic Cheating Detection In Exam Hall - TechRxiv,”
                  www.techrxiv.org.
                  https://www.techrxiv.org/users/706619/articles/691866-automatic-cheating-detection-in-exam-hall
                  (accessed May 11, 2024). ‌
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseofTechnology;
