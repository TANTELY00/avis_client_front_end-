import { useState, useEffect } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({ nom: '', email: '', message: '' });
  const [errorNom, setErrorNom] = useState('');
  const [resultatHTML, setResultatHTML] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingDots, setLoadingDots] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "nom") {
      const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ' -]*$/;
      if (!regex.test(value)) {
        setErrorNom("Le nom ne doit contenir que des lettres.");
        return;
      } else {
        setErrorNom('');
      }
    }
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (!isLoading) {
      setLoadingDots('');
      return;
    }
    const interval = setInterval(() => {
      setLoadingDots((prev) => (prev.length < 3 ? prev + '.' : ''));
    }, 500);
    return () => clearInterval(interval);
  }, [isLoading]);

  const typeText = (htmlText) => {
    let index = 0;
    setResultatHTML('');
    const interval = setInterval(() => {
      setResultatHTML((prev) => prev + htmlText.charAt(index));
      index++;
      if (index >= htmlText.length) clearInterval(interval);
    }, 20);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (errorNom) {
      alert("Veuillez corriger le champ Nom avant d'envoyer.");
      return;
    }
    setIsLoading(true);
    setResultatHTML('');
    try {
      const payload = {
        client_name: formData.nom,
        client_email: formData.email,
        text: formData.message,
      };
      const response = await axios.post('http://localhost:8000/reviews/', payload);
      const res = response.data;
      console.log("Suggestion reçue:", res.suggestion);
      const suggestionText = res.suggestion?.trim();

      const resultatTexte = 
        `  Hi <strong>${formData.nom}</strong>, this is your response :<br><br>` +
        `<strong>Sentiment :</strong> ${res.sentiment}<br>` +
        `<strong>Thème :</strong> ${res.theme}<br>` +
        `<strong>Suggestion :</strong> ${suggestionText}`;

      typeText(resultatTexte);
    } catch (error) {
      console.error('Erreur lors de l’envoi:', error);
      typeText('<p> Une erreur est survenue lors de l’envoi.</p>');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-8 overflow-hidden bg-white">
      <div className="flex w-full max-w-5xl overflow-hidden bg-white shadow-lg rounded-3xl">
        {/* Partie gauche */}
        <div className="items-center justify-center hidden w-1/2 md:flex"> 
          <img src="/maquette_3.png" alt="Contact visuel" className="h-[500px] w-[500px] object-cover" />
        </div>
        {/* Partie droite */}
        <div className="flex flex-col items-center justify-center w-full h-full p-8 md:w-1/2">
          <div className="w-full max-w-md">
            <h2 className="mb-2 text-[20px] font-bold text-blue-600">Nous sommes à votre écoute</h2>
            <p className="text-[#8BC7CE] mb-4 text-[13px]">Bénéficiez d’un accompagnement de qualité sur notre plateforme d’analyse d’avis clients.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="nom"
                placeholder="Entrez votre nom"
                value={formData.nom}
                onChange={handleChange}
                className={`border text-[12px] rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${errorNom ? 'border-red-600' : 'border-gray-300'}`}
                required
              />
              {errorNom && <p className="text-red-600 text-xs mt-1">{errorNom}</p>}
              <input
                type="email"
                name="email"
                placeholder="Entrez votre email"
                value={formData.email}
                onChange={handleChange}
                className="border text-[12px] border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
              <textarea
                name="message"
                placeholder="Entrez votre message ou avis"
                value={formData.message}
                onChange={handleChange}
                rows="2"
                className="border text-[12px] border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
              <div className="relative">
                {!resultatHTML && !isLoading && (
                  <span className="absolute top-2 left-2 text-gray-400 select-none pointer-events-none text-[12px]">
                    Votre réponse est affichée ici.
                  </span>
                )}
                <div
                  className="border text-[12px] border-gray-200 bg-gray-50 rounded w-full p-2 h-28 overflow-y-auto whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: resultatHTML }}
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full cursor-pointer text-[12px] bg-blue-600 text-white font-bold py-2 rounded transition flex items-center justify-center gap-2 ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-cyan-500'}`}
              >
                {isLoading && (
                  <svg className="w-5 h-5 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                )}
                {isLoading ? `Analyse en cours${loadingDots}` : 'Envoyer'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
