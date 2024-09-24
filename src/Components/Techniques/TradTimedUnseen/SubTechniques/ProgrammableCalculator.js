import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function ProgrammableCalculator() {
  return (
    <div className="app-container">
      <h1> Programmable Calculator </h1>
      <div className="description">
        <p>
          Students also use programmable calculators to cheat during proctored
          exams. Programmable calculators looks like a regular calculator, but
          it actually has hidden features that help students cheat. For example,
          it can transform into a book reader, allowing students to quickly
          access their secret notes
          <sup>
            <Link to="https://topspygadgets.com/product-category/exam-cheat-calculators/">
              [1]
            </Link>
          </sup>
          . The calculator also has a fast scrolling feature for the text, so
          students can find the information they need in a flash and to make
          sure students don't get caught, the Magic Calculator has an emergency
          button{" "}
          <sup>
            <Link to="https://files.eric.ed.gov/fulltext/EJ1137336.pdf">
              [2]
            </Link>
          </sup>
          . If they press it, the calculator switches back to normal mode and
          locks all the other buttons. Only those who know a special combination
          of buttons can unlock it again.{" "}
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
              <td>M1053</td>
              <td>Calculator Provision </td>
              <td>
                Offer students approved calculators on the day of the exam to
                ensure compliance
                <sup>
                  <Link to="https://academia.stackexchange.com/questions/99417/how-to-prevent-students-from-using-modified-calculators-to-cheat-on-exams">
                    [3]
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
              <td>D1041</td>
              <td>Calculator Verification </td>
              <td>
                Check each calculator before the exam to ensure it is an
                approved model and hasn't been tampered with or programmed
                <sup>
                  <Link to="https://academia.stackexchange.com/questions/99417/how-to-prevent-students-from-using-modified-calculators-to-cheat-on-exams">
                    [3]
                  </Link>
                </sup>
                .
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
                <Link to="https://topspygadgets.com/product-category/exam-cheat-calculators/">
                  EXAM CHEAT CALCULATORS.
                </Link>
              </p>
              <p>
                [2]{" "}
                <Link to="https://files.eric.ed.gov/fulltext/EJ1137336.pdf">
                  L. Bain, “How Students Use Technology to Cheat and What
                  Faculty Can Do About It,” 2015.
                </Link>
                ‌
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6" style={{ textAlign: "left" }}>
              <p>
                [3]{" "}
                <Link to="https://academia.stackexchange.com/questions/99417/how-to-prevent-students-from-using-modified-calculators-to-cheat-on-exams">
                  “How to prevent students from using modified calculators to
                  cheat on exams?,” Academia Stack Exchange. ‌
                </Link>
              </p>
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

export default ProgrammableCalculator;
