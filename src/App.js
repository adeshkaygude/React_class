import TimeWatch from "./components/timers/TimeWatch";

import ImageGallery from "./components/image-gallery/ImageGallery";
import IndianPlayer from "./components/Indian-Player/IndianPlayer";
import ProbsDemo from "./components/timers/probsDemo/ProbsDemo";
import ImageToggle from "./components/image_toggle/ImageToggle";
import Password from "./components/PasswordDemo/Password";

import Student from "./components/Student/Student";
import ListRendering from "./components/list-rendering/ListRendering";
import EventHandling from "./components/event-handling/EventHandling";
import LiftStateUp from "./components/lifting-state-up/LiftingSatateUp";
import BasicForm from "./components/forms-demo/BasicForms";
import BasicRHF from "./components/forms-demo/BasicRHF";
import DandiyaForm from "./components/forms-demo/DandiyaForm";
import CollegeForm from "./components/forms-demo/CollegeForm";
import JobProfile from "./components/forms-demo/JobProfile";
import StyledComp from "./components/forms-demo/StyleComponent";
import JssStyle from "./components/forms-demo/JSStyle";
import Product from "./components/Product/Product";

const App = () => {
  return (
    <div>
      <h2>Welcome</h2>

      <h3>
        <TimeWatch />
      </h3>

      {/* <hr /> */}

      {/* 
      <h3>
        <ProbsDemo />
      </h3>
      <hr />

      <h3>
        <ImageGallery />
      </h3>
      <hr />

      <h3>
        <IndianPlayer />
      </h3>

      <ImageToggle />
      <hr />

      <h3>
        <Password />
      </h3>

      <Student />
      */}

      {/* <hr /> */}

      {/* <ListRendering /> */}
      {/* <EventHandling /> */}
      {/* <hr /> */}
      <h3>{/* <LiftStateUp /> */}</h3>
      {/* <BasicForm /> */}
      {/* <hr /> */}
      {/* <BasicRHF /> */}
      {/* <DandiyaForm /> */}
      {/* <CollegeForm />
       */}
      {/* <JobProfile /> */}
      {/* <StyledComp /> */}
      {/* <hr /> */}
      {/* <JssStyle /> */}
      {/* <ProductForm /> */}
      <Product />
    </div>
  );
};

export default App;
