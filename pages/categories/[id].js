import style from "../../styles/CategoryPage.module.css";
const json = "format=json";
const paginationFalse = "pagination=false";
import { Card } from "react-bootstrap";
import Link from "next/link";

export const getStaticPaths = async () => {
  const res = await fetch(
    `http://api.sr.se/api/v2/programcategories?${json}&${paginationFalse}`
  );
  const data = await res.json();

  const paths = data.programcategories.map((category) => {
    return {
      params: { id: category.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://api.sr.se/api/v2/programs/index?programcategoryid=${context.params.id}&format=json&pagination=false`
  );
  const data = await res.json();
  return {
    props: { category: data },
  };
};

const CategoriesPage = ({ category }) => {
  return (
    <div className={style.container}>
      <div className={style.background}> </div>
      <h1 className={style.headerText}> Klicka på ett program för mer info </h1>
      {category.programs.map((category) => (
        <Link href={"/programs/" + category.id} key={category.id}>
          <div className={style.content}>
            <Card className={style.card}>
              <div className={style.cardMain}>
                <Card.Body>
                  <Card.Title className={style.decorated}>
                    {category.name} {category.channeltype}
                  </Card.Title>
                  <Card.Text>{category.description}</Card.Text>
                </Card.Body>
              </div>
              <Card.Img variant="top" src={category.programimage} />
            </Card>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoriesPage;
