const Read = (props) => {
    const user = props.user;
    const setuser = props.setuser;
    console.log(props);
    
const renderData = user.map((user, index) => {
    return <li key={index}>{user.name}</li>;
  });
  
  return (
    <div>
        <h1>User Data Rendering</h1>
        <ol>{renderData}</ol>
    </div>
  )
}

export default Read