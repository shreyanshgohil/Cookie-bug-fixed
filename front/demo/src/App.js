import React, { useEffect } from "react";

const App = () => {
  
  const demo = async () => {
    try {
      const response = await fetch("/api/hello-wrold", {
        method: "post",
        credentials: "include",
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {

      console.log("Error")
    }
    
  };
  useEffect(() => {
    demo();
  }, []);

  return <div>App</div>;
};

export default App;
