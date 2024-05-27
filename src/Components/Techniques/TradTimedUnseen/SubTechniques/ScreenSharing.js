import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function ScreenSharing() {
  return (
    <div className="app-container">
      <h1>Screen Sharing and Remote Control</h1>
      <div className="description">
        <p>
          Screen sharing as a cheating technique is used online-based exams to
          broadcast a candidate's exam environment to someone, who then provides
          the candidate with answers
          <sup>
            <Link to="https://www.skillrobo.com/11-ways-of-cheating-in-online-exams/">
              [1]
            </Link>
          </sup>
          . This method exploits the capabilities of various communication and
          screen-sharing platforms such as Zoom, Skype, or Discord, which were
          primarily designed for collaborative work and online meetings. By
          sharing their screen, candidates can receive real-time assistance,
          making it a sophisticated form of cheating that bypasses traditional
          surveillance methods used in physical exam settings. Team Viewer is
          one of the popular remote desktop control software that is used by
          students to facilitate cheating by allowing others to gain access to
          what is on their screen
          <sup>
            <Link to="https://www.teamviewer.com/en-mea/">[2]</Link>
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
              <td>M001</td>
              <td>Using Proctoring Software</td>
              <td>
                Proctoring software, such as ProctorU
                <sup>
                  <Link to="https://www.proctoru.com/">[4]</Link>
                </sup>{" "}
                and ProctorIO
                <sup>
                  <Link to="https://proctorio.com/">[5]</Link>
                </sup>
                , are designed to prevent anti-screen sharing and anti-remote
                desktop connection{" "}
                <sup>
                  <Link to="https://brightlinkprep.com/ways-to-cheat-on-online-exams/">
                    [3]
                  </Link>
                </sup>
                .{" "}
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
            <td>Mitigation</td>
            <td>Description</td>
          </thead>
          <tbody>
            <tr>
              <td>D001</td>
              <td>Activity Tracking </td>
              <td>
                Proctoring software commonly monitors keyboard and mouse
                activity to identify patterns, such as rapid application
                switching.
                <sup>
                  <Link to="https://blog.edexams.com/how-to-spot-cheating-on-online-exams/">
                    [6]
                  </Link>
                </sup>
                . By tracking mouse movements and keystrokes, these platforms
                can detect suspicious behavior, including frequent switching
                between applications.
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
                <Link to="https://www.skillrobo.com/11-ways-of-cheating-in-online-exams/">
                  W. Developer, “11 Ways of Cheating in Online Exams and How to
                  Prevent Them? | SkillRobo,” Skillrobo New, Feb. 07, 2024.
                  https://www.skillrobo.com/11-ways-of-cheating-in-online-exams/
                </Link>
              </p>
              <p>
                [2]
                <Link to="https://www.teamviewer.com/en-mea/">
                  “TeamViewer – The Remote Connectivity Software,” TeamViewer.‌
                </Link>
              </p>
              <p></p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <p>
                [3]
                <Link to="https://brightlinkprep.com/ways-to-cheat-on-online-exams/">
                  “10 Ways to Cheat on Online Exams (and 9 Ways to Prevent It) |
                  BrightLink Prep.” ‌
                </Link>
              </p>
              <p>
                {" "}
                [4]{" "}
                <Link to="https://www.proctoru.com/">
                  “ProctorU - The Leading Proctoring Solution for Online Exams,”
                  ProctorU, 2018. https://www.proctoru.com/ ‌
                </Link>
              </p>
              <p>
                [5]{" "}
                <Link to="https://proctorio.com/">
                  “A Comprehensive Learning Integrity Platform - Proctorio,”
                  proctorio.com. ‌
                </Link>
              </p>
              <p>
                [6]{" "}
                <Link to="https://blog.edexams.com/how-to-spot-cheating-on-online-exams/">
                  Sep 15, 2023 | EdTech, Parents, Students, and Teachers | 0 |,
                  “How to spot cheating on online exams - EDExams Blog,”
                  blog.edexams.com, Sep. 15, 2023. ‌
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScreenSharing;
