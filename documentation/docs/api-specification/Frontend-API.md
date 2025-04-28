---
sidebar_position: 1
---

<!--Overview Section-->
# Frontend API 

<a name="App"></a>

## App() ⇒ <code>JSX.Element</code>
App component renders the landing page for the Bioinformatics RAG Chatbot.

The layout is divided into two main sections:
- **Left Side:** Displays the application title, a button to begin a new chat (which navigates to the chat page), a product description,
  and an authors section.
- **Right Side:** Displays an image related to the application.

The component uses a flex layout to ensure responsive design and proper alignment of elements.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - The rendered landing page component.  
**Component**:   


***

<a name="main.jsx
This is the entry point for the React application. It initializes the React DOM rendering,
sets up the routing using BrowserRouter, and defines the application routes including the main App component,
the Chat page, and a fallback 404 page.module_"></a>


## main.jsx
This is the entry point for the React application. It initializes the React DOM rendering,
sets up the routing using BrowserRouter, and defines the application routes including the main App component,
the Chat page, and a fallback 404 page.







***
## Component
***

<a name="ChatBox
This file exports the ChatBox component which renders a chat input form.module_"></a>

## ChatBox
This file exports the ChatBox component which renders a chat input form.

* [ChatBox
This file exports the ChatBox component which renders a chat input form.](#ChatBox
This file exports the ChatBox component which renders a chat input form.module_)
    * [module.exports(props)](#exp_ChatBox
This file exports the ChatBox component which renders a chat input form.module_--module.exports) ⇒ <code>JSX.Element</code> ⏏
        * [~ChatBox.propTypes](#ChatBox
This file exports the ChatBox component which renders a chat input form.module_--module.exports..ChatBox.propTypes)

<a name="exp_ChatBox
This file exports the ChatBox component which renders a chat input form.module_--module.exports"></a>

### module.exports(props) ⇒ <code>JSX.Element</code> ⏏
ChatBox component renders a chat input form with an input field and submit button.

This component is used to capture the user's chat input and submit it via the provided
event handlers. The form is designed to update the input value on change and call the
submit handler when the form is submitted.

**Kind**: Exported function  
**Returns**: <code>JSX.Element</code> - The rendered chat input form.  
**Component**:   

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> | The component props. |
| props.input | <code>string</code> | The current text input. |
| props.setInput | <code>function</code> | Callback to update the input value. |
| props.handleSubmit | <code>function</code> | Callback to handle the form submission. |

<a name="ChatBox
This file exports the ChatBox component which renders a chat input form.module_--module.exports..ChatBox.propTypes"></a>

#### module.exports~ChatBox.propTypes
PropTypes for the ChatBox component.

**Kind**: inner property of [<code>module.exports</code>](#exp_ChatBox
This file exports the ChatBox component which renders a chat input form.module_--module.exports)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| input | <code>string</code> | The current input value. |
| setInput | <code>function</code> | Callback to update the input value. |
| handleSubmit | <code>function</code> | Callback to handle form submission. |

***

<a name="ErrorBox
This file exports the ErrorBox component which displays an error message alert.module_"></a>

## ErrorBox
This file exports the ErrorBox component which displays an error message alert.

* [ErrorBox
This file exports the ErrorBox component which displays an error message alert.](#ErrorBox
This file exports the ErrorBox component which displays an error message alert.module_)
    * [module.exports(props)](#exp_ErrorBox
This file exports the ErrorBox component which displays an error message alert.module_--module.exports) ⇒ <code>JSX.Element</code> ⏏
        * [~ErrorBox.propTypes](#ErrorBox
This file exports the ErrorBox component which displays an error message alert.module_--module.exports..ErrorBox.propTypes)

<a name="exp_ErrorBox
This file exports the ErrorBox component which displays an error message alert.module_--module.exports"></a>

### module.exports(props) ⇒ <code>JSX.Element</code> ⏏
ErrorBox component displays an error message with a title and a body.

This component renders a fixed alert box at the top of the page that provides feedback
about an error. It includes a button that allows the user to dismiss the error message by
resetting the error state.

