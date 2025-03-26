<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Sidebar -->
    <nav class="fixed top-0 left-0 h-full w-64 bg-blue-600 text-white shadow-lg z-10">
      <div class="p-4">
        <h1 class="text-2xl font-bold mb-4">Portfolio</h1>
        <ul class="space-y-4">
          <li><a href="#accueil" class="hover:text-blue-300 transition">Accueil</a></li>
          <li><a href="#profil" class="hover:text-blue-300 transition">Profil</a></li>
          <li><a href="#parcours" class="hover:text-blue-300 transition">Parcours</a></li>
          <li><a href="#certifications" class="hover:text-blue-300 transition">Certifications</a></li>
          <li><a href="#stages" class="hover:text-blue-300 transition">Stages</a></li>
          <li><a href="#competences" class="hover:text-blue-300 transition">Compétences</a></li>
          <li><a href="#projets" class="hover:text-blue-300 transition">Projets</a></li>
          <li><a href="#bts-sio" class="hover:text-blue-300 transition">BTS SIO</a></li>
          <li><a href="#veille-tech" class="hover:text-blue-300 transition">Veille Technologique</a></li>
          <li><a href="#contact" class="hover:text-blue-300 transition">Contact</a></li>
          <li><a href="#epreuves" class="hover:text-blue-300 transition">Epreuves BTS</a></li>
        </ul>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="ml-64 p-8 space-y-16">
      <!-- Accueil Section -->
      <section id="accueil" class="fade-in">
        <h2 class="text-3xl font-bold text-blue-600 mb-4">Accueil</h2>
        <p>Bienvenue sur mon portfolio, découvrez mes compétences, mon parcours, et mes projets.</p>
        <!-- Contact Button -->
        <button
          class="mt-4 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          @click="scrollToContact"
        >
          Contactez-moi
        </button>
      </section>

      <!-- Profil Section -->
      <section id="profil" class="fade-in">
        <h2 class="text-3xl font-bold text-blue-600 mb-4">Profil</h2>
        <p>Je suis étudiant depuis 2 ans au Lycée Gustave Flaubert à Rouen (76) en deuxième année de BTS SIO (Services Informatiques aux Organisations), spécialité SLAM (Solutions Logicielles et Applications Métiers). J'ai toujours apprécié le monde du web et donc c'est pour cela que j'ai décidé de me spécialiser dans ce domaine.</p>

        <p> Après l'obtention de mon BTS SIO - BAC+2, je souhaite poursuivre mon cursus en suivant la formation Licence informatique.
          Mon projet professionel se concentre sur la spécialisation en développement web ou cybersécurité, avec pour objectif de devenir un développeur web ou un expert en sécurité informatique au sein d’une entreprise.</p>
      </section>

      <section id="parcours" class="fade-in py-12 px-4 md:px-8  rounded-lg shadow-md">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-3xl font-bold text-blue-600 mb-8 text-center">Parcours</h2>
    
    <!-- Timeline Container -->
    <div class="relative">
      <!-- Timeline Bar -->
      <div class="absolute left-4 md:left-1/2 w-1 h-full bg-blue-200 transform -translate-x-1/2"></div>
      
      <!-- Timeline Items -->
      <div class="space-y-8">
        <!-- BTS SIO -->
        <div class="relative flex w-full">
          <div class="hidden md:flex md:w-1/2"></div>
          <div class="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 absolute left-4 md:left-1/2 transform -translate-x-1/2">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16z"/></svg>
          </div>
          <div class="w-full md:w-1/2 pl-12 md:pl-16">
            <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 class="text-xl font-bold text-blue-700">2023 - À ce jour</h3>
              <h4 class="text-lg font-semibold mb-2">BTS SIO - Option SLAM</h4>
              <p class="text-gray-600">Lycée Gustave Flaubert (76 - Rouen)</p>
              <p class="mt-2">Acquisition de compétences en développement logiciel et web</p>
            </div>
          </div>
        </div>
        
        <!-- Bac Général -->
        <div class="relative flex w-full">
          <div class="w-full md:w-1/2 pr-12 md:pr-16">
            <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 text-right md:text-left">
              <h3 class="text-xl font-bold text-blue-700">2020 - 2023</h3>
              <h4 class="text-lg font-semibold mb-2">BAC Général - Mention Assez Bien</h4>
              <p class="text-gray-600">Lycée Gustave Flaubert (76 - Sotteville-les-Rouen)</p>
              <p class="mt-2">Options : Mathématiques /Physique Chimie / SVT</p>
            </div>
          </div>
          <div class="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 absolute left-4 md:left-1/2 transform -translate-x-1/2">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16z"/></svg>
          </div>
          <div class="hidden md:flex md:w-1/2"></div>
        </div>
        
        <!-- Collège -->
        <div class="relative flex w-full">
          <div class="hidden md:flex md:w-1/2"></div>
          <div class="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 absolute left-4 md:left-1/2 transform -translate-x-1/2">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16z"/></svg>
          </div>
          <div class="w-full md:w-1/2 pl-12 md:pl-16">
            <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 class="text-xl font-bold text-blue-700">2017 - 2020</h3>
              <h4 class="text-lg font-semibold mb-2">Collège</h4>
              <p class="text-gray-600">Collège Louise Michel (76 - St Etienne Du Rouvray)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Centres d'intérêt -->
    <div class="mt-16">
      <h3 class="text-2xl font-bold text-blue-600 mb-6 text-center">Centres d'intérêt</h3>
      
      <div class="grid md:grid-cols-2 gap-6">
        <!-- Voyages -->
        <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div class="flex items-center mb-3">
            <svg class="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"/></svg>
            <h4 class="text-lg font-semibold">Voyages</h4>
          </div>
          <p>Explorer de nouvelles cultures et modes de vie élargit mes horizons et m'offre de nouvelles perspectives.</p>
        </div>
        
        <!-- Langues -->
        <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
          <div class="flex items-center mb-3">
            <svg class="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 6h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/></svg>
            <h4 class="text-lg font-semibold">Langues</h4>
          </div>
          <p class="mb-2">•Obtention du cambdrige certificate en anglais niveau B2 (2017)</p>
          <p>• Apprentissage du japonais (2024 - Présent)</p>
        </div>
      </div>
    </div>
  </div>
