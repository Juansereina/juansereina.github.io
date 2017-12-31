import jsonp from 'jsonp';
import dataLocal from './data';
import dataOneProject from './data_oneProject';

const local = true;

const createProjects = _projects => new Promise((res, rej) => {
  const projects = _projects.map((project) => {
    const newProject = {
      id: project.id,
      url: project.url,
      thumbnail: project.covers['404'],
      src: project.covers.original,
      alt: project.name,
    };
    return newProject;
  });
  if (projects < 1) {
    rej(new Error("There aren't projects"));
  }
  res(projects);
});

const consultProjects = () => new Promise((res, rej) => {
  if (local) res(dataLocal);
  const url = 'https://www.behance.net/v2/users/Juanse2296/projects?client_id=pULi7ivaPknVuBz4MV6lFO3Kh8f4xO7u';
  jsonp(url, null, (err, data) => {
    if (err) {
      rej(new Error('Error consulting projects on Behance'));
    }
    res(data.projects);
  });
});

const consultOneProject = id => new Promise((res, rej) => {
  if (local) res(dataOneProject);
  const url = `https://www.behance.net/v2/projects/${id}?client_id=pULi7ivaPknVuBz4MV6lFO3Kh8f4xO7u`;
  jsonp(url, null, (err, data) => {
    if (err) {
      rej(new Error('Error consulting a project on Behance'));
    }
    res(data);
  });
});

const extractImages = obj => new Promise((res, rej) => {
  const images = obj.project.modules.filter((module) => {
    if (module.sizes) return true;
    return false;
  }).map((module) => {
    let image = null;
    if (module.sizes) { image = module.sizes.original; } else rej(new Error('Empty Value'));
    return image;
  });
  res(images);
});

export default {
  createProjects,
  consultProjects,
  consultOneProject,
  extractImages,
};

