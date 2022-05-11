import style from "../../styles/CategoriesPage.module.css";
const json = "format=json";
const paginationFalse = "pagination=false";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch(
    `http://api.sr.se/api/v2/programcategories?${json}&${paginationFalse}`
  );
  const data = await res.json();

  return {
    props: { categories: data },
  };
};
const CategoriesPage = ({ categories }) => {
  return (
    <>
      <div className={style.background}> </div>
      <h1 className={style.headerText}>
        Klicka på en kategori för att se program{" "}
      </h1>
      <div className={style.grid_container}>
        {categories.programcategories.map((category) => (
          <Link href={"/categories/" + category.id} key={category.id}>
            <div className={style.category}>
              <h1> {category.name}</h1>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CategoriesPage;