</section>

      <section id="certifications" class="fade-in">
  <h2 class="text-3xl font-bold text-blue-600 mb-6">Certifications et Diplômes</h2>
  
  <!-- Atelier RGPD -->
  <h3 class="text-xl font-bold mt-8 mb-4">Certifications Atelier RGPD</h3>
  <div class="grid grid-cols-3 gap-4">
    <!-- Module 1 -->
    <div class="text-center">
      <a href="/pdf/RGPD_module_1.pdf" target="_blank" class="block mb-2">
        <img src="/pdf/atelier.jpg" alt="Certification RGPD Module 1" class="w-32 h-32 object-cover mx-auto rounded">
      </a>
      <a href="/pdf/RGPD_module_1.pdf" download class="text-blue-600 hover:text-blue-800">Télécharger</a>
    </div>

    <!-- Module 2 -->
    <div class="text-center">
      <a href="/pdf/RGPD_module_2.pdf" target="_blank" class="block mb-2">
        <img src="/pdf/atelier.jpg" alt="Certification RGPD Module 2" class="w-32 h-32 object-cover mx-auto rounded">
      </a>
      <a href="/pdf/RGPD_module_2.pdf" download class="text-blue-600 hover:text-blue-800">Télécharger</a>
    </div>

    <!-- Module 3 -->
    <div class="text-center">
      <a href="/pdf/RGPD_module_3.pdf" target="_blank" class="block mb-2">
        <img src="/pdf/atelier.jpg" alt="Certification RGPD Module 3" class="w-32 h-32 object-cover mx-auto rounded">
      </a>
      <a href="/pdf/RGPD_module_3.pdf" download class="text-blue-600 hover:text-blue-800">Télécharger</a>
    </div>

    <!-- Module 4 -->
    <div class="text-center">
      <a href="/pdf/RGPD_module_4.pdf" target="_blank" class="block mb-2">
        <img src="/pdf/atelier.jpg" alt="Certification RGPD Module 4" class="w-32 h-32 object-cover mx-auto rounded">
      </a>
      <a href="/pdf/RGPD_module_4.pdf" download class="text-blue-600 hover:text-blue-800">Télécharger</a>
    </div>

    <!-- Module 5 -->
    <div class="text-center">
      <a href="/pdf/RGPD_module_5.pdf" target="_blank" class="block mb-2">
        <img src="/pdf/atelier.jpg" alt="Certification RGPD Module 5" class="w-32 h-32 object-cover mx-auto rounded">
      </a>
      <a href="/pdf/RGPD_module_5.pdf" download class="text-blue-600 hover:text-blue-800">Télécharger</a>
    </div>
  </div>

  <!-- MOOC ANSSI -->
  <h3 class="text-xl font-bold mt-8 mb-4">Certifications MOOC ANSSI</h3>
  <div class="grid grid-cols-3 gap-4">
    <div class="text-center">
      <a href="/pdf/certif_secnum_ANSSI.pdf" target="_blank" class="block mb-2">
        <img src="/pdf/secnum.jpeg" alt="Certification MOOC ANSSI" class="w-32 h-32 object-cover mx-auto rounded">
      </a>
      <a href="/pdf/certif_secnum_ANSSI.pdf" download class="text-blue-600 hover:text-blue-800">Télécharger</a>
    </div>
  </div>
