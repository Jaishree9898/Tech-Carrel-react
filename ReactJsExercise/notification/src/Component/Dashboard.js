import Notification from "./Notification";

function Dashboard() {
  const array=["You receive a message","Hello"]
  return (
    <>
    <Notification message={array} />
    </>
  )
}
export default Dashboard;