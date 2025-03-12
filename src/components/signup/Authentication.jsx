import React from "react";
import { Button } from "../ui/button";
import { Mail, Apple, Facebook } from "lucide-react";
import { FaGoogle } from "react-icons/fa";

const Authentication = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-yellow-50 flex flex-col min-h-screen mx-auto py-8 px-8">
        <div className="mt-10 mb-12 text-center">
          <img
            src="src/assets/sections/hero/Logo.png"
            alt="Project Glow"
            className="h-8 mx-auto"
          />
        </div>

        <div className="text-center mb-14">
          <h1 className="text-3xl font-semibold mb-4 text-gray-800">
            Create an account
          </h1>
          <p className="text-base text-gray-600 px-4">
            Unlock the Secrets of Your Skin with science-backed analysis
          </p>
        </div>

        <div className="space-y-4 mb-4">
          <Button className="w-full h-14 rounded-full font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors">
            <Facebook size={20} className="mr-3" /> Continue with Facebook
          </Button>

          <Button className="w-full h-14 rounded-full font-medium bg-gray-200 text-gray-800 border border-gray-300 hover:bg-gray-300 transition-colors">
            <FaGoogle size={20} className="mr-3" /> Continue with Google
          </Button>

          <Button className="w-full h-14 rounded-full font-medium bg-black text-white hover:bg-gray-900 transition-colors">
            <Apple size={20} className="mr-3" /> Continue with Apple
          </Button>
        </div>

        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <div className="px-4 text-gray-500 text-sm">OR</div>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <div className="mb-28">
          <Button className="w-full h-14 rounded-full font-medium bg-gray-800 text-white hover:bg-gray-700 transition-colors">
            <Mail size={20} className="mr-3" /> Continue with Email
          </Button>
        </div>

        <div className="mt-auto text-center">
          <p className="text-sm text-gray-600">
            By continuing, you agree to Project Skin Glow's
          </p>
          <p className="text-sm text-gray-800">
            <a href="/terms" className="underline hover:text-gray-600">
              Terms
            </a>
            {" • "}
            <a href="/privacy" className="underline hover:text-gray-600">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
