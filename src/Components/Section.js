let Section = ({ title, description }) => {
  // props => Object => {title: "Section Title",description: "Section Content"}
  return (
    <section>
      <hr />
      <h2>{title}</h2>
      <p>{description}</p>
    </section>
  )
}

export default Section
