import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function VirtualMachines() {
  return (
    <div className="app-container">
      <h1> Virtual Machines </h1>
      <div className="description">
        <p>
          Using virtual machines as a cheating technique takes advantage of the
          technology's ability to create isolated, digital environments on a
          single physical computer. Candidates can exploit this by running a
          secondary operating system in a virtual machine alongside the primary
          OS being monitored by proctoring software. This secondary environment
          can be used to access the internet, consult notes, or communicate with
          others for answers without detection
          <sup>
            <Link to="https://www.skillrobo.com/11-ways-of-cheating-in-online-exams/">
              [1]
            </Link>
          </sup>
          . Furthermore, virtual machines can be configured to appear as
          legitimate parts of the computer's hardware, making them harder to
          detect.
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
              <td>Secure Exam Environment </td>
              <td>
                Utilize specialized secure exam proctoring environments or
                software that cannot be run inside a VM or detects VM
                environments.
              </td>
            </tr>
            <tr>
              <td>M002</td>
              <td>Use of School-Provided Computers</td>
              <td>
                Require students to use school-provided computers for testing to
                ensure a secure environment, while allowing the use of personal
                devices for study and exam preparation.
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
              <td>D001</td>
              <td>Proctoring Software</td>
              <td>
                Implementing screen monitoring software that can track students'
                mouse movements and keystrokes to detect any suspicious
                behavior, including the use of virtual machines.{" "}
              </td>
            </tr>
            <tr>
              <td>D002</td>
              <td>Network Monitoring</td>
              <td>
                Monitors network patterns that are typical of VMs, such as
                specific types of network adapters or unusual IP addresses.
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
                [1]{" "}
                <Link to="https://www.skillrobo.com/11-ways-of-cheating-in-online-exams/">
                  W. Developer, “11 Ways of Cheating in Online Exams and How to
                  Prevent Them? | SkillRobo,” Skillrobo New, Feb. 07, 2024.
                  https://www.skillrobo.com/11-ways-of-cheating-in-online-exams/
                </Link>
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <p></p>
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VirtualMachines;
