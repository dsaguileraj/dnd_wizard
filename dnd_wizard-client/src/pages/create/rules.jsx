import { useState } from "react";
import { axiosInstance } from "../../api.js";
import { Form, InputSelect, InputText, InputTextArea } from "../../components/forms.jsx";
import { EQUIPMENT_TYPES, STATS } from "../../core/choices.js";

export const CategoryPostForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState(undefined);

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosInstance
      .post("/rules/category/", {
        name: name,
        equipment_type: type,
      })
      .then((response) => {
        console.log(response.data);
        setErrorMessage("");
        setName("");
        setType(undefined);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("An error occurred. Please try again later.");
      });
  };
  return (
    <Form errorMessage={errorMessage} handleSubmit={handleSubmit} header="Create Category">
      <InputText field={name} handleChange={setName} label="Name" />
      <InputSelect field={type} handleChange={setType} label="Equipment Type" options={EQUIPMENT_TYPES} />
    </Form>
  );
};

export const ConditionPostForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosInstance
      .post("/rules/condition/", {
        name: name,
        description: description,
      })
      .then((response) => {
        console.log(response.data);
        setErrorMessage("");
        setName("");
        setDescription("");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("An error occurred. Please try again later.");
      });
  };
  return (
    <Form errorMessage={errorMessage} handleSubmit={handleSubmit} header="Create Condition">
      <InputText field={name} handleChange={setName} label="Name" />
      <InputTextArea field={description} handleChange={setDescription} label="Description" />
    </Form>
  );
};

export const DamageTypePostForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosInstance
      .post("/rules/damage_type/", {
        name: name,
      })
      .then((response) => {
        console.log(response.data);
        setErrorMessage("");
        setName("");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("An error occurred. Please try again later.");
      });
  };
  return (
    <Form errorMessage={errorMessage} handleSubmit={handleSubmit} header="Create Damage Type">
      <InputText field={name} handleChange={setName} label="Name" />
      <InputTextArea field={description} handleChange={setDescription} label="Description" />
      </Form>
  );
};

export const FeaturePostForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosInstance
      .post("/rules/feature/", {
        name: name,
        description: description,
      })
      .then((response) => {
        console.log(response.data);
        setErrorMessage("");
        setName("");
        setDescription("");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("An error occurred. Please try again later.");
      });
  };
  return (
    <Form errorMessage={errorMessage} handleSubmit={handleSubmit} header="Create Feature">
      <InputText field={name} handleChange={setName} label="Name" />
      <InputTextArea field={description} handleChange={setDescription} label="Description" />
    </Form>
  );
};

export const LanguagePostForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosInstance
      .post("/rules/language/", {
        name: name,
      })
      .then((response) => {
        console.log(response.data);
        setErrorMessage("");
        setName("");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("An error occurred. Please try again later.");
      });
  };
  return (
    <Form errorMessage={errorMessage} handleSubmit={handleSubmit} header="Create Language">
      <InputText field={name} handleChange={setName} label="Name" />
    </Form>
  );
};

export const MagicSchoolPostForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosInstance
      .post("/rules/magic_school/", {
        name: name,
        description: description,
      })
      .then((response) => {
        console.log(response.data);
        setErrorMessage("");
        setName("");
        setDescription("");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("An error occurred. Please try again later.");
      });
  };
  return (
    <Form errorMessage={errorMessage} handleSubmit={handleSubmit} header="Create Magic School">
      <InputText field={name} handleChange={setName} label="Name" />
      <InputTextArea field={description} handleChange={setDescription} label="Description" />
    </Form>
  );
};

export const SkillPostForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [modifier, setModifier] = useState("STR");

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosInstance
      .post("/rules/skill/", {
        name: name,
        modifier: modifier,
      })
      .then((response) => {
        console.log(response.data);
        setErrorMessage("");
        setName("");
        setModifier("STR");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("An error occurred. Please try again later.");
      });
  };
  return (
    <Form errorMessage={errorMessage} handleSubmit={handleSubmit} header="Create Skill">
      <InputText field={name} handleChange={setName} label="Name" />
      <InputSelect field={modifier} handleChange={setModifier} label="Modifier" options={STATS} />
    </Form>
  );
};

export const PropertyPostForm = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosInstance
      .post("/rules/property/", {
        name: name,
        description: description,
      })
      .then((response) => {
        console.log(response.data);
        setErrorMessage("");
        setName("");
        setDescription("");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("An error occurred. Please try again later.");
      });
  };
  return (
    <Form errorMessage={errorMessage} handleSubmit={handleSubmit} header="Create Property">
      <InputText field={name} handleChange={setName} label="Name" />
      <InputTextArea field={description} handleChange={setDescription} label="Description" />
    </Form>
  );
};
