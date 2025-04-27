<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Sidebar -->
    <nav class="fixed top-0 left-0 h-full w-64 bg-blue-600 text-white shadow-lg z-10">
      <div class="p-4">
        <h1 class="text-2xl font-bold mb-4">Portfolio</h1>
        <ul class="space-y-4">
          <li><button @click="handleNav('/')" class="hover:text-blue-300 w-full text-left">Accueil</button></li>
          <li><button @click="handleNav('#profil')" class="hover:text-blue-300 w-full text-left">Profil</button></li>
          <li><button @click="handleNav('#parcours')" class="hover:text-blue-300 w-full text-left">Parcours</button></li>
          <li><button @click="handleNav('#certifications')" class="hover:text-blue-300 w-full text-left">Certifications</button></li>
          <li><button @click="handleNav('#stages')" class="hover:text-blue-300 w-full text-left">Stages</button></li>
          <li><button @click="handleNav('#competences')" class="hover:text-blue-300 w-full text-left">Compétences</button></li>
          <li><button @click="handleNav('#projets')" class="hover:text-blue-300 w-full text-left">Projets</button></li>
          <li><button @click="handleNav('#bts-sio')" class="hover:text-blue-300 w-full text-left">BTS SIO</button></li>
          <li><button @click="handleNav('#veille-tech')" class="hover:text-blue-300 w-full text-left">Veille Tech</button></li>
          <li><button @click="handleNav('#contact')" class="hover:text-blue-300 w-full text-left">Contact</button></li>
        </ul>
      </div>
      <div>
    <NuxtPage />
  </div>
    </nav>

    <!-- Main Content -->
    <main class="ml-64 p-8 space-y-16">
      <!-- Accueil Section -->
      <section id="accueil" class="fade-in">
        <h2 class="text-3xl font-bold text-blue-600 mb-4">Accueil</h2>
        <p>Bienvenue sur mon portfolio, découvrez mes compétences, mon parcours, et mes projets.</p>
        <button
          class="mt-4 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          @click="scrollTo('contact')"
        >
          Contactez-moi
        </button>
      </section>

      <!-- Profil Section -->
      <section id="profil" class="fade-in">
        <h2 class="text-3xl font-bold text-blue-600 mb-4">Profil</h2>
        <p>Je suis étudiant depuis 2 ans au Lycée Gustave Flaubert à Rouen (76) en deuxième année de BTS SIO (Services Informatiques aux Organisations), spécialité SLAM (Solutions Logicielles et Applications Métiers). J'ai toujours apprécié le monde du web et donc c'est pour cela que j'ai décidé de me spécialiser dans ce domaine.</p>
        <p>Après l'obtention de mon BTS SIO - BAC+2, je souhaite poursuivre mon cursus en suivant la formation Licence informatique. Mon projet professionel se concentre sur la spécialisation en développement web ou cybersécurité, avec pour objectif de devenir un développeur web ou un expert en sécurité informatique au sein d'une entreprise.</p>
      </section>

      <!-- Parcours Section -->
      <section id="parcours" class="fade-in py-12 px-4 md:px-8 rounded-lg shadow-md">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-blue-600 mb-8 text-center">Parcours</h2>
          <div class="relative">
            <div class="absolute left-4 md:left-1/2 w-1 h-full bg-blue-200 transform -translate-x-1/2"></div>
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
                <p>J'aime voyager et découvrir de nouvelles cultures, paysages et traditions. Chaque voyage est pour moi une opportunité de rencontrer de nouvelles personnes et de s'ouvrir au monde. </p>
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
           <!-- Certifications Section -->
<section id="certifications" class="fade-in">
  <h2 class="text-3xl font-bold text-blue-600 mb-6">Certifications et Diplômes</h2>
  <p class="text-lg text-gray-700 mb-8">
    Vous pouvez consulter toutes mes certifications en cliquant sur le bouton ci-dessous.
  </p>
  <div class="flex justify-center">
    <a 
      href="https://drive.google.com/drive/folders/1quOkRdcamXHUpRFcHIgLtSwx14SHYc0J?usp=sharing" 
      target="_blank" 
      rel="noopener noreferrer"
      class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-semibold"
    >
      Voir mes certifications
    </a>
  </div>
</section>


      <!-- Stages Section -->
      <section id="stages" class="fade-in py-12 px-4 md:px-8 bg-white rounded-lg shadow-md">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-blue-600 mb-8 text-center">Stages</h2>
          <div class="relative">
            <div class="absolute left-4 md:left-1/2 w-1 h-full bg-blue-200 transform -translate-x-1/2"></div>
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
                        <svg class="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd"/></svg>
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

     <!-- Compétences Section -->
