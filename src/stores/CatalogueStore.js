import { defineStore } from 'pinia'

export const useFormationStore = defineStore('formations', {
  state: () => ({
    formations: [
      {
        id: 1,
        titre: 'Developpeur Web',
        description: 'HTML CSS JavaScript Vue.js',
        descriptionDetaillee: 'Cette formation permet de creer des sites web complets, de structurer des pages avec HTML, de les styliser avec CSS et de rendre les interfaces interactives avec JavaScript et Vue.js. Vous apprenez a construire des projets concrets, a organiser votre code et a preparer une entree solide dans le developpement web.',
        duree: '12 mois',
        niveau: 'Debutant',
        prix: 3500,
        image: 'https://picsum.photos/400/250?1'
      },
      {
        id: 2,
        titre: 'Developpeur Front-End',
        description: 'Vue.js React Bootstrap',
        descriptionDetaillee: 'Ce parcours se concentre sur la creation d interfaces modernes, responsives et agreables a utiliser. Vous travaillez les composants, les routes, les formulaires, Bootstrap, Vue.js et React afin de transformer une maquette en application web claire et professionnelle.',
        duree: '10 mois',
        niveau: 'Intermediaire',
        prix: 3200,
        image: 'https://picsum.photos/400/250?2'
      },
      {
        id: 3,
        titre: 'Developpeur Back-End',
        description: 'Node.js Express SQL',
        descriptionDetaillee: 'Cette formation vous apprend a concevoir la partie serveur d une application. Vous decouvrez Node.js, Express, les bases de donnees SQL, les routes API, la gestion des donnees et les bonnes pratiques pour connecter un front-end a un service fiable.',
        duree: '10 mois',
        niveau: 'Intermediaire',
        prix: 3300,
        image: 'https://picsum.photos/400/250?3'
      },
      {
        id: 4,
        titre: 'Designer UI/UX',
        description: 'Figma et Design Thinking',
        descriptionDetaillee: 'Ce programme vous guide dans la creation d experiences utilisateur simples, lisibles et efficaces. Vous apprenez a analyser un besoin, organiser un parcours, concevoir des wireframes et produire des maquettes propres avec Figma.',
        duree: '8 mois',
        niveau: 'Debutant',
        prix: 2800,
        image: 'https://picsum.photos/400/250?4'
      },
      {
        id: 5,
        titre: 'Technicien Support',
        description: 'Maintenance informatique',
        descriptionDetaillee: 'Cette formation prepare aux missions de support informatique: diagnostic, maintenance, installation, assistance utilisateur et resolution des incidents courants. Elle aide a developper une posture professionnelle et methodique face aux problemes techniques.',
        duree: '6 mois',
        niveau: 'Debutant',
        prix: 2200,
        image: 'https://picsum.photos/400/250?5'
      },
      {
        id: 6,
        titre: 'Administrateur Reseaux',
        description: 'Gestion des infrastructures',
        descriptionDetaillee: 'Ce parcours aborde la gestion des reseaux, des serveurs et des infrastructures informatiques. Vous apprenez a installer, superviser, securiser et maintenir des environnements techniques utilises en entreprise.',
        duree: '12 mois',
        niveau: 'Avance',
        prix: 4200,
        image: 'https://picsum.photos/400/250?6'
      },
      {
        id: 7,
        titre: 'Data Analyst',
        description: 'Python SQL Power BI',
        descriptionDetaillee: 'Cette formation vous apprend a collecter, nettoyer, analyser et presenter des donnees. Vous utilisez Python, SQL et Power BI pour produire des tableaux de bord, comprendre les indicateurs et aider a la prise de decision.',
        duree: '9 mois',
        niveau: 'Intermediaire',
        prix: 3900,
        image: 'https://picsum.photos/400/250?7'
      },
      {
        id: 8,
        titre: 'Cybersecurite',
        description: 'Securite des systemes',
        descriptionDetaillee: 'Ce programme introduit les bases de la securite informatique, la protection des systemes, la detection des risques et les bonnes pratiques de prevention. Vous apprenez a mieux comprendre les menaces et a securiser un environnement numerique.',
        duree: '12 mois',
        niveau: 'Avance',
        prix: 4500,
        image: 'https://picsum.photos/400/250?8'
      }
    ],
    favoris: []
  }),

  actions: {
    ajouterFavori(formation) {
      const existe = this.favoris.find((item) => item.id === formation.id)

      if (!existe) {
        this.favoris.push(formation)
      }
    },

    supprimerFavori(id) {
      this.favoris = this.favoris.filter((item) => item.id !== id)
    }
  }
})
