import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: '',
    resultat: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ ...formData, resultat: "Votre message a été envoyé !" });
    // TODO : appeler une API backend avec fetch ou axios ici
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-8 overflow-hidden bg-white">
      <div className="flex w-full max-w-5xl overflow-hidden bg-white shadow-lg rounded-3xl">
        
        {/* Partie gauche */}
        <div className="items-center justify-center hidden w-1/2 md:flex"> 
          <img 
            src="/maquette_3.png" 
            alt="Contact visuel" 
            className="h-[500px] w-[500px] object-cover"
          />
        </div>


        {/* Partie droite */}
        <div className="flex flex-col items-center justify-center w-full h-full p-8 md:w-1/2">
        <div className="w-full max-w-md">
            <h2 className= "mb-2 text-2xl font-bold text-blue-600 font-ubuntu">Nous contacter</h2>
            <p className="text-[#8BC7CE] mb-4 text-[13px]">Notre équipe est à votre disposition pour vous offrir un service de qualité</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input 
                type="text" 
                name="nom" 
                placeholder="Entrez votre nom"
                value={formData.nom}
                onChange={handleChange}
                className="border border-gray-300 text-[12px] rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
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
              <textarea 
                name="resultat" 
                value={formData.resultat}
                readOnly
                placeholder="Le résultat est affiché ici."
                rows="5"
                className="border text-[12px] border-gray-200 bg-gray-50 rounded w-full p-2"
              />

              <button 
                type="submit"
                className="w-full cursor-pointer text-[12px] bg-blue-600 text-white font-bold py-2 rounded hover:bg-cyan-500 transition"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactForm;
