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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/sponsors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Tak for din registrering som sponsor!");
      setFormData({
        supportType: "",
        company: "",
        email: "",
        address: "",
        phone: "",
        amount: "",
      });
    }
  };

  return (
    <section className="sponsor">
      <h1>Bliv sponsor</h1>
      <p>
        Udfyld formularen nedenfor for at støtte Børnelejren på Langeland.
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Støttetype
          <select
            name="supportType"
            value={formData.supportType}
            onChange={handleChange}
            required
          >
            <option value="">Vælg type</option>
            <option value="Børnesponsorat">Børnesponsorat</option>
            <option value="Lejrsponsorat">Lejrsponsorat</option>
            <option value="Støtte til foreningen">Støtte til foreningen</option>
          </select>
        </label>

        <label>
          Firmanavn
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          E-mail
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Adresse
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Telefon
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Beløb (DKK)
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className="button">
          Send registrering
        </button>
      </form>
    </section>
  );
}

export default FormelSponser;
