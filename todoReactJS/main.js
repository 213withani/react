
class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemValue: "",
      list: []
    };
    this.eventHandler = this.eventHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); 
    
  }

  eventHandler(e) {
    this.setState({ itemValue: e.target.value });
  }
  
  handleSubmit(e) {
    event.preventDefault()
    this.setState({
      itemValue: "",
      list: [...this.state.list, this.state.itemValue]
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Todo</label>
          <input type="text" onChange={this.eventHandler} value={this.state.itemValue}/>
         </form>
        
         
        <ul>{this.state.list.map((item)=><li>{item}</li>)} </ul>
      </div>
    );
  }
}

ReactDOM.render(<Item />, document.getElementById("root"));
