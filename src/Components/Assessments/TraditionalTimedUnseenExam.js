import React from "react";
import { Link } from "react-router-dom";
import "./Styles.css";

function TraditionalTimedUnseenExam() {
  return (
    <>
      <body className="app-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="description-body">
                <h1>Traditional Timed Unseen Exam</h1>
                <p>
                  Unseen examinations are widely employed in educational
                  settings, based on the expectation that students will
                  thoroughly review the entire curriculum prior to the exam.
                  These assessments are designed to evaluate a student's ability
                  to apply knowledge spontaneously and intelligently, ensuring a
                  comprehensive understanding of the subject matter.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <div className="card-data">
                    <span className="h5 card-title">ID:</span> AS104
                  </div>
                  <div className="card-data">
                    <span className="h5 card-title">Created:&nbsp;</span>25th
                    March 2024
                  </div>
                  <div className="card-data">
                    <span className="h5 card-title">Last Modified:&nbsp;</span>
                    25th March 2024
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="pt-3" id="techniques">
          Techniques
        </h2>
        <h6 className="table-object-count">Cheating Techniques: 2</h6>
        <table className="table-techniques">
          <thead>
            <tr>
              <td colspan="2">ID</td>
              <td>Name</td>
              <td>Description</td>
            </tr>
          </thead>
          <tbody>
            <tr class="technique">
              <td colspan="2">
                <Link to="/collaboration">T001</Link>
              </td>
              <td>
                <Link to="/collaboration">Collaboration</Link>
              </td>
              <td>
                Collaborative cheating involves students working together to
                complete assignments or tests that are explicitly required to be
                done individually. This form of cheating includes sharing
                answers, jointly solving problems, or dividing parts of an
                assignment among group members without authorization.
              </td>
            </tr>
            <tr className="sub technique">
              <td></td>
              <td>
                <Link to="/sharing-answers">.001</Link>
              </td>
              <td>
                <Link to="/sharing-answers">Sharing answers</Link>
              </td>
              <td>
                This technique involves students communicating answers to each
                other during an exam. It can occur in various forms, including
                whispered conversations, discreet hand signals, text messages,
                or through online platforms in the case of remote exams.
              </td>
            </tr>
            <tr class="sub technique">
              <td></td>
              <td>
                <Link to="/taking-exam-together"> .002 </Link>
              </td>
              <td>
                <Link to="/taking-exam-together"> Taking exam together </Link>
              </td>
              <td>
                In this scenario, a student receives assistance from another
                individual who is not authorized to take the exam. This can
                occur in both physical and remote testing environments, with the
                assisting individual either physically present but hidden, or
                connected through digital means.
              </td>
            </tr>
            <tr class="technique">
              <td colspan="2">
                <Link to="/use-of-technology">T1006</Link>
              </td>
              <td>
                <Link to="/use-of-technology">Use of technology</Link>
              </td>
              <td>
                The use of technology in cheating involves students leveraging
                digital tools and platforms to dishonestly enhance their
                academic performance. This can include accessing unauthorized
                online resources, using smartphones to share answers, or
                employing software to complete tasks meant to be done
                individually.
              </td>
            </tr>
            <tr class="sub technique">
              <td></td>
              <td>
                <Link to="/screen-sharing-and-remote-control">.001</Link>
              </td>
              <td>
                <Link to="/screen-sharing-and-remote-control">
                  Screen sharing and remote control
                </Link>
              </td>
              <td>
                Screen sharing as a cheating technique uses digital tools to
                broadcast a candidate's exam environment to someone, who then
                provides the candidate with answers. This method exploits the
                capabilities of various communication and screen-sharing
                platforms such as Zoom, Skype, or Discord, which were primarily
                designed for collaborative work and online meetings. By sharing
                their screen, candidates can receive real-time assistance,
                making it a sophisticated form of cheating that bypasses
                traditional surveillance methods used in physical exam settings.
              </td>
            </tr>
            <tr class="sub technique">
              <td></td>
              <td>
                <Link to="/virtual-machines"> .002 </Link>
              </td>
              <td>
                <Link to="/virtual-machines"> Virtual machines </Link>
              </td>
              <td>
                Using virtual machines as a cheating technique takes advantage
                of the technology's ability to create isolated, digital
                environments on a single physical computer. Candidates can
                exploit this by running a secondary operating system in a
                virtual machine alongside the primary OS being monitored by
                proctoring software.This secondary environment can be used to
                access the internet, consult notes, or communicate with others
                for answers without detection.
              </td>
            </tr>
            <tr class="sub technique">
              <td></td>
              <td>
                <Link to="/wearable-devices"> .003 </Link>
              </td>
              <td>
                <Link to="/wearable-devices"> Wearable devices </Link>
              </td>
              <td>
                {" "}
                The smartwatch, a modern spy gadget, is designed for students to
                cheat in exams discreetly. Resembling a regular watch with
                standard features like a display and alarm, it secretly houses
                advanced technology for cheating. This includes taking photos,
                recording voices, capturing video, and internet browsing. Data
                recorded can be used in the exam through a wireless earpiece or
                sent to someone outside for answers, which are then received on
                the smartwatch.{" "}
              </td>
            </tr>
            <tr class="sub technique">
              <td></td>
              <td>
                <Link to="/programmable calculator"> .004 </Link>
              </td>
              <td>
                <Link to="/programmable calculator">
                  {" "}
                  Programmable calculator{" "}
                </Link>
              </td>
              <td>
                Students also use programmable calculators to cheat during
                proctored exams. Programmable calculators looks like a regular
                calculator, but it actually has hidden features that help
                students cheat.It can transform into a book reader, allowing
                students to quickly access their secret notes.
              </td>
            </tr>
            <tr class="sub technique">
              <td></td>
              <td>
                <Link to="/bluetooth-earphones"> .005 </Link>
              </td>
              <td>
                <Link to="/bluetooth-earphones"> Bluetooth earphones </Link>
              </td>
              <td>
                Individuals familiar with online exam cheating often prefer
                wireless earphones, particularly those with long hair who find
                it easier to conceal their use. Bluetooth earphones vary from
                noticeable Apple AirPods-style to nearly invisible small models.
                These earphones enable two-way communication, allowing others to
                search for answers online.
              </td>
            </tr>
            <tr class="sub technique">
              <td></td>
              <td>
                <Link to="/hdmi-cable-screen-sharing"> .006</Link>
              </td>
              <td>
                <Link to="/hdmi-cable-screen-sharing">
                  {" "}
                  HDMI cable screen sharing
                </Link>
              </td>
              <td>
                As the direct screen sharing feature can be detected with
                advanced proctoring softwares, the use of hardware like HDMI
                cables in online assessments has became as a way to bypass it.
                Candidates can connect their computer to an external device,
                such as another computer or a projector, using an HDMI cable.
                This setup allows the screen's contents to be mirrored or
                extended to the external device, where an accomplice can view
                the exam questions and provide the candidate with answers.
              </td>
            </tr>
            <tr class="sub technique">
              <td></td>
              <td>
                <Link to="/phones"> .007</Link>
              </td>
              <td>
                <Link to="/phones"> Phones</Link>
              </td>
              <td>
                This cheating technique involves using smartphones or tablets to
                discreetly access answers during online exams. Cheaters can hide
                their device from the proctor's view, for instance, by placing
                it against the computer screen. Moreover, they can exploit
                voice-activated assistants like Siri or Google Assistant to
                obtain answers audibly by simply saying a voice command.{" "}
              </td>
            </tr>
            <tr class="technique">
              <td colspan="2">
                <Link to="/accessing-questions-before-exams">T1007</Link>
              </td>
              <td>
                <Link to="/accessing-questions-before-exams">
                  Accessing questions before exams
                </Link>
              </td>
              <td>
                This form of cheating involves individuals obtaining the exam's
                questions and answers prior to the test date, which is often
                executed through various illicit methods. The cheater might hack
                into the school's secure database to access the materials or
                collude with someone who has legitimate access, such as an
                insider within the educational institution. In some cases, the
                questions and answers are leaked and sold through underground
                networks. Cheaters may also use sophisticated technology to
                bypass security measures and download the exam contents.{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </>
  );
}
export default TraditionalTimedUnseenExam;
