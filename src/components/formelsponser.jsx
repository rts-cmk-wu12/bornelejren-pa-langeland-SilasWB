import React, { useState } from "react";
import "../style/resets.scss";
import "../style/formelsponser.scss";

function FormelSponser() {
  const [formData, setFormData] = useState({
    supportType: "",
    company: "",
    email: "",
    address: "",
    phone: "",
    amount: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    alert("Tak for din registrering som sponsor!");
    setFormData({
      supportType: "",
      company: "",
      email: "",
      address: "",
      phone: "",
      amount: "",
    });
  };

  return (
    <main className="sponsor">
      <h1>Bliv sponsor</h1>
      <p>
        Udfyld formularen nedenfor for at støtte Børnelejren på Langeland.
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Støttetype
          <select name="supportType" value={formData.supportType} onChange={handleChange} required>
            <option value="">Vælg type</option>
            <option value="Engangsstøtte">Engangsstøtte</option>
            <option value="Månedlig støtte">Månedlig støtte</option>
            <option value="Årlig støtte">Årlig støtte</option>
          </select>
        </label>

        <label>
          Firmanavn
          <input type="text" name="company" value={formData.company} onChange={handleChange} required />
        </label>

        <label>
          E-mail
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          Adresse
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>

        <label>
          Telefon
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>

        <label>
          Beløb (DKK)
          <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
        </label>

        <button type="submit" className="button">Send registrering</button>
      </form>
    </main>
  );
}

export default FormelSponser;