</section>

<section id="stages" class="fade-in py-12 px-4 md:px-8 bg-white rounded-lg shadow-md">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-3xl font-bold text-blue-600 mb-8 text-center">Stages</h2>
    
    <!-- Timeline Container -->
    <div class="relative">
      <!-- Timeline Bar -->
      <div class="absolute left-4 md:left-1/2 w-1 h-full bg-blue-200 transform -translate-x-1/2"></div>
      
      <!-- Timeline Items -->
      <div class="space-y-12">
        <!-- Stage MJ GESTION 2025 -->
        <div class="relative flex w-full">
          <div class="hidden md:flex md:w-1/2"></div>
          <div class="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 absolute left-4 md:left-1/2 transform -translate-x-1/2">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16z"/></svg>
          </div>
          <div class="w-full md:w-1/2 pl-12 md:pl-16">
            <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <div class="flex justify-between items-start">
                <h3 class="text-xl font-bold text-blue-700">2025 (5 semaines)</h3>
                <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">2ème année</span>
              </div>
              <h4 class="text-lg font-semibold mb-2 mt-1">MJ GESTION - Développement</h4>
              
              <div class="space-y-2 text-gray-600">
                <div class="flex items-start">
                  <svg class="w-4 h-4 mt-1 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>
                  <div>
                    <p class="font-medium">Siège : 12 Rond Point des Champs Elysées</p>
                    <p class="text-sm">39 Place de la République 76500 ELBEUF</p>
                  </div>
                </div>
                
                <div class="flex items-center">
                  <svg class="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.41004-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"/></svg>
                  <a href="https://www.mjgestion.fr/" target="_blank" class="text-blue-600 hover:underline">www.mjgestion.fr</a>
                </div>
              </div>
              
              <p class="mt-3">Stage BTS SIO de 2ème année au sein du service de développement.</p>
            </div>
          </div>
        </div>
        
        <!-- Stage Saint Gobain 2024 -->
        <div class="relative flex w-full">
          <div class="w-full md:w-1/2 pr-12 md:pr-16">
            <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 text-right md:text-left">
              <div class="flex justify-between items-start">
                <h3 class="text-xl font-bold text-blue-700">2024 (5 semaines)</h3>
                <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">1ère année</span>
              </div>
              <h4 class="text-lg font-semibold mb-2 mt-1">Saint Gobain - Equipe SI</h4>
              
              <div class="space-y-2 text-gray-600">
                <div class="flex items-start">
                  <svg class="w-4 h-4 mt-1 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>
                  <div>
                    <p class="text-sm">12 Pl. de l'Iris, 92400 Courbevoie</p>
                  </div>
                </div>
                
                <div class="flex items-center">
                  <svg class="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"/></svg>
                  <a href="https://www.saint-gobain.com/" target="_blank" class="text-blue-600 hover:underline">www.saint-gobain.com</a>
                </div>
              </div>
              
              <p class="mt-3">Stage BTS SIO de 1ère année au sein du service de dématérialisation de documents.</p>
            </div>
          </div>
          <div class="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 absolute left-4 md:left-1/2 transform -translate-x-1/2">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16z"/></svg>
          </div>
          <div class="hidden md:flex md:w-1/2"></div>
        </div>
        
        <!-- Stage Mairie 2019 -->
        <div class="relative flex w-full">
          <div class="hidden md:flex md:w-1/2"></div>
          <div class="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 absolute left-4 md:left-1/2 transform -translate-x-1/2">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16z"/></svg>
          </div>
          <div class="w-full md:w-1/2 pl-12 md:pl-16">
            <div class="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 class="text-xl font-bold text-blue-700">2019 (2 semaines)</h3>
              <h4 class="text-lg font-semibold mb-2">Mairie de St Etienne -Rédaction du journal</h4>
              
              <div class="space-y-2 text-gray-600">
                <div class="flex items-center">
                  <svg class="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/></svg>
                  <p>8 Place de la libération, 76 St Etienne Du Rouvray</p>
                </div>
                
                <div class="flex items-center">
                  <svg class="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"/></svg>
                  <a href="https://www.saintetiennedurouvray.fr" target="_blank" class="text-blue-600 hover:underline">www.saintetiennedurouvray.fr</a>
                </div>
              </div>
              
              <p class="mt-3">Stage d'observation de deux semaines au sein de l'équipe de rédaction du journal de la mairie.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <section id="competences" class="fade-in">
        <h2 class="text-3xl font-bold text-blue-600 mb-4">Compétences</h2>
        <p>
          <strong>Techniques :</strong> HTML, CSS, JavaScript, Vue.js, PHP<br />
          <strong>Outils :</strong> GitHub, Tailwind CSS, Postman
        </p>
      </section>

      <section id="projets" class="fade-in">
        <h2 class="text-3xl font-bold text-blue-600 mb-4">Projets</h2>
        <p>Projets réalisés : Easy Bee, Portfolio en Nuxt.js, application de gestion des contacts en Java.</p>
      </section>

      <section id="bts-sio" class="fade-in py-12 px-4 md:px-8 :bg-gray-800 rounded-lg shadow-md">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-3xl font-bold text-blue-600 :text-blue-400 mb-6 text-center">BTS SIO</h2>
    <div class="space-y-6 text-gray-700 :text-gray-300">
      <p class="text-lg leading-relaxed">
        Le <strong class="text-blue-600 :text-blue-400">BTS SIO</strong> (Brevet de Technicien Supérieur en Services Informatiques aux Organisations) est une formation Bac+2 axée sur l'informatique en entreprise.
      </p>
      
      <div class="grid md:grid-cols-2 gap-6 mt-8">
        <!-- Option SISR -->
        <div class="bg-blue-50 :bg-gray-700 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 class="text-xl font-semibold text-blue-700 :text-blue-300 mb-3">SISR</h3>
          <p class="text-gray-600 :text-gray-300">
            <strong>Solutions d'Infrastructure, Systèmes et Réseaux</strong> : Gestion des réseaux, serveurs et infrastructures informatiques.
          </p>
        </div>
        
        <!-- Option SLAM -->
        <div class="bg-blue-50 :bg-gray-700 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 class="text-xl font-semibold text-blue-700 :text-blue-300 mb-3">SLAM</h3>
          <p class="text-gray-600 :text-gray-300">
            <strong>Solutions Logicielles et Applications Métiers</strong> : Développement d'applications et logiciels métiers.
          </p>
        </div>
      </div>
      
      <!-- Cybersécurité -->
      <div class="mt-10 bg-gray-50 :bg-gray-700 p-6 rounded-lg">
        <h3 class="text-2xl font-bold text-blue-600 :text-blue-400 mb-4">Cybersécurité</h3>
        <p class="mb-3">
          Un module dédié à la <strong>cybersécurité</strong> est intégré au programme :
        </p>
        <ul class="list-disc pl-6 space-y-2">
          <li>Sécurisation des infrastructures et données</li>
          <li>Gestion des identités numériques</li>
          <li>Conformité légale (RGPD, etc.)</li>
        </ul>
      </div>
    </div>
  </div>
