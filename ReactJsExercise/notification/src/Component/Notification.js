function Notification(props) {
  let messageList = [];

 
  for (let i = 0; i < props.message.length; i++) {
    messageList.push(<li key={i}>Message:{props.message[i]}</li>);
  }

  return (
    <>
      <ul>
        {messageList}
      </ul>
    </>
  );
}

export default Notification;