**Kind**: Exported function  
**Returns**: <code>JSX.Element</code> - The rendered error alert box.  
**Component**:   

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> | The component props. |
| props.title | <code>string</code> | The title of the error message. |
| props.body | <code>string</code> | The detailed error message. |
| props.setError | <code>function</code> | Callback function to reset the error state. |

<a name="ErrorBox
This file exports the ErrorBox component which displays an error message alert.module_--module.exports..ErrorBox.propTypes"></a>

#### module.exports~ErrorBox.propTypes
PropTypes for the ErrorBox component.

**Kind**: inner property of [<code>module.exports</code>](#exp_ErrorBox
This file exports the ErrorBox component which displays an error message alert.module_--module.exports)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | The title of the error message. |
| body | <code>string</code> | The detailed error message. |
| setError | <code>function</code> | Callback to reset the error state. |

***

<a name="ResponseBubble
This file exports the ResponseBubble component which displays a text message in a styled bubble.module_"></a>

## ResponseBubble
This file exports the ResponseBubble component which displays a text message in a styled bubble.

* [ResponseBubble
This file exports the ResponseBubble component which displays a text message in a styled bubble.](#ResponseBubble
This file exports the ResponseBubble component which displays a text message in a styled bubble.module_)
    * [module.exports(props)](#exp_ResponseBubble
This file exports the ResponseBubble component which displays a text message in a styled bubble.module_--module.exports) ⇒ <code>JSX.Element</code> ⏏
        * [~ResponseBubble.propTypes](#ResponseBubble
This file exports the ResponseBubble component which displays a text message in a styled bubble.module_--module.exports..ResponseBubble.propTypes)

<a name="exp_ResponseBubble
This file exports the ResponseBubble component which displays a text message in a styled bubble.module_--module.exports"></a>

### module.exports(props) ⇒ <code>JSX.Element</code> ⏏
ResponseBubble component renders a styled bubble displaying a text message.

**Kind**: Exported function  
**Returns**: <code>JSX.Element</code> - The rendered response bubble element.  
**Component**:   

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> | The component props. |
| props.text | <code>string</code> | The text message to display. |

<a name="ResponseBubble
This file exports the ResponseBubble component which displays a text message in a styled bubble.module_--module.exports..ResponseBubble.propTypes"></a>

#### module.exports~ResponseBubble.propTypes
PropTypes for the ResponseBubble component.

**Kind**: inner property of [<code>module.exports</code>](#exp_ResponseBubble
This file exports the ResponseBubble component which displays a text message in a styled bubble.module_--module.exports)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | The text message to display in the response bubble. |

***

<a name="UserBubble
This file exports the UserBubble component which renders a user message bubble along with an edit button.module_"></a>

## UserBubble
This file exports the UserBubble component which renders a user message bubble along with an edit button.

* [UserBubble
This file exports the UserBubble component which renders a user message bubble along with an edit button.](#UserBubble
This file exports the UserBubble component which renders a user message bubble along with an edit button.module_)
    * [module.exports(props)](#exp_UserBubble
This file exports the UserBubble component which renders a user message bubble along with an edit button.module_--module.exports) ⇒ <code>JSX.Element</code> ⏏
        * [~UserBubble.propTypes](#UserBubble
This file exports the UserBubble component which renders a user message bubble along with an edit button.module_--module.exports..UserBubble.propTypes)

<a name="exp_UserBubble
This file exports the UserBubble component which renders a user message bubble along with an edit button.module_--module.exports"></a>

### module.exports(props) ⇒ <code>JSX.Element</code> ⏏
UserBubble component renders a chat bubble for user messages with an edit option.

This component displays the user's message in a styled bubble and provides an edit button.
When the edit button is clicked, the `onEdit` callback is triggered.

**Kind**: Exported function  
**Returns**: <code>JSX.Element</code> - The rendered user message bubble.  
**Component**:   

| Param | Type | Description |
| --- | --- | --- |
| props | <code>object</code> | The component props. |
| props.text | <code>string</code> | The message text to display. |
| props.onEdit | <code>function</code> | Callback function to be called when the edit button is clicked. |