<section id="competences" class="fade-in">
  <h2 class="text-3xl font-bold text-blue-600 mb-6">Compétences</h2>

  <p class="mb-4"><strong>Techniques :</strong></p>
  <ul class="list-disc pl-6 mb-6">
    <li>HTML</li>
    <li>CSS</li>
    <li>Bootstrap</li>
    <li>PHP</li>
    <li>JavaScript</li>
    <li>MVC</li>
    <li>WordPress</li>
  </ul>

  <p class="mb-4"><strong>Conception et gestion de bases de données :</strong></p>
  <ul class="list-disc pl-6 mb-6">
    <li>MySQL</li>
    <li>UML avec JMERISE</li>
    <li>MEA avec Modelio</li>
  </ul>

  <p class="mb-4"><strong>Développement d'application :</strong></p>
  <ul class="list-disc pl-6 mb-6">
    <li>Java</li>
  </ul>

  <p class="mb-4"><strong>Scripting et gestion de projet :</strong></p>
  <ul class="list-disc pl-6">
    <li>Bash</li>
    <li>Trello</li>
  </ul>
</section>


      <!-- Projets Section -->
  <section id="projets" class="fade-in py-12 px-4 md:px-8 bg-gray-50">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl font-bold text-blue-600 mb-2">Mes Projets 💻</h2>
      <p class="text-gray-700 mb-8">
        Voici quelques projets que j'ai réalisés au cours de ma formation en BTS SIO ou pendant mon temps libre. 
        Ils couvrent divers domaines, allant du développement web, jeux à la gestion de bases de données.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

         <!-- Projet 1 -->
         <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 class="text-xl font-semibold text-blue-500 mb-2">Portfolio Nuxt.js</h3>
          <p class="text-gray-600">
            Ce portfolio que vous consultez actuellement, développé avec Nuxt.js
            Une expérience moderne et responsive pour présenter mes compétences.
          </p>
        </div>
      
        <!-- Projet 2 -->
        <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 class="text-xl font-semibold text-blue-500 mb-2">Plateforme de réservation</h3>
          <p class="text-gray-600">
            Développement d'une plateforme web pour la gestion des réservations dans un open-space.
            Le site est connecté à une base de données et dispose d'un client lourd en Java pour l'administration.
            Ce projet a été réalisé en équipe lors de nos ateliers de professionnalisation, en utilisant Git pour la gestion de version.
          </p>
          <a 
    href="https://github.com/JRMi27/projetprof" 
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
  >
    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.115 22 16.379 22 11.984 22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
    </svg>
    Voir le projet
  </a>
        </div>     
      </div>
    </div>
  </section>

      <!-- BTS SIO Section -->
      <section id="bts-sio" class="fade-in py-12 px-4 md:px-8 rounded-lg shadow-md">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-blue-400 mb-6 text-center">BTS SIO</h2>
          <div class="space-y-6 text-white-300">
            <p class="text-lg leading-relaxed">
              Le <strong class="text-blue-400">BTS SIO</strong> (Brevet de Technicien Supérieur en Services Informatiques aux Organisations) est une formation Bac+2 axée sur l'informatique en entreprise.
            </p>
            <div class="grid md:grid-cols-2 gap-6 mt-8">
              <!-- Option SISR -->
              <div class=" p-6 rounded-lg border-l-4 border-blue-500">
                <h3 class="text-xl font-semibold text-blue-300 mb-3">SISR</h3>
                <p class="text-white-300">
                  <strong>Solutions d'Infrastructure, Systèmes et Réseaux</strong> : Gestion des réseaux, serveurs et infrastructures informatiques.
                </p>
              </div>
              
              <!-- Option SLAM -->
              <div class=" p-6 rounded-lg border-l-4 border-blue-500">
                <h3 class="text-xl font-semibold text-blue-300 mb-3">SLAM</h3>
                <p class="text-white-300">
                  <strong>Solutions Logicielles et Applications Métiers</strong> : Développement d'applications et logiciels métiers.
                </p>
              </div>
            </div>
            
            <!-- Cybersécurité -->
            <div class="mt-10  p-6 rounded-lg">
              <h3 class="text-2xl font-bold text-blue-400 mb-4">Cybersécurité</h3>
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

     <!-- Veille Techno Section -->
