import image from '../assets/Stick_Figure.svg.png';

function AboutMe(){
  return (
    <section id='aboutMe'>
      <h2>About me</h2>
      <img src={image} alt='stick figure' style={{ width: '200px', height: '200px', backgroundColor: 'pink', borderRadius: 100 }} />
      <p>
        I am a passionate web developer with experience in creating dynamic and responsive web applications. I enjoy working with modern web technologies and continuously learning new skills to improve my craft.
      </p>
    </section>
  )
}
export default AboutMe;