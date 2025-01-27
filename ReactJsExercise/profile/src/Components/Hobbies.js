
function Hobbies(props) {
  return (
    <>
      <h3>Hobbies</h3>
      <ul>
        {props.hobby}
    </ul>

      <ul>
        {props.hobby.map((item,key) => (
          <li key={key}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default Hobbies;
