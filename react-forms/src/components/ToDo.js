import React, { useState } from "react";
import ReactDOM from "react-dom";

import data from "./tododata";

export default function ToDo() {
    const [notes, setNotes] = useState([
        {
          id: 1,
          title: "Happy little quote",
          body:
            "Talent is a pursued interest. Anything that you're willing to practice, you can do.― Bob Ross "
        }
      ]);

      return (
        <div>

        </div>
      );
}