import React from "react";
import Icon from '@material-ui/core/Icon';
import TextArea from 'react-textarea-autosize';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button'

class TrelloActionButton extends React.Component {

  state = {
    formOpen: false,
    text: ""
  }

  openFormHandler = () => {
    this.setState({
      formOpen: true
    })
  }

  closeFormHandler = (e) => {
    this.setState({
      formOpen: false
    })
  }

  inputChangeHandler = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  renderAddButton = () => {
    const { list } = this.props;
    const buttonText = list ? "Add another list" : "Add another card";
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit"
    //another way to style elements when you want some conditional styling and some static styling (static styling using spread operator)
    return (
      <div
        onClick={this.openFormHandler}
        style={
          {
            ...styles.openForButtonGroup,
            opacity: buttonTextOpacity,
            color: buttonTextColor,
            backgroundColor: buttonTextBackground
          }
        }>
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    )
  }

  renderForm = () => {
    const { list } = this.props;
    const placeholder = list ? "Enter list title" : "Enter title for card"
    const buttonTitle = list ? "Add List" : "Add Card"

    return (
      <div>
        <Card style={{
          minHeight: 80,
          minWidth: 272,
          padding: "6px 8px 2px"
        }}>
          <TextArea
            placeholder={placeholder}
            autoFocus
            onBlur={this.closeFormHandler}
            value={this.state.text}
            onChange={this.inputChangeHandler}
            style={{
              resize: "none",
              width: "100%",
              outline: "none",
              border: "none",
              overflow: "hidden"
            }} />
        </Card>
        <div style={styles.formButtonGroup}>
          <Button
            variant="contained"
            style={{
              color: "white",
              backgroundColor: "black"
            }}>
            {buttonTitle}
          </Button>
          <Icon
            style={{
              marginLeft: 8,
              cursor: "pointer",

            }}
          > close
  
          </Icon>
        </div>
      </div>)
  }

  render() {
    //different pattern to render element
    return this.state.formOpen ? this.renderForm() : this.renderAddButton()
  }
}

const styles = {
  openForButtonGroup: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10
  },
  formButtonGroup: {
    marginTop: 8,
    display: "flex",
    alignItems: "center"
  }
}

export default TrelloActionButton;