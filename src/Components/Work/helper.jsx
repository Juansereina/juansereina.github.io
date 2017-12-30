import jsonp from 'jsonp';

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
  // const url = 'https://www.behance.net/v2/users/Juanse2296/projects?client_id=pULi7ivaPknVuBz4MV6lFO3Kh8f4xO7u';
  const url = '';
  jsonp(url, null, (err, data) => {
    if (err) {
      rej(new Error('Error consulting projects on Behance'));
    }
    res(data.projects);
  });
});

const consultOneProject = id => new Promise((res, rej) => {
  // const url = `https://www.behance.net/v2/projects/${id}?client_id=pULi7ivaPknVuBz4MV6lFO3Kh8f4xO7u`;
  const url = '';
  jsonp(url, null, (err, data) => {
    if (err) {
      rej(new Error('Error consulting a project on Behance'));
    }
    res(data);
  });
});

consultOneProject(57270341).then(res => console.log('khe', res));

export default { createProjects, consultProjects, consultOneProject };

