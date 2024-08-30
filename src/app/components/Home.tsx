'use client'; 

import React from 'react';
import { Container, Typography, Box, Button, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Form from './Form'; // Importa o componente Form

const Home: React.FC = () => {
  return (
    <Container maxWidth="md" style={{ paddingTop: '20px', textAlign: 'center' }}>
      <Typography variant="h3" gutterBottom>Dioney Froes</Typography>
      <Typography variant="h5" gutterBottom>Desenvolvedor Fullstack</Typography>
      
      <Typography variant="h6" color="textSecondary" gutterBottom>
        Desenvolvimento de Aplicações Web, Aplicativos Android e APIs
      </Typography>

      <Typography variant="h5" style={{ marginTop: '40px' }} gutterBottom>
        Tem um projeto em mente? Eu ajudarei a transformá-lo em realidade, Vamos conversar!
      </Typography>
      
      <Form /> {/* Renderiza o componente Form */}

      <Container maxWidth="md" style={{ paddingTop: '20px', textAlign: 'center' }}>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          Converse comigo diretamente por: 
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button startIcon={<EmailIcon />} href="mailto:dioney.froes@hotmail.com" variant="outlined" color="primary">
            dioney.froes@hotmail.com
          </Button>
          <Button startIcon={<WhatsAppIcon />} href="https://wa.me/5561994482809" variant="outlined" color="success" sx={{ ml: 2 }}>
            WhatsApp
          </Button>
        </Box>
      </Container>

      <Box sx={{ mt: 4 }}>
        <Link href="https://www.linkedin.com/in/dioney-froes-januario-b0b819162/?originalSubdomain=br" target="_blank" rel="noopener">
          <Button startIcon={<LinkedInIcon />} variant="outlined">
            LinkedIn
          </Button>
        </Link>
        <Link href="https://github.com/dioneyfroes-coder" target="_blank" rel="noopener">
          <Button startIcon={<GitHubIcon />} variant="outlined" sx={{ ml: 2 }}>
            GitHub
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Home;
