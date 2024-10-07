import './App.css';
import "bulma/css/bulma.css";
import Navbar from './Components/Navbar.js';
import FormField from './Components/FormField.js';
import SignUpForm from './Components/SignUpForm.js';
import CoolButton from './Components/CoolButton.js';
import Message from './Components/Message.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FormField label="Username" type="text" placeholder="e.g. John Doe" />
      <FormField label="Email" type="email" placeholder="e.g. johndoe@example.com" />
      <SignUpForm />
      <CoolButton isSuccess>Button 1</CoolButton>
      <CoolButton isLight>Button 2</CoolButton>
      <br></br>
      <CoolButton isSmall isDanger isRounded>Button 1</CoolButton>
      <CoolButton isSmall isSuccess>Button 2</CoolButton>
      <Message isInfo title="Hello World">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        <strong>Pellentesque risus mi</strong>.
      </Message>
    </div>
  );
}

export default App;
