import { CSSProperties } from 'react';

export const header: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: 'linear-gradient(to right, #34495e, #2c3e50)',
  padding: '1rem', 
  borderBottom: '1px solid #ecf0f1', 
  boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.1)', 
};

export const logo: CSSProperties = {
  fontSize: '1.5rem',
  color: '#ecf0f1', 
  textDecoration: 'none',
};

export const menu: CSSProperties = {
  background: '#2c3e50', 
  border: 'none', 
};

export const menuItem: CSSProperties = {
  margin: 0,
};

export const link: CSSProperties = {
  color: '#ecf0f1', 
  textDecoration: 'none',
};