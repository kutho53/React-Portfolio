import image from '../assets/Screenshot_20250623_235626_Gallery.jpg';

function AboutMe(){
  return (
    <section class='container mt-5' id='aboutMe'>
      
      <div class='row'>
        <div class='col-sm-4'>
          <img src={image} alt='stick figure' style={{ width: '270px', height: '370px', backgroundColor: 'pink', borderRadius: 10 }} />
        </div>
        <div class='col-sm-8'>
          <h2 style={{marginTop: '0.5em', marginBottom: '1em'}}>About me</h2>
          <p>
          
            I'm a recent graduate of UNC-Chapel Hill's Software Development program with a passion for building practical, efficient, and user-focused solutions. My journey into software development began after earning a bachelor's degree in Business and working hands-on as a Marine Corps aviation technician—an experience that shaped my attention to detail, problem-solving mindset, and commitment to precision under pressure.
          </p><p>
            Transitioning into tech felt like a natural evolution. I enjoy breaking down complex challenges and crafting clean, functional code that brings ideas to life. My background gives me a unique perspective: I understand both the technical and business sides of a project, and I thrive in environments where collaboration, adaptability, and continuous learning are key.
          </p><p>
            Whether I'm writing JavaScript, exploring back-end frameworks, or diving into a new tool, I'm driven by curiosity and a desire to make meaningful contributions to every team I'm a part of.

          </p>
        </div>
      </div>
    </section>
  )
}
export default AboutMe;
