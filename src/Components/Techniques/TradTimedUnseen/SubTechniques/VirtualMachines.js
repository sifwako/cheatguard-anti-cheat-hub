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
              <td>M1050</td>
              <td>Secure Exam Environment <sup><Link to="https://support.proctoru.com/hc/en-us/articles/360043127892-What-am-I-allowed-and-not-allowed-to-do-during-my-exam#:~:text=Regardless%20of%20whether%20you%20can,check%2C%20and%20are%20not%20permitted.">[3]</Link></sup> </td>
              <td>
                Utilize specialized secure exam proctoring environments or
                software that cannot be run inside a VM or detects VM
                environments.
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
              <td>D1038</td>
              <td>Proctoring Software <sup><Link to="https://www.proctoru.com/.">[2]</Link></sup></td>
              <td>
                Implementing screen monitoring software that can track students'
                mouse movements and keystrokes to detect any suspicious
                behavior, including the use of virtual machines.{" "}
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
                <Link to="https://www.skillrobo.com/11-ways-of-cheating-in-online-exams/">
                  W. Developer, “11 Ways of Cheating in Online Exams and How to
                  Prevent Them? | SkillRobo,” Skillrobo New, Feb. 07, 2024.
                  https://www.skillrobo.com/11-ways-of-cheating-in-online-exams/
                </Link>
              </p>
              <p>[2]<Link to="https://news.ycombinator.com/item?id=29163258">Most of these proctoring software easily detect Virtualbox, VMware, etc. But QEM. . . | Hacker News. (n.d.).</Link></p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6" style={{ textAlign: "left" }}>
              <p>[3]<Link>ProctorU. (2018). ProctorU - The Leading Proctoring Solution for Online Exams. [online]</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VirtualMachines;
