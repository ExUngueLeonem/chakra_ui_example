import { MainApi } from "http/MainApi";
import { useEffect, useState } from "react";
import { IApiData } from "types";

const Foo = ({ block }: { block: string }) => {
    return (
        <div>
            Foo
            {block}
        </div>
    );
};

const Bar = ({ block }: { block: string }) => {
    return (
        <div>
            Bar
            {block}
        </div>
    );
};

const Components = {
    foo: Foo,
    bar: Bar,
}

const ApiFromServer = () => {
    const [data, setData] = useState<IApiData>();
    useEffect(() => {
        MainApi.getInstance().getApi().then(({ data }) => { setData(data) })
    }, [])

    console.log(data)

    return (
        <div>
            {data &&
                data.content.body.map(block => block.component)
            }
        </div>
    );
};

export default ApiFromServer;

//https://codesandbox.io/s/dynamic-components-from-json-with-react-ybq27?fontsize=14&file=/src/components.js:174-488
const GetComponents = ({ block }: { block: any }) => {
    if (typeof Components[block.component] !== "undefined") {
        return React.createElement(Components[block.component], {
          key: block._uid,
          block: block
        });
      }
      return React.createElement(
        () => <div>The component {block.component} has not been created yet.</div>,
        { key: block._uid }
      );
};




