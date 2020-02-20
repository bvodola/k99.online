import axios from "axios"

export const sendEmail = async email => {
  try {
    const { from, to, subject, text } = email
    // const BACKEND_URL = "https://www.leadmaster.com.br"
    const BACKEND_URL = "http://localhost:2000"
    const res = await axios.post(BACKEND_URL + "/api/mail/send/", {
      from,
      to,
      subject,
      text,
    })
    console.log(res)
  } catch (err) {
    console.error(err)
  }
}

/**
 * Passing this as a parameter and having the form inside this.state.form will
 * auto-erase all form data
 * @param {object} scope
 */
export const emptyForm = scope => {
  // Empty form state
  scope.setState(state => {
    let emptyForm = {}
    Object.keys(scope.state.form).forEach(key => {
      emptyForm[key] = ""
    })
    state.isFormLoading = false
    state.form = emptyForm
    return state
  })
}

export const capitalize = s => {
  if (typeof s !== "string") return ""
  return s.charAt(0).toUpperCase() + s.slice(1)
}
