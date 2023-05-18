import { useEffect, useState } from "react";



const ArtistList = () => {
  const listItem: string[] = [
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // useEffect(()=>{
  //   fetch('').then((res)=>res.json()).then((data)=>{console.log(data)});
  // },[])
  return (
    <>
      <div>
        <ul>
          {listItem.map((item: any, index: number) =>(
            <li
              className={selectedIndex===index ? "selected" : ""}
              onClick={() => setSelectedIndex(index)}
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ArtistList;
