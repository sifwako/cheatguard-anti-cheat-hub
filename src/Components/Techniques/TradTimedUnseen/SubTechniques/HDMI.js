import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function HDMI() {
  return (
    <div className="app-container">
      <h1>HDMI Cable Screen Sharing</h1>
      <div className="description">
        <p>
          As the direct screen sharing feature can be detected with advanced
          proctoring softwares, the use of hardware like HDMI cables in online
          assessments has became as a way to bypass it. Candidates can connect
          their computer to an external device, such as another computer or a
          projector, using an HDMI cable
          <sup>
            <Link to=" https://brightlinkprep.com/ways-to-cheat-on-online-exams/">
              [1]
            </Link>
          </sup>
          . This setup allows the screen's contents to be mirrored or extended
          to the external device, where an accomplice can view the exam
          questions and provide the candidate with answers
          <sup>
            <Link to=" https://brightlinkprep.com/ways-to-cheat-on-online-exams/">
              [1]
            </Link>
          </sup>
          . Since this method involves a physical connection rather than
          software-based screen sharing, it often goes undetected by proctoring
          software, which typically monitors the activities within the
          computer's primary operating system and applications but not the
          physical outputs and external devices. This loophole exploits the gap
          between digital surveillance capabilities and the physical hardware
          interactions, creating a challenge for maintaining the integrity of
          online examinations.
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
              <td>M1055</td>
              <td>HDMI Port Restrictions</td>
              <td>
                Exam computers can be set up to disable HDMI ports or limit
                their functionality to only a single monitor
                <sup>
                  <Link to="https://github.com/SafeExamBrowser/seb-win-refactoring/issues/81">
                    [2]
                  </Link>
                </sup>
                . This measure prevents the possibility of connecting HDMI
                splitters and other unauthorized devices.
              </td>
            </tr>
            <tr>
              <td>M1056</td>
              <td>Strict Proctoring and Monitoring <sup><Link to="https://www.examtesting.com/blogdetails.aspx?id=50638">[3]</Link></sup></td>
              <td>
                Employ strict proctoring methods, including continuous
                monitoring of students' screens, webcams, and audio, to detect
                any suspicious behavior or attempts to cheat
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
              <td>D1045</td>
              <td>Comprehensive Room Inspections<sup><Link to="https://www.examtesting.com/blogdetails.aspx?id=50638">[3]</Link></sup></td>
              <td>
                Perform detailed inspections of the exam room both before and
                during the examination to identify any concealed devices,
                cables, or irregular setups.
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
                [1]{" "}
                <Link to=" https://brightlinkprep.com/ways-to-cheat-on-online-exams/">
                  {" "}
                  "Ways to Cheat on Online Exams (and 9 Ways to Prevent It) |
                  BrightLink Prep.”
                </Link>
              </p>
              <p>
                [2]{" "}
                <Link to="https://github.com/SafeExamBrowser/seb-win-refactoring/issues/81">
                  “Urgent Security Issue: HDMI cables used to cheat or record
                  exam content. · Issue #81 ·
                  SafeExamBrowser/seb-win-refactoring,” GitHub. ‌
                </Link>
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6" style={{ textAlign: "left" }}>
              <p>[3]<Link to="https://www.examtesting.com/blogdetails.aspx?id=50638">A Guide on How Online Exams are Monitored. (n.d.).</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HDMI;
