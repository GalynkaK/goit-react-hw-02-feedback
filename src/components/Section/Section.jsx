import propTypes from 'prop-types';
import css from "./Section.module.css";

export const Section = ({ title, children }) => (
  <section className={css.section}>
    <p className={css.title}>{title}</p>
    {children}
  </section>
);


Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

export default Section;