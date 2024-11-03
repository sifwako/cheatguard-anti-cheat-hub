import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function UseofTechnology() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div className="app-container">
      <h1>T1012: Use of Technology</h1>
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
                    T1012.100
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
                  T1012.101
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
                  T1012.102
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
                  T1012.103
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
                  T1012.104
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
                    T1012.105
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
                  T1012.106
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
          communication with others during tests<sup><Link to="www.aitp-edsig.org/www.isedj.org">[10]</Link></sup><sup><Link to="10.1007/S10805-021-09413-5">[11]</Link></sup>. The discrete nature and
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
              <td>M1046</td>
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
              <td>M1047</td>
              <td>Vigilant Monitoring </td>
              <td>
                Increase physical monitoring by employing trained examiners <sup><Link  to="https://olj.onlinelearningconsortium.org/index.php/olj/article/view/2096">[9]</Link></sup> who
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
              <td>M1048</td>
              <td>Secure Testing Environments <sup><Link to="https://synap.ac/blog/anti-cheat-methods-for-online-exams/">[6]</Link></sup></td>
              <td>
                Educational institutions can implement testing environments that
                utilize software to restrict the capabilities of permitted
                electronic devices, limiting them to essential functionalities
                necessary for the exam<sup><Link to="https://publishoa.com/index.php/journal/article/view/661">[8]</Link></sup>. This measure involves employing
                detection software that identifies any irregular or suspicious
                activity during exams <sup><Link to="https://ijece.iaescore.com/index.php/IJECE/article/view/30268">[7]</Link></sup>.
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
              <td>D1036</td>
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
          </tbody>
        </table>
      </div>

      <div className="references">
        <div className="container-fluid">
          <div className="row">
            <h2> References</h2>
            <div className="col-sm-12 col-md-6 col-lg-6" style={{ textAlign: "left" }}>
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
                </Link>
              </p>
              <p>
                [5]
                <Link to="https://www.techrxiv.org/users/706619/articles/691866-automatic-cheating-detection-in-exam-hall">
                  “Automatic Cheating Detection In Exam Hall - TechRxiv,”
                  www.techrxiv.org.
                </Link>
              </p>
              <p>[6]<Link to="https://synap.ac/blog/anti-cheat-methods-for-online-exams/">15 anti-cheating methods for online exam security - Synap - Synap Blog. (n.d.).</Link></p>

            </div>
            <div className="col-sm-12 col-md-6 col-lg-6" style={{ textAlign: "left" }}>
            
              <p>[7]<Link to="https://ijece.iaescore.com/index.php/IJECE/article/view/30268">G. Moukhliss, R. F. Hilali, and H. Belhadaoui, “Intelligent solution for automatic online exam monitoring,” International Journal of Electrical and Computer Engineering, vol. 13, no. 5, pp. 5333–5341, Oct. 2023</Link></p>
            <p>[8]<Link to="https://publishoa.com/index.php/journal/article/view/661">K. K. Baseer, M. Jahir Pasha, A. V Rama, K. Reddy, K. Rekha, and M. S. Begum, “Smart online examination monitoring system,” publishoa.comKK Baseer, MJ Pasha, AVRK Reddy, K Rekha, MS BegumJournal of Algebraic Statistics, 2022•publishoa.com, vol. 13, no. 3, pp. 559–570, 2022, Accessed: Jul. 16, 2024. [Online]. Available: 
            </Link></p>
            <p>[9]<Link to="https://olj.onlinelearningconsortium.org/index.php/olj/article/view/2096">D. C. Ison, “Detection of Online Contract Cheating through Stylometry: A Pilot Study.,” Online Learning, vol. 24, no. 2, pp. 142–165, Jun. 2020</Link></p>
            <p>[10]<Link to="www.aitp-edsig.org/www.isedj.org">L. Z. Bain, “How Students Use Technology to Cheat and What Faculty Can Do About It,” Information Systems Education Journal (ISEDJ), no. 5, p. 13, 2015, Accessed: Jun. 20, 2024. [Online].</Link></p>
            <p>[11]<Link to="10.1007/S10805-021-09413-5">M. Amzalag, N. Shapira, and N. Dolev, “Two Sides of the Coin: Lack of Academic Integrity in Exams During the Corona Pandemic, Students’ and Lecturers’ Perceptions,” Journal of Academic Ethics, vol. 20, no. 2, p. 243, Jun. 2022.</Link></p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseofTechnology;
