import style from "../../styles/Channels.module.css";
const json = "format=json";
const paginationFalse = "pagination=false";
import Link from "next/link";
import { Card } from "react-bootstrap";

export const getStaticProps = async () => {
  const res = await fetch(
    `http://api.sr.se/api/v2/channels?${json}&${paginationFalse}`
  );
  const data = await res.json();

  return {
    props: { channels: data },
  };
};
const Channels = ({ channels }) => {
  return (
    <div className={style.container}>
      <div className={style.background}> </div>
      <h1 className={style.headerText}> Alla kanaler</h1>
      {channels.channels.map((channel) => (
        <div className={style.content} key={channel.id}>
          <Card className={style.card1}>
            <Card.Img variant="top" src={channel.image} />
            <div className={style.cardMain}>
              <Card.Body>
                <Card.Title className={style.decorated}>
                  {channel.name} {channel.channeltype}
                </Card.Title>
                <Card.Text>{channel.tagline}</Card.Text>
              </Card.Body>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Channels;
