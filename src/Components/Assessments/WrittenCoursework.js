import React from "react";
import { Link } from "react-router-dom";
import "./Styles.css";

function WrittenCoursework() {
  return (
    <>
      <body className="app-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="description-body">
                <h1>Written Coursework</h1>
                <p>
                  Written coursework in an academic setting encompasses various
                  forms of structured writing assessments, including reports,
                  essays, and research papers. Each type serves to evaluate
                  different aspects of a student's capabilities from analytical
                  skills and critical thinking to in-depth research and coherent
                  argument construction. The overarching goal is to prepare
                  students for professional and academic challenges by honing
                  their writing, reasoning, and research skills
                </p>
                <p>
                  <b>Types</b>
                </p>
                <ul>
                  <li>
                    Report Writing: Focuses on analyzing a specific issue or
                    problem, presenting information in a structured format, and
                    making evidence-based recommendations.
                  </li>
                  <li>
                    Essay Writing: Involves constructing a coherent argument in
                    response to a specific question, emphasizing clarity of
                    thought, organization, and persuasive communication.
                  </li>
                  <li>
                    Research Paper Writing: Requires conducting extensive
                    research to produce new insights on a topic, demonstrating
                    methodological rigor, and synthesizing findings into an
                    original scholarly contribution.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div class="card-body">
                  <div class="card-data">
                    <span class="h5 card-title">ID:</span> AS100
                  </div>
                  <div class="card-data">
                    <span class="h5 card-title">Created:&nbsp;</span>25th March
                    2024
                  </div>
                  <div class="card-data">
                    <span class="h5 card-title">Last Modified:&nbsp;</span>25th
                    March 2024
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
            <tr className="technique">
              <td colspan="2">
                <Link to="/plagiarism-written-coursework">T1000</Link>
              </td>
              <td>
                <Link to="/plagiarism-written-coursework">Plagiarism</Link>
              </td>
              <td>
                Plagiarism is the act of using someone else's work without
                proper attribution, covering both direct copying and the failure
                to credit sources. It's dishonest and undermines learning and
                respect for the original creator's efforts. Plagiarism can occur
                in any creative or academic field, and profiting from it
                constitutes intellectual property theft, a criminal offense.
              </td>
            </tr>
            <tr className="sub technique">
              <td></td>
              <td>
                <Link to="/complete-plagiarism">.001</Link>
              </td>
              <td>
                <Link to="/complete-plagiarism"> Complete Plagiarism </Link>
              </td>
              <td>
                This form of academic dishonesty happens when a student presents
                someone else's work as their own. This includes scenarios where
                a student pays someone to write an assignment and then submits
                it under their own name, or when a student takes another's work
                and claims it as their original effort.
              </td>
            </tr>
            <tr class="sub technique">
              <td></td>
              <td>
                <Link to="/direct-plagiarism">.002</Link>
              </td>
              <td>
                <Link to="/direct-plagiarism"> Direct Plagiarism </Link>
              </td>
              <td>
                {" "}
                Direct plagiarism occurs when a student uses another person's
                words or ideas in their own work without proper attribution.
                This is similar to complete plagiarism, but it differs in scale.
                Complete plagiarism involves taking an entire work, while direct
                plagiarism involves copying specific excerpts or ideas without
                giving credit to the original author.
              </td>
            </tr>
            <tr class="sub technique">
              <td></td>
              <td>
                <Link to="/paraphrasing-plagiarism">.003 </Link>
              </td>
              <td>
                <Link to="/paraphrasing-plagiarism">
                  {" "}
                  Paraphrasing Plagiarism
                </Link>
              </td>
              <td>
                Paraphrasing plagiarism occurs when a student takes another
                person's work, alters a few words or phrases, and then presents
                it as their own original thought. This is a widespread form of
                academic dishonesty, often overlooked or misunderstood by
                students as a legitimate form of plagiarism.
              </td>
            </tr>
            <tr class="sub technique">
              <td></td>
              <td>
                <Link to="/self-plagiarism">.004 </Link>
              </td>
              <td>
                <Link to="/self-plagiarism"> Self Plagiarism</Link>
              </td>
              <td>
                Occurs when students submit substantial parts of their
                previously submitted or published work in a new assignment
                without appropriate citations or acknowledgment. This behavior
                undermines the integrity of academic work by presenting it as
                newly created content, which can lead to copyright issues if the
                prior work was officially published or used for academic
                evaluation.
              </td>
            </tr>

            <tr class="technique">
              <td colspan="2">
                <Link to="/outsourcing-assessments">T1001</Link>
              </td>
              <td>
                <Link to="/outsourcing-assessments">
                  Outsourcing Assessments
                </Link>
              </td>
              <td>
                Outsourcing assessments is a form of academic dishonesty where
                students delegate their assignments or examinations to third
                parties, including paid services or even family and friends, to
                complete on their behalf. 
              </td>
            </tr>
            <tr class="sub technique">
              <td></td>
              <td>
                <Link to="/essay-mills">.001</Link>
              </td>
              <td>
                <Link to="/essay-mills">Essay Mills</Link>
              </td>
              <td>
                A contract cheating service or essay mill is a business or
                individual that offers to complete academic assignments for
                students in exchange for payment. These entities support
                academic dishonesty by supplying students with finished work
                that can be submitted as their own.
              </td>
            </tr>
            <tr class="sub technique">
              <td></td>
              <td>
                <Link to="/friends-families">.002</Link>
              </td>
              <td>
                <Link to="/friends-families">Friends and famaily </Link>
              </td>
              <td>
                A situation where friends or family members complete assignments
                for students in whole or in part, can be a form of contract
                cheating that does not involve a financial relationship.
              </td>
            </tr>
            <tr class="sub technique">
              <td></td>
              <td>
                <Link to="/previously-submitted-assignments">.003</Link>
              </td>
              <td>
                <Link to="/previously-submitted-assignments">
                  Previously Submitted Assignments
                </Link>
              </td>
              <td>
                Students might access databases of previously submitted
                assignments on similar topics and submit them as their own,
                slightly modified to appear original.{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </>
  );
}

export default WrittenCoursework;
