
import Section from "./Section"

let SectionInfo = [{
    title: "Skills",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illo laboriosam fugit et aliquam voluptates sunt enim totam aspernatur, dolorem ullam debitis recusandae odio iste rerum, molestiae ipsa labore optio!"
  },
  {
    title:"Project",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illo laboriosam fugit et aliquam voluptates sunt enim totam aspernatur, dolorem ullam debitis recusandae odio iste rerum, molestiae ipsa labore optio!"
  },
  {
    title:"Experience",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab illo laboriosam fugit et aliquam voluptates sunt enim totam aspernatur, dolorem ullam debitis recusandae odio iste rerum, molestiae ipsa labore optio!"
  },
  ]



const MultipleSection = () =>{
return(
    <div>
    {
    SectionInfo.map((value)=>(
        <Section 
        title={value.title}
        description={value.description}
        />
      ))
      }
      </div>
)
}


export default MultipleSection