import { useState } from "react";
import styles from "./checkbox.module.css";
import Accordion from "react-bootstrap/Accordion";
export default function Checkbox() {
  const [data, setData] = useState([
    {
      id: 1,
      isChecked: false,
      name: "scheme1",
      sub_scheme: [
        { sub_id: 1, sub_name: "Test1", isChecked: false },
        { sub_id: 2, sub_name: "Test2", isChecked: false },
      ],
    },
    {
      id: 2,
      isChecked: false,
      name: "scheme2",
      sub_scheme: [
        { sub_id: 3, sub_name: "Test3", isChecked: false },
        { sub_id: 4, sub_name: "Test4", isChecked: false },
      ],
    },
  ]);
  const handleChange = (id) => {
    let temp = [...data];
    console.log(temp, "ggg");
    let index = temp.findIndex((element) => {
      return element.id === id;
    });
    if (index > -1) {
      console.log("jsgf");
      temp[index].isChecked = !temp[index].isChecked;
      temp[index].sub_scheme.map((ele) => {
        return {
          ...data,
          isChecked: !ele.isChecked,
        };
      });
      setData(temp);
    }
  };

  return (
    <div className={styles.outline}>
      <div className={styles.checkbox}>
        {Array.isArray(data) &&
          data.map((element) => {
            return (
              <Accordion defaultActiveKey={element.id}>
                <Accordion.Item eventKey={element.id}>
                  <Accordion.Header key={element.id}>
                    <input
                      onChange={() => {
                        handleChange(element.id, "head");
                      }}
                      type="checkbox"
                      checked={element.isChecked}
                      id={element.id}
                    />
                    <label>{element.name}</label>
                  </Accordion.Header>
                  {Array.isArray(element.sub_scheme) &&
                    element.sub_scheme.map((ele) => {
                      return (
                        <Accordion.Body key={ele.sub_id}>
                          <input
                            onChange={() => {
                              handleChange(ele.sub_id, "datalist");
                            }}
                            checked={element.isChecked}
                            type="checkbox"
                            id={ele.sub_id}
                          />
                          <label>{ele.sub_name}</label>
                        </Accordion.Body>
                      );
                      //   );
                    })}
                </Accordion.Item>
              </Accordion>
            );
          })}
      </div>
    </div>
  );
}
