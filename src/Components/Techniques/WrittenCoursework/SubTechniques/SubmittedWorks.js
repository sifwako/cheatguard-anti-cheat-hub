import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Submittedworks() {
  return (
    <div className="app-container">
      <h1>Previously Submitted Assignments</h1>

      <div className="description">
        <p>
          Students might access databases of previously submitted assignments on
          similar topics and submit them as their own, slightly modified to
          appear original. When considering the utilization of previously
          submitted academic work for current assignments, there are a few
          approaches that the students might use. For instance, revisitting an
          essay submitted in a previous year for a class, update its title, and
          submit it for a current class assignment [19]. Another strategy could
          involve copying several paragraphs from an assignment completed in the
          past, making minor revisions to them, and incorporating them into a
          new assignment for a different class
          <sup>
            <Link to="https://academicintegrity.psu.edu/courses/academic-integrity/other-serious-violations/submitting-work-previously-used">
              [1]
            </Link>
          </sup>
          .{" "}
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
              <td>M1014</td>
              <td>Pre-Assessment Online Verification</td>
              <td>
                Before distributing the assessment, course instructors are
                advised to conduct online searches for their assignment brief
                <sup>
                  <Link to="https://www.hw.ac.uk/uk/services/docs/academic-registry/contractcheating-staffguide.pdf">
                    {" "}
                    [2]
                  </Link>
                </sup>
                . This is especially important if reusing an assignment from a
                previous course, a practice generally discouraged, as it may
                already be accessible online along with sample answers and
                feedback. Simply searching for the course name, specific parts
                from the assignment brief, or particular questions in a search
                engine can usually indicate whether the assignment has been made
                public.
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
              <td>D1018</td>
              <td>Plagiarism Detection Software</td>
              <td>
                Tools like Turnitin are essential in identifying not only
                outright plagiarism from external sources but also instances
                where students submit previously submitted work, either their
                own or from others. These software tools maintain a database of
                all submitted works and can easily flag identical or slightly
                altered submissions across different terms or courses.
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
                <Link>
                  WPSU - Penn State Public Media, “Submitting work previously
                  used,” Penn state mark reverse.{" "}
                </Link>
              </p>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <p>
                [2]{" "}
                <Link to="https://www.hw.ac.uk/uk/services/docs/academic-registry/contractcheating-staffguide.pdf">
                  {" "}
                  Contract cheating detection and reporting: A staff guide.{" "}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Submittedworks;