<section id="veille-tech" class="fade-in py-12 px-4 md:px-8 bg-white rounded-lg shadow-md">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-3xl font-bold text-blue-600 mb-8 text-center">Veille Technologique</h2>
    <p class="text-gray-700 mb-6">
      La veille technologique consiste à s'informer en continu sur les innovations, les évolutions et les nouvelles tendances dans le domaine du numérique et de l'informatique. 
      Elle permet d'anticiper les changements, d'améliorer ses compétences et de rester compétitif dans un secteur en perpétuelle évolution.
    </p>
    <p class="text-gray-700 mb-8">
      Le sujet de ma veille porte sur <strong>comment améliorer le SEO (Search Engine Optimization) d’un site web</strong>. 
      Le SEO regroupe l'ensemble des techniques visant à optimiser la visibilité d'un site dans les résultats des moteurs de recherche comme Google.
    </p>
    <div class="text-center">
      <a 
        href="https://docs.google.com/spreadsheets/d/1eg9Jm9Mjbq3yj-9nTLyaGkXTRYz8YMh9Tw2JlnNw57o/edit?usp=sharing" 
        target="_blank" 
        rel="noopener noreferrer"
        class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Consulter ma veille
        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
        </svg>
      </a>
    </div>
  </div>
</section>

      
     <!-- Epreuves Section -->
<section id="epreuves" class="fade-in py-12 px-4 md:px-8 bg-white rounded-lg shadow-md">
  <div class="max-w-4xl mx-auto">
    <h2 class="text-3xl font-bold text-blue-600 mb-8 text-center">Épreuves BTS SIO</h2>
    
    <div class="grid md:grid-cols-3 gap-6">
    
      <!-- Carte E5 -->
      <div class="bg-blue-50 rounded-lg border border-blue-200 overflow-hidden hover:shadow-lg transition">
        <div class="p-6">
          <h3 class="text-xl font-bold text-blue-700 mb-3">E5</h3>
          <p class="text-gray-600 mb-4">Support et mise à disposition de services informatiques</p>
          <ul class="list-disc pl-5 space-y-1 text-sm mb-5">
            <li>Epreuve orale</li>
            <li>Coefficient: 4</li>
            <li>Durée: 40 minutes</li>
          </ul>
        </div>
        <div class="px-6 pb-4">
          <a 
            href="https://drive.google.com/drive/folders/1jKWU4ieqTuV15x2VGQUwixXtdfSNSSlR?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            class="w-full inline-flex justify-center items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            <span>En savoir plus</span>
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Carte E6 -->
      <div class="bg-blue-50 rounded-lg border border-blue-200 overflow-hidden hover:shadow-lg transition">
        <div class="p-6">
          <h3 class="text-xl font-bold text-blue-700 mb-3">E6</h3>
          <p class="text-gray-600 mb-4">Conception et développement d'applications</p>
          <ul class="list-disc pl-5 space-y-1 text-sm mb-5">
            <li>Epreuve orale</li>
            <li>Coefficient: 4</li>
            <li>Soutenance: 40 min (+1h30 de préparation)</li>
          </ul>
        </div>
        <div class="px-6 pb-4">
          <a 
            href="https://drive.google.com/drive/folders/1NPUX4nha1JK0vMvG0Gd9IL6QPyZdUYlP?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            class="w-full inline-flex justify-center items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            <span>En savoir plus</span>
            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>
        </div>
      </div>

    </div> <!-- <<< FERMETURE de la grid md:grid-cols-3 -->

  </div> <!-- <<< FERMETURE de max-w-4xl -->
</section> <!-- <<< FERMETURE de section -->



      <!-- Contact Section -->
<section id="contact" class="fade-in">
  <h2 class="text-3xl font-bold text-blue-600 mb-4">Contact</h2>
  <p>Si vous avez des questions ou des opportunités à me proposer, vous pouvez me contacter via le formulaire ci-dessous :</p>

  <form action="https://formsubmit.co/elatiaelias@gmail.com" method="POST" class="mt-6 space-y-4">
    <div>
      <label for="name" class="block text-lg">Nom</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>

    <div>
      <label for="email" class="block text-lg">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>

    <div>
      <label for="message" class="block text-lg">Message</label>
      <textarea
        id="message"
        name="message"
        required
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
        rows="5"
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
    }
  },
  methods: {
    handleNav(target) {
      if (target.startsWith('#')) {
        const section = target.substring(1)
        if (this.$route.path !== '/') {
          this.$router.push('/#' + section)
        } else {
          this.scrollTo(section)
        }
      } else {
        this.$router.push(target)
      }
    },

    scrollTo(id) {
      const element = document.getElementById(id)
      if (element) {
        const yOffset = -80
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    },

    submitForm() {
      console.log("Formulaire soumis:", this.form)
      alert("Message envoyé!")
      this.form = { name: '', email: '', message: '' }
    }
  }
}
</script>

<style>
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

.nuxt-link-exact-active {
  @apply text-blue-300 font-semibold;
}

/* Styles spécifiques pour les sections */
#parcours .timeline-bar {
  @apply absolute left-4 md:left-1/2 w-1 h-full bg-blue-200 transform -translate-x-1/2;
}

#certifications .certification-grid {
  @apply grid grid-cols-3 gap-4;
}

#stages .stage-card {
  @apply bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500;
}

/* Ajoutez tous vos autres styles personnalisés ici */
</style>