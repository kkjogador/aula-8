
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Smartphone } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-grow bg-gradient-to-r from-sky-100 to-blue-200 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-medium text-gray-700 mb-8">Entrar</h1>
          
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/2">
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome ou Email <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-800"
                  placeholder="Nome/Email"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Senha <span className="text-red-500">*</span>
                </label>
                <Input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-800"
                  placeholder="Email@email.com"
                />
              </div>
              
              <Button className="w-full bg-blue-800 text-white py-3 rounded-md hover:bg-blue-900 transition-colors mb-4">
                Entrar
              </Button>
              
              <div className="flex justify-between text-sm">
                <Link to="/esqueci-senha" className="text-gray-500 hover:text-blue-800">
                  Esqueci a senha
                </Link>
                <div className="text-gray-500">
                  Ainda não tem conta?
                </div>
              </div>
              
              <div className="mt-6 relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-gradient-to-r from-sky-100 to-blue-200 text-gray-500">ou</span>
                </div>
              </div>
              
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#" className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-50 bg-white">
                  <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>Entrar com Google</span>
                </a>
                <a href="#" className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-50 bg-white">
                  <Facebook className="h-4 w-4" />
                  <span>Entrar com Facebook</span>
                </a>
              </div>
              
              <div className="mt-4">
                <a href="#" className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-50 bg-white">
                  <Smartphone className="h-4 w-4" />
                  <span>Entrar com telefone</span>
                </a>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="relative overflow-hidden rounded-lg h-[500px]">
                <img 
                  src="/lovable-uploads/294f5448-aa50-475d-a26d-8f5cb2dc13d7.png" 
                  alt="Delivery person with packages" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex flex-col justify-end p-8">
                  <h2 className="text-white text-3xl font-bold">
                    Entregamos na<br />
                    <span className="text-blue-300">sua casa!</span>
                  </h2>
                  <div className="flex mt-4">
                    <div className="w-2 h-2 rounded-full bg-white opacity-50 mr-2"></div>
                    <div className="w-2 h-2 rounded-full bg-white mr-2"></div>
                    <div className="w-2 h-2 rounded-full bg-white opacity-50"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Login;
