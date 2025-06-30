import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { test, expect } from 'vitest';
import ReviewForm from '../ReviewForm';  // Chemin vers ReviewForm

test('affiche les champs du formulaire', () => {
  render(<ReviewForm />);  // Utiliser ReviewForm ici aussi
  expect(screen.getByPlaceholderText(/Entrez votre nom/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Entrez votre email/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Entrez votre message ou avis/i)).toBeInTheDocument();
});

test('formulaire affiche message de chargement après soumission', async () => {
  render(<ReviewForm />);  // Idem ici

  // Remplissage des champs obligatoires
  fireEvent.change(screen.getByPlaceholderText(/Entrez votre nom/i), { target: { value: 'Tantely' } });
  fireEvent.change(screen.getByPlaceholderText(/Entrez votre email/i), { target: { value: 'tantely@example.com' } });
  fireEvent.change(screen.getByPlaceholderText(/Entrez votre message ou avis/i), { target: { value: 'Super service!' } });

  const button = screen.getByText(/Envoyer/i);
  fireEvent.click(button);

  // Attendre que le texte "Analyse en cours" apparaisse (avec les points de chargement)
  await waitFor(() => {
    expect(screen.getByText((content) => content.includes('Analyse en cours'))).toBeInTheDocument();
  });
});
