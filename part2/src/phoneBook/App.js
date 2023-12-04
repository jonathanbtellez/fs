import { useEffect, useState } from "react"
import Filter from "./components/Filter"
import Form from "./components/Form"
import Persons from "./components/Persons"
import personsServices from "../services/persons"
import NotificationSuccess from "./components/NotificationSuccess"
import NotificationError from "./components/NotificationError"
const App = () => {
  const [persons, setPersons] = useState([])
  const [newSearch, setNewSearch] = useState("")
  const [showAll, setshowAll] = useState(true)
  const [notificationMessageSuccess, setNotificationMessageSuccess] = useState(null)
  const [notificationMessageError, setNotificationMessageError] = useState(null)



  useEffect(() => {
    personsServices
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])


  const filteredContacts = showAll ? persons : persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()))



  return (
    <div>
      <h1>Phonebook</h1>
      <NotificationSuccess message={notificationMessageSuccess} />
      <NotificationError message={notificationMessageError} />

      <Filter handleShow={setshowAll} newSearch={newSearch} setNewSearch={setNewSearch} />

      <h2>Add a new contact</h2>
      <Form
        persons={persons}
        handlePersons={setPersons}
        handleNotification={setNotificationMessageSuccess} />
      <h2>Numbers</h2>
      ...
      <Persons
        persons={filteredContacts}
        handlePersons={setPersons}
        handleNotificationSuccess={setNotificationMessageSuccess}
        handleNotificationError={setNotificationMessageError} />
    </div>
  )
}

export default App