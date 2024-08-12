import React from 'react';
import '../index.css';

const HeaderComponent = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="site-title">Teknolojik Yemekler</h1>
        <nav className="breadcrumb">
          <a href="#">Anasayfa</a> &gt; <a href="#">Seçenekler</a> &gt; <span>Sipariş Oluştur</span>
        </nav>
      </div>
    </header>
  );
};

export default HeaderComponent;