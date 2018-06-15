import React, { Component } from 'react';
import { Form, FormGroup, Label, CustomInput, FormText } from 'reactstrap';

class AddFile extends Component {
  constructor(props) {
    super(props);
    // this.handleFile = this.handleFile.bind(this);
  }

  componentDidMount() {
    console.log('AddFile ready');
  }

  render() {
    return (
      <div>
        <Form className="shadow-sm p-3 mb-5 bg-white rounded">
          <FormGroup>
            <Label for="exampleCustomFileBrowser">File Browser</Label>
            <CustomInput type="file" id="exampleCustomFileBrowser" name="customFile" onChange={this.handleFile} />
            <FormText color="muted">Add files to your local repository. Same as: <code className="language-sh">ipfs add -w ~/Downloads/readme.txt</code></FormText>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default AddFile;
