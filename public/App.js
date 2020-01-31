const element = React.createElement("div", {
  title: "Outer div"
}, React.createElement("p", null, "I want to get A in this class. So I will work hard for that. Sorry to bother you if I want to know more about my work."), React.createElement("p", null, "test"));
ReactDOM.render(element, document.getElementById('contents'));