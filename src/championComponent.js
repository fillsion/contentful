import { useEffect, useState } from "react";
import useContentful from "./useContentful";
import "./styles.css";

export default function ChampionComponent(champions) {
  const [jsons, setJsons] = useState([]);

  const { getJsons } = useContentful();

  useEffect(() => {
    const fetchData = async () => {
      const jsons = await getJsons();
      setJsons(jsons.items);
    };
    fetchData();
  }, []);

  return (
    <div>
      {jsons.map((champion, index) => (
        <div className="championBox" key={index}>
          <h3>{champion.fields.name}</h3>
          <img
            src={champion.fields.championImage.fields.file.url}
            style={{ maxWidth: "100%" }}
            alt="RIP"
          />

          <h4>Description</h4>
          <p>{champion.fields.description.content[0].content[0].value}</p>
          <h4>Abilities</h4>
          <div style={{ textAlign: "left" }}>
            <h5>PASSIVE</h5>
            <p>{champion.fields.passive.content[0].content[0].value}</p>
            <h5>Q</h5>
            <p>{champion.fields.q.content[0].content[0].value}</p>
            <h5>W</h5>
            <p>{champion.fields.w.content[0].content[0].value}</p>
            <h5>E</h5>
            <p>{champion.fields.e.content[0].content[0].value}</p>
            <h5>R</h5>
            <p>{champion.fields.r.content[0].content[0].value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