<a name="UserBubble
This file exports the UserBubble component which renders a user message bubble along with an edit button.module_--module.exports..UserBubble.propTypes"></a>

#### module.exports~UserBubble.propTypes
PropTypes for the UserBubble component.

**Kind**: inner property of [<code>module.exports</code>](#exp_UserBubble
This file exports the UserBubble component which renders a user message bubble along with an edit button.module_--module.exports)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | The user message to display. |
| onEdit | <code>function</code> | Callback function to handle edits, which typically populates the input chat box. |




***

## Pages
***

<a name="Chat"></a>

## Chat() ⇒ <code>JSX.Element</code>
Chat component renders a chat interface with messaging capabilities.

**Kind**: global function  
**Returns**: <code>JSX.Element</code> - The rendered Chat component.  
**Component**:   

* [Chat()](#Chat) ⇒ <code>JSX.Element</code>
    * [~messagesEndRef](#Chat..messagesEndRef)
    * [~handleEdit(index)](#Chat..handleEdit)
    * [~handleSubmit(e)](#Chat..handleSubmit)
    * [~download()](#Chat..download)
        * [~conversation](#Chat..download..conversation)
        * [~txtfile](#Chat..download..txtfile)
        * [~element](#Chat..download..element)
            * [.href](#Chat..download..element.href)
            * [.download](#Chat..download..element.download)

<a name="Chat..messagesEndRef"></a>

### Chat~messagesEndRef
Ref to the bottom of the messages list for auto-scrolling.

**Kind**: inner constant of [<code>Chat</code>](#Chat)  
<a name="Chat..handleEdit"></a>

### Chat~handleEdit(index)
Function to handle clicking the edit button.

**Kind**: inner method of [<code>Chat</code>](#Chat)  

| Param | Type | Description |
| --- | --- | --- |
| index | <code>number</code> | The index of the message to edit. |

<a name="Chat..handleSubmit"></a>

### Chat~handleSubmit(e)
Handle form submission for adding new messages.

**Kind**: inner method of [<code>Chat</code>](#Chat)  

| Param | Type | Description |
| --- | --- | --- |
| e | <code>Event</code> | The event object. |

<a name="Chat..download"></a>

### Chat~download()
Download the chat conversation as a .txt file.

**Kind**: inner method of [<code>Chat</code>](#Chat)  

* [~download()](#Chat..download)
    * [~conversation](#Chat..download..conversation)
    * [~txtfile](#Chat..download..txtfile)
    * [~element](#Chat..download..element)
        * [.href](#Chat..download..element.href)
        * [.download](#Chat..download..element.download)

<a name="Chat..download..conversation"></a>

#### download~conversation
Converts the array from the session storage into a string.

**Kind**: inner constant of [<code>download</code>](#Chat..download)  
<a name="Chat..download..txtfile"></a>

#### download~txtfile
Creates a file object.

**Kind**: inner constant of [<code>download</code>](#Chat..download)  
<a name="Chat..download..element"></a>

#### download~element
Anchor for the link for downloading.

**Kind**: inner constant of [<code>download</code>](#Chat..download)  

* [~element](#Chat..download..element)
    * [.href](#Chat..download..element.href)
    * [.download](#Chat..download..element.download)

<a name="Chat..download..element.href"></a>

##### element.href
Creates a URL so that the computer starts the download of the file when clicked.

**Kind**: static property of [<code>element</code>](#Chat..download..element)  
<a name="Chat..download..element.download"></a>

##### element.download
Name of the file.

**Kind**: static property of [<code>element</code>](#Chat..download..element)  


<a name="module_404"></a>

## 404
<a name="exp_module_404--module.exports"></a>

### module.exports() ⇒ <code>JSX.Element</code> ⏏
A functional component that renders a 404 "Page Not Found" error page.

This component displays a 404 error code along with a message and a button that navigates
the user back to the home page.

**Kind**: Exported function  
**Returns**: <code>JSX.Element</code> - The rendered 404 page.  
**Component**:   
