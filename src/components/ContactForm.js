import { Component } from "react";
import { InputItem } from "./ContactForm.styled";
import { Formik, Form } from "formik";

export class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };
  onSubmit = (values, action) => {
    this.props.submitHandle(values);
    action.resetForm();
  };
  render() {
    const { name, number } = this.state;
    return (
      <Formik initialValues={{ name, number }} onSubmit={this.onSubmit}>
        <Form>
          <label>
            Name
            <InputItem
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              // value={ name}
              // onChange={this.onInput}
            />
          </label>
          <label>
            Number
            <InputItem
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              // value={ number}
              // onChange={this.onInput}
            />
          </label>
          <button type="submit">Add contact</button>
          {/* <button type="submit" onClick={evt => {
                        validation ();
                    // if (input:invalid) return;
                        this.setState({ name: "", number: "" });
                        this.props.SubmitHandle(evt, this.state);
                } }>Add contact</button> */}
        </Form>
      </Formik>
    );
  }
}
