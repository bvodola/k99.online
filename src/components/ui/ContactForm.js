import React, { useState } from "react"
import Form from "./Form"
import { sendEmail } from "../../helpers"
import Toast from "@bit/amazingdesign.react-redux-mui-starter.toast"

const ContactForm = () => {
  const initialFormState = () => ({
    name: "",
    phone: "",
  })
  const [formData, setFormData] = useState(initialFormState())
  const [isFormLoading, setIsFormLoading] = useState(false)
  const [showToast, setShowToast] = useState(false)

  return (
    <React.Fragment>
      <Form
        isFormLoading={isFormLoading}
        formData={formData}
        emails_to_send={["bvodola@gmail.com"]}
        setFormValue={(name, value) => {
          setFormData({
            ...formData,
            [name]: value,
          })
        }}
        fields={[
          {
            id: "name",
            type: "text",
            name: "name",
            placeholder: "Nome",
          },
          {
            id: "phone",
            type: "tel",
            name: "phone",
            placeholder: "DDD + Telefone",
          },
        ]}
        handleFormSubmit={async (ev, data) => {
          ev.preventDefault()
          setIsFormLoading(true)

          if (Array.isArray(data.to)) {
            for (let email of data.to) {
              await sendEmail({
                to: email,
                from: "leads@meuprocesso.com.br",
                subject: "Lead K99",
                text: `Nome: ${data.name}, Telefone: ${data.phone}`,
              })
            }
          }

          setIsFormLoading(false)
          setShowToast(true)
          setFormData(initialFormState())
        }}
      />

      {showToast && (
        <Toast
          onRequestClose={() => setShowToast(false)}
          onClose={() => setShowToast(false)}
          message={"Mensagem enviada! Obrigado!"}
          autoHideDuration={3000}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          variant={"success"}
        />
      )}
    </React.Fragment>
  )
}

export default ContactForm
