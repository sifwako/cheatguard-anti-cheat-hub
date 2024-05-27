import React from "react";
import { Link } from "react-router-dom";
import "./Styles.css";

function CreativeDesignTask() {
  return (
    <>
      <body className="app-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="description-body">
                <h1> Creative Design Task </h1>
                <p>
                  Creative design task assessments in various disciplines allow
                  students to demonstrate their practical skills, creativity,
                  and problem-solving abilities in diverse contexts. Here's a
                  brief overview of different types based on the fields of
                  writing, business, and software development:
                </p>
                <ol>
                  <li>
                    <b>Short Story and Novel Writing:</b> involves assessing
                    creative writing skills where students may be tasked to
                    draft short stories or sections of a novel. The emphasis is
                    on narrative structure, character development, and the
                    ability to engage an audience through creative prose.
                  </li>
                  <li>
                    <b>Scriptwriting:</b> students are evaluated on their
                    ability to write scripts for plays, films, or television.
                    This includes crafting dialogues, developing plot lines, and
                    understanding the dynamics of visual storytelling.
                  </li>
                  <li>
                    <b>Poetry:</b> the focus is on the use of language, rhythm,
                    and imagery to convey emotions or ideas. Students might be
                    assessed on their ability to adhere to specific poetic forms
                    or their innovation in free verse.
                  </li>
                  <li>
                    <b>Business Plan:</b> require students to create
                    comprehensive plans outlining the strategy, marketing,
                    financial projections, and operational aspects of a new
                    business venture. This type assesses critical thinking,
                    market analysis, and strategic planning skills.
                  </li>
                  <li>
                    <b>Software Program:</b> includes a variety of programming
                    tasks. Students might analyze data within existing programs,
                    make alterations to provided code, or develop new software
                    from scratch. The assessment can focus on their coding
                    skills, problem-solving abilities, and the functionality of
                    the end product.
                  </li>
                </ol>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <div className="card-data">
                    <span className="h5 card-title">ID:</span> AS103
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
            <tr className="technique">
              <td colspan="2">
                <Link to="/creative-integrity-breach">T1005</Link>
              </td>
              <td>
                <Link to="/creative-integrity-breach">
                  Creative Integrity Breach
                </Link>
              </td>
              <td>
                A creative integrity breach occurs when an individual fails to
                adhere to established ethical standards regarding the
                authenticity and originality of their creative work. This
                encompasses any action that undermines the uniqueness of
                creative outputs in environments that value and assess
                originality. Such breaches compromise the trust and fairness
                essential in academic and professional settings, affecting the
                credibility of the work and the integrity of the creative
                process.
              </td>
            </tr>
            <tr className="sub technique">
              <td></td>
              <td>
                <Link to="/idea-theft">.001</Link>
              </td>
              <td>
                <Link to="/idea-theft">Idea theft</Link>
              </td>
              <td>
                {" "}
                Idea theft, also known as idea plagiarism or idea
                misappropriation, refers to the act of adopting and presenting
                someone else's fundamental concepts, strategies, or
                methodologies as one's own. It occurs when students fail to give
                proper credit or acknowledgment to the original source of
                inspiration or intellectual property and submit it as their own
                work.
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </>
  );
}
export default CreativeDesignTask;
