'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneCountry: string;
  phoneNumber: string;
  message: string;
}

function ContactFormSection(): React.ReactElement {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneCountry: 'US',
    phoneNumber: '',
    message: ''
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-wrap -mx-4 mb-8 items-center">
        <div className="w-full md:w-1/2 px-4 mb-4">
          <label className="block mb-1 text-sm font-medium" htmlFor="firstName">Nome</label>
          <input
            className="py-2 px-4 h-11 w-full text-gray-500 placeholder-gray-500 bg-gray-50 bg-opacity-40 border border-gray-200 focus:border-blue-500 rounded-lg outline-none ring ring-transparent focus:ring-blue-500"
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Nome"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full md:w-1/2 px-4 mb-4">
          <label className="block mb-1 text-sm font-medium" htmlFor="lastName">Sobrenome</label>
          <input
            className="py-2 px-4 h-11 w-full text-gray-600 placeholder-gray-600 bg-gray-50 bg-opacity-40 border border-gray-200 focus:border-blue-500 rounded-lg outline-none ring ring-transparent focus:ring-blue-500"
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Sobrenome"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full md:w-1/2 px-4 mb-4">
          <label className="block mb-1 text-sm font-medium" htmlFor="email">Email</label>
          <input
            className="py-2 px-4 h-11 w-full text-gray-600 placeholder-gray-600 bg-gray-50 bg-opacity-40 border border-gray-200 focus:border-blue-500 rounded-lg outline-none ring ring-transparent focus:ring-blue-500"
            type="email"
            name="email"
            id="email"
            placeholder="john@email.com"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="w-full md:w-1/2 px-4 mb-4">
          <label className="block mb-1 text-sm font-medium" htmlFor="phoneNumber">Telefone</label>
          <div className="flex h-11 bg-gray-50 bg-opacity-40 border border-gray-200 rounded-md">
            <div className="relative">
              <select
                className="relative z-10 pl-3 pr-6 w-full h-full bg-transparent focus:outline-none appearance-none cursor-pointer"
                name="phoneCountry"
                id="phoneCountry"
                value={formData.phoneCountry}
                onChange={handleInputChange}
              >
                <option value="BR">BR</option>
                <option value="US">US</option>
              </select>
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="#6C7F73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </div>
            <input
              className="py-2 pl-2 pr-4 h-full text-gray-600 placeholder-gray-600 border-0 bg-transparent focus:outline-none"
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="+55 11 95262013607"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="w-full px-4">
          <label className="block mb-1 text-sm font-medium" htmlFor="message">Mensagem</label>
          <textarea
            className="block py-2 px-4 w-full h-44 text-gray-600 placeholder-gray-600 bg-gray-50 bg-opacity-40 border border-gray-200 focus:border-blue-500 rounded-lg outline-none ring ring-transparent focus:ring-blue-500 resize-none"
            name="message"
            id="message"
            placeholder="Digite sua mensagem aqui..."
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </div>
      </div>
      <button className="group relative flex items-center justify-center px-5 h-12 w-full mb-8 text-base font-semibold text-white bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg transition-all duration-300" type="submit">
        <div className="absolute top-0 left-0 w-full h-full rounded-lg ring ring-green-300 animate-pulse group-hover:ring-0 transition duration-300"></div>
        <span>Submit</span>
      </button>
      <p className="text-sm text-gray-600">
        <span className="mr-1">Nós processaremos suas informações de acordo com nossa</span>
        <a className="inline-block font-semibold text-blue-600 hover:text-blue-500" href="#">Política de privacidade</a>
      </p>
    </form>
  );
}

export default ContactFormSection;