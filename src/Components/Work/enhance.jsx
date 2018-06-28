import {
  withStateHandlers,
  compose,
  withHandlers,
  lifecycle,
  renderComponent,
  branch,
  withProps,
} from "recompose";
import Spinner from "./spinner";
import helpers from "./helper";
import styles from "./scss/work.scss";

const enhance = compose(
  withStateHandlers(
    {
      loading: true,
      openGallery: false,
      photoIndex: 0,
      images: null,
      projects: []
    },
    {
      gallery: () => values => ({ ...values })
    }
  ),
  withHandlers({
    consultProjects: props => event => {
      props.updateValue(event.target.value);
    },
    fillProjects: props => async _projects => {
      const projects = await helpers.createProjects(_projects);
      props.gallery({ projects, loading: false });
    },
    openOneProject: props => async id => {
      const result = await helpers.consultOneProject(id);
      const images = await helpers.extractImages(result);
      props.gallery({ openGallery: true, images });
    }
  }),
  lifecycle({
    componentDidMount() {
      helpers.consultProjects().then(res => this.props.fillProjects(res));
    }
  }),
  branch(props => {
    return props.loading;
  }, renderComponent(Spinner)),
  withProps(() => styles)
);


export default enhance;
