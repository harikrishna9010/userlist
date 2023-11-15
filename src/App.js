import UserProfile from './components/UserProfile'

const userDetailsList = [
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    designation: 'Software Developer',
    uniqueNo: '1',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    designation: 'Software Developer',
    uniqueNo: '2',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    designation: 'Software Developer',
    uniqueNo: '3',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    designation: 'Software Developer',
    uniqueNo: '4',
  },
]
const App = () => (
  <div className="list-container">
    <h1 className="title">User List</h1>
    <ul>
      {userDetailsList.map(eachPerson => (
        <UserProfile userDetails={eachPerson} key={eachPerson.uniqueNo} />
      ))}
    </ul>
  </div>
)

export default App
