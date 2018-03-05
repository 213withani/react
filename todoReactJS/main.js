class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        list : ["Yo", "there", "hello"]
    }
  }

  render() {
    return <div>{this.state.list.map((item)=><li>{item}</li>)}</div>;
  }
} 

ReactDOM.render(<Item />, document.getElementById("root"));
