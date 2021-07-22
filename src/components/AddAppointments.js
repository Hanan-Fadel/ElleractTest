import React from 'react'
import {
  Card, CardHeader, CardBody, Form, Media, FormGroup, Label, Input, FormText, Button, Alert
} from 'reactstrap'

const styles = { "backgroundColor": "#007bff", "color": "#ffffff", "cursor": "pointer" };


class AddAppointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBody: false,
      nurseName: "",
      aptDate: "",
      aptTime: "",
      aptNotes: "",
      formErrors: false
    };
  }
  toggleBody = () => {
    this.setState({
      showBody: !this.state.showBody
    });
  }
  save = (e) => {
    e.preventDefault();
    const { nurseName, aptDate, aptTime, aptNotes } = this.state;
    if (nurseName !=="" && aptDate !== "" && aptTime !== "" &  aptNotes !== "") {
      let apt = {
        id: Date.now(),
        nurseName: this.state.nurseName,
        aptDate: this.state.aptDate + ' ' + this.state.aptTime,
        aptNotes: this.state.aptNotes
      };
      let clear = {
        nurseName: "",
        aptDate: "",
        aptTime: "",
        aptNotes: "",
      };
      this.setState({
        formErrors: false,
        showBody: false,
        ...clear
      });
      this.props.saveApt(apt);
    } else {
      this.setState({
        formErrors: true
      });
    }

  }
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  render() {
    let displayBody = {
      display: this.state.showBody ? 'block' : 'none'
    };
    let errors = {
      display: this.state.formErrors ? 'block' : 'none'
    };
    return (
      <Card className="mt-4 mb-4 card-border" outline color="primary">
        <CardHeader style={styles} onClick={this.toggleBody}><i className="fas fa-plus"></i> Input Availability</CardHeader>
        <CardBody style={displayBody} id="aptBody">
          <FormText color="muted" className="mb-1">
            <span className="text-danger">*</span>All fields are required
          </FormText>
          <Form onSubmit={this.save}>

          <FormGroup>
              <Label for="nurseName">Nurse Name</Label>
              <Input type="text" id="nurseName" value={this.state.nurseName} onChange={this.handleChange} />
            </FormGroup>

            <FormGroup>
              <Label for="aptDate">Date</Label>
              <Input type="date" id="aptDate" value={this.state.aptDate} onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="aptTime">Time</Label>
              <Input type="time" id="aptTime" value={this.state.aptTime} onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Speciality</Label>
              <Input type="textarea" id="aptNotes" placeholder="Speciality" value={this.state.aptNotes} onChange={this.handleChange} />
            </FormGroup>
            <Alert color="danger" style={errors}>
              Please fill all the details
          </Alert>
            <Button type="submit" color="primary" block>Input Availability</Button>
          </Form>
        </CardBody>
      </Card >
    )
  }
}

export default AddAppointments
