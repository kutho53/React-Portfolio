import image from '../assets/Screenshot_20250623_235626_Gallery.jpg';

function AboutMe(){
  return (
    <section className='container mt-5' id='aboutMe'>
      
      <div className='row'>
        <div className='col-12 col-md-4'>
          <img src={image} 
          alt='stick figure'
          className="img-fluid"
          style={{ backgroundColor: 'black', borderRadius: 10 }} />
        </div>
        <div className='col-12 col-md-8'>
          <h2 style={{marginTop: '0.5em', marginBottom: '1em'}}>About me</h2>
          <p className="responsive-text">
          
            I'm a recent graduate of UNC-Chapel Hill's Software Development program with a passion for building practical, efficient, and user-focused solutions. My journey into software development began after earning a bachelor's degree in Business and working hands-on as a Marine Corps aviation technician—an experience that shaped my attention to detail, problem-solving mindset, and commitment to precision under pressure.
          </p>
          <p className="responsive-text">
            Transitioning into tech felt like a natural evolution. I enjoy breaking down complex challenges and crafting clean, functional code that brings ideas to life. My background gives me a unique perspective: I understand both the technical and business sides of a project, and I thrive in environments where collaboration, adaptability, and continuous learning are key.
          </p>
          <p className="responsive-text">
            Whether I'm writing JavaScript, exploring back-end frameworks, or diving into a new tool, I'm driven by curiosity and a desire to make meaningful contributions to every team I'm a part of.

          </p>
        </div>
      </div>
    </section>
  )
}
export default AboutMe;
