import { useEffect } from "react";
export default function Profile() {
  useEffect(() => {
    console.log("hasdh");
    return () => {
      console.log("return");
    };
  }, []);
  return (
    <div>
      <h1>ffff</h1>
    </div>
  );
}
