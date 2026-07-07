function FormComponent() {
  return (
    <form>
      <h2>Student Form</h2>

      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />
      <br />
      <br />

      <label htmlFor="registrationNumber">Registration Number:</label>
      <input type="text" id="registrationNumber" name="registrationNumber" />
      <br />
      <br />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />
      <br />
      <br />

      <label htmlFor="city">City Name:</label>
      <input type="text" id="city" name="city" />
      <br />
      <br />

      <button type="submit">Submit</button>
    </form>
  )
}

export default FormComponent
