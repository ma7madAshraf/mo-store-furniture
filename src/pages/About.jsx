
import img from "../assets/hero-about.jpeg";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl ">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              mo store
            </div>
          </div>
        </div>
      </div>
      <div className="flex place-items-center my-align gap-x-20 mt-6">
        <img
          src={img}
          className="hidden md:block object-cover h-96 shadow-xl rounded-box"
          alt="about img"
        />

        <p className="text-lg leading-8 max-w-2xl mx-auto">
          in 2017 we start our store only to provide top quality products elit.
          At magnam itaque nulla dolores explicabo corporis aut esse commodi
          reprehenderit ab perspiciatis eaque, quos ad cum ex minus praesentium
          recusandae inventore ullam. Consequuntur, consequatur enim! Rem,
          doloremque porro! Illo quaerat pariatur labore, accusamus laborum
          eaque neque ullam dicta optio tempore porro!
        </p>
      </div>
    </>
  );
};

export default About;
