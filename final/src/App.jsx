import { data } from "./fakeData/moviesData";

import FlexContainer from "./components/FlexContainer";
import Card from "./components/Card";

function App() {
  return (
    <FlexContainer>
      {
        data.map((filmData, i)=>
          <Card data={filmData} key={i} />
        )
      }
    </FlexContainer>
  );
}

export default App;