</section>

      <section id="veille-tech" class="fade-in">
        <h2 class="text-3xl font-bold text-blue-600 mb-4">Veille Technologique</h2>
        <p>Ma veille porte sur les dernières tendances en développement web, comme Nuxt.js et Tailwind CSS.</p>
      </section>
      
      <section id="epreuves" class="fade-in">
        <h2 class="text-3xl font-bold text-blue-600 mb-4">Epreuves du BTS SIO</h2>
        <p>Ma veille porte sur les dernières tendances en développement web, comme Nuxt.js et Tailwind CSS.</p>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="fade-in">
        <h2 class="text-3xl font-bold text-blue-600 mb-4">Contact</h2>
        <p>Si vous avez des questions ou des opportunités à me proposer, vous pouvez me contacter via le formulaire ci-dessous :</p>

        <form class="mt-6 space-y-4" @submit.prevent="submitForm">
          <div>
            <label for="name" class="block text-lg">Nom</label>
            <input
              type="text"
              id="name"
              v-model="form.name"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <div>
            <label for="email" class="block text-lg">Email</label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>

          <div>
            <label for="message" class="block text-lg">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              rows="5"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            class="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Envoyer
          </button>
        </form>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    scrollToContact() {
      const contactSection = document.querySelector("#contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    },
    submitForm() {
      // Logique de soumission du formulaire
      console.log("Formulaire soumis :", this.form);
      alert("Votre message a bien été envoyé !");
      // Réinitialiser le formulaire après soumission
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
};
</script>

<style>
/* Animations personnalisées */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
