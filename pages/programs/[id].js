const json = "format=json";
const paginationFalse = "pagination=false";
import style from "../../styles/ProgramPage.module.css";
import { Card } from "react-bootstrap";

export const getStaticPaths = async () => {
  const res = await fetch(
    `http://api.sr.se/api/v2/programs?${json}&${paginationFalse}`
  );
  const data = await res.json();

  const paths = data.programs.map((program) => {
    return {
      params: { id: program.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `http://api.sr.se/api/v2/programs/${context.params.id}?format=json`
  );
  const data = await res.json();
  return {
    props: { program: data },
  };
};

const Details = ({ program }) => {
  return (
    <div className={style.container}>
      <div className={style.background}> </div>
      <div className={style.mainContainer}>
        <div className={style.image}>
          <Card.Img
            src={program.program.programimage}
            style={{ width: "100%" }}
          />
        </div>

        <div className={style.infoContainer}>
          <h1 className={style.name}>{program.program.name}</h1>
          <h2 className={style.description}>{program.program.description} </h2>
          <a href={program.program.programurl} target="_blank" rel="noreferrer">
            {program.program.programurl}
          </a>
          <p> {program.program.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
