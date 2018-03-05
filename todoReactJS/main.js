
class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemValue: ""
    };
    this.eventHandler = this.eventHandler.bind(this);
  }

  eventHandler(e) {
    this.setState({ itemValue: e.target.value });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.eventHandler} value={this.state.itemValue}/>
      <li>{this.state.itemValue}</li>
      </div>
    );
  }
}

ReactDOM.render(<Item />, document.getElementById("root"));
