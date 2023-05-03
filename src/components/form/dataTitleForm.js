import Form from 'react-bootstrap/Form';

const dataTitleForm = [
    { name: "Your Name", type: 'text' },
    { name: "Email Address", type: 'email' },
    { name: "Phone Number", type: 'number' },
    { name: "Password", type: 'password' },
    { name: "Repeat Password", type: 'password' },
];
function TitleForm() {
    return (
        <>
            {
                dataTitleForm.map((title, id) => {
                    return <Form.Control type={title.type} placeholder={title.name} key={id} />
                },
                )
            }
        </>
    );
}
export default TitleForm;