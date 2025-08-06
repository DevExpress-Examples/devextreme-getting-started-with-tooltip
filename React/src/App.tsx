import './App.css';
import 'devextreme/dist/css/dx.fluent.blue.light.css';
import { Button } from 'devextreme-react/button';
import { Tooltip } from 'devextreme-react/tooltip';

function likeRender(): JSX.Element {
  return <div>Like</div>;
}

function trashRender(): JSX.Element {
  return (
    <div className='red-tooltip'>Delete</div>
  );
}

function infoRender(): JSX.Element {
  return (
    <div className='blue-tooltip'>Info</div>
  );
}

function App(): JSX.Element {
  return (
    <div className="dx-viewport">
      <div className="buttons">
        <Button
          id="like"
          icon="like"
        />
        <Button
          id="trash"
          icon="trash"
        />
        <Button
          id="info"
          icon="info"
        />
      </div>
      <div className="tooltips">
        <Tooltip
          target="#like"
          showEvent="mouseenter"
          hideEvent="mouseleave"
          contentRender={likeRender}
        />
        <Tooltip
          target="#trash"
          showEvent="mouseenter"
          hideEvent="mouseleave"
          contentRender={trashRender}
        />
        <Tooltip
          target="#info"
          showEvent="mouseenter"
          hideEvent="mouseleave"
          contentRender={infoRender}
        />
      </div>
    </div>
  );
}

export default App;
