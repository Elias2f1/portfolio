<template>
    <div class="min-h-screen bg-gray-100 ml-64 p-8">
      <div class="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 class="text-3xl font-bold text-blue-600 mb-6">Épreuve E6 - Parcours de Professionnalisation</h1>
        
        <div class="prose max-w-none">
          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-blue-500 mb-4">Nature de l'épreuve</h2>
            <p>L'épreuve E6 évalue votre capacité à analyser et valoriser vos expériences professionnelles acquises durant vos stages en entreprise.</p>
          </section>
  
          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-blue-500 mb-4">Informations clés</h2>
            <div class="bg-blue-50 p-6 rounded-lg">
              <div class="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div class="text-4xl font-bold text-blue-600">3</div>
                  <div class="text-gray-600">Coefficient</div>
                </div>
                <div>
                  <div class="text-4xl font-bold text-blue-600">45min</div>
                  <div class="text-gray-600">Durée de soutenance</div>
                </div>
                <div>
                  <div class="text-4xl font-bold text-blue-600">2</div>
                  <div class="text-gray-600">Stages à présenter</div>
                </div>
              </div>
            </div>
          </section>
  
          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-blue-500 mb-4">Structure du rapport</h2>
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4">1</div>
                <div>
                  <h3 class="font-semibold text-lg">Présentation des entreprises</h3>
                  <p class="text-gray-600">Contexte, organisation, services informatiques</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4">2</div>
                <div>
                  <h3 class="font-semibold text-lg">Activités réalisées</h3>
                  <p class="text-gray-600">Tâches concrètes, technologies utilisées</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-4">3</div>
                <div>
                  <h3 class="font-semibold text-lg">Analyse réflexive</h3>
                  <p class="text-gray-600">Acquis, difficultés, perspectives d'amélioration</p>
                </div>
              </div>
            </div>
          </section>
  
          <section class="mb-8">
            <h2 class="text-2xl font-semibold text-blue-500 mb-4">Mes expériences</h2>
            <div class="space-y-6">
              <div class="border-l-4 border-blue-500 pl-4 py-2">
                <h3 class="text-xl font-semibold">Saint-Gobain (1ère année)</h3>
                <p class="text-gray-600">Service de dématérialisation - 5 semaines</p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                  <li>Migration de documents vers une solution ECM</li>
                  <li>Automatisation de processus avec PowerShell</li>
                  <li>Rédaction de procédures techniques</li>
                </ul>
              </div>
              <div class="border-l-4 border-blue-500 pl-4 py-2">
                <h3 class="text-xl font-semibold">MJ Gestion (2ème année)</h3>
                <p class="text-gray-600">Service développement - 5 semaines</p>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                  <li>Développement d'une application métier</li>
                  <li>Refonte de l'interface utilisateur</li>
                  <li>Mise en place d'une API REST</li>
                </ul>
              </div>
            </div>
          </section>
  
          <section>
            <h2 class="text-2xl font-semibold text-blue-500 mb-4">Documents</h2>
            <div class="flex flex-wrap gap-4">
              <a href="/pdf/rapport_E6.pdf" download class="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                Rapport complet
              </a>
              <NuxtLink to="/#stages" class="flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
                </svg>
                Voir les stages
              </NuxtLink>
            </div>
          </section>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    head() {
      return {
        title: 'Épreuve E6 - Portfolio BTS SIO'
      }
    }
  }
  </script>