import "./MiOrg.css";

const MiOrg = (props) => {
  const handleClick = () => {
    props.changeForm();
  };
  return (
    <section className="org-section">
      <h3 className="title">Mi Organización</h3>
      <img src="/img/show-form.png" alt="button +" onClick={handleClick} />
    </section>
  );
};

export default MiOrg;
