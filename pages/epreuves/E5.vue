<template>
  <div class="min-h-screen bg-gray-100 ml-64 p-8">
    <div class="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 class="text-3xl font-bold text-blue-600 mb-6">Épreuve E5 - Solution d'Infrastructure</h1>
      
      <div class="prose max-w-none">
        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-blue-500 mb-4">Présentation de l'épreuve</h2>
          <p>L'épreuve E5 valide vos compétences en administration système et réseau, avec la mise en place d'une infrastructure répondant à des besoins spécifiques.</p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-blue-500 mb-4">Caractéristiques</h2>
          <div class="overflow-x-auto">
            <table class="min-w-full bg-white border border-gray-200">
              <thead class="bg-blue-50">
                <tr>
                  <th class="py-2 px-4 border-b text-left">Aspect</th>
                  <th class="py-2 px-4 border-b text-left">Détails</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="py-2 px-4 border-b">Coefficient</td>
                  <td class="py-2 px-4 border-b">4</td>
                </tr>
                <tr>
                  <td class="py-2 px-4 border-b">Durée</td>
                  <td class="py-2 px-4 border-b">1h30</td>
                </tr>
                <tr>
                  <td class="py-2 px-4 border-b">Type</td>
                  <td class="py-2 px-4 border-b">Dossier technique + oral</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-blue-500 mb-4">Domaines d'évaluation</h2>
          <div class="space-y-4">
            <div class="p-4 border border-blue-100 rounded-lg bg-blue-50">
              <h3 class="font-bold text-blue-700 mb-2">1. Installation et configuration</h3>
              <p>Mise en place des services réseau, gestion des utilisateurs, configuration des équipements.</p>
            </div>
            <div class="p-4 border border-blue-100 rounded-lg bg-blue-50">
              <h3 class="font-bold text-blue-700 mb-2">2. Sécurisation</h3>
              <p>Politiques de sécurité, pare-feu, gestion des accès, protection des données.</p>
            </div>
            <div class="p-4 border border-blue-100 rounded-lg bg-blue-50">
              <h3 class="font-bold text-blue-700 mb-2">3. Maintenance et dépannage</h3>
              <p>Procédures de maintenance, documentation technique, résolution d'incidents.</p>
            </div>
          </div>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-blue-500 mb-4">Mon projet E5</h2>
          <div class="bg-gray-50 p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-3">Migration vers un environnement virtualisé</h3>
            <p><strong>Contexte :</strong> Modernisation de l'infrastructure du lycée Gustave Flaubert.</p>
            
            <div class="mt-4 grid md:grid-cols-2 gap-4">
              <div>
                <h4 class="font-medium text-blue-600">Technologies utilisées</h4>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                  <li>VMware ESXi</li>
                  <li>Windows Server 2019</li>
                  <li>Active Directory</li>
                  <li>GPO</li>
                </ul>
              </div>
              <div>
                <h4 class="font-medium text-blue-600">Bénéfices</h4>
                <ul class="list-disc pl-5 mt-2 space-y-1">
                  <li>+30% de performance</li>
                  <li>Réduction des coûts</li>
                  <li>Meilleure disponibilité</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-blue-500 mb-4">Ressources</h2>
          <div class="flex flex-wrap gap-4">
            <a href="/pdf/dossier_E5.pdf" download class="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Dossier technique (PDF)
            </a>
            <a href="/pdf/annexes_E5.zip" download class="flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"/>
              </svg>
              Annexes (ZIP)
            </a>
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
      title: "Épreuve E5 - Portfolio BTS SIO"
    }
  }
}
</script>