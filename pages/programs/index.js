import style from "../../styles/Programs.module.css";
const json = "format=json";
const paginationFalse = "pagination=false";
import Link from "next/link";
import { Card } from "react-bootstrap";

export const getStaticProps = async () => {
  const res = await fetch(
    `http://api.sr.se/api/v2/programs?${json}&${paginationFalse}`
  );
  const data = await res.json();

  return {
    props: { programs: data },
  };
};
const Programs = ({ programs }) => {
  return (
    <>
      <h1 className={style.headerText}>Klicka på ett program för mer info</h1>
      <div className={style.container}>
        <div className={style.background}> </div>

        {programs.programs.map((program) => (
          <div className={style.content} key={program.id}>
            <Link href={"/programs/" + program.id}>
              <Card className={style.card1}>
                <Card.Img variant="top" src={program.programimage} />
                <div className={style.cardMain}>
                  <Card.Body>
                    <Card.Title className={style.decorated}>
                      {program.name} {program.programtype}
                    </Card.Title>
                    <Card.Text>{program.tagline}</Card.Text>
                  </Card.Body>
                </div>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Programs;
