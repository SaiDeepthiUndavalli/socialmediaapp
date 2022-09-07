const Button = (props) => {
  //  Write your code here.
  const { button, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Social Media</h1>
    <div className="buttons-container">
      <Button buttonText="Like" className="like-button" />
      <Button buttonText="Comment" className="comment-button" />
      <Button buttonText="Share" className="share-button" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
