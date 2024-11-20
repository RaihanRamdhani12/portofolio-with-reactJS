import React from 'react';
import Image1 from '../assets/Perpusdigital.png';
import Image2 from '../assets/floram.png';
import Image3 from '../assets/biona.png';

const Project = () => {
  return (
    <section id="projects" className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-5 mt-6">
          My Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            key="1"
            className="bg-white hover:shadow-xl shadow-blue-500 shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={Image1}
              alt="PERPUSTAKAAN DIGITAL"
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                PERPUSTAKAAN DIGITAL
              </h3>
              <p className="text-gray-600 mt-2">
                Website perpustakaan digital dimana peminjaman buku akan lebih
                teratur dengan sistem pre order yang memungkinkan user dapat
                mengetahui masih ada atau tidaknya stok buku, mempermudah
                pengurus perpustakaan dalam mengelola data peminjaman dan
                pengembalian
              </p>
              <a
                href="https://github.com/RaihanRamdhani12/perpustakaan_digital"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-4 block"
              >
                View Project
              </a>
            </div>
          </div>
          <div
            key="2"
            className="bg-white  shadow-orange-500 shadow-lg hover:shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={Image2}
              alt="FRUIT E-COMMERCE"
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">FLORAM</h3>
              <p className="text-gray-600 mt-2 mb-9">
                Website e-commerce toko buah menggunakan bahasa pemrograman PHP,
                dengan fitur "Raja Ongkir" yang memungkinkan pengguna dapat
                langsung menghitung jumlah yang di beli dan ongkir yang di dapat
                dari semua kota di Indonesia
              </p>

              <a
                href="https://github.com/RaihanRamdhani12/Floram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-4 block"
              >
                View Project
              </a>
            </div>
          </div>
          <div
            key="3"
            className="bg-white hover:shadow-xl shadow-blue-900 shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={Image3}
              alt="PROJEK IOT RSB"
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                RSB "Recycle Sensor Bank"
              </h3>
              <p className="text-gray-600 mt-2">
                Project IOT (Internet Of Thinking) ini merupakan suatu project
                Bootcamp yang diadakan dari Skillvul Melalui Samsung Inovation
                Campus, Project ini bertema tempat sampah yang dapat
                menghasilkan saldo e-wallet ketika berat sampah memenuhi jumlah
                yang sudah di atur.
              </p>
              <a
                href="https://www.youtube.com/watch?v=-V8mIAjchXc&t=233s"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline mt-4 block"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
