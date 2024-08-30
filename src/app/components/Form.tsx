"use client";

import React, { useState } from 'react';
import { TextField, Button, CircularProgress } from '@mui/material';

const Form: React.FC = () => {
  const [formValues, setFormValues] = useState({ nome: '', email: '', mensagem: '' });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        setFormValues({ nome: '', email: '', mensagem: '' }); // Limpar o formulário
        alert('Mensagem enviada com sucesso!');
      } else {
        alert('Ocorreu um erro ao enviar sua mensagem.');
      }
    } catch (error) {
      alert('Erro na requisição.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <TextField
        label="Nome"
        name="nome"
        value={formValues.nome}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Email"
        name="email"
        value={formValues.email}
        onChange={handleInputChange}
        type="email"
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Mensagem"
        name="mensagem"
        value={formValues.mensagem}
        onChange={handleInputChange}
        fullWidth
        margin="normal"
        multiline
        rows={4}
        required
      />
      <Button type="submit" variant="contained" color="primary" disabled={loading}>
        {loading ? <CircularProgress size={24} /> : 'Enviar'}
      </Button>
    </form>
  );
};

export default Form;
