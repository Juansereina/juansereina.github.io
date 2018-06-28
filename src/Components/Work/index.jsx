import React from "react";
import { Element } from "react-scroll";

import enhance from "./enhance";
import Project from "./project";
import RenderGallery from "./renderGallery";

const Work = ({ openOneProject, projects, ...props }) => (
  <div className={props.root}>
    <Element className={props.grid} style={{ overflow: "auto" }}>
      {projects.map(img => (
        <Element key={img.id} name={String(img.id)}>
          <Project data={img} open={openOneProject} />
        </Element>
      ))}
    </Element>
    <RenderGallery {...props} />
  </div>
);

export default enhance(Work);
